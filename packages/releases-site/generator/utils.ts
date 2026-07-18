import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import { generatorDir } from './config.js';

const window = new JSDOM('').window as unknown as Window;
const DOMPurify = createDOMPurify(window as unknown as Parameters<typeof createDOMPurify>[0]);

export function parseMarkdown(content: string, type: 'markdown' | 'html' = 'markdown'): string {
  const hed = entitify(content);
  if (type === 'markdown') {
    return hed;
  }
  if (type === 'html') {
    return DOMPurify.sanitize(marked(hed, { async: false }));
  }
  return '';
}

function entitify(str: string): string {
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
