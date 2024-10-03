// This RSS includes all pages in root locale, excluding releases and references
import config from 'virtual:starlight/user-config';
import { getNewestCommitDate } from 'node_modules/@astrojs/starlight/utils/git';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { join } from 'node:path';
import rss from '@astrojs/rss';

// Ternary is just so typescript won't complain
const exclude = config.isMultilingual
  ? Object.keys(config.locales).concat('reference', 'rss', 'release')
  : [];

// https://docs.astro.build/en/reference/api-reference/#endpoint-context
export async function GET(context: APIContext) {
  const pages = await getCollection('docs', ({ id }) => {
    return !exclude.some((path) => id.startsWith(path));
  });
  pages.sort((a, b) => {
    const dateA = a.data.date;
    const dateB = b.data.date;
    if (dateA && dateB) {
      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      return 0;
    } else return 0;
  });

  return rss({
    title: 'Tauri RSS',
    description: 'The cross-platform app building toolkit',
    site: context.site as URL,
    items: pages.map((post) => ({
      title: post.data.title,
      pubDate: post.id.startsWith('blog') ? post.data.date : getTimestamp(post.id),
      description: post.id.startsWith('blog') ? post.data.excerpt : post.data.description,
      link: `/${post.slug}/`,
    })),
  });
}

function getTimestamp(id: string): any {
  try {
    return getNewestCommitDate(join('src', 'content', 'docs', id));
  } catch (e) {
    return new Date();
  }
}
