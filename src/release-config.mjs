// The ~2,800 release pages under /release/* are only built on Netlify
// production deploys: they are English-only custom routes, and building them
// on every deploy preview would add roughly a minute for pages nobody reviews.
// Set BUILD_RELEASES=1 to build them locally.
//
// Do NOT key this off `CI` — Netlify sets CI=true in every context.
export const buildReleases =
  process.env.BUILD_RELEASES === '1' || process.env.CONTEXT === 'production';
