// Extracts fenced code blocks from the docs content so they can be type checked.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import locales from '../../locales.json' with { type: 'json' };

export const root = fileURLToPath(new URL('../../', import.meta.url));
const docsDir = 'src/content/docs';

const localeDirs = Object.keys(locales).filter((locale) => locale !== 'root');
// Blog posts are historical and may target older Tauri versions.
const excludedDirs = ['blog'];

/** Tracked English .md/.mdx files under src/content/docs (generated pages are not tracked). */
export function listDocs({ allLocales = false } = {}) {
  const files = execFileSync('git', ['ls-files', '--', `${docsDir}/**.md`, `${docsDir}/**.mdx`], {
    cwd: root,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean);
  return files.filter((file) => {
    const [first] = path.relative(docsDir, file).split('/');
    if (excludedDirs.includes(first)) return false;
    return allLocales || !localeDirs.includes(first);
  });
}

const fenceOpen = /^(\s*)(`{3,}|~{3,})\s*([^\s`{]*)\s*(.*)$/;

/**
 * @typedef {{ file: string, line: number, lang: string, meta: string, code: string }} Block
 * `line` is the 1-based line of the first code line (right after the opening fence).
 */

/** @returns {Block[]} */
export function extractBlocks(file) {
  const lines = readFileSync(path.join(root, file), 'utf8').split('\n');
  /** @type {Block[]} */
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const open = fenceOpen.exec(lines[i]);
    if (!open) continue;
    const [, indent, fence, lang, meta] = open;
    const close = new RegExp(`^\\s*${fence[0] === '`' ? '`' : '~'}{${fence.length},}\\s*$`);
    const code = [];
    let j = i + 1;
    for (; j < lines.length && !close.test(lines[j]); j++) {
      // strip the fence's indentation (blocks nested in <TabItem> etc.)
      let line = lines[j];
      let k = 0;
      while (k < indent.length && (line[k] === ' ' || line[k] === '\t')) k++;
      code.push(line.slice(k));
    }
    blocks.push({
      file,
      line: i + 2,
      lang: lang.toLowerCase(),
      meta: meta.trim(),
      code: code.join('\n'),
    });
    i = j;
  }
  return blocks;
}

/** Whether a block's meta string contains a bare flag, e.g. `ignore` in ```rust title="x" ignore */
export function hasFlag(block, flag) {
  return block.meta
    .replace(/"[^"]*"|'[^']*'|\{[^}]*\}/g, '')
    .split(/\s+/)
    .includes(flag);
}

export function blocksFor(langs, options) {
  return listDocs(options)
    .flatMap(extractBlocks)
    .filter((block) => langs.includes(block.lang));
}
