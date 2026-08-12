# releases-site

Generates the release notes for the Tauri ecosystem (46 packages across `tauri`, `wry`, `tao`, `create-tauri-app`, and `plugins-workspace`), served at `/release/*` by the docs site.

- URLs are flat: `/release/<package>/v<version>/` — package names are unique across all repos.
- The pages are **not** part of the Starlight `docs` collection. They are a `releases` collection rendered by `src/routes/release/page.astro` through `<StarlightPage>`, which is what keeps Starlight from building a fallback copy of every page for each locale.
- A fresh `data.json` is produced with `pnpm refresh` (fetches upstream CHANGELOG.md files, npm and crates.io metadata; HTTP-cached in `generator/.cache/`).

## Generating vs serving

Refer to `shouldBuildReleases` in `generator/config.ts` and `hasGeneratedReleasePages` in `src/release-config.mjs`:

- **Generating** the pages happens on Netlify production deploys, on deploy previews whose PR touches release files (Netlify previews build the PR merged into `v2`, so the generator diffs the checkout against the `v2` tip), or locally with `BUILD_RELEASES=1`. Otherwise `pnpm generate` writes only `generator/generated/latestVersions.ts` — the landing-page component imports it, so it must always exist.
- **Serving** `/release/*` happens whenever those pages are on disk. Generate once locally and every later `astro dev` / `astro build` picks them up; a deploy preview without them skips the routes and 404s on `/release/*` including the header's Releases link.

To drop back to the fast local build: `git clean -fdX src/content/releases public/release`.

## Local development

```sh
BUILD_RELEASES=1 pnpm --filter releases-site generate   # generate the page set (once)
pnpm dev                                                # docs site, /release/* now served
pnpm --filter releases-site generate                    # latestVersions.ts only (no pages)
pnpm --filter releases-site refresh                     # re-fetch upstream data into data.json
pnpm --filter releases-site test                        # changelog parsing / grouping tests
```

The tests are deliberately **not** wired into CI: the only PR gate is `pnpm format:check`
(`.github/workflows/check.yml`). Run them locally after touching `generator/` — they
cover the changelog escaping, the notes-heading demotion and the core-page grouping,
which are the parts whose output is otherwise only visible in a full build.

## Data refresh

The daily workflow (`.github/workflows/refresh-releases.yml`) opens data PRs as `tauri-bot` via the org-level `ORG_TAURI_BOT_PAT` secret (the same one `syncSponsorsData.yml` uses). Merging one rebuilds the docs site, which regenerates every page from the new `data.json`.
