/**
 * workarounds for upstream bugs in the generated markdown, kept together so each can go once
 * it's fixed at the source. All are idempotent, with cases in normalize.test.mjs and paths
 * relative to node_modules/
 *
 *  unescapeCodeSpans() -- code spans escaped in headings and link labels (reportable)
 *    typedoc-plugin-markdown/dist/libs/utils/escape-chars.js (escapes unconditionally)
 *  TABLE_ASIDE_RE -- `:::` directive leaking as literal text in a table cell (reportable)
 *    starlight-typedoc/libs/theme.ts (addDeprecatedAside ignores opts.isTableColumn)
 *  mergeGenerics() -- type expressions split into chips joined by literal `<` `>`
 *    typedoc-plugin-markdown/dist/theme/context/partials/type.reference.js
 *  renameConstructorHeading() -- every constructor section titled "Constructor"
 *    typedoc-plugin-markdown/dist/theme/context/partials/member.constructors.js
 *  collapseWrappedUnion() -- unions over 70 chars wrapped under useCodeBlocks
 *    typedoc-plugin-markdown/dist/theme/context/partials/type.union.js
 */

// non-empty (`\`\`` would merge into a runaway span), and a backslash only when it's not before
// a backtick, so `C:\foo` pairs correctly and a span containing one is skipped
const ESCAPED_CODE_SPAN_RE = /\\`((?:[^`\\]|\\[^`])+)\\`/g;
// escapeChars' set minus the backtick, since a backslash inside a code span is literal and
// `foo\_bar` would render it
const ESCAPED_IN_SPAN_RE = /\\([<>{}_|[\]*])/g;

function unescapeCodeSpans(text) {
  return text.replace(
    ESCAPED_CODE_SPAN_RE,
    (_, content) => `\`${content.replace(ESCAPED_IN_SPAN_RE, '$1')}\``
  );
}

const HEADING_RE = /^#{1,6} /;
// a label only when its target follows, so a bare `[x]` in prose is left alone. Escaped
// brackets belong to the label (`Foo\[\]` from a `Foo[]` code span)
const LINK_LABEL_RE = /\[((?:\\.|[^[\]\\])*)\](?=\()/g;
const FENCE_MARKER_RE = /^\s*(`{3,}|~{3,})/;

const TABLE_ASIDE_RE = /:::([\w-]+)(?:\[([^\]]*)\])?\s*(.*?)\s*:::/g;

// [`Promise`](mdn)\<`void`\> -> [`Promise<void>`](mdn). Linked type arguments such as
// Promise\<[`FileInfo`](#fileinfo)\> stay fragmented, because merging would drop the inner link.
// `\x60` is a backtick, which a String.raw template can't hold literally
const CODE_CHIP = String.raw`\x60[^\x60\\]+\x60`;
const NAMED_CODE_CHIP = String.raw`\x60([^\x60\\]+)\x60`;
const TYPE_ARG = String.raw`${CODE_CHIP}(?:\[\])?`;
const TYPE_ARGS = String.raw`${TYPE_ARG}(?:,\s*${TYPE_ARG})*`;
const LINKED_GENERIC_RE = new RegExp(
  String.raw`\[${NAMED_CODE_CHIP}\]\(([^()\s]+)\)\\<(${TYPE_ARGS})\\>`,
  'g'
);
const PLAIN_GENERIC_RE = new RegExp(String.raw`${NAMED_CODE_CHIP}\\<(${TYPE_ARGS})\\>`, 'g');

function mergeGenericsOnce(line) {
  const typeArgs = (args) => args.replaceAll('`', '');
  return line
    .replace(LINKED_GENERIC_RE, (_, name, url, args) => `[\`${name}<${typeArgs(args)}>\`](${url})`)
    .replace(PLAIN_GENERIC_RE, (_, name, args) => `\`${name}<${typeArgs(args)}>\``);
}

function mergeGenerics(line) {
  if (!line.includes('\\<')) return line;
  // repeated until nothing changes, so nested generics resolve in one call. It terminates
  // because every replacement removes a `\<` from the line
  let current = line;
  let previous;
  do {
    previous = current;
    current = mergeGenericsOnce(current);
  } while (current !== previous);
  return current;
}

// useCodeBlocks wraps a union whose pre-render text passes 70 chars, counting links that code
// blocks then strip, so every signature fits on one line once they're gone. The trailing space
// in `: ` is what keeps this off hand-written example code
const UNION_CONTINUATION_RE = /^\s*\| /;

function collapseWrappedUnion(lines, i) {
  if (!lines[i].endsWith(': ')) return;
  let end = i + 1;
  while (end < lines.length && UNION_CONTINUATION_RE.test(lines[end])) end++;
  for (const continuation of lines.slice(i + 1, end)) {
    // after `x): ` the next line starts a fresh union, so it joins without a `|`
    const separator = lines[i].endsWith(': ') ? '' : ' | ';
    lines[i] += separator + continuation.replace(UNION_CONTINUATION_RE, '');
  }
  lines.splice(i + 1, end - i - 1);
}

// retitled to `new ClassName()` so Starlight's slugger derives the #new-classname anchors that
// existing links expect, taking the name from the signature block under the heading
function renameConstructorHeading(lines, i) {
  const heading = /^(#{2,6}) Constructor$/.exec(lines[i]);
  if (!heading) return;
  // scan up to the next heading, so an extra emitted line can't silently disable the rename
  for (let j = i + 1; j < lines.length && !HEADING_RE.test(lines[j]); j++) {
    if (!FENCE_MARKER_RE.test(lines[j])) continue;
    const name = /^new ([A-Za-z0-9_$]+)/.exec((lines[j + 1] ?? '').trim());
    if (name) lines[i] = `${heading[1]} new ${name[1]}()`;
    return;
  }
}

function flattenTableAside(line) {
  if (!line.startsWith('|') || !line.includes(':::')) return line;
  return line.replace(TABLE_ASIDE_RE, (_, type, title, content) => {
    const label = title || type.charAt(0).toUpperCase() + type.slice(1);
    return `**${label}** ${content}`;
  });
}

function unescapeLabelsAndHeadings(line) {
  if (!line.includes('\\`')) return line;
  // labels first, so a stray escaped backtick in the heading can't pair across a link
  const labelled = line.replace(LINK_LABEL_RE, (_, label) => `[${unescapeCodeSpans(label)}]`);
  return HEADING_RE.test(labelled) ? unescapeCodeSpans(labelled) : labelled;
}

// applied in order to every line outside a code fence
const PROSE_TRANSFORMS = [flattenTableAside, unescapeLabelsAndHeadings, mergeGenerics];

// per CommonMark only a fence of the same character, at least as long and alone on its line,
// closes the block, so a ~~~ or nested fence inside a ``` block can't desync the state
function closesFence(line, fence) {
  const marker = FENCE_MARKER_RE.exec(line)?.[1];
  if (!marker) return false;
  return marker[0] === fence[0] && marker.length >= fence.length && line.trim() === marker;
}

export function normalizeGeneratedPage(content) {
  // inside a fence only the wrapped-union collapse runs, and example code stays verbatim
  const lines = content.split('\n');
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    if (fence) {
      if (closesFence(lines[i], fence)) {
        fence = null;
      } else {
        collapseWrappedUnion(lines, i);
      }
      continue;
    }
    const opening = FENCE_MARKER_RE.exec(lines[i]);
    if (opening) {
      fence = opening[1];
      continue;
    }
    renameConstructorHeading(lines, i);
    lines[i] = PROSE_TRANSFORMS.reduce((text, transform) => transform(text), lines[i]);
  }
  return lines.join('\n');
}
