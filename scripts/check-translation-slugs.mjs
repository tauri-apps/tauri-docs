// Adapted from https://github.com/withastro/docs/blob/main/scripts/lint-slugcheck.mjs
// Fails when a translated page has no English page at the same path, which is what a
// translation looks like after its English source is deleted or renamed. Lunaria only
// tracks files that still have a source, so nothing else reports these.

import { readdirSync, readFileSync } from 'node:fs';
import { join, sep } from 'node:path';

const docs = 'src/content/docs';
const locales = Object.keys(JSON.parse(readFileSync('locales.json', 'utf8'))).filter(
  (locale) => locale !== 'root'
);

// slug = path without extension, so a `.md` translation of a `.mdx` page still matches
function pages(dir) {
  return readdirSync(dir, { recursive: true })
    .map((file) => String(file).split(sep).join('/'))
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => ({ file, slug: file.replace(/\.(md|mdx)$/, '') }));
}

const english = new Set(
  pages(docs)
    .filter(({ slug }) => !locales.includes(slug.split('/')[0]))
    .map(({ slug }) => slug)
);

const orphans = [];
for (const locale of locales) {
  for (const { file, slug } of pages(join(docs, locale))) {
    if (!english.has(slug)) orphans.push(`${docs}/${locale}/${file}`);
  }
}

if (orphans.length === 0) {
  console.log('All translated pages have an English page');
  process.exit(0);
}

console.error('Translated pages without an English page:\n');
for (const file of orphans) console.error(`  ${file}`);
console.error(
  `\nFound ${orphans.length}. Delete the translation if the English page was removed, or rename it to match the English path.`
);
process.exit(1);
