// Shared between build-time page generation and the client-side table so the
// generated pages and the links pointing at them cannot drift. Kept free of
// `node:` imports: `releases-table.ts` pulls it into the browser bundle.

// URL prefix all generated links carry (must match the injected routes in astro.config.mjs)
export const basePath = '/release';

export function versionPageHref(packageName: string, version: string): string {
  return `${basePath}/${packageName}/v${version}/`;
}
