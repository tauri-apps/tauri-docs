// @ts-check
// Hides the setup lines that only exist so a code block type checks
// (see packages/doc-snippets), following the conventions of each language's tooling:
//
// - Rust (rustdoc): lines starting with `# ` (or a lone `#`) are hidden, `##` renders as `#`.
// - TypeScript/JavaScript (twoslash): lines up to and including `// ---cut---` are hidden,
//   as are `// ---cut-after---` and every line after it, and `// @errors: ...` / `// @noErrors`.
//
// Line ranges in the meta string (`{4}`, `ins={6-8}`, ...) count the lines readers see.

const rustLangs = ['rust', 'rs'];
const scriptLangs = ['ts', 'typescript', 'tsx', 'js', 'javascript', 'jsx'];

/**
 * @param {string} language
 * @param {string[]} lines
 * @returns {Set<number>} indices of the hidden lines
 */
function hiddenLines(language, lines) {
  const hidden = new Set();
  if (rustLangs.includes(language)) {
    lines.forEach((line, index) => {
      const trimmed = line.trimStart();
      if (trimmed === '#' || trimmed.startsWith('# ')) hidden.add(index);
    });
  } else if (scriptLangs.includes(language)) {
    const trimmed = lines.map((line) => line.trim());
    const cut = trimmed.indexOf('// ---cut---');
    const cutAfter = trimmed.indexOf('// ---cut-after---');
    lines.forEach((_, index) => {
      const directive = /^\/\/ @(errors:|noErrors\s*$)/.test(trimmed[index]);
      if (directive || index <= cut || (cutAfter !== -1 && index >= cutAfter)) hidden.add(index);
    });
  }
  return hidden;
}

/** @returns {import('@astrojs/starlight/expressive-code').ExpressiveCodePlugin} */
export function pluginHiddenLines() {
  return {
    name: 'hidden-lines',
    hooks: {
      // Other plugins resolve line ranges before the code can be edited, so the ranges
      // are translated from visible lines to source lines here.
      preprocessLanguage: ({ codeBlock }) => {
        const lines = codeBlock.getLines().map((line) => line.text);
        const hidden = hiddenLines(codeBlock.language, lines);
        if (!hidden.size) return;

        const visible = lines.map((_, index) => index).filter((index) => !hidden.has(index));
        const toSource = (/** @type {string} */ number) =>
          String((visible[Number(number) - 1] ?? Number(number) - 1 + hidden.size) + 1);
        codeBlock.meta = codeBlock.meta.replace(/\{[^}]*\}/g, (range) =>
          // skip quoted labels like {"1":5-7}
          range.replace(/"[^"]*"|(\d+)/g, (match, number) => (number ? toSource(number) : match))
        );
      },
      preprocessCode: ({ codeBlock }) => {
        const lines = codeBlock.getLines();
        const hidden = hiddenLines(
          codeBlock.language,
          lines.map((line) => line.text)
        );
        if (rustLangs.includes(codeBlock.language)) {
          for (const line of lines) {
            const start = line.text.indexOf('##');
            if (start !== -1 && line.text.slice(0, start).trim() === '')
              line.editText(start, start + 2, '#');
          }
        }
        if (hidden.size) codeBlock.deleteLines([...hidden]);
      },
    },
  };
}
