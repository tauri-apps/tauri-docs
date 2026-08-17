// Verifies that every page using <TutorialStep> or a <Tutorial> wrapper
// agrees with the committed tutorial trees
// (src/data/tutorials/<id>/manifest.json). For <TutorialStep>: referenced steps
// exist, every step of a referenced tutorial is present, and they appear in
// manifest order. For <Tutorial>: the wrapper renders every step in manifest
// order itself, so the page-side check reduces to slot names agreeing with
// the step ids. Default-locale pages hard-fail; translated copies only warn,
// because translation lag is expected and surfaced by Lunaria. The site build
// still fails on any page that references an unknown tutorial or step, so the
// leniency here only covers completeness and order.
//
// The tree checks mirror the runner's check_tree_consistent: the snapshot
// paths are a convention, not manifest fields, so both ends assert it.
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

const errors = [];
const warnings = [];
const referenced = new Set();

// every file under a tutorial's base/ and steps/, relative to the tutorial dir
function readTree(dir) {
  const files = new Set();
  for (const sub of ['base', 'steps']) {
    const root = path.join(dir, sub);
    if (!fs.existsSync(root)) continue;
    for (const entry of fs.readdirSync(root, { recursive: true })) {
      const rel = String(entry).replaceAll('\\', '/');
      if (fs.statSync(path.join(root, entry)).isFile()) files.add(`${sub}/${rel}`);
    }
  }
  return files;
}

const manifests = new Map();
const trees = new Map();
if (fs.existsSync(manifestDir)) {
  for (const entry of fs.readdirSync(manifestDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = path.join(manifestDir, entry.name);
    if (!fs.existsSync(path.join(dir, 'manifest.json'))) {
      errors.push(`src/data/tutorials/${entry.name}/ has no manifest.json`);
      continue;
    }
    const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
    if (m.id !== entry.name) {
      errors.push(`src/data/tutorials/${entry.name}/manifest.json declares id "${m.id}"`);
    }
    manifests.set(m.id, m);
    trees.set(m.id, readTree(dir));
  }
}

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
  const wrapperIds = [];
  for (const tag of text.matchAll(/<Tutorial\b[^>]*>/g)) {
    const id = tag[0].match(/id="([^"]+)"/)?.[1];
    if (!id) {
      report.push(`${rel}: <Tutorial> without an id= prop`);
      continue;
    }
    wrapperIds.push(id);
  }
  for (const id of wrapperIds) {
    referenced.add(id);
    if (!manifests.has(id)) report.push(`${rel}: references unknown tutorial "${id}"`);
  }
  // with several wrappers on one page, slot names cannot be attributed to a
  // tutorial without real JSX parsing; Tutorial.astro still checks at build time
  if (wrapperIds.length === 1 && manifests.has(wrapperIds[0])) {
    const order = manifests.get(wrapperIds[0]).steps.map((s) => s.id);
    const slots = [...text.matchAll(/slot="([^"]+)"/g)].map((m) => m[1]);
    for (const name of slots) {
      if (!order.includes(name.replace(/-after$/, ''))) {
        report.push(`${rel}: tutorial "${wrapperIds[0]}" has no step for slot "${name}"`);
      }
    }
    for (const id of order) {
      if (!slots.includes(id)) {
        report.push(`${rel}: step "${id}" of "${wrapperIds[0]}" has no prose slot`);
      }
    }
  }

  if (!refs.length) {
    // a tag Prettier wrapped across lines is invisible to the regex above;
    // an import with zero matches is the tell
    if (!wrapperIds.length && /import\s+Tutorial(Step)?\b/.test(text)) {
      report.push(`${rel}: imports the tutorial components but no single-line tag matched`);
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

for (const [id, manifest] of manifests) {
  if (!referenced.has(id)) warnings.push(`manifest "${id}" is not referenced by any page`);

  const files = trees.get(id);
  const used = new Set();
  const mutated = new Set();
  for (const step of manifest.steps) {
    for (const m of step.mutations) {
      const where = `tutorial "${id}" step "${step.id}"`;
      if (!m.file) {
        // shell mutations stay file-blind: a command, no snapshot, no `created`
        if (!m.command) errors.push(`${where}: mutation with neither file nor command`);
        if (m.created !== undefined) errors.push(`${where}: command mutation carries created`);
        continue;
      }
      if (typeof m.created !== 'boolean') {
        errors.push(`${where}: mutation of "${m.file}" has no created flag`);
      }
      const after = `steps/${step.id}/${m.file}`;
      if (files.has(after)) used.add(after);
      else
        errors.push(
          `${where}: mutates "${m.file}" but src/data/tutorials/${id}/${after} is missing`
        );
      // only the first mutation of a file says anything about base/
      if (!mutated.has(m.file)) {
        mutated.add(m.file);
        const base = `base/${m.file}`;
        if (files.has(base)) used.add(base);
        if (m.created === true && files.has(base)) {
          errors.push(`${where}: creates "${m.file}" but src/data/tutorials/${id}/${base} exists`);
        }
        if (m.created === false && !files.has(base)) {
          errors.push(
            `${where}: first mutates "${m.file}" but src/data/tutorials/${id}/${base} is missing`
          );
        }
      }
    }
  }
  for (const f of files) {
    if (!used.has(f)) warnings.push(`tutorial "${id}": snapshot "${f}" belongs to no mutation`);
  }
}

for (const w of warnings) console.warn(`warn: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  process.exit(1);
}
console.log(
  `tutorial steps consistent (${manifests.size} manifest(s), ${warnings.length} warning(s))`
);
