import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { aboutBlurb, groupDocsByPrefix } from './llms.txt';

function getHeaderLevel(slug: string): number {
  return slug.split('/').length + 1;
}

export const GET: APIRoute = async ({ params, request }) => {
  const docs = await getCollection('docs');
  const docsBySection = groupDocsByPrefix(docs);
  let content = `# Tauri Full Documentation\n\n> ${aboutBlurb}\n`;

  for (const [prefix, docs] of docsBySection) {
    content += `\n# ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}\n`;
    content += docs
      .map((doc) => {
        return `# ${doc.data.title}\n\n${doc.body}\n\n`;
      })
      .join('');
  }

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
