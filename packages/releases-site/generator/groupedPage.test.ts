import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  buildCoreGroups,
  demoteNotesHeadings,
  groupBySeries,
  splitPrereleases,
} from './groupedPage.ts';
import type { ReleaseWithDate } from './pageGenerator.ts';

function release(version: string, date?: string, notes = `notes ${version}`): ReleaseWithDate {
  return { version, notes, date, dateLabel: date && `label ${date}` };
}

function data(entries: Record<string, ReleaseWithDate[]>): Map<string, ReleaseWithDate[]> {
  return new Map(Object.entries(entries));
}

test('a version is one release, holding every package that published it', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.1', '2026-05-06T10:00:00Z')],
      '@tauri-apps/api': [release('2.11.1', '2026-06-17T13:41:00Z')],
    })
  );
  assert.equal(groups[0].releases.length, 1);
  assert.deepEqual(
    groups[0].releases[0].entries.map((e) => `${e.pkgLabel} ${e.version}`),
    ['tauri 2.11.1', '@tauri-apps/api 2.11.1']
  );
});

test('a release is dated by the first package to reach that version', () => {
  // @tauri-apps/api took six weeks to catch up to tauri 2.11.1
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.1', '2026-05-06T10:00:00Z')],
      '@tauri-apps/api': [release('2.11.1', '2026-06-17T13:41:00Z')],
    })
  );
  assert.equal(groups[0].releases[0].dateLabel, 'label 2026-05-06T10:00:00Z');
});

test('packages on different versions land in different releases', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.3', '2026-06-17T13:46:00Z')],
      '@tauri-apps/api': [release('2.11.1', '2026-06-17T13:41:00Z')],
    })
  );
  assert.deepEqual(
    groups[0].releases.map((r) => r.version),
    ['2.11.3', '2.11.1']
  );
});

test('excludes non-2.x versions and gives a prerelease channel its own series', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [
        release('1.8.3', '2026-01-01T00:00:00Z'),
        release('2.0.0-rc.15', '2024-09-25T00:00:00Z'),
      ],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.series),
    ['2.0.0-rc']
  );
});

test('dedupes identical cli pair entries into one "cli" entry', () => {
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [release('2.11.4', '2026-06-28T17:58:00Z', 'same notes')],
      '@tauri-apps/cli': [release('2.11.4', '2026-06-28T17:59:00Z', 'same notes')],
    })
  );
  assert.deepEqual(
    groups[0].releases.flatMap((r) => r.entries.map((x) => x.pkgLabel)),
    ['cli']
  );
});

test('a lagging npm publish still merges, dated by the crate', () => {
  // Real case: tauri-cli 2.11.3 hit crates.io Jun 17, @tauri-apps/cli 2.11.3
  // hit npm Jun 19 — same covector release (tauri#15409)
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.3', '2026-06-17T13:46:00Z')],
      'tauri-cli': [release('2.11.3', '2026-06-17T13:48:00Z', 'crate notes')],
      '@tauri-apps/cli': [
        release('2.11.3', '2026-06-19T12:45:00Z', '- Upgraded to `tauri-cli@2.11.3`'),
      ],
    })
  );
  assert.equal(groups[0].releases.length, 1);
  const [, cli] = groups[0].releases[0].entries;
  assert.equal(cli.pkgLabel, 'cli');
  assert.equal(cli.dateLabel, 'label 2026-06-17T13:48:00Z');
});

test('the npm twin\'s "Upgraded to tauri-cli" line never reaches the merged notes', () => {
  // it names the merged entry itself; four rc twins name the crate version below theirs
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [
        release('2.0.0-rc.10', '2024-09-01T10:00:00Z', '### Bug Fixes\n\n- fixed a thing'),
      ],
      '@tauri-apps/cli': [
        release(
          '2.0.0-rc.10',
          '2024-09-01T10:05:00Z',
          '### Dependencies\n\n- Upgraded to `tauri-cli@2.0.0-rc.9`'
        ),
      ],
    })
  );
  const [cli] = groups[0].releases[0].entries;
  assert.equal(cli.pkgLabel, 'cli');
  assert.equal(cli.notes, '### Bug Fixes\n\n- fixed a thing');
});

test('a wrapper that lags a version carries nothing into the merged notes', () => {
  // npm 2.0.0-rc.10 shipped crate 2.0.0-rc.9, so its body repeats rc.9's notes —
  // carrying them would print the same fix under rc.9 and rc.10 both
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [
        release('2.0.0-rc.10', '2024-09-05T10:00:00Z', '### Bug Fixes\n\n- rc.10 only'),
      ],
      '@tauri-apps/cli': [
        release(
          '2.0.0-rc.10',
          '2024-09-05T10:05:00Z',
          '### Bug Fixes\n\n- belongs to rc.9\n\n### Dependencies\n\n- Upgraded to `tauri-cli@2.0.0-rc.9`'
        ),
      ],
    })
  );
  const [cli] = groups[0].releases[0].entries;
  assert.equal(cli.notes, '### Bug Fixes\n\n- rc.10 only');
});

test('a line only the npm twin has is carried into the merged notes', () => {
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [release('2.8.1', '2025-09-01T10:00:00Z', '### Bug Fixes\n\n- from the crate')],
      '@tauri-apps/cli': [
        release(
          '2.8.1',
          '2025-09-01T10:05:00Z',
          '### Bug Fixes\n\n- from the crate\n- npm only\n\n### Dependencies\n\n- Upgraded to `tauri-cli@2.8.1`'
        ),
      ],
    })
  );
  const [cli] = groups[0].releases[0].entries;
  assert.equal(cli.notes, '### Bug Fixes\n\n- from the crate\n- npm only');
});

test('a dateless release still gets its place by version', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.0', '2026-04-30T15:00:00Z'), release('2.11.9')],
    })
  );
  assert.deepEqual(
    groups[0].releases.map((r) => r.version),
    ['2.11.9', '2.11.0']
  );
  assert.equal(groups[0].releases[0].dateLabel, undefined);
});

test('a package on a different minor files under its own', () => {
  // api takes a minor bump while tauri only takes a patch: they are separate
  // versions, so they are separate releases in separate sections
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.6', '2026-08-01T10:00:00Z')],
      '@tauri-apps/api': [release('2.12.0', '2026-08-01T10:05:00Z')],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.series),
    ['2.12', '2.11']
  );
});

test('ignores non-core packages', () => {
  const groups = buildCoreGroups(data({ wry: [release('2.5.0', '2026-06-01T00:00:00Z')] }));
  assert.equal(groups.length, 0);
});

test('sorts minors numerically, not lexicographically', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.9.0', '2025-10-01T00:00:00Z'), release('2.11.0', '2026-04-30T00:00:00Z')],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.series),
    ['2.11', '2.9']
  );
});

test('demotes notes headings by one level outside code fences', () => {
  const input = '### New Features\n- x\n```md\n### not a heading\n```\n#### Deep\n###### Max';
  assert.equal(
    demoteNotesHeadings(input),
    '#### New Features\n- x\n```md\n### not a heading\n```\n##### Deep\n###### Max'
  );
});

test('demotes by the requested number of levels, still capped at h6', () => {
  const input = '### New Features\n```md\n### not a heading\n```\n##### Deep';
  assert.equal(
    demoteNotesHeadings(input, 2),
    '##### New Features\n```md\n### not a heading\n```\n###### Deep'
  );
});

test('a version listed twice in one changelog becomes a single release', () => {
  // tauri-cli's changelog really does carry two `## \[2.0.0-rc.9]` sections
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [
        release('2.0.0-rc.9', '2024-09-01T00:00:00Z', 'first section'),
        release('2.0.0-rc.9', '2024-09-01T00:00:00Z', 'second section'),
      ],
    })
  );
  assert.equal(groups[0].releases.length, 1);
  assert.equal(groups[0].releases[0].entries.length, 1);
  assert.equal(groups[0].releases[0].entries[0].notes, 'first section\n\nsecond section');
});

test('releases run newest first within a minor, by version not publish order', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [
        release('2.11.0', '2026-04-30T15:00:00Z'),
        release('2.11.5', '2026-07-01T13:00:00Z'),
        release('2.11.9'),
        release('2.11.2', '2026-05-16T10:00:00Z'),
      ],
    })
  );
  assert.deepEqual(
    groups[0].releases.map((r) => r.version),
    ['2.11.9', '2.11.5', '2.11.2', '2.11.0']
  );
});

test('splitting sends prereleases to their own page, one section per channel', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [
        release('2.0.0', '2024-10-02T00:00:00Z'),
        release('2.0.1', '2024-10-10T00:00:00Z'),
        release('2.0.0-alpha.4', '2023-04-01T00:00:00Z'),
        release('2.0.0-rc.1', '2024-08-01T00:00:00Z'),
      ],
    })
  );
  const { stable, prereleases } = splitPrereleases(groups);
  assert.deepEqual(
    stable.map((g) => g.series),
    ['2.0']
  );
  assert.deepEqual(
    stable[0].releases.map((r) => r.version),
    ['2.0.1', '2.0.0']
  );
  assert.deepEqual(
    prereleases.map((g) => g.series),
    ['2.0.0-rc', '2.0.0-alpha']
  );
});

test('a minor with no prereleases contributes nothing to that page', () => {
  const groups = buildCoreGroups(data({ tauri: [release('2.11.0', '2026-04-30T00:00:00Z')] }));
  const { stable, prereleases } = splitPrereleases(groups);
  assert.equal(stable.length, 1);
  assert.equal(prereleases.length, 0);
});

test('a patch prerelease does not split the stable series it ranks inside', () => {
  // real tauri-bundler: 2.0.1-beta.2 sorts between 2.0.1 and 2.0.0, so walking the
  // sorted list would open `2.0.x`, break for the betas, then open `2.0.x` again
  const groups = groupBySeries(
    ['2.0.1', '2.0.1-beta.2', '2.0.1-beta.0', '2.0.0'].map((version) => ({ version }))
  );
  assert.deepEqual(
    groups.map((g) => g.series),
    ['2.0', '2.0.1-beta']
  );
  assert.deepEqual(
    groups[0].releases.map((r) => r.version),
    ['2.0.1', '2.0.0']
  );
});

test('a prerelease channel sorts below the version it led up to', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [
        release('2.0.0', '2024-10-02T00:00:00Z'),
        release('2.0.0-alpha.4', '2023-04-01T00:00:00Z'),
        release('2.0.0-rc.1', '2024-08-01T00:00:00Z'),
      ],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.series),
    ['2.0', '2.0.0-rc', '2.0.0-alpha']
  );
});

test('a CLI-only version is one release, named by its version alone', () => {
  // real 2.9: the CLI reached 2.9.4 on its own while core was still on 2.9.2,
  // and core's own 2.9.4 landed three weeks later — one version, one release
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.9.4', '2025-11-30T10:52:00Z')],
      'tauri-cli': [release('2.9.4', '2025-11-09T12:12:00Z', 'crate notes')],
    })
  );
  assert.deepEqual(
    groups[0].releases.map((r) => r.version),
    ['2.9.4']
  );
  assert.deepEqual(
    groups[0].releases[0].entries.map((e) => e.pkgLabel),
    ['tauri', 'tauri-cli']
  );
  // dated by whichever package got there first
  assert.equal(groups[0].releases[0].dateLabel, 'label 2025-11-09T12:12:00Z');
});
