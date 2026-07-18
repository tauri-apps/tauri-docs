# releases-site

A standalone [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) site that serves the release notes for the whole Tauri core ecosystem (39 packages across `tauri`, `wry`, `tao`, `create-tauri-app`, and `plugins-workspace`) at `/release/*` of the docs domain.

It replaces both the old in-repo `releases-generator` (7 packages, rebuilt on every docs deploy) and the separate VitePress site at [vasfvitor/tauri-releases](https://github.com/vasfvitor/tauri-releases).

## Why a separate site?

- **No i18n fallback overhead.** The docs site builds a fallback copy of every docs-collection page for each of its 7 locales. Release pages are English-only, so keeping the ~2,600 release pages in their own single-locale site avoids ~16,000 wasted fallback pages per docs build.
- **Decoupled builds.** Docs prose edits no longer rebuild the release pages, and daily release-data refreshes don't rebuild the docs. Each Netlify site has an `ignore` rule scoped to its own files.
- **Same domain, same look.** The docs site proxies `/release/*` to this site (Netlify 200 rewrite in `public/_redirects` at the repo root), and this site reuses the docs site's theme styles and header/footer/theme-switcher overrides, so it reads as one website.

## How it works

```
generator/data.json          committed checkpoint (~2.3 MB), refreshed daily by
                             .github/workflows/refresh-releases.yml (PR-based)
        │  pnpm generate
        ▼
src/content/docs/<pkg>/      ~2,600 generated .md pages (gitignored):
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

## Local development

```sh
pnpm install
pnpm --filter releases-site dev     # generates pages, serves on http://localhost:4322/release/
pnpm --filter releases-site build   # generates pages + astro build into dist/
pnpm --filter releases-site refresh # re-fetches upstream data into generator/data.json
```

## Netlify setup (two sites, one repo)

1. **Releases site** (new):
   - Base directory: `packages/releases-site` (its `netlify.toml` supplies build command, publish dir, and the ignore rule).
   - Environment: `SITE_URL=https://<your-docs-domain>` (canonical origin used for `astro.config.mjs`'s `site`; omit for production `https://v2.tauri.app`).
   - Note the resulting `https://<name>.netlify.app` domain.
2. **Docs site** (existing): no settings change. In the repo root `public/_redirects`, replace the proxy target hostname (`tauri-releases-site.netlify.app`) with the releases site domain from step 1.
3. The repo root `netlify.toml` has an `ignore` rule so commits touching only `packages/releases-site/**` (e.g. merged data-refresh PRs) skip the docs build.

## Data refresh

`.github/workflows/refresh-releases.yml` runs daily (07:00 UTC) and opens a PR
(`automated/refresh-release-data`) updating only `generator/data.json`. Merging
it triggers only the releases site build.
