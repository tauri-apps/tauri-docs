import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { llmsTxtSections, groupDocsByPrefix } from './[...llm_slug]';

const aboutBlurb = `Tauri is a framework for building tiny, fast binaries for all major desktop and mobile platforms. Developers can integrate any frontend framework that compiles to HTML, JavaScript, and CSS for building their user experience while leveraging languages such as Rust, Swift, and Kotlin for backend logic when needed.`;

function getHeaderLevel(slug: string): number {
  return slug.split('/').length + 1;
}

export const GET: APIRoute = async ({ params, request }) => {
  const docs = await getCollection('docs');
  const docsBySection = groupDocsByPrefix(llmsTxtSections, docs);
  let content = `# Tauri app Full Documentation\n\n${aboutBlurb}\n\n**Table of Contents**\n`;

  let n = 1;
  for (const [prefix, items] of docsBySection) {
    if (items.length > 0) {
      content += `\n${n++}. ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}\n`;
      items.forEach((doc) => {
        const level = getHeaderLevel(doc.id);
        const indent = ' '.repeat(level - 2);
        content += `${indent}- [${doc.data.title}](#${doc.id})\n`;
      });
    }
  }
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
