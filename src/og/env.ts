// Netlify sets `CI=true` in every context, so `CI` can't tell a production deploy from a
// preview; `CONTEXT` can. The same trap as `TAURI_DOCS_SKIP_IMAGE_OPT` in `astro.config.mjs`
// and `shouldBuildReleases()` in the release generator
export const isProductionDeploy = process.env.CONTEXT === 'production';
