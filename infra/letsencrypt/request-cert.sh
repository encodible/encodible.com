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

if [[ ! -d /etc/letsencrypt/live/encodible.com ]]; then
  certbot certonly --nginx --agree-tos --no-eff-email -m "$EMAIL" -d encodible.com
  systemctl reload nginx
else
  certbot renew --deploy-hook "systemctl reload nginx"
fi
