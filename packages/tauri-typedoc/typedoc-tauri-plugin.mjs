import { Converter, ReflectionKind, makeRecursiveVisitor } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import { normalizeGeneratedPage } from './normalize.mjs';

/**
 * Markdown headings inside doc comments, rewritten at the reflection level so no source file
 * is touched. Module-level comments keep theirs: `## Security` on a plugin's `@module` block
 * is a genuine section of the page. Everywhere else a heading is a label on one member, and
 * as a heading it either leaks its `####` into a table cell (properties, enum members,
 * parameters) or renders as a section label like `Parameters`.
 *
 *   `#### Platform-specific:`             -> `**Platform-specific**`
 *   `#### Note`                           -> `**Note**`
 *   `#### - **macOS / iOS**: Unsupported` -> list item, else it becomes a real `<h4>` anchored
 *                                            at `#--macos--android--ios-unsupported` (no
 *                                            current source has one; kept as a guard)
 */
const PLATFORM_HEADING_RE = /^#{1,6}[ \t]+(Platform-specific):?[ \t]*$/gm;
const ANY_HEADING_RE = /^#{1,6}[ \t]+(.+?):?[ \t]*$/gm;
const LIST_ITEM_HEADING_RE = /^#{1,6}[ \t]+(-[ \t]+\S.*)$/gm;
const MODULE_LEVEL = ReflectionKind.Project | ReflectionKind.Module | ReflectionKind.Namespace;

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

/** @param {boolean} keepHeadings module-level comment: only the Platform-specific variants go */
export function normalizeCommentText(text, keepHeadings) {
  if (!text.includes('#')) return text;
  return text
    .replace(LIST_ITEM_HEADING_RE, '$1')
    .replace(keepHeadings ? PLATFORM_HEADING_RE : ANY_HEADING_RE, '**$1**');
}

function normalizeCommentDisplayParts(parts, keepHeadings) {
  for (const part of parts) {
    if (part.kind === 'text') part.text = normalizeCommentText(part.text, keepHeadings);
  }
}

function normalizeComment(comment, keepHeadings) {
  if (!comment) return;
  normalizeCommentDisplayParts(comment.summary, keepHeadings);
  for (const tag of comment.blockTags) normalizeCommentDisplayParts(tag.content, keepHeadings);
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

  // After typedoc-plugin-frontmatter has prepended the frontmatter (priority 0), so the page
  // is exactly what lands on disk.
  app.renderer.on(
    MarkdownPageEvent.END,
    (page) => {
      if (page.contents) page.contents = normalizeGeneratedPage(page.contents);
    },
    -1
  );

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      normalizeComment(reflection.comment, reflection.kindOf(MODULE_LEVEL));
      // Signatures belong to functions and methods, never to a module.
      for (const sig of reflection.signatures ?? []) normalizeComment(sig.comment, false);
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
