#!/usr/bin/env bash
set -euo pipefail

EMAIL="${1:-${LETSENCRYPT_EMAIL:-}}"
DOMAINS="${2:-${LETSENCRYPT_DOMAINS:-encodible.com}}"

if [[ -z "$EMAIL" ]]; then
  echo "ERROR: cert request requires LETSENCRYPT_EMAIL via argument or env var" >&2
  exit 1
fi

log() {
  echo "[letsencrypt] $*"
}

install_certbot() {
  if command -v apt-get >/dev/null; then
    log "certbot missing; installing via apt"
    apt-get update
    apt-get install -y certbot python3-certbot-nginx
  else
    echo "ERROR: certbot not installed and no known package manager available" >&2
    exit 1
  fi
}

if ! command -v certbot >/dev/null; then
  install_certbot
fi

run_certbot_with_rate_limit_handling() {
  local log_file
  log_file="$(mktemp)"

  set +e
  "$@" 2>&1 | tee "$log_file"
  local rc=$?
  set -e

  if [[ "$rc" -eq 0 ]]; then
    rm -f "$log_file"
    return 0
  fi

  if grep -Eqi "too many certificates|rate limit|retry after" "$log_file"; then
    log "certbot hit a Let's Encrypt rate limit; continuing without failing deploy"
    rm -f "$log_file"
    return 20
  fi

  rm -f "$log_file"
  return "$rc"
}

create_placeholder_cert() {
  local domain="$1"
  local live_dir="/etc/letsencrypt/live/${domain}"
  local placeholder_root="/etc/letsencrypt/placeholders/${domain}"
  local renewal_dir="/etc/letsencrypt/renewal"
  mkdir -p "$live_dir" "$placeholder_root" "$renewal_dir"

  local placeholder_dir=""
  for candidate in "$placeholder_root"/*; do
    if [[ -d "$candidate" ]] && [[ -f "${candidate}/.placeholder" ]]; then
      placeholder_dir="$candidate"
      break
    fi
  done

  if [[ -z "$placeholder_dir" ]]; then
    local version="0001"
    local highest="$(find "$placeholder_root" -maxdepth 1 -mindepth 1 -type d -printf '%f\n' | sort | tail -n1)"
    if [[ -n "$highest" ]]; then
      version="$(printf '%04d' $((10#$highest + 1)))"
    fi
    placeholder_dir="${placeholder_root}/${version}"
    log "creating placeholder certificate for ${domain} at ${placeholder_dir}"
    mkdir -p "$placeholder_dir"
    openssl req -x509 -nodes -days 1 -newkey rsa:2048 \
      -keyout "${placeholder_dir}/privkey.pem" \
      -out "${placeholder_dir}/fullchain.pem" \
      -subj "/CN=${domain}" >/dev/null 2>&1
    cp "${placeholder_dir}/fullchain.pem" "${placeholder_dir}/chain.pem"
    touch "${placeholder_dir}/.placeholder"
  fi

  # Keep nginx -t stable before certbot runs by pinning live links to absolute files.
  ln -sfn "${placeholder_dir}/privkey.pem" "$live_dir/privkey.pem"
  ln -sfn "${placeholder_dir}/fullchain.pem" "$live_dir/fullchain.pem"
  ln -sfn "${placeholder_dir}/fullchain.pem" "$live_dir/chain.pem"
  ln -sfn "$live_dir/fullchain.pem" "$live_dir/cert.pem"
  touch "$live_dir/.placeholder"
}

TLS_REAL_EXISTS() {
  local domain="$1"
  local live_dir="/etc/letsencrypt/live/${domain}"
  [[ -f "${live_dir}/fullchain.pem" ]] && [[ -f "${live_dir}/privkey.pem" ]] && [[ ! -f "${live_dir}/.placeholder" ]]
}

certbot_ran=false
for domain in ${DOMAINS//,/ }; do
  domain="${domain// /}"
  [[ -z "$domain" ]] && continue
  live_dir="/etc/letsencrypt/live/${domain}"

  if [[ ! -d "$live_dir" ]]; then
    log "live directory missing for ${domain}; seeding placeholder"
    create_placeholder_cert "$domain"
  fi

  if [[ ! -f "$live_dir/fullchain.pem" ]] || [[ ! -f "$live_dir/privkey.pem" ]]; then
    log "live cert/key missing for ${domain}; seeding placeholder"
    create_placeholder_cert "$domain"
  fi

  if TLS_REAL_EXISTS "$domain"; then
    log "real certificate already exists for ${domain}; running renew"
    certbot_status=0
    run_certbot_with_rate_limit_handling certbot renew --cert-name "$domain" --deploy-hook "systemctl reload nginx" || certbot_status=$?
    if [[ "$certbot_status" -eq 0 ]]; then
      certbot_ran=true
    elif [[ "$certbot_status" -eq 20 ]]; then
      log "renew skipped due to rate limit for ${domain}; keeping current cert state"
      certbot_ran=true
    else
      exit "$certbot_status"
    fi
  else
    log "requesting initial certificate for ${domain} via nginx plugin"
    log "keeping placeholder in place while certbot runs"
    rm -f "/etc/letsencrypt/renewal/${domain}.conf"
    certbot_status=0
    run_certbot_with_rate_limit_handling certbot certonly --nginx --agree-tos --no-eff-email -m "$EMAIL" -d "$domain" || certbot_status=$?
    if [[ "$certbot_status" -eq 0 ]]; then
      log "certificate issued for ${domain}; removing placeholder markers"
      rm -f "$live_dir/.placeholder"
      rm -rf "/etc/letsencrypt/placeholders/${domain}"
      systemctl reload nginx
      certbot_ran=true
    elif [[ "$certbot_status" -eq 20 ]]; then
      log "initial issuance for ${domain} skipped due to rate limit; placeholder left in place"
      certbot_ran=true
    else
      exit "$certbot_status"
    fi
  fi
done

if [[ "$certbot_ran" != true ]]; then
  echo "No certbot action was necessary"
fi
