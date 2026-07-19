import { Converter } from 'typedoc';

/**
 * Local TypeDoc plugin for the Tauri JS API reference.
 *
 * JSDoc comments in the Tauri sources use `#### Platform-specific` headings. When
 * typedoc-plugin-markdown renders members as tables, that raw `####` leaks into a table
 * cell as literal text (a heading can't live inside a table cell). We normalize the
 * comments at the reflection level — no source files are touched — turning the heading
 * into bold inline text so it reads cleanly in both tables and prose.
 *
 * Two variants exist in the sources, both handled here:
 *   `#### Platform-specific` / `#### Platform-specific:`  -> bold label
 *   `#### - **macOS / iOS**: Unsupported.`                -> plain list item
 *
 * The second form (e.g. deep-link's `isRegistered`) is malformed markdown upstream: a
 * heading can't contain a list bullet. Left alone it becomes a real `<h4>` with an anchor
 * like `#--macos--android--ios-unsupported`, so a platform note shows up as a section
 * heading. We demote it back to the list item it was meant to be. Headings that are
 * genuine section titles (`## Security`, `#### Warning`, ...) are deliberately untouched.
 */
const PLATFORM_HEADING_RE = /^#{1,6}[ \t]+(Platform-specific):?[ \t]*$/gm;
const LIST_ITEM_HEADING_RE = /^#{1,6}[ \t]+(-[ \t]+\S.*)$/gm;

/** Exported for testing. */
export function normalizeCommentText(text) {
  return text.replace(PLATFORM_HEADING_RE, '**$1**').replace(LIST_ITEM_HEADING_RE, '$1');
}

function normalizeCommentDisplayParts(parts) {
  if (!Array.isArray(parts)) return;
  for (const part of parts) {
    if (part.kind === 'text' && typeof part.text === 'string') {
      part.text = normalizeCommentText(part.text);
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
      if (Array.isArray(reflection.signatures)) {
        for (const sig of reflection.signatures) normalizeComment(sig.comment);
      }
    }
  });

  // Symbols re-exported from a dependency (e.g. the fs plugin re-exporting BaseDirectory
  // from @tauri-apps/api) resolve to sources under node_modules. With `disableGit` +
  // `sourceLinkTemplate` every source gets a URL, so those would link to a nonexistent
  // GitHub path. Drop the link (there is no meaningful target in the docs' repos) and
  // shorten the displayed file name to the package-relative part
  // (`@tauri-apps/api/path.d.ts` instead of a pnpm store path).
  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      if (!Array.isArray(reflection.sources)) continue;
      for (const source of reflection.sources) {
        const marker = source.fileName.lastIndexOf('node_modules/');
        if (marker === -1) continue;
        source.url = undefined;
        source.fileName = source.fileName.slice(marker + 'node_modules/'.length);
      }
    }
  });
}
