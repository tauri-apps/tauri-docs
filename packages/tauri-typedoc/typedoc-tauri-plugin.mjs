import { Converter, ReflectionKind, makeRecursiveVisitor } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

/**
 * Two upstream `#### Platform-specific` variants, rewritten at the reflection level so no
 * source file is touched. Genuine section titles (`## Security`) are deliberately untouched.
 *
 *   `#### Platform-specific:`             -> bold label, else the `####` leaks into a table cell
 *   `#### - **macOS / iOS**: Unsupported` -> list item, else it becomes a real `<h4>` anchored
 *                                            at `#--macos--android--ios-unsupported`
 */
const PLATFORM_HEADING_RE = /^#{1,6}[ \t]+(Platform-specific):?[ \t]*$/gm;
const LIST_ITEM_HEADING_RE = /^#{1,6}[ \t]+(-[ \t]+\S.*)$/gm;

// TS 5.7+ makes Uint8Array generic, so signatures pick up lib-level `<ArrayBuffer>` noise.
// Only those two are dropped; an explicit `Uint8Array<SharedArrayBuffer>` survives.
function stripUint8Generic(type) {
  if (type.name !== 'Uint8Array' || type.typeArguments?.length !== 1) return;
  const arg = type.typeArguments[0];
  if (arg.type === 'reference' && (arg.name === 'ArrayBuffer' || arg.name === 'ArrayBufferLike')) {
    type.typeArguments = undefined;
  }
}

const STRIP_UINT8_VISITOR = makeRecursiveVisitor({ reference: stripUint8Generic });

function normalizeCommentText(text) {
  if (!text.includes('#')) return text;
  return text.replace(PLATFORM_HEADING_RE, '**$1**').replace(LIST_ITEM_HEADING_RE, '$1');
}

function normalizeCommentDisplayParts(parts) {
  for (const part of parts) {
    if (part.kind === 'text') part.text = normalizeCommentText(part.text);
  }
}

function normalizeComment(comment) {
  if (!comment) return;
  normalizeCommentDisplayParts(comment.summary);
  for (const tag of comment.blockTags) normalizeCommentDisplayParts(tag.content);
}

// Plain-text first paragraph of a reflection's summary, for `description:` frontmatter. Links
// keep their label and inline code its text; anything else is left as written.
function summaryText(reflection) {
  const summary = reflection.comment?.summary;
  if (!summary?.length) return undefined;
  const text = summary
    .map((part) => part.text)
    .join('')
    .trim()
    .split(/\n\s*\n/)[0]
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return text || undefined;
}

export function load(app) {
  // starlight-typedoc sets `title` to the bare reflection name in its own BEGIN listener, and
  // priority -1 runs after it. A namespace page titled `path` means nothing once the link is
  // shared, so it takes the import specifier and keeps the short name for the sidebar. The
  // summary doubles as the page's meta description and its Open Graph card text.
  app.renderer.on(
    MarkdownPageEvent.BEGIN,
    (page) => {
      if (!page.frontmatter) return;
      const { model, project } = page;
      if (model.kind === ReflectionKind.Namespace && project.packageName) {
        page.frontmatter.title = `${project.packageName}/${model.name}`;
        page.frontmatter.sidebar = { ...page.frontmatter.sidebar, label: model.name };
      }
      const description = summaryText(model);
      if (description) page.frontmatter.description = description;
    },
    -1
  );

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      normalizeComment(reflection.comment);
      for (const sig of reflection.signatures ?? []) normalizeComment(sig.comment);
      // Signatures and parameters are registered reflections too, so this flat pass reaches
      // return, parameter and property types.
      reflection.type?.visit(STRIP_UINT8_VISITOR);
    }
  });

  // Re-exports from a dependency (fs re-exporting BaseDirectory) resolve under node_modules,
  // and `sourceLinkTemplate` would give them a GitHub URL that doesn't exist. Drop the link
  // and shorten the pnpm store path to `@tauri-apps/api/path.d.ts`.
  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      for (const source of reflection.sources ?? []) {
        const marker = source.fileName.lastIndexOf('node_modules/');
        if (marker === -1) continue;
        source.url = undefined;
        source.fileName = source.fileName.slice(marker + 'node_modules/'.length);
      }
    }
  });
}
