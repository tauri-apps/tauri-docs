import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';

export interface AwesomeEntry {
  href: string;
  name: string;
  description: string | undefined;
  /**
   * `src` of the entry's 2nd and 3rd children. AwesomeTauri.astro's
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
    const md = await createSatteriMarkdownProcessor();
    const content = await md.render(await readFile(readmePath, 'utf-8'));
    const dom = new JSDOM('<!DOCTYPE html>' + content.code);

    const sections = new Map<string, AwesomeEntry[]>();
    for (const header of dom.window.document.querySelectorAll('h3')) {
      const list = header.nextSibling?.nextSibling as HTMLElement | null;
      if (!list?.children) continue;

      const entries: AwesomeEntry[] = [];
      for (const entry of list.children) {
        const link = entry.children[0] as HTMLAnchorElement | undefined;
        if (!link) continue;
        entries.push({
          href: link.href,
          name: link.textContent ?? '',
          description: entry.textContent?.split(' - ')[1],
          img1Src: (entry.children[1] as HTMLImageElement | undefined)?.src,
          img2Src: (entry.children[2] as HTMLImageElement | undefined)?.src,
        });
      }

      const key = header.textContent ?? '';
      const existing = sections.get(key);
      if (existing) existing.push(...entries);
      else sections.set(key, entries);
    }
    return sections;
  })();
  return cache;
}
