import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseAndSortChangelog } from './parse.ts';

test('parses changelogs mixing escaped and unescaped version headings', () => {
  const changelog = [
    '# Changelog',
    '',
    '## [2.12.0]',
    '',
    '- new',
    '',
    '## \\[2.11.5]',
    '',
    '- older',
    '',
    '## \\[2.11.4]',
    '',
    '- oldest',
  ].join('\n');

  const releases = parseAndSortChangelog(changelog);
  assert.deepEqual(
    releases.map((r) => r.version),
    ['2.12.0', '2.11.5', '2.11.4']
  );
  assert.match(releases[0]!.notes, /- new/);
  assert.doesNotMatch(releases[0]!.notes, /older/);
});

test('ignores version-like headings that do not start a line', () => {
  const changelog = ['# Changelog', '', '## [1.0.0]', '', '### [link] notes', ''].join('\n');
  assert.deepEqual(
    parseAndSortChangelog(changelog).map((r) => r.version),
    ['1.0.0']
  );
});
