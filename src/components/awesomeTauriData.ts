import { readFile } from 'node:fs/promises';
import { fromMarkdown } from 'mdast-util-from-markdown';
import type { Definition, PhrasingContent, RootContent } from 'mdast';

export interface AwesomeEntry {
  href: string;
  name: string;
  description: string | undefined;
  /**
   * `url` of the entry's 2nd and 3rd children. AwesomeTauri.astro's
   * `-no-official` / `-no-video` / `-only-video` filters read these, so entries
   * are cached unfiltered — the filter depends on `section`, which differs per
   * render, while the parse does not.
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
    const root = fromMarkdown(await readFile(readmePath, 'utf-8'));

    const definitions = new Map<string, string>();
    for (const node of root.children) {
      if (node.type === 'definition') definitions.set(node.identifier, node.url);
    }

    const sections = new Map<string, AwesomeEntry[]>();
    root.children.forEach((header, index) => {
      if (header.type !== 'heading' || header.depth !== 3) return;
      const list = root.children[index + 1];
      if (list?.type !== 'list') return;

      const entries: AwesomeEntry[] = [];
      for (const item of list.children) {
        const paragraph = item.children[0];
        if (paragraph?.type !== 'paragraph') continue;

        // `- [name](href) ![badge] ![badge] - description`: the link and the
        // badges are the paragraph's first three non-text children.
        const [link, badge1, badge2] = paragraph.children.filter((node) => node.type !== 'text');
        if (link?.type !== 'link') continue;
        entries.push({
          href: link.url,
          name: textOf(link.children),
          description: textOf(item.children).split(' - ')[1],
          img1Src: srcOf(badge1, definitions),
          img2Src: srcOf(badge2, definitions),
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

function srcOf(node: PhrasingContent | undefined, definitions: Map<string, Definition['url']>) {
  if (node?.type === 'image') return node.url;
  if (node?.type === 'imageReference') return definitions.get(node.identifier);
  return undefined;
}

/** The rendered text of `nodes`, excluding image alt text. */
function textOf(nodes: RootContent[]): string {
  let text = '';
  for (const node of nodes) {
    if (node.type === 'image' || node.type === 'imageReference' || node.type === 'html') continue;
    if ('children' in node) text += textOf(node.children);
    else if ('value' in node) text += node.value;
  }
  return text;
}
