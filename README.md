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

## TLS certificate

`encodible.com` now uses a manually managed TLS certificate (Namecheap PositiveSSL) installed on the host at:

- `/etc/ssl/encodible/domain.key`
- `/etc/ssl/encodible/fullchain.pem`
- `/etc/ssl/encodible/ca-bundle.pem`

`infra/nginx/host/encodible.conf` is configured to use those files directly. Deployments should keep these certificate files in place and should not run certbot for `encodible.com`.
