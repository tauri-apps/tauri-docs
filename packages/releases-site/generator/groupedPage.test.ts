import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildCoreGroups, demoteNotesHeadings } from './groupedPage.ts';
import type { ReleaseWithDate } from './pageGenerator.ts';

function release(version: string, date?: string, notes = `notes ${version}`): ReleaseWithDate {
  return { version, notes, date, dateLabel: date && `label ${date}` };
}

function data(entries: Record<string, ReleaseWithDate[]>): Map<string, ReleaseWithDate[]> {
  return new Map(Object.entries(entries));
}

test('groups core packages by minor, newest minor first', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.0', '2026-04-30T15:00:00Z'), release('2.10.0', '2026-02-02T22:00:00Z')],
      '@tauri-apps/api': [release('2.11.0', '2026-04-30T15:05:00Z')],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.minor),
    ['2.11', '2.10']
  );
});

test('merges a co-release into one event, canonical package order', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.3', '2026-06-17T13:46:00Z')],
      '@tauri-apps/api': [release('2.11.1', '2026-06-17T13:41:00Z')],
    })
  );
  assert.equal(groups[0].events.length, 1);
  assert.deepEqual(
    groups[0].events[0].entries.map((e) => `${e.pkgLabel} ${e.version}`),
    ['tauri 2.11.3', '@tauri-apps/api 2.11.1']
  );
});

test('never merges two versions of the same package, however close', () => {
  const groups = buildCoreGroups(
    data({
      '@tauri-apps/api': [
        release('2.10.0', '2026-02-02T22:26:00Z'),
        release('2.10.1', '2026-02-03T00:17:00Z'),
      ],
    })
  );
  assert.equal(groups[0].events.length, 2);
});

test('splits events when the publish gap exceeds the window', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.1', '2026-05-06T10:00:00Z')],
      '@tauri-apps/cli': [release('2.11.1', '2026-05-16T17:00:00Z')],
    })
  );
  assert.equal(groups[0].events.length, 2);
});

test('excludes non-2.x versions and folds prereleases into their minor', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('1.8.3', '2026-01-01T00:00:00Z'), release('2.0.0-rc.15', '2024-09-25T00:00:00Z')],
    })
  );
  assert.deepEqual(
    groups.map((g) => g.minor),
    ['2.0']
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
    groups[0].events.flatMap((e) => e.entries.map((x) => x.pkgLabel)),
    ['cli']
  );
});

test('same-version cli twins share an event despite publish lag', () => {
  // Real case: tauri-cli 2.11.3 hit crates.io Jun 17, @tauri-apps/cli 2.11.3
  // hit npm Jun 19 — same covector release (tauri#15409)
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.3', '2026-06-17T13:46:00Z')],
      'tauri-cli': [release('2.11.3', '2026-06-17T13:48:00Z', 'crate notes')],
      '@tauri-apps/cli': [release('2.11.3', '2026-06-19T12:45:00Z', 'npm notes')],
    })
  );
  assert.equal(groups[0].events.length, 1);
  assert.deepEqual(
    groups[0].events[0].entries.map((e) => e.pkgLabel),
    ['tauri', 'tauri-cli', '@tauri-apps/cli']
  );
});

test('keeps cli pair entries separate when notes differ', () => {
  const groups = buildCoreGroups(
    data({
      'tauri-cli': [release('2.11.4', '2026-06-28T17:58:00Z', 'crate notes')],
      '@tauri-apps/cli': [release('2.11.4', '2026-06-28T17:59:00Z', 'npm notes')],
    })
  );
  const labels = groups[0].events.flatMap((e) => e.entries.map((x) => x.pkgLabel)).sort();
  assert.deepEqual(labels, ['@tauri-apps/cli', 'tauri-cli']);
});

test('dateless entries become singleton events at the end', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [release('2.11.0', '2026-04-30T15:00:00Z'), release('2.11.9')],
    })
  );
  assert.equal(groups[0].events.length, 2);
  assert.equal(groups[0].events[1].entries[0].version, '2.11.9');
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
    groups.map((g) => g.minor),
    ['2.11', '2.9']
  );
});

test('group date range spans earliest to latest entry labels', () => {
  const groups = buildCoreGroups(
    data({
      tauri: [
        release('2.11.0', '2026-04-30T15:00:00Z'),
        release('2.11.5', '2026-07-01T13:00:00Z'),
      ],
    })
  );
  assert.equal(groups[0].dateRange, 'label 2026-04-30T15:00:00Z – label 2026-07-01T13:00:00Z');
});

test('demotes notes headings by one level outside code fences', () => {
  const input = '### New Features\n- x\n```md\n### not a heading\n```\n#### Deep\n###### Max';
  assert.equal(
    demoteNotesHeadings(input),
    '#### New Features\n- x\n```md\n### not a heading\n```\n##### Deep\n###### Max'
  );
});
