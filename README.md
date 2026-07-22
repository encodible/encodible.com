# Encodible Website

Public website for Encodible, Kent Bull's specialist software consulting practice. The site presents Encodible's services, selected public work, technical writing, engagement approach, and direct contact path.

## Development

Install dependencies and start Vite:

```shell
npm ci
npm run dev
```

Create a production build with:

```shell
npm run build
```

Vite uses `src` as its root and writes the production site to `dist`. Static public assets live in `src/public`.

## Content boundaries

The portfolio intentionally labels public work by its current status:

- White Raven is an R&D architecture concept from TetraVeda.
- Parlerian Vintage is an archival Encodible application.
- Kent's current KERI implementation writing links to `kentbull.com`.

The site does not present these projects as currently shipping products. The former February 2026 event route permanently redirects to the homepage.

## Production deployment

Production deployments run only through `.github/workflows/deploy.yml`:

- Pull requests install dependencies and build the site without deploying.
- A merge to `master` builds and deploys that exact commit.
- The manual workflow control preserves the same verify-then-deploy path and only deploys `master`.

The GitHub `production` environment defines:

- Secret `DEPLOY_SSH_KEY` — private key for the production deploy identity.
- Secret `DEPLOY_KNOWN_HOSTS` — pinned SSH host-key entry for the server.
- Variable `DEPLOY_HOST` — production hostname or IP address.
- Variable `DEPLOY_USER` — production deploy user.
- Variable `DEPLOY_PATH` — clean server checkout, currently `/opt/encodible`.

The workflow refuses to overwrite a dirty or divergent production checkout. It fast-forwards the host checkout to the merged commit, rebuilds with Docker Compose, waits for the local upstream, and verifies the public homepage, retired event redirect, SEO assets, and TLS.

## Host routing and TLS

The tracked host configuration in `infra/nginx/host/encodible.conf` proxies `encodible.com` to the container on port `9080`.

The production host uses a manually managed Namecheap PositiveSSL certificate at:

- `/etc/ssl/encodible/domain.key`
- `/etc/ssl/encodible/fullchain.pem`
- `/etc/ssl/encodible/ca-bundle.pem`

Deployments keep those files in place and do not run Certbot for `encodible.com`.
