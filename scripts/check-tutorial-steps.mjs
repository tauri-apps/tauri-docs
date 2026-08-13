// Verifies that every page using <TutorialStep> agrees with the committed
// tutorial manifests (src/data/tutorials/*.manifest.json): referenced steps
// exist, every step of a referenced tutorial is present, and they appear in
// manifest order. Default-locale pages hard-fail; translated copies only warn,
// because translation lag is expected and surfaced by Lunaria. The site build
// still fails on any page that references an unknown tutorial or step, so the
// leniency here only covers completeness and order.
//
// schemaVersion is enforced by the build gate in
// src/components/tutorial/manifests.ts, not here; this script only reads ids.
// The manifests are committed artifacts from the runner's CI; nothing here runs the runner.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'src', 'content', 'docs');
const manifestDir = path.join(root, 'src', 'data', 'tutorials');

const locales = Object.keys(
  JSON.parse(fs.readFileSync(path.join(root, 'locales.json'), 'utf8'))
).filter((l) => l !== 'root');

const manifests = new Map();
if (fs.existsSync(manifestDir)) {
  for (const f of fs.readdirSync(manifestDir).filter((f) => f.endsWith('.manifest.json'))) {
    const m = JSON.parse(fs.readFileSync(path.join(manifestDir, f), 'utf8'));
    manifests.set(m.id, m);
  }
}

const errors = [];
const warnings = [];
const referenced = new Set();

for (const entry of fs.readdirSync(docsDir, { recursive: true })) {
  const rel = entry.replaceAll('\\', '/');
  if (!/\.mdx?$/.test(rel)) continue;
  const isTranslation = locales.includes(rel.split('/')[0]);
  const report = isTranslation ? warnings : errors;

  const text = fs.readFileSync(path.join(docsDir, entry), 'utf8');
  const refs = [];
  for (const tag of text.matchAll(/<TutorialStep\b[^>]*>/g)) {
    const tutorial = tag[0].match(/tutorial="([^"]+)"/)?.[1];
    const step = tag[0].match(/step="([^"]+)"/)?.[1];
    if (!tutorial || !step) {
      report.push(`${rel}: <TutorialStep> without tutorial= and step= props`);
      continue;
    }
    refs.push({ tutorial, step });
  }
  if (!refs.length) {
    // a tag Prettier wrapped across lines is invisible to the regex above;
    // an import with zero matches is the tell
    if (/import\s+TutorialStep\b/.test(text)) {
      report.push(`${rel}: imports TutorialStep but no single-line <TutorialStep> tag matched`);
    }
    continue;
  }

  const byTutorial = Map.groupBy(refs, (r) => r.tutorial);
  for (const [tutorial, used] of byTutorial) {
    referenced.add(tutorial);
    const manifest = manifests.get(tutorial);
    if (!manifest) {
      report.push(`${rel}: references unknown tutorial "${tutorial}"`);
      continue;
    }
    const order = manifest.steps.map((s) => s.id);
    const usedIds = used.map((r) => r.step);
    for (const id of usedIds) {
      if (!order.includes(id)) report.push(`${rel}: tutorial "${tutorial}" has no step "${id}"`);
    }
    for (const id of order) {
      if (!usedIds.includes(id))
        report.push(`${rel}: step "${id}" of "${tutorial}" is missing from the page`);
    }
    const positions = usedIds.map((id) => order.indexOf(id)).filter((i) => i >= 0);
    if (positions.some((p, i) => i > 0 && p < positions[i - 1])) {
      report.push(`${rel}: steps of "${tutorial}" are out of manifest order`);
    }
  }
}

for (const id of manifests.keys()) {
  if (!referenced.has(id)) warnings.push(`manifest "${id}" is not referenced by any page`);
}

for (const w of warnings) console.warn(`warn: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  process.exit(1);
}
console.log(
  `tutorial steps consistent (${manifests.size} manifest(s), ${warnings.length} warning(s))`
);
