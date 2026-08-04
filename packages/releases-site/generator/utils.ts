import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { generatorDir } from './config.ts';

/**
 * Escape raw changelog content so HTML tags and template-ish sequences render
 * as text when the generated .md pages are compiled. Code spans and fenced
 * blocks are left untouched: markdown renders their content literally, so
 * entities there would show verbatim on the page
 */
export function escapeChangelogMarkdown(str: string): string {
  return mapProseLines(str, escapeOutsideCodeSpans);
}

/** Split into lines, flagging those a fenced code block owns, delimiters included. */
export function proseLines(str: string): { line: string; inFence: boolean }[] {
  const out: { line: string; inFence: boolean }[] = [];
  let fence: string | undefined;
  for (const line of str.split('\n')) {
    if (fence) {
      out.push({ line, inFence: true });
      const close = line.match(/^ {0,3}(`{3,}|~{3,})[ \t]*$/);
      if (close && close[1][0] === fence[0] && close[1].length >= fence.length) {
        fence = undefined;
      }
      continue;
    }
    const open = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (open) {
      fence = open[1];
      out.push({ line, inFence: true });
      continue;
    }
    out.push({ line, inFence: false });
  }
  return out;
}

/** Apply a transform to each line outside fenced code blocks */
export function mapProseLines(str: string, transform: (line: string) => string): string {
  return proseLines(str)
    .map(({ line, inFence }) => (inFence ? line : transform(line)))
    .join('\n');
}

// Inline code span: a backtick run closed by an equal-length run
const codeSpan = /(?<!`)(`+)(?!`)(.+?)(?<!`)\1(?!`)/g;

function escapeOutsideCodeSpans(line: string): string {
  let out = '';
  let last = 0;
  for (const match of line.matchAll(codeSpan)) {
    out += escapeProse(line.slice(last, match.index));
    out += match[0];
    last = match.index + match[0].length;
  }
  return out + escapeProse(line.slice(last));
}

function escapeProse(str: string): string {
  return str
    .replace(/[&<>"']/g, (entity) => {
      switch (entity) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&#39;';
        default:
          return entity;
      }
    })
    .replace(/\$\{/g, '$\\{')
    .replace(/\{\{/g, '&#123;&#123;')
    .replace(/\}\}/g, '&#125;&#125;');
}

export function writeOutput(output: string | unknown, fileName: string): void {
  mkdirSync(generatorDir, { recursive: true });
  const filePath = join(generatorDir, fileName);

  writeFileSync(filePath, JSON.stringify(output, null, 2), 'utf-8');
}
