import assert from 'node:assert/strict';
import { test } from 'node:test';
import { escapeChangelogMarkdown } from './utils.ts';

test('escapes HTML-significant characters in prose', () => {
  assert.equal(
    escapeChangelogMarkdown('Support <a> & "b" in \'c\''),
    'Support &lt;a&gt; &amp; &quot;b&quot; in &#39;c&#39;'
  );
});

test('escapes template-ish sequences in prose', () => {
  assert.equal(
    escapeChangelogMarkdown('Interpolate ${var} and {{ mustache }}'),
    'Interpolate $\\{var} and &#123;&#123; mustache &#125;&#125;'
  );
});

test('leaves inline code spans untouched', () => {
  // Code spans render literally — entities inside them are NOT decoded,
  // so escaping there shows `&quot;` etc. verbatim on the page.
  assert.equal(
    escapeChangelogMarkdown(
      'Add `data-tauri-drag-region="deep"` so clicks on <em>children</em> drag'
    ),
    'Add `data-tauri-drag-region="deep"` so clicks on &lt;em&gt;children&lt;/em&gt; drag'
  );
});

test('leaves multi-backtick code spans with embedded backticks untouched', () => {
  assert.equal(escapeChangelogMarkdown('Use ``a`"b`` & "c"'), 'Use ``a`"b`` &amp; &quot;c&quot;');
});

test('leaves fenced code blocks untouched', () => {
  const input = 'Before <b>\n\n```html\n<div data-x="1">${y} {{z}}</div>\n```\n\nAfter "q"';
  assert.equal(
    escapeChangelogMarkdown(input),
    'Before &lt;b&gt;\n\n```html\n<div data-x="1">${y} {{z}}</div>\n```\n\nAfter &quot;q&quot;'
  );
});

test('escapes template-ish sequences outside code but not inside', () => {
  assert.equal(escapeChangelogMarkdown('Set `${HOME}` or ${HOME}'), 'Set `${HOME}` or $\\{HOME}');
});

test('leaves an unpaired backtick as prose', () => {
  assert.equal(escapeChangelogMarkdown('stray ` tick "x"'), 'stray ` tick &quot;x&quot;');
});
