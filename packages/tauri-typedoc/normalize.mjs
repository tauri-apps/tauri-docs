/**
 * Workarounds for upstream bugs in the generated markdown, kept together so each can be
 * deleted once fixed at the source. All transforms are idempotent; cases in normalize.test.mjs.
 * Paths are relative to node_modules/.
 *
 *  unescapeCodeSpans() -- code spans escaped in headings and link labels. Reportable.
 *    typedoc-plugin-markdown/dist/libs/utils/escape-chars.js (escapes unconditionally)
 *  TABLE_ASIDE_RE -- `:::` directive leaking as literal text in a table cell. Reportable.
 *    starlight-typedoc/libs/theme.ts (addDeprecatedAside ignores opts.isTableColumn)
 *  mergeGenerics() -- type expressions split into chips joined by literal `<` `>`
 *    typedoc-plugin-markdown/dist/theme/context/partials/type.reference.js
 *  renameConstructorHeading() -- every constructor section titled "Constructor"
 *    typedoc-plugin-markdown/dist/theme/context/partials/member.constructors.js
 *  collapseWrappedUnion() -- unions over 70 chars wrapped under useCodeBlocks
 *    typedoc-plugin-markdown/dist/theme/context/partials/type.union.js
 */

// Content is non-empty (`\`\`` would merge into a runaway span) and takes a backslash only
// when not before a backtick, so `C:\foo` pairs correctly and a span containing one is skipped.
const ESCAPED_CODE_SPAN_RE = /\\`((?:[^`\\]|\\[^`])+)\\`/g;
// escapeChars' set minus the backtick: inside a code span a backslash is literal, so
// `foo\_bar` would render its backslash.
const ESCAPED_IN_SPAN_RE = /\\([<>{}_|[\]*])/g;

function unescapeCodeSpans(text) {
  return text.replace(
    ESCAPED_CODE_SPAN_RE,
    (_, content) => `\`${content.replace(ESCAPED_IN_SPAN_RE, '$1')}\``
  );
}

const HEADING_RE = /^#{1,6} /;
// A link label only when followed by its target, so bare `[x]` in prose is left alone.
const LINK_LABEL_RE = /\[([^[\]]*)\](?=\()/g;
const FENCE_MARKER_RE = /^\s*(`{3,}|~{3,})/;

const TABLE_ASIDE_RE = /:::([\w-]+)(?:\[([^\]]*)\])?\s*(.*?)\s*:::/g;

// [`Promise`](mdn)\<`void`\> -> [`Promise<void>`](mdn). Linked type arguments, e.g.
// Promise\<[`FileInfo`](#fileinfo)\>, stay fragmented: merging would drop the inner link.
const TYPE_ARGS = String.raw`(?:\x60[^\x60\\]+\x60(?:\[\])?)(?:,\s*\x60[^\x60\\]+\x60(?:\[\])?)*`;
const LINKED_GENERIC_RE = new RegExp(
  String.raw`\[\x60([^\x60\\]+)\x60\]\(([^()\s]+)\)\\<(${TYPE_ARGS})\\>`,
  'g'
);
const PLAIN_GENERIC_RE = new RegExp(String.raw`\x60([^\x60\\]+)\x60\\<(${TYPE_ARGS})\\>`, 'g');

function mergeGenerics(line) {
  if (!line.includes('\\<')) return line;
  // Fixpoint, so deep nesting resolves in one call. Terminates because every replacement
  // strictly reduces the number of `\<` on the line.
  for (;;) {
    const merged = line
      .replace(
        LINKED_GENERIC_RE,
        (_, name, url, args) => `[\`${name}<${args.replaceAll('`', '')}>\`](${url})`
      )
      .replace(PLAIN_GENERIC_RE, (_, name, args) => `\`${name}<${args.replaceAll('`', '')}>\``);
    if (merged === line) return line;
    line = merged;
  }
}

// Emitted under useCodeBlocks when the union's pre-render text exceeds 70 chars, counting links
// that are then stripped inside code blocks, so every signature fits on one line once they are
// gone. The trailing space in the `: ` line ending is what keeps this off hand-written example
// code.
const UNION_CONTINUATION_RE = /^\s*\| /;

function collapseWrappedUnion(lines, i) {
  if (!lines[i].endsWith(': ')) return;
  let j = i + 1;
  while (j < lines.length && UNION_CONTINUATION_RE.test(lines[j])) {
    const member = lines[j].replace(UNION_CONTINUATION_RE, '');
    // After `x): ` the next line starts a fresh union, so it joins without a `|`.
    lines[i] += lines[i].endsWith(': ') ? member : ` | ${member}`;
    j++;
  }
  lines.splice(i + 1, j - i - 1);
}

// Retitled to `new ClassName()` so Starlight's slugger derives the #new-classname anchors
// existing links expect. The name comes from the signature code block below the heading.
function renameConstructorHeading(lines, i) {
  const match = /^(#{2,6}) Constructor$/.exec(lines[i]);
  if (!match) return;
  // Scan to the next heading, so an extra emitted line can't silently disable the rename.
  for (let j = i + 1; j < lines.length; j++) {
    if (HEADING_RE.test(lines[j])) return;
    if (!FENCE_MARKER_RE.test(lines[j])) continue;
    const name = /^new ([A-Za-z0-9_$]+)/.exec((lines[j + 1] ?? '').trim());
    if (name) lines[i] = `${match[1]} new ${name[1]}()`;
    return;
  }
}

function transformProseLine(line) {
  if (line.startsWith('|') && line.includes(':::')) {
    line = line.replace(
      TABLE_ASIDE_RE,
      (_, type, title, content) =>
        `**${title || type.charAt(0).toUpperCase() + type.slice(1)}** ${content}`
    );
  }
  if (line.includes('\\`')) {
    // Labels first, so a stray escaped backtick in the heading text can't pair across a link.
    line = line.replace(LINK_LABEL_RE, (_, label) => `[${unescapeCodeSpans(label)}]`);
    if (HEADING_RE.test(line)) line = unescapeCodeSpans(line);
  }
  return mergeGenerics(line);
}

export function normalizeGeneratedPage(content) {
  // Inside a fence only the wrapped-union collapse runs; example code stays verbatim. Per
  // CommonMark only a fence of the same character, at least as long, alone on its line closes
  // the block, so a ~~~ or nested fence *inside* a ``` block cannot desync the state.
  const lines = content.split('\n');
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const marker = FENCE_MARKER_RE.exec(lines[i]);
    if (fence) {
      if (
        marker &&
        marker[1][0] === fence[0] &&
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
      fence = marker[1];
      continue;
    }
    renameConstructorHeading(lines, i);
    lines[i] = transformProseLine(lines[i]);
  }
  return lines.join('\n');
}
