import { readFile } from 'node:fs/promises';
import { definitions } from 'mdast-util-definitions';
import { toString } from 'mdast-util-to-string';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import type { GetDefinition } from 'mdast-util-definitions';
import type { PhrasingContent, RootContent } from 'mdast';

export interface AwesomeEntry {
  href: string;
  name: string;
  description: string | undefined;
  /**
   * `url`s of the badge images between the entry link and the description.
   * AwesomeTauri.astro's `-no-official` / `-no-video` / `-only-video` filters
   * read these, so entries are cached unfiltered — the filter depends on
   * `section`, which differs per render, while the parse does not.
   */
  img1Src?: string;
  img2Src?: string;
}

let cache: Promise<Map<string, AwesomeEntry[]>> | undefined;

/**
 * The memo has to live here rather than in the component because an .astro
 * fence is local and reset on every step.
 */
export function loadAwesomeSections(readmePath: string) {
  cache ??= (async () => {
    const processor = unified().use(remarkParse).use(remarkGfm).use(remarkSmartypants);
    const root = processor.parse(await readFile(readmePath, 'utf-8'));
    processor.runSync(root);

    const definition = definitions(root);

    const sections = new Map<string, AwesomeEntry[]>();
    root.children.forEach((header, index) => {
      if (header.type !== 'heading' || (header.depth !== 2 && header.depth !== 3)) return;
      const list = root.children[index + 1];
      if (list?.type !== 'list') return;

      const entries: AwesomeEntry[] = [];
      for (const item of list.children) {
        const paragraph = item.children[0];
        if (paragraph?.type !== 'paragraph') continue;

        // `- [name](href) ![badge] ![badge] - description`: the entry link,
        // badges anywhere in the item, then a ` - ` separator and the
        // description.
        const linkIndex = paragraph.children.findIndex(
          (node) => node.type === 'link' || node.type === 'linkReference'
        );
        const link = paragraph.children[linkIndex];
        if (link?.type !== 'link' && link?.type !== 'linkReference') continue;
        const href = link.type === 'link' ? link.url : definition(link.identifier)?.url;
        if (href === undefined) continue;

        const [img1Src, img2Src] = paragraph.children
          .filter((node) => node.type === 'image' || node.type === 'imageReference')
          .map((node) => srcOf(node, definition));

        entries.push({
          href,
          name: textOf(link.children),
          description: textOf(paragraph.children.slice(linkIndex + 1))
            .match(/^\s*- (.+)/s)?.[1]
            .trim(),
          img1Src,
          img2Src,
        });
      }

      const key = textOf(header.children);
      const existing = sections.get(key);
      if (existing) existing.push(...entries);
      else sections.set(key, entries);
    });
    return sections;
  })();
  return cache;
}

function srcOf(node: PhrasingContent, definition: GetDefinition) {
  if (node.type === 'image') return node.url;
  if (node.type === 'imageReference') return definition(node.identifier)?.url;
  return undefined;
}

function textOf(nodes: RootContent[]): string {
  return toString(nodes, { includeImageAlt: false, includeHtml: false });
}
