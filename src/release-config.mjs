import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const contentDir = fileURLToPath(new URL('./content/releases', import.meta.url));

export function isReleasePage(pathname) {
  return pathname.startsWith('/release/');
}

export function hasGeneratedReleasePages() {
  if (!existsSync(contentDir)) {
    return false;
  }
  return readdirSync(contentDir, { withFileTypes: true }).some((entry) => entry.isDirectory());
}
