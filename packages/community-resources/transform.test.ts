import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertNoDataLoss,
  cleanRepoUrl,
  isOfficial,
  mergeRegistries,
  npmPackageUrl,
  sortByCreatedDesc,
  type Resource,
} from './transform.ts';

function crate(name: string, repository: string | null = null): Resource {
  return {
    source: 'crates',
    name,
    description: '',
    repository,
    crates_io: `https://crates.io/crates/${name}`,
  };
}

function pkg(name: string, repository: string | null = null): Resource {
  return {
    source: 'npm',
    name,
    description: '',
    repository,
    npm: npmPackageUrl(name),
  };
}

test('cleanRepoUrl only lets http(s) through', () => {
  assert.equal(cleanRepoUrl('https://github.com/a/b'), 'https://github.com/a/b');
  assert.equal(cleanRepoUrl('git+https://github.com/a/b.git'), 'https://github.com/a/b');
  assert.equal(cleanRepoUrl('javascript:alert(1)'), null);
  assert.equal(cleanRepoUrl('git@github.com:a/b.git'), null);
  assert.equal(cleanRepoUrl({ url: 'https://github.com/a/b' }), null);
  assert.equal(cleanRepoUrl(''), null);
});

test('isOfficial matches the owner segment, not the whole URL', () => {
  assert.equal(isOfficial('https://github.com/tauri-apps/plugins-workspace'), true);
  assert.equal(isOfficial('https://github.com/someone/tauri-apps-helper'), false);
  assert.equal(isOfficial('https://gitlab.com/tauri-apps/thing'), false);
  assert.equal(isOfficial(null), false);
});

test('npmPackageUrl leaves the scope separator unencoded', () => {
  assert.equal(
    npmPackageUrl('@scope/tauri-plugin-x'),
    'https://www.npmjs.com/package/@scope/tauri-plugin-x'
  );
});

test('mergeRegistries folds an -api package into its crate', () => {
  const repo = 'https://github.com/a/b';
  const merged = mergeRegistries(
    [crate('tauri-plugin-x', repo)],
    [pkg('tauri-plugin-x-api', repo)]
  );

  assert.equal(merged.length, 1);
  assert.equal(merged[0].crates_io, 'https://crates.io/crates/tauri-plugin-x');
  assert.equal(merged[0].npm, 'https://www.npmjs.com/package/tauri-plugin-x-api');
});

test('mergeRegistries prefers the exact npm name over -api whichever comes first', () => {
  const repo = 'https://github.com/a/b';
  const plain = pkg('tauri-plugin-x', repo);
  const api = pkg('tauri-plugin-x-api', repo);

  for (const npm of [
    [plain, api],
    [api, plain],
  ]) {
    const merged = mergeRegistries([crate('tauri-plugin-x', repo)], npm);
    assert.equal(merged.length, 1);
    assert.equal(merged[0].npm, plain.npm);
  }
});

test('mergeRegistries keeps the crate download count and falls back to npm', () => {
  const repo = 'https://github.com/a/b';
  const merged = mergeRegistries(
    [
      { ...crate('tauri-plugin-x', repo), downloads: 900, downloads_window: '90d' },
      crate('tauri-plugin-y', repo),
    ],
    [
      { ...pkg('tauri-plugin-x-api', repo), downloads: 300, downloads_window: '30d' },
      { ...pkg('tauri-plugin-y-api', repo), downloads: 300, downloads_window: '30d' },
    ]
  );

  assert.deepEqual(
    merged.map((r) => [r.downloads, r.downloads_window]),
    [
      [900, '90d'],
      [300, '30d'],
    ]
  );
});

test('mergeRegistries keeps -api separate when the repositories disagree', () => {
  const merged = mergeRegistries(
    [crate('tauri-plugin-x', 'https://github.com/a/b')],
    [pkg('tauri-plugin-x-api', 'https://github.com/c/d')]
  );

  assert.deepEqual(
    merged.map((r) => r.name),
    ['tauri-plugin-x', 'tauri-plugin-x-api']
  );
});

test('mergeRegistries folds -api when either side has no repository to compare', () => {
  const merged = mergeRegistries(
    [crate('tauri-plugin-x')],
    [pkg('tauri-plugin-x-api', 'https://github.com/a/b')]
  );

  assert.equal(merged.length, 1);
  assert.equal(merged[0].repository, 'https://github.com/a/b');
});

test('mergeRegistries does not fold scoped packages by suffix', () => {
  const repo = 'https://github.com/a/b';
  const merged = mergeRegistries(
    [crate('tauri-plugin-x', repo)],
    [pkg('@scope/tauri-plugin-x-api', repo)]
  );

  assert.equal(merged.length, 2);
});

test('sortByCreatedDesc puts unparseable and missing dates last', () => {
  const sorted = sortByCreatedDesc([
    { ...crate('bad'), created_at: 'not a date' },
    { ...crate('old'), created_at: '2024-01-01T00:00:00Z' },
    { ...crate('new'), created_at: '2026-01-01T00:00:00Z' },
    crate('none'),
  ]);

  assert.deepEqual(
    sorted.slice(0, 2).map((r) => r.name),
    ['new', 'old']
  );
});

test('assertNoDataLoss rejects a crawl that lost a tenth of the list', () => {
  const previous = {
    generated: '',
    resources: Array.from({ length: 100 }, (_, i) => crate(`p${i}`)),
  };

  assert.doesNotThrow(() => assertNoDataLoss(previous, previous.resources.slice(0, 91)));
  assert.throws(() => assertNoDataLoss(previous, previous.resources.slice(0, 89)), /partial crawl/);
});

test('assertNoDataLoss rejects a run that lost a fifth of the star counts', () => {
  const starred = Array.from({ length: 10 }, (_, i) => ({ ...crate(`p${i}`), stars: i }));
  const previous = { generated: '', resources: starred };
  const unstarred = (n: number) => starred.map((r, i) => (i < n ? crate(r.name) : r));

  assert.doesNotThrow(() => assertNoDataLoss(previous, unstarred(2)));
  assert.throws(() => assertNoDataLoss(previous, unstarred(3)), /GITHUB_TOKEN/);
});

test('assertNoDataLoss accepts the first run', () => {
  assert.doesNotThrow(() => assertNoDataLoss(null, []));
});
