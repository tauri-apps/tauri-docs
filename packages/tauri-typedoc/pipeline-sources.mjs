import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

/** the modules TypeDoc imports at conversion time, this one included */
export const PLUGIN_SOURCES = [
  'typedoc-tauri-plugin.mjs',
  'normalize.mjs',
  'pipeline-sources.mjs',
].map((file) => new URL(file, import.meta.url));

/**
 * @param {Array<string | URL>} files
 * @param {import('node:crypto').Hash} [hash] to keep feeding after the files
 */
export function hashFiles(files, hash = createHash('sha1')) {
  for (const file of files) hash.update(readFileSync(file));
  return hash;
}
