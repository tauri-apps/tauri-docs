import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeGeneratedPage } from './normalize.mjs';

const n = normalizeGeneratedPage;

test('unescapes inline code in headings', () => {
  assert.equal(
    n('### Restricting access to the open \\| \\`open\\` API'),
    '### Restricting access to the open \\| `open` API'
  );
});

test('unescapes inline code in link labels (also inside headings)', () => {
  assert.equal(
    n('### Restricting access to the [\\`open\\`](/reference/javascript/shell/#open) API'),
    '### Restricting access to the [`open`](/reference/javascript/shell/#open) API'
  );
  assert.equal(
    n('the [\\`$APPDATA\\` directory](https://v2.tauri.app/reference/javascript/api/namespacepath/#appdatadir):'),
    'the [`$APPDATA` directory](https://v2.tauri.app/reference/javascript/api/namespacepath/#appdatadir):'
  );
});

test('leaves a code span containing a backslash alone', () => {
  assert.equal(n('- `\\` on Windows'), '- `\\` on Windows');
});

test('rewrites asides inside table cells to bold labels', () => {
  assert.equal(
    n('| ~~`okLabel?`~~ | `string` | The label. :::caution[Deprecated] Use [`buttons`](/x/#y) instead. ::: | z |'),
    '| ~~`okLabel?`~~ | `string` | The label. **Deprecated** Use [`buttons`](/x/#y) instead. | z |'
  );
  // no title -> capitalized type
  assert.equal(n('| a | :::note x ::: |'), '| a | **Note** x |');
});

test('keeps asides outside tables untouched', () => {
  const aside = ':::caution[Deprecated]\nUse something else.\n:::';
  assert.equal(n(aside), aside);
});

test('merges simple linked generics into one code span', () => {
  assert.equal(
    n('[`Promise`](https://mdn/Promise)\\<`void`\\>'),
    '[`Promise<void>`](https://mdn/Promise)'
  );
});

test('merges nested generics innermost-first', () => {
  assert.equal(
    n('[`Promise`](https://mdn/Promise)\\<`AsyncIterableIterator`\\<`string`\\>\\>'),
    '[`Promise<AsyncIterableIterator<string>>`](https://mdn/Promise)'
  );
  assert.equal(
    n('[`Promise`](https://mdn/Promise)\\<`Result`\\<`null`, `never`\\>\\>'),
    '[`Promise<Result<null, never>>`](https://mdn/Promise)'
  );
});

test('keeps generics with linked type arguments fragmented (preserves links)', () => {
  const line = '[`Promise`](https://mdn/Promise)\\<[`FileInfo`](#fileinfo)\\>';
  assert.equal(n(line), line);
});

test('renames Constructor headings from the signature below', () => {
  const input = [
    '<a id="constructor"></a>',
    '',
    '##### Constructor',
    '',
    '```ts',
    'new Channel<T>(onmessage?): Channel<T>;',
    '```',
  ].join('\n');
  assert.match(n(input), /^##### new Channel\(\)$/m);
});

test('renames Constructor headings with multiline signatures', () => {
  const input = ['##### Constructor', '', '```ts', 'new Webview(', '   label,', '```'].join('\n');
  assert.match(n(input), /^##### new Webview\(\)$/m);
});

test('does not touch the plural Constructors section heading', () => {
  assert.equal(n('#### Constructors'), '#### Constructors');
});

test('leaves fenced code blocks verbatim', () => {
  const code = ['```ts', 'const s = `a \\` b`;', '// :::caution[Deprecated] x :::', '```'].join('\n');
  assert.equal(n(code), code);
});

test('strips Uint8Array type parameters', () => {
  assert.equal(n('`Uint8Array`\\<`ArrayBufferLike`\\>'), '`Uint8Array`');
});

test('injects tableOfContents frontmatter once', () => {
  const page = '---\ntitle: x\n---\n\nbody';
  const once = n(page);
  assert.match(once, /maxHeadingLevel: 5/);
  assert.equal(n(once), once);
});

test('is idempotent over a page exercising every transform', () => {
  const page = [
    '---',
    'title: "@tauri-apps/plugin-opener"',
    '---',
    '',
    '### Restricting access to the open \\| \\`open\\` API',
    '',
    '| a | :::caution[Deprecated] gone ::: |',
    '',
    '##### Constructor',
    '',
    '```ts',
    'new Resource(rid): Resource;',
    '```',
    '',
    '[`Promise`](https://mdn/Promise)\\<`void`\\>',
  ].join('\n');
  const once = n(page);
  assert.equal(n(once), once);
});
