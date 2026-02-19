#!/usr/bin/env bash
set -euo pipefail

EMAIL="${1:-${LETSENCRYPT_EMAIL:-}}"
DOMAINS="${2:-${LETSENCRYPT_DOMAINS:-encodible.com}}"

if [[ -z "$EMAIL" ]]; then
  echo "ERROR: cert request requires LETSENCRYPT_EMAIL via argument or env var" >&2
  exit 1
fi

install_certbot() {
  if command -v apt-get >/dev/null; then
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
    mkdir -p "$placeholder_dir"
    openssl req -x509 -nodes -days 1 -newkey rsa:2048 \
      -keyout "${placeholder_dir}/privkey.pem" \
      -out "${placeholder_dir}/fullchain.pem" \
      -subj "/CN=${domain}" >/dev/null 2>&1
    cp "${placeholder_dir}/fullchain.pem" "${placeholder_dir}/chain.pem"
    touch "${placeholder_dir}/.placeholder"
  fi

  ln -sf "../placeholders/${domain}/$(basename "$placeholder_dir")/privkey.pem" "$live_dir/privkey.pem"
  ln -sf "../placeholders/${domain}/$(basename "$placeholder_dir")/fullchain.pem" "$live_dir/fullchain.pem"
  ln -sf "../placeholders/${domain}/$(basename "$placeholder_dir")/fullchain.pem" "$live_dir/chain.pem"
  ln -sf "$live_dir/fullchain.pem" "$live_dir/cert.pem"
  touch "$live_dir/.placeholder"
}

TLS_REAL_EXISTS() {
  local domain="$1"
  local live_dir="/etc/letsencrypt/live/${domain}"
  [[ -f "${live_dir}/fullchain.pem" ]] && [[ -f "${live_dir}/privkey.pem" ]] && [[ ! -f "${live_dir}/.placeholder" ]]
}

certbot_runed=false
for domain in ${DOMAINS//,/ }; do
  domain="${domain// /}"
  [[ -z "$domain" ]] && continue
  live_dir="/etc/letsencrypt/live/${domain}"
  archive_dir="/etc/letsencrypt/archive/${domain}"

  if [[ ! -d "$live_dir" ]]; then
    create_placeholder_cert "$domain"
  fi

  if [[ ! -f "$live_dir/fullchain.pem" ]] || [[ ! -f "$live_dir/privkey.pem" ]]; then
    create_placeholder_cert "$domain"
  fi

  if TLS_REAL_EXISTS "$domain"; then
    certbot renew --cert-name "$domain" --deploy-hook "systemctl reload nginx"
    certbot_runed=true
  else
    rm -f "/etc/letsencrypt/renewal/${domain}.conf"
    certbot certonly --nginx --agree-tos --no-eff-email -m "$EMAIL" -d "$domain"
    rm -f "$live_dir/.placeholder"
    rm -rf "/etc/letsencrypt/placeholders/${domain}"
    systemctl reload nginx
    certbot_runed=true
  fi
done

if [[ "$certbot_runed" != true ]]; then
  echo "No certbot action was necessary"
fi
