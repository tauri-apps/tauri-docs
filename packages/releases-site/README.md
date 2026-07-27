# releases-site

Generates the release notes for the whole Tauri core ecosystem (46 packages across `tauri`, `wry`, `tao`, `create-tauri-app`, and `plugins-workspace`), served at `/release/*` by the docs site.

## How it works

```
generator/data.json          committed checkpoint (~2.5 MB), refreshed daily by
                             .github/workflows/refresh-releases.yml (PR-based)
        │  pnpm generate
        ▼
../../src/content/releases/  ~2,800 generated .md pages (gitignored):
  <pkg>/index.md               version list with dates + registry links
  <pkg>/all-versions.md        full changelog on one page
  <pkg>/v<version>.md          one page per release
  core.md                      grouped changelog for tauri + api + CLI
../../public/release/        tableData.json, feeds the client-side changelog table
generator/generated/         latestVersions.ts for the landing page cards
        │  astro build (docs site)
        ▼
dist/release/
```

- URLs are flat: `/release/<package>/v<version>/` — package names are unique across all repos.
- The pages are **not** part of the Starlight `docs` collection. They are a separate `releases` collection rendered by `src/routes/release/page.astro` through `<StarlightPage>`, which is what keeps Starlight from building a fallback copy of every page for each of the site's locales.
- A fresh `data.json` is produced with `pnpm refresh` (fetches upstream CHANGELOG.md files, npm and crates.io metadata; HTTP-cached in `generator/.cache/`).

## Production-only

The ~2,800 pages are built on Netlify production deploys only — see `src/release-config.mjs`. Without `BUILD_RELEASES=1`, `pnpm generate` writes only `generator/generated/latestVersions.ts` (which the landing-page component imports, so it must always exist) and the docs site injects no `/release/*` routes at all. Deploy previews and `astro dev` therefore 404 on `/release/*`, including the header's Releases link.

## Local development

```sh
pnpm --filter releases-site generate           # latestVersions.ts only
BUILD_RELEASES=1 pnpm --filter releases-site generate   # + the full page set
BUILD_RELEASES=1 pnpm dev                      # docs site with /release/* served
pnpm --filter releases-site refresh            # re-fetch upstream data into data.json
pnpm --filter releases-site test               # changelog parsing / grouping tests
```

The tests are deliberately **not** wired into CI: the only PR gate is `pnpm format:check`
(`.github/workflows/check.yml`). Run them locally after touching `generator/` — they
cover the changelog escaping, the notes-heading demotion and the core-page grouping,
which are the parts whose output is otherwise only visible in a full build.

## Data refresh

The daily workflow (`.github/workflows/refresh-releases.yml`) opens data PRs as `tauri-bot` via the org-level `ORG_TAURI_BOT_PAT` secret (the same one `syncSponsorsData.yml` uses). Merging one rebuilds the docs site, which regenerates every page from the new `data.json`.
