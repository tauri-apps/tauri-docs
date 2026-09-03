import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Node-only (`astro.config.mjs`). Under Vite `import.meta.url` points elsewhere and this
// silently answers `false`, dropping every release page; keep it out of `src/` imports
const contentDir = fileURLToPath(new URL('./content/releases', import.meta.url));

export function hasGeneratedReleasePages() {
  if (!existsSync(contentDir)) {
    return false;
  }
  return readdirSync(contentDir, { withFileTypes: true }).some((entry) => entry.isDirectory());
}
