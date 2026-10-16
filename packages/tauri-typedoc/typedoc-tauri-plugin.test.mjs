import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCommentText } from './typedoc-tauri-plugin.mjs';

test('member comments: every heading becomes a bold label, trailing colon dropped', () => {
  assert.equal(normalizeCommentText('#### Platform-specific:', false), '**Platform-specific**');
  assert.equal(
    normalizeCommentText('## Platform-specific behavior:\n\n- On macOS: x', false),
    '**Platform-specific behavior**\n\n- On macOS: x'
  );
  assert.equal(
    normalizeCommentText('text\n\n#### Note\n\nmore', false),
    'text\n\n**Note**\n\nmore'
  );
});

test('module comments: only the Platform-specific variants go, sections stay', () => {
  assert.equal(normalizeCommentText('## Security\n\ntext', true), '## Security\n\ntext');
  assert.equal(normalizeCommentText('#### Platform-specific', true), '**Platform-specific**');
});

test('a heading that is really a list item becomes the item, in both contexts', () => {
  const src = '#### - **macOS / iOS**: Unsupported';
  assert.equal(normalizeCommentText(src, false), '- **macOS / iOS**: Unsupported');
  assert.equal(normalizeCommentText(src, true), '- **macOS / iOS**: Unsupported');
});

test('text without a hash is returned as is', () => {
  const src = 'plain\n\n- list';
  assert.equal(normalizeCommentText(src, false), src);
});
