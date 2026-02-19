# Encodible Website

Modern React/Vite landing page for Encodible, hosting the AI workshop RSVP at `/feb-2026-ai-event-01`.

## Development

1. `npm install`
2. `npm run dev`

The site has two entrypoints:

- `/` — primary marketing content, platform narrative, resource cards, and an event spotlight.
- `/feb-2026-ai-event-01` — the OpenClaw + Codex + Claude technique-sharing page with agenda, highlights, FAQ, and RSVP CTA.

Set `VITE_RSVP_URL` in `.env` (see `.env.example`) so the CTA buttons point at the hosted Google Form.

## Production

1. `npm run build`
2. `docker compose up -d --build`

The local `docker-compose.yml` builds the production image and exposes port `9080`. The image copies the built `dist` output into NGINX and uses `infra/nginx/default.conf` to route the AI event page correctly.

## Host routing

Ship the tracked host config from `infra/nginx/host/encodible.conf` to `/etc/nginx/conf.d/encodible.conf` so the system NGINX can proxy `encodible.com` → the container’s port `9080`.

## Let’s Encrypt

You can obtain and renew TLS for `encodible.com` via the included helper:

1. Ensure `certbot` is installed on the host (the script will install it via `apt` if missing).
2. Export `LETSENCRYPT_EMAIL` (or pass it as the first argument to `infra/letsencrypt/request-cert.sh`) so the script can register with Let’s Encrypt.
3. Run `infra/letsencrypt/request-cert.sh "$LETSENCRYPT_EMAIL"` on the host (it will issue or renew the cert and reload NGINX).

The helper now accepts a comma-separated list via the `LETSENCRYPT_DOMAINS` env var or second argument (defaults to `encodible.com`). It seeds each domain with a temporary placeholder certificate so nginx can start, removes the placeholder once Let’s Encrypt issues the real cert, and only renews domains that already have a valid certificate.

The GitHub Actions deploy workflow also calls this script with the `LETSENCRYPT_EMAIL` secret before each deployment so the system proxy always has valid certs.

Add the `LETSENCRYPT_EMAIL` secret to the GitHub repo so the workflow can register/renew the certificate non-interactively.
