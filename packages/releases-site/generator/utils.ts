import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { generatorDir } from './config.ts';

/**
 * Escape raw changelog content so HTML tags and template-ish sequences render
 * as text when the generated .md pages are compiled.
 */
export function escapeChangelogMarkdown(str: string): string {
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
