import { Converter, ReflectionKind, makeRecursiveVisitor } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import { normalizeGeneratedPage } from './normalize.mjs';
import { PLUGIN_SOURCES, hashFiles } from './pipeline-sources.mjs';

// TypeDoc loads plugins with a native `import()`, so a long-lived `astro dev` keeps the first copy
// while the stamp would record the edited files. Converting with a stale copy fails instead,
// before anything is stamped
const ownSourceHash = () => hashFiles(PLUGIN_SOURCES).digest('hex');
const LOADED_SOURCE_HASH = ownSourceHash();

// headings in doc comments, rewritten on the reflection so no source file is touched. Module
// comments keep theirs (`## Security` on a plugin's `@module` block is a real section). Anywhere
// else a heading labels one member, and as a heading it leaks `####` into table cells or reads
// like a section label such as `Parameters`
//
//   `#### Platform-specific:`             -> `**Platform-specific**`
//   `#### Note`                           -> `**Note**`
//   `#### - **macOS / iOS**: Unsupported` -> list item, else a real `<h4>` (none in current
//                                            sources, kept as a guard)
const PLATFORM_HEADING_RE = /^#{1,6}[ \t]+(Platform-specific):?[ \t]*$/gm;
const ANY_HEADING_RE = /^#{1,6}[ \t]+(.+?):?[ \t]*$/gm;
const LIST_ITEM_HEADING_RE = /^#{1,6}[ \t]+(-[ \t]+\S.*)$/gm;
const MODULE_LEVEL = ReflectionKind.Project | ReflectionKind.Module | ReflectionKind.Namespace;

// TS 5.7+ made Uint8Array generic and upstream writes `Uint8Array<ArrayBuffer>` to satisfy it,
// which is noise to a reader. A `Uint8Array<SharedArrayBuffer>` says something and stays
const PLAIN_BUFFERS = new Set(['ArrayBuffer', 'ArrayBufferLike']);

function stripUint8Generic(type) {
  if (type.name !== 'Uint8Array' || type.typeArguments?.length !== 1) return;
  const [buffer] = type.typeArguments;
  if (buffer.type === 'reference' && PLAIN_BUFFERS.has(buffer.name)) type.typeArguments = undefined;
}

// TS 5.6+ gave the lib iterator types defaulted `TReturn`/`TNext` parameters, which TypeDoc prints
// even where the source wrote `AsyncIterableIterator<string>`. Trailing `any`s are those defaults
const ITERATOR_TYPES = new Set([
  'Iterator',
  'IterableIterator',
  'IteratorObject',
  'Generator',
  'AsyncIterator',
  'AsyncIterableIterator',
  'AsyncIteratorObject',
  'AsyncGenerator',
]);

const isAny = (type) => type.type === 'intrinsic' && type.name === 'any';

function stripIteratorDefaults(type) {
  const args = type.typeArguments;
  if (!ITERATOR_TYPES.has(type.name) || !args) return;
  while (args.length > 1 && isAny(args.at(-1))) args.pop();
}

const LIB_NOISE_VISITOR = makeRecursiveVisitor({
  reference(type) {
    stripUint8Generic(type);
    stripIteratorDefaults(type);
  },
});

/** @param {boolean} keepHeadings module-level comment: only the Platform-specific variants go */
export function normalizeCommentText(text, keepHeadings) {
  if (!text.includes('#')) return text;
  const headingRe = keepHeadings ? PLATFORM_HEADING_RE : ANY_HEADING_RE;
  return text.replace(LIST_ITEM_HEADING_RE, '$1').replace(headingRe, '**$1**');
}

// a heading can span display parts (`#### Requires the \`unstable\` Cargo feature` arrives as
// text, code, text), so non-text parts become private-use placeholders while the regexes run
const placeholder = (index) => `${index}`;
const PLACEHOLDER_RE = /(\d+)/;

export function normalizeCommentDisplayParts(parts, keepHeadings) {
  if (!parts.some((part) => part.kind === 'text' && part.text.includes('#'))) return;
  const joined = parts
    .map((part, i) => (part.kind === 'text' ? part.text : placeholder(i)))
    .join('');
  const normalized = normalizeCommentText(joined, keepHeadings);
  if (normalized === joined) return;

  // split() with a capture group alternates text pieces and the captured part indexes
  const rebuilt = normalized.split(PLACEHOLDER_RE).flatMap((piece, i) => {
    if (i % 2 === 1) return [parts[Number(piece)]];
    return piece ? [{ kind: 'text', text: piece }] : [];
  });
  parts.splice(0, parts.length, ...rebuilt);
}

function normalizeComment(comment, keepHeadings) {
  if (!comment) return;
  normalizeCommentDisplayParts(comment.summary, keepHeadings);
  for (const tag of comment.blockTags) normalizeCommentDisplayParts(tag.content, keepHeadings);
}

// plain-text short summary for `description:` frontmatter, from `@summary` or else the first
// paragraph. Links keep their label and inline code its text
function summaryText(reflection) {
  const text = (reflection.comment?.getShortSummary(true) ?? [])
    .map((part) => part.text)
    .join('')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return text || undefined;
}

export function load(app) {
  // priority -1 runs after starlight-typedoc's BEGIN listener, which sets `title` to the bare
  // name. A namespace page titled `path` means nothing once shared, so it gets the import
  // specifier and the sidebar keeps the short name. The summary also feeds the meta and Open
  // Graph descriptions
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

  // after typedoc-plugin-frontmatter prepends the frontmatter (priority 0), so the page is
  // exactly what lands on disk
  app.renderer.on(
    MarkdownPageEvent.END,
    (page) => {
      if (page.contents) page.contents = normalizeGeneratedPage(page.contents);
    },
    -1
  );

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    // thrown here it propagates out of `app.convert()`, while an error from `load()` is only
    // logged and TypeDoc carries on without the plugin
    if (ownSourceHash() !== LOADED_SOURCE_HASH) {
      throw new Error(
        '[tauri-typedoc] pipeline files changed since this process loaded them; restart astro dev'
      );
    }
    for (const reflection of Object.values(context.project.reflections)) {
      // signatures and parameters are registered reflections too, so this flat pass reaches
      // their comments and types
      normalizeComment(reflection.comment, reflection.kindOf(MODULE_LEVEL));
      reflection.type?.visit(LIB_NOISE_VISITOR);
    }
  });

  // re-exports from a dependency (fs re-exporting BaseDirectory) resolve under node_modules, where
  // `sourceLinkTemplate` would build a GitHub URL that doesn't exist. Drop the link and shorten
  // the pnpm store path to `@tauri-apps/api/path.d.ts`
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
