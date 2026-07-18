import { Converter } from 'typedoc';

/**
 * Local TypeDoc plugin for the Tauri JS API reference (Prototype A).
 *
 * JSDoc comments in the Tauri sources use `#### Platform-specific` headings. When
 * typedoc-plugin-markdown renders members as tables, that raw `####` leaks into a table
 * cell as literal text (a heading can't live inside a table cell). The old hand-rolled
 * generator stripped these markers by overriding the markdown theme's `comment` partial and
 * mutating the string; here we do it non-destructively at the reflection level (no source
 * files are touched, unlike the old `Uint8Array<ArrayBuffer>` writeFileSync hack).
 *
 * We turn the heading into bold inline text so it reads cleanly in both tables and prose.
 */
const HEADING_RE = /^#{2,4}\s+(Platform-specific)\s*$/gm;

function normalizeCommentDisplayParts(parts) {
  if (!Array.isArray(parts)) return;
  for (const part of parts) {
    if (part.kind === 'text' && typeof part.text === 'string') {
      part.text = part.text.replace(HEADING_RE, '**$1**');
    }
  }
}

function normalizeComment(comment) {
  if (!comment) return;
  normalizeCommentDisplayParts(comment.summary);
  if (Array.isArray(comment.blockTags)) {
    for (const tag of comment.blockTags) {
      normalizeCommentDisplayParts(tag.content);
    }
  }
}

export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      normalizeComment(reflection.comment);
      if ('signatures' in reflection && Array.isArray(reflection.signatures)) {
        for (const sig of reflection.signatures) normalizeComment(sig.comment);
      }
    }
  });
}
