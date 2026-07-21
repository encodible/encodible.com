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

Production deployments run only through
`.github/workflows/deploy.yml`. Pull requests build the site without deploying;
merges to `master` build and deploy that exact commit to the production host.
The workflow can also be started manually with GitHub's `workflow_dispatch`
control, which preserves the same verification and deployment path.

The GitHub `production` environment must define these values:

- Secret `DEPLOY_SSH_KEY` — the private key for the production deploy identity.
- Secret `DEPLOY_KNOWN_HOSTS` — the pinned SSH host-key entry for the server.
- Variable `DEPLOY_HOST` — the production hostname or IP address.
- Variable `DEPLOY_USER` — the production deploy user.
- Variable `DEPLOY_PATH` — the clean server checkout, currently `/opt/encodible`.

The workflow refuses to overwrite a dirty or divergent production checkout. It
fast-forwards the checkout to the merged commit, rebuilds with Docker Compose,
waits for the local upstream, and verifies both public HTTPS routes. The Compose
service exposes port `9080` and uses `restart: unless-stopped` so a host reboot
does not leave the site offline.

The image copies the built `dist` output into NGINX and uses
`infra/nginx/default.conf` to route the AI event page correctly.

## Host routing

Ship the tracked host config from `infra/nginx/host/encodible.conf` to `/etc/nginx/conf.d/encodible.conf` so the system NGINX can proxy `encodible.com` → the container’s port `9080`.

## TLS certificate

`encodible.com` now uses a manually managed TLS certificate (Namecheap PositiveSSL) installed on the host at:

- `/etc/ssl/encodible/domain.key`
- `/etc/ssl/encodible/fullchain.pem`
- `/etc/ssl/encodible/ca-bundle.pem`

`infra/nginx/host/encodible.conf` is configured to use those files directly. Deployments should keep these certificate files in place and should not run certbot for `encodible.com`.
