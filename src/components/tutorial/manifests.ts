// Committed tutorial trees, produced by the tutorial runner (tatu) and landed
// here as reviewed snapshots. The docs build only reads JSON and file contents
// and never runs the runner. One directory per tutorial under
// src/data/tutorials/: manifest.json next to the `base/` and `steps/<step>/`
// trees the manifest's mutations refer to.
//
// The interfaces live in manifest-types.generated.ts, emitted by
// `tatu schema --emit-ts` from the runner's schemars schema, so regenerate
// them there instead of editing by hand.

import type { TutorialManifest, TutorialStepRecord } from './manifest-types.generated';

const SUPPORTED_SCHEMA_VERSION = 3;

const DATA_DIR = '../../data/tutorials/';

const files = import.meta.glob<{ default: TutorialManifest }>(
  '../../data/tutorials/*/manifest.json',
  {
    eager: true,
  }
);

const manifests = new Map<string, TutorialManifest>();
for (const [key, mod] of Object.entries(files)) {
  if (mod.default.schemaVersion !== SUPPORTED_SCHEMA_VERSION) {
    throw new Error(
      `tutorial manifest "${mod.default.id}" has schemaVersion ${mod.default.schemaVersion} but this checkout supports ${SUPPORTED_SCHEMA_VERSION}, so regenerate the manifest or update the components`
    );
  }
  // snapshot paths are keyed by directory name while everything else is keyed
  // by manifest id, so a mismatch would silently hide every snapshot
  const dir = key.slice(DATA_DIR.length).split('/')[0];
  if (dir !== mod.default.id) {
    throw new Error(
      `tutorial manifest in src/data/tutorials/${dir}/ declares id "${mod.default.id}", but the directory name is the id, so rename one of them`
    );
  }
  manifests.set(mod.default.id, mod.default);
}

// snapshots are app source files (.ts, .json, .rs, ...) that this app must not
// parse, so they load as text; `**` is what reaches the nested paths
const raw = import.meta.glob<string>('../../data/tutorials/*/{base,steps}/**', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// keyed by tutorial id, then by tree-relative path ("base/src/main.ts",
// "steps/usage-js/src/main.ts"); LF normalized here because the runner records
// LF and a CRLF checkout would otherwise derive a whole-file diff
const snapshots = new Map<string, Map<string, string>>();
for (const [key, content] of Object.entries(raw)) {
  const rel = key.slice(DATA_DIR.length);
  const slash = rel.indexOf('/');
  const id = rel.slice(0, slash);
  let tree = snapshots.get(id);
  if (!tree) snapshots.set(id, (tree = new Map()));
  tree.set(rel.slice(slash + 1), content.replaceAll('\r\n', '\n'));
}

export function getTutorial(tutorial: string): TutorialManifest {
  const manifest = manifests.get(tutorial);
  if (!manifest) {
    throw new Error(
      `unknown tutorial "${tutorial}": no src/data/tutorials/${tutorial}/manifest.json (known: ${[...manifests.keys()].join(', ') || 'none'})`
    );
  }
  return manifest;
}

export function getStep(tutorial: string, step: string): TutorialStepRecord {
  const manifest = getTutorial(tutorial);
  const record = manifest.steps.find((s) => s.id === step);
  if (!record) {
    throw new Error(
      `tutorial "${tutorial}" has no step "${step}" (steps: ${manifest.steps.map((s) => s.id).join(', ')})`
    );
  }
  return record;
}

/** every snapshot of one tutorial, keyed by path relative to its directory */
export function getSnapshots(tutorial: string): ReadonlyMap<string, string> {
  return snapshots.get(tutorial) ?? new Map();
}
