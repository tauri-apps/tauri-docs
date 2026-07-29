/**
 * Post-processing for the typedoc-generated markdown pages, applied by the finalizer in
 * typedoc-plugins.ts on every build. All transforms are idempotent: pages are rewritten in
 * place and processed again on the next build.
 *
 * Every transform here is a workaround for a known upstream bug or rough edge, kept in one
 * place so each can be deleted once fixed at the source. Current inventory:
 *
 *  - typedoc-plugin-markdown `escapeChars` (dist/libs/utils/escape-chars.js) escapes
 *    backticks unconditionally, so inline code in headings and mixed link labels renders
 *    as literal backticks -> ESCAPED_CODE_SPAN_RE undoes it. (Reported-upstream candidate.)
 *  - starlight-typedoc appends `:::` aside directives to member comments (libs/theme.ts
 *    #addDeprecatedAside); with table formats the comment lands in a table cell where a
 *    block directive cannot parse and leaks as literal text -> TABLE_ASIDE_RE flattens it
 *    to bold. (Reported-upstream candidate.)
 *  - typedoc-plugin-markdown emits type expressions as code-span fragments joined by
 *    escaped angle brackets, which renders as broken-looking chips with literal `<` `>`
 *    -> mergeGenerics() collapses the safe cases. (Cosmetic; likely by design upstream.)
 *  - typedoc-plugin-markdown v4 titles every constructor section "Constructor", which is
 *    ambiguous in the ToC and broke the previous generator's #new-classname anchors
 *    -> renameConstructorHeading() restores `new ClassName()`. (v4 design change, no
 *    opt-out found.)
 *
 * Page frontmatter is out of scope here: typedoc-plugin-frontmatter supplies it via
 * `frontmatterGlobals` in typedoc-plugins.ts, and starlight-typedoc merges its own keys
 * into that.
 */

// A pair of escaped backticks wrapping a token: `\`open\`` in a heading or link label,
// where the JSDoc author wrote real inline code. Content must be non-empty (`\`\`` would
// merge into a runaway double-backtick span) and may contain backslashes only when not
// directly before a backtick, so both pairing stays unambiguous for content like `C:\foo`
// and a code span that *contains* a backslash (`` `\` on Windows ``) is left alone.
// Applied only to headings and link labels — the two contexts typedoc-plugin-markdown
// over-escapes — so intentionally literal backtick pairs in ordinary prose survive.
const ESCAPED_CODE_SPAN_RE = /\\`((?:[^`\\]|\\[^`])+)\\`/g;

function unescapeCodeSpans(text) {
  return text.replace(ESCAPED_CODE_SPAN_RE, '`$1`');
}

const HEADING_RE = /^#{1,6} /;
// A markdown link label immediately followed by its target: `[label](`.
const LINK_LABEL_RE = /\[([^[\]]*)\](?=\()/g;
// A code-fence marker: a run of 3+ backticks or tildes at the start of a line.
const FENCE_MARKER_RE = /^\s*(`{3,}|~{3,})/;

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
const PLAIN_GENERIC_RE = new RegExp(String.raw`\x60([^\x60\\]+)\x60\\<(${TYPE_ARGS})\\>`, 'g');

function mergeTypeArguments(args) {
  return args.replaceAll('`', '');
}

function mergeGenerics(line) {
  // Both regexes require a literal `\<`; skip the scans for the common line without one.
  if (!line.includes('\\<')) return line;
  // Iterate to a fixpoint so arbitrarily deep nesting resolves in a single call (the
  // idempotency contract above). Terminates: every successful replacement strictly
  // reduces the number of `\<` occurrences on the line.
  for (;;) {
    const merged = line
      .replace(
        LINKED_GENERIC_RE,
        (_, name, url, args) => `[\`${name}<${mergeTypeArguments(args)}>\`](${url})`
      )
      .replace(PLAIN_GENERIC_RE, (_, name, args) => `\`${name}<${mergeTypeArguments(args)}>\``);
    if (merged === line) return line;
    line = merged;
  }
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
  // The signature fence usually directly follows the heading, but scan the whole section
  // (up to the next heading) so extra emitted lines — an anchor, an aside — can't silently
  // disable the rename.
  for (let j = index + 1; j < lines.length; j++) {
    if (HEADING_RE.test(lines[j])) return;
    if (!FENCE_MARKER_RE.test(lines[j])) continue;
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
  if (HEADING_RE.test(line)) {
    line = unescapeCodeSpans(line);
  } else {
    line = line.replace(LINK_LABEL_RE, (_, label) => `[${unescapeCodeSpans(label)}]`);
  }
  return mergeGenerics(line);
}

/** Post-process a generated page. Exported for typedoc-plugins.ts and tests. */
export function normalizeGeneratedPage(content) {
  // Line-scoped transforms, skipping fenced code blocks (example code must stay
  // verbatim). Fence state tracks the opening marker: per CommonMark, only a fence of the
  // same character, at least as long, with nothing else on the line, closes the block —
  // so a ~~~ or nested-fence line *inside* a ``` block cannot desync the state.
  const lines = content.split('\n');
  let fence = null; // { char, length } of the open fence, or null
  for (let i = 0; i < lines.length; i++) {
    const marker = FENCE_MARKER_RE.exec(lines[i]);
    if (fence) {
      if (
        marker &&
        marker[1][0] === fence.char &&
        marker[1].length >= fence.length &&
        lines[i].trim() === marker[1]
      ) {
        fence = null;
      }
      continue;
    }
    if (marker) {
      fence = { char: marker[1][0], length: marker[1].length };
      continue;
    }
    renameConstructorHeading(lines, i);
    lines[i] = transformProseLine(lines[i]);
  }
  return lines.join('\n');
}
