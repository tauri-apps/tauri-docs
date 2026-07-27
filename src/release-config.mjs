import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const contentDir = fileURLToPath(new URL('./content/releases', import.meta.url));

/**
 * Set BUILD_RELEASES=1 to generate locally.
 * Do NOT key this off `CI` — Netlify sets CI=true in every context.
 */
export const buildReleases =
  process.env.BUILD_RELEASES === '1' || process.env.CONTEXT === 'production';

export function isReleasePage(pathname) {
  return pathname.startsWith('/release/');
}

export function hasGeneratedReleasePages() {
  if (!existsSync(contentDir)) {
    return false;
  }
  return readdirSync(contentDir, { withFileTypes: true }).some((entry) => entry.isDirectory());
}
