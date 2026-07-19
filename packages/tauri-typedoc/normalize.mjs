/**
 * Post-processing for the typedoc-generated markdown pages, applied by the finalizer in
 * typedoc-plugins.ts on every build. All transforms are idempotent: pages are rewritten in
 * place and processed again on the next build.
 *
 * Why this exists: typedoc-plugin-markdown escapes markdown metacharacters in contexts it
 * considers unsafe (headings, link labels, type expressions), and starlight-typedoc emits
 * `:::` aside directives even where they cannot render (inside table cells). Starlight's
 * own markdown pipeline handles all of these fine, so we undo the over-escaping and
 * flatten the impossible constructs. TODO: upstream what applies.
 */

// TS 5.7+ makes Uint8Array generic, so signatures render as `Uint8Array<ArrayBuffer>` /
// `Uint8Array<ArrayBufferLike>`. The type parameter is lib-level noise for API docs, so
// strip it from the rendered markdown. Covers raw code blocks, escaped text, and the
// typedoc-plugin-mdn-links linked form `[`Uint8Array`](...)\<[`ArrayBuffer`](...)\>`.
const UINT8_GENERIC_RE =
  /(\[`Uint8Array`\]\([^)\s]*\)|`?Uint8Array`?)\\?<(?:\[`ArrayBuffer(?:Like)?`\]\([^)\s]*\)|`?ArrayBuffer(?:Like)?`?)\\?>/g;

// A pair of escaped backticks wrapping a token: `\`open\`` in a heading or link label,
// where the JSDoc author wrote real inline code. Requires the closing pair so a code span
// that *contains* a backslash (`` `\` on Windows ``) is left alone.
const ESCAPED_CODE_SPAN_RE = /\\`([^`\\]*)\\`/g;

// starlight-typedoc appends `:::type[Title]\ncontent\n:::` asides to member comments. With
// propertiesFormat: 'table' the comment is flattened into one table cell where a block
// directive cannot render and leaks as literal text. Rewritten to `**Title** content`.
const TABLE_ASIDE_RE = /:::(\w+)(?:\[([^\]]*)\])?\s*(.*?)\s*:::/g;

// Type expressions are emitted as sequences of code spans joined by escaped angle
// brackets: [`Promise`](mdn)\<`void`\> renders as fragmented chips with literal `<` `>`
// between them. Where the type arguments are plain code spans (no inner links to
// preserve), merge the whole expression into a single code span. Nested generics resolve
// over repeated passes (innermost first). Expressions with linked type arguments, e.g.
// Promise\<[`FileInfo`](#fileinfo)\>, are intentionally left fragmented: merging would
// drop the inner link.
const TYPE_ARGS = String.raw`(?:\x60[^\x60\\]+\x60(?:\[\])?)(?:,\s*\x60[^\x60\\]+\x60(?:\[\])?)*`;
const LINKED_GENERIC_RE = new RegExp(
  String.raw`\[\x60([^\x60\\]+)\x60\]\(([^()\s]+)\)\\<(${TYPE_ARGS})\\>`,
  'g'
);
const PLAIN_GENERIC_RE = new RegExp(
  String.raw`\x60([^\x60\\]+)\x60\\<(${TYPE_ARGS})\\>`,
  'g'
);

function mergeTypeArguments(args) {
  return args.replaceAll('`', '');
}

function mergeGenerics(line) {
  for (let pass = 0; pass < 4; pass++) {
    const merged = line
      .replace(LINKED_GENERIC_RE, (_, name, url, args) => `[\`${name}<${mergeTypeArguments(args)}>\`](${url})`)
      .replace(PLAIN_GENERIC_RE, (_, name, args) => `\`${name}<${mergeTypeArguments(args)}>\``);
    if (merged === line) break;
    line = merged;
  }
  return line;
}

/**
 * typedoc-plugin-markdown v4 titles every constructor section "Constructor", which is
 * ambiguous in the page ToC and changes the anchors the previous generator produced
 * (#new-channel -> #constructor). Restore the `new ClassName()` heading using the class
 * name from the signature code block that follows; Starlight's slugger then re-derives
 * the historical #new-classname anchors (deduped for overloads).
 */
function renameConstructorHeading(lines, index) {
  const match = /^(#{2,6}) Constructor$/.exec(lines[index]);
  if (!match) return;
  for (let j = index + 1; j < Math.min(index + 6, lines.length); j++) {
    if (!lines[j].startsWith('```')) continue;
    const name = /^new ([A-Za-z0-9_$]+)/.exec((lines[j + 1] ?? '').trim());
    if (name) lines[index] = `${match[1]} new ${name[1]}()`;
    return;
  }
}

function transformProseLine(line) {
  if (line.startsWith('|')) {
    line = line.replace(
      TABLE_ASIDE_RE,
      (_, type, title, content) =>
        `**${title || type.charAt(0).toUpperCase() + type.slice(1)}** ${content}`
    );
  }
  line = line.replace(ESCAPED_CODE_SPAN_RE, '`$1`');
  return mergeGenerics(line);
}

/** Post-process a generated page. Exported for typedoc-plugins.ts and tests. */
export function normalizeGeneratedPage(content) {
  let result = content.replace(UINT8_GENERIC_RE, '$1');

  // Line-scoped transforms, skipping fenced code blocks (example code must stay verbatim).
  const lines = result.split('\n');
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    renameConstructorHeading(lines, i);
    lines[i] = transformProseLine(lines[i]);
  }
  result = lines.join('\n');

  // h4/h5 member headings (methods, enum members) must stay reachable from the on-page
  // ToC; Starlight's default cuts off at h3.
  if (result.startsWith('---\n')) {
    const frontmatterEnd = result.indexOf('\n---', 4);
    if (frontmatterEnd !== -1 && !result.slice(0, frontmatterEnd).includes('tableOfContents:')) {
      result = `---\ntableOfContents:\n  maxHeadingLevel: 5\n${result.slice(4)}`;
    }
  }
  return result;
}
