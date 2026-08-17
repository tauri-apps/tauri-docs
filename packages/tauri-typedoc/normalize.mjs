/**
 * Post-processing for the typedoc-generated markdown pages, applied by the finalizer in
 * typedoc-plugins.ts on every build. All transforms are idempotent: pages are rewritten in
 * place and processed again on the next build.
 *
 * Every transform here is a workaround for a known upstream bug or rough edge, kept in one
 * place so each can be deleted once fixed at the source. Per transform below: `cause` is the
 * upstream file that emits the artifact, `spot` a generated page where it shows up. Paths are
 * relative to node_modules/. Before/after pairs for every case: normalize.test.mjs.
 *
 *  unescapeCodeSpans() -- backticks escaped in headings and link labels
 *    cause: typedoc-plugin-markdown/dist/libs/utils/escape-chars.js (escapes unconditionally)
 *    spot:  /reference/javascript/shell/ ("Restricting access to the `open` API" heading)
 *    upstream: reportable
 *  TABLE_ASIDE_RE -- `:::` directive leaking as literal text inside a table cell
 *    cause: starlight-typedoc/libs/theme.ts (addDeprecatedAside)
 *    spot:  /reference/javascript/api/namespacetray/#trayiconoptions (`menuOnLeftClick` row)
 *    upstream: reportable
 *  mergeGenerics() -- type expressions split into chips joined by literal `<` `>`
 *    cause: typedoc-plugin-markdown/dist/theme/context/partials/type.reference.js
 *    spot:  /reference/javascript/api/namespaceapp/#getname (`Promise<string>` return type)
 *    upstream: cosmetic, likely by design
 *  renameConstructorHeading() -- every constructor section titled "Constructor"
 *    cause: typedoc-plugin-markdown/dist/theme/context/partials/member.constructors.js
 *    spot:  /reference/javascript/api/namespacecore/#new-channel (anchor was #constructor)
 *    upstream: v4 design change, no opt-out found
 *  collapseWrappedUnion() -- short unions wrapped and oddly indented under expandParameters
 *    cause: typedoc-plugin-markdown/dist/theme/context/partials/type.union.js
 *    spot:  /reference/javascript/dialog/#ask (`string | ConfirmDialogOptions` parameter)
 *    upstream: cosmetic, the 70-char heuristic measures the pre-render string
 *
 * Page frontmatter is out of scope here: typedoc-plugin-frontmatter supplies it via
 * `frontmatterGlobals` in typedoc-plugins.ts, and starlight-typedoc merges its own keys
 * into that.
 */

// A pair of escaped backticks wrapping a token: `\`open\`` in a heading or link label.
// Content must be non-empty (`\`\`` would merge into a runaway double-backtick span) and may
// contain backslashes only when not directly before a backtick, so pairing stays unambiguous
// for content like `C:\foo` and a span that *contains* a backslash is left alone.
// Applied to headings and link labels only, so literal backtick pairs in prose survive.
const ESCAPED_CODE_SPAN_RE = /\\`((?:[^`\\]|\\[^`])+)\\`/g;

function unescapeCodeSpans(text) {
  return text.replace(ESCAPED_CODE_SPAN_RE, '`$1`');
}

const HEADING_RE = /^#{1,6} /;
// A markdown link label immediately followed by its target: `[label](`.
const LINK_LABEL_RE = /\[([^[\]]*)\](?=\()/g;
// A code-fence marker: a run of 3+ backticks or tildes at the start of a line.
const FENCE_MARKER_RE = /^\s*(`{3,}|~{3,})/;

// `:::type[Title]\ncontent\n:::` aside, rewritten to `**Title** content` when it lands in a
// table cell (propertiesFormat: 'table' flattens the whole comment into one).
const TABLE_ASIDE_RE = /:::(\w+)(?:\[([^\]]*)\])?\s*(.*?)\s*:::/g;

// [`Promise`](mdn)\<`void`\> -> [`Promise<void>`](mdn), merged only where the type arguments
// are plain code spans. Nested generics resolve over repeated passes (innermost first).
// Linked type arguments, e.g. Promise\<[`FileInfo`](#fileinfo)\>, stay fragmented on purpose:
// merging would drop the inner link.
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

// A `| `-prefixed continuation line, emitted when the union's pre-render text (links
// included, though they are stripped inside code blocks) exceeds 70 chars. Every signature
// fits on one line once the links are gone, so the continuations are joined back up. The
// `: ` line ending (note the trailing space, another generator artifact) is the fingerprint
// that keeps this away from hand-written example code.
const UNION_CONTINUATION_RE = /^\s*\| /;

function collapseWrappedUnion(lines, i) {
  if (!lines[i].endsWith(': ')) return;
  let j = i + 1;
  while (j < lines.length && UNION_CONTINUATION_RE.test(lines[j])) {
    const member = lines[j].replace(UNION_CONTINUATION_RE, '');
    // After `x): ` the next line starts a fresh union (e.g. a wrapped return type), so
    // it joins without a `|` separator.
    lines[i] += lines[i].endsWith(': ') ? member : ` | ${member}`;
    j++;
  }
  lines.splice(i + 1, j - i - 1);
}

/**
 * Retitle a `Constructor` heading as `new ClassName()`, taking the name from the signature
 * code block below it. Starlight's slugger then re-derives the #new-classname anchors the
 * previous generator produced (deduped for overloads).
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
  // Line-scoped transforms. Inside fenced code blocks only the wrapped-union collapse
  // runs (example code must otherwise stay verbatim).
  // Fence state tracks the opening marker: per CommonMark, only a fence of the
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
      } else {
        collapseWrappedUnion(lines, i);
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
