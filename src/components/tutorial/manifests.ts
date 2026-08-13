// Committed tutorial manifests, produced by the tutorial runner (tatu) and
// landed here as reviewed diffs. The docs build only reads JSON and never
// runs the runner. One file per tutorial under src/data/tutorials/.
//
// The interfaces live in manifest-types.generated.ts, emitted by
// `tatu schema --emit-ts` from the runner's schemars schema, so regenerate
// them there instead of editing by hand.

import type { TutorialManifest, TutorialStepRecord } from './manifest-types.generated';

const SUPPORTED_SCHEMA_VERSION = 1;

const files = import.meta.glob<{ default: TutorialManifest }>(
  '../../data/tutorials/*.manifest.json',
  {
    eager: true,
  }
);

const manifests = new Map<string, TutorialManifest>();
for (const mod of Object.values(files)) {
  if (mod.default.schemaVersion !== SUPPORTED_SCHEMA_VERSION) {
    throw new Error(
      `tutorial manifest "${mod.default.id}" has schemaVersion ${mod.default.schemaVersion} but this checkout supports ${SUPPORTED_SCHEMA_VERSION}, so regenerate the manifest or update the components`
    );
  }
  manifests.set(mod.default.id, mod.default);
}

export function getTutorial(tutorial: string): TutorialManifest {
  const manifest = manifests.get(tutorial);
  if (!manifest) {
    throw new Error(
      `unknown tutorial "${tutorial}": no src/data/tutorials/${tutorial}.manifest.json (known: ${[...manifests.keys()].join(', ') || 'none'})`
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
