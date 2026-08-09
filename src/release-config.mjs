// imported by the browser bundle too: no `node:`, no `import.meta.url` (see `release-pages.node.mjs`)
export function isReleasePage(pathname) {
  return pathname.startsWith('/release/');
}
