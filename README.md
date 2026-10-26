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
- A merge to `master` builds and deploys that exact commit as static files.
- The manual workflow control preserves the same verify-then-deploy path and only deploys `master`.

The GitHub `production` environment defines:

- Secret `DEPLOY_SSH_KEY` — private key for the production deploy identity.
- Secret `DEPLOY_KNOWN_HOSTS` — pinned SSH host-key entry for the server.
- Variable `DEPLOY_HOST` — production hostname or IP address.
- Variable `DEPLOY_USER` — production deploy user.
- Variable `DEPLOY_PATH` — release root, `/var/www/encodible.com` on bullblog.

The workflow builds on the GitHub runner, copies the files into a revision-named directory on the host, and atomically switches the `current` symlink. It verifies the local HTTPS route and the public homepage, retired event redirect, SEO assets, and TLS. The host needs only Nginx, not a Node or Docker build environment.

## Host routing and TLS

The tracked host configuration in `infra/nginx/host/encodible.conf` serves `encodible.com` and `www.encodible.com` from `/var/www/encodible.com/current` on the `bullblog` Droplet. The production deploy identity owns `/var/www/encodible.com` but does not need host administrator access for later releases.

The production host uses a manually managed Namecheap PositiveSSL certificate at:

- `/etc/ssl/encodible/domain.key`
- `/etc/ssl/encodible/fullchain.pem`
- `/etc/ssl/encodible/ca-bundle.pem`

Deployments keep those files in place and do not run Certbot for `encodible.com`.

`alcomatcher.com` and `www.alcomatcher.com` also point to bullblog. Their tracked
host configuration in `infra/nginx/host/alcomatcher.conf` redirects both names
to the Encodible homepage. Its separate certificate is managed by Certbot with
the `/var/www/letsencrypt` webroot; install the HTTP route before requesting
that certificate, then enable the complete configuration.
