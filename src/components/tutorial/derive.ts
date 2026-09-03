// The runner records file snapshots, not diffs, so the hunks a step shows are
// derived here: the "after" is the step's own snapshot, the "before" is the
// most recent snapshot of the same file in an earlier step, falling back to
// `base/<file>`, and no snapshot at all means the step created the file.
// tatu's check_tree_consistent guarantees the same convention on the producing
// end, and scripts/check-tutorial-steps.mjs re-checks it here.

import { structuredPatch } from 'diff';
import { getSnapshots, getTutorial } from './manifests';

export type FileBlock =
  | { kind: 'diff'; code: string; lang: string; title?: string }
  | { kind: 'file'; code: string; lang: string; title: string };

/** content of `file` as the reader would have it entering `step`, if it existed */
function before(tutorial: string, step: string, file: string): string | undefined {
  const steps = getTutorial(tutorial).steps;
  const snapshots = getSnapshots(tutorial);
  const index = steps.findIndex((s) => s.id === step);
  for (let i = index - 1; i >= 0; i--) {
    const earlier = snapshots.get(`steps/${steps[i].id}/${file}`);
    if (earlier !== undefined) return earlier;
  }
  return snapshots.get(`base/${file}`);
}

export function fileBlocks(
  tutorial: string,
  step: string,
  file: string,
  lang: string
): FileBlock[] {
  const after = getSnapshots(tutorial).get(`steps/${step}/${file}`);
  // a mutation without its snapshot is a broken tree, not an empty step, so it
  // fails the build the way an unknown step id does
  if (after === undefined) {
    throw new Error(
      `tutorial "${tutorial}" step "${step}" mutates "${file}" but src/data/tutorials/${tutorial}/steps/${step}/${file} is missing, so re-sync the tutorial tree from the runner`
    );
  }
  const previous = before(tutorial, step, file);
  if (previous === undefined) return [{ kind: 'file', code: after, lang, title: file }];
  // v2 recorded an empty diff for an overlay that changed nothing; same here
  if (previous === after) return [];

  // context 3 matches the radius the runner's own diffs used. `\ No newline at
  // end of file` is a patch-format marker, not content, so it never reaches a
  // rendered block.
  const patch = structuredPatch(file, file, previous, after, undefined, undefined, { context: 3 });
  return patch.hunks.map((hunk, i) => ({
    kind: 'diff',
    code: hunk.lines.filter((line) => !line.startsWith('\\')).join('\n'),
    lang,
    title: i === 0 ? file : undefined,
  }));
}
