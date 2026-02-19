#!/usr/bin/env bash
set -euo pipefail

EMAIL="${1:-${LETSENCRYPT_EMAIL:-}}"

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
  mkdir -p /etc/letsencrypt/live/encodible.com /etc/letsencrypt/archive/encodible.com /etc/letsencrypt/renewal
  openssl req -x509 -nodes -days 1 -newkey rsa:2048 \
    -keyout /etc/letsencrypt/live/encodible.com/privkey.pem \
    -out /etc/letsencrypt/live/encodible.com/fullchain.pem \
    -subj "/CN=encodible.com" >/dev/null 2>&1
}

if [[ ! -d /etc/letsencrypt/live/encodible.com ]]; then
  create_placeholder_cert
fi

if [[ ! -f /etc/letsencrypt/live/encodible.com/fullchain.pem ]] \
  || [[ ! -f /etc/letsencrypt/live/encodible.com/privkey.pem ]]; then
  create_placeholder_cert
fi

if [[ ! -f /etc/letsencrypt/live/encodible.com/fullchain.pem ]] \
  || [[ ! -f /etc/letsencrypt/live/encodible.com/privkey.pem ]]; then
  certbot certonly --nginx --agree-tos --no-eff-email -m "$EMAIL" -d encodible.com
  systemctl reload nginx
else
  certbot renew --deploy-hook "systemctl reload nginx"
fi
