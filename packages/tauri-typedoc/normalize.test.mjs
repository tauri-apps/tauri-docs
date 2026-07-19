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
    n(
      'the [\\`$APPDATA\\` directory](https://v2.tauri.app/reference/javascript/api/namespacepath/#appdatadir):'
    ),
    'the [`$APPDATA` directory](https://v2.tauri.app/reference/javascript/api/namespacepath/#appdatadir):'
  );
});

test('leaves a code span containing a backslash alone', () => {
  assert.equal(n('- `\\` on Windows'), '- `\\` on Windows');
});

test('pairs escaped spans correctly when content contains a backslash', () => {
  assert.equal(n('### Use \\`C:\\foo\\` and \\`bar\\`'), '### Use `C:\\foo` and `bar`');
});

test('leaves escaped backticks in ordinary prose alone (headings/labels only)', () => {
  const prose = 'type \\` to open and \\` to close a code span';
  assert.equal(n(prose), prose);
});

test('leaves an empty escaped pair alone (would become a runaway `` span)', () => {
  assert.equal(n('### a \\`\\` b'), '### a \\`\\` b');
});

test('rewrites asides inside table cells to bold labels', () => {
  assert.equal(
    n(
      '| ~~`okLabel?`~~ | `string` | The label. :::caution[Deprecated] Use [`buttons`](/x/#y) instead. ::: | z |'
    ),
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

test('fully merges deep nesting in a single call (idempotency)', () => {
  const line = '[`A`](u)\\<`B`\\<`C`\\<`D`\\<`E`\\<`F`\\>\\>\\>\\>\\>';
  const once = n(line);
  assert.equal(once, '[`A<B<C<D<E<F>>>>>`](u)');
  assert.equal(n(once), once);
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

test('renames Constructor headings across extra intervening lines', () => {
  const input = [
    '##### Constructor',
    '',
    '<a id="constructor"></a>',
    '',
    'Some emitted note.',
    '',
    '```ts',
    'new Resource(rid): Resource;',
    '```',
  ].join('\n');
  assert.match(n(input), /^##### new Resource\(\)$/m);
});

test('constructor rename stops at the next heading when no signature exists', () => {
  const input = ['##### Constructor', '', '#### Methods', '', '```ts', 'new Foo();', '```'].join(
    '\n'
  );
  assert.match(n(input), /^##### Constructor$/m);
});

test('leaves fenced code blocks verbatim', () => {
  const code = ['```ts', 'const s = `a \\` b`;', '// :::caution[Deprecated] x :::', '```'].join(
    '\n'
  );
  assert.equal(n(code), code);
});

test('a ~~~ line inside a ``` block does not desync fence tracking', () => {
  const page = [
    '```ts',
    '~~~anything',
    'code \\`x\\` stays',
    '```',
    '',
    '### prose \\`y\\` transformed',
  ].join('\n');
  const out = n(page);
  assert.match(out, /code \\`x\\` stays/);
  assert.match(out, /^### prose `y` transformed$/m);
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
