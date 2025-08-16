import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const llmsTxtSections = [
  'start',
  'concept',
  'security',
  'develop',
  'distribute',
  'learn',
  'plugins',
];

export function groupDocsByPrefix(
  prefixes: string[],
  docs: Awaited<ReturnType<typeof getCollection<'docs'>>>
) {
  const grouped = new Map<string, typeof docs>();
  prefixes.forEach((prefix) => {
    grouped.set(
      prefix,
      docs.filter((doc) => doc.id.startsWith(prefix))
    );
  });
  // sort each group by slug
  for (const [prefix, items] of grouped) {
    items.sort((a, b) => a.id.localeCompare(b.id));
  }

  return grouped;
}

export function toLlmsTxtPath(slug: string): string {
  return `${slug}/llms.txt`;
}

export const GET: APIRoute = async ({ params, request }) => {
  const { llm_slug } = params;
  const slug = llm_slug?.replace(/\/llms\.txt$/, '');
  const docs = await getCollection('docs');
  const doc = docs.find((doc) => doc.id === slug);
  if (!doc) {
    return new Response('Not Found', { status: 404 });
  }

  const content = `# ${doc.data.title}\n\n${doc.body}\n\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

export async function getStaticPaths() {
  const docs = await getCollection('docs');
  const docsBySection = groupDocsByPrefix(llmsTxtSections, docs);
  const paths = Array.from(docsBySection.values())
    .map((docs) => docs.map((doc) => doc.id))
    .flat()
    .map((slug) => ({ params: { llm_slug: toLlmsTxtPath(slug) } }));

  return [...paths];
}
