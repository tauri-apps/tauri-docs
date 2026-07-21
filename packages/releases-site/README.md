# releases-site

Serves the release notes for the whole Tauri core ecosystem (46 packages across `tauri`, `wry`, `tao`, `create-tauri-app`, and `plugins-workspace`) at `/release/*` of the docs domain.

## Why a separate site?

- No i18n fallback overhead and decoupled builds

## How it works

```
generator/data.json          committed checkpoint (~2.5 MB), refreshed daily by
                             .github/workflows/refresh-releases.yml (PR-based)
        │  pnpm generate
        ▼
src/content/docs/<pkg>/      ~2,800 generated .md pages (gitignored):
  index.md                     version list with dates + registry links
  all-versions.md              full changelog on one page
  v<version>.md                one page per release
public/tableData.json        generated, feeds the client-side changelog table
generator/generated/         latestVersions.ts for the landing page cards
        │  astro build
        ▼
dist/                        published by the releases Netlify site
```

- URLs are flat: `/release/<package>/v<version>/` — package names are unique across all repos. The legacy URLs (`/release/tauri/v2.0.0/` etc.) are unchanged.
- `base: '/release'` makes all generated URLs carry the prefix; the build output has no `/release` directory, so the docs-site proxy strips the prefix (`/release/* → <this site>/:splat 200`) and this site's own `public/_redirects` does the same for direct visits.
- A fresh `data.json` is produced with `pnpm refresh` (fetches upstream CHANGELOG.md files, npm and crates.io metadata; HTTP-cached in `generator/.cache/`).

## Shared UI

This site imports the docs site's UI **directly by relative path**

- **Styles:** `src/styles/{theme,overrides,shared}.scss` (imported by `src/styles/custom.scss`)
- **Components:** `src/components/overrides/{Footer,ThemeSelect,PageFrame,TwoColumnContent}.astro`
  (referenced straight from `astro.config.mjs` `components`)
- **Config values:** `src/shared-config.mjs` (logo, social links, expressive-code
  style overrides — imported by both `astro.config.mjs` files)
- **Assets:** `src/assets/logo.svg` + `logo_light.svg` (referenced from the `logo` config)
- **Nav data:** `src/data/header-links.json` (imported by the local Header)

Deliberate forks kept local: `Header.astro` (English-only, no topics/locale integration)
and `SiteTitle.astro` (logo links to the docs home `/`, not this site's base). The only
duplicated file is `public/favicon.svg`

Constraints: `astro` and `@astrojs/starlight` versions must stay aligned between the
repo root and this package — both resolve through the `catalog:` block in the repo
root `pnpm-workspace.yaml`, so there is a single place to bump them — and the Netlify
`ignore` rule in `netlify.toml` must list every shared path so docs-side UI edits
trigger a rebuild here. Cross-package file access needs `vite.server.fs.allow`
(already set in `astro.config.mjs`) during `astro dev`.

## Local development

```sh
pnpm install
pnpm --filter releases-site dev     # generates pages, serves on http://localhost:4322/release/
pnpm --filter releases-site build   # generates pages + astro build into dist/
pnpm --filter releases-site refresh # re-fetches upstream data into generator/data.json
```

## Netlify setup (two sites, one repo)

1. **Releases site** (new): the `tauri-releases` Netlify site — the repo root
   `public/_redirects` proxies `/release/*` to `tauri-releases.netlify.app`.
   - Base directory: `packages/releases-site`
   - Environment: `SITE_URL=https://<your-docs-domain>` (canonical origin used for `astro.config.mjs`'s `site`; omit for production `https://v2.tauri.app`).
2. **Docs site** (existing): no settings change.
3. The repo root `netlify.toml` has an `ignore` rule so commits touching only `packages/releases-site/**` (e.g. merged data-refresh PRs) skip the docs build.
4. The daily refresh workflow (`.github/workflows/refresh-releases.yml`) opens data PRs as `tauri-bot` via the org-level `ORG_TAURI_BOT_PAT` secret (the same one `syncSponsorsData.yml` uses)
