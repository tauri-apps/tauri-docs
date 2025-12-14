import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export function groupDocsByPrefix(docs: Awaited<ReturnType<typeof getCollection<'docs'>>>) {
  // TODO: This is missing the reference pages.
  const prefixes = ['start', 'concept', 'security', 'develop', 'distribute', 'learn', 'plugins'];

  const grouped = new Map<string, typeof docs>();
  prefixes.forEach((prefix) => {
    grouped.set(
      prefix,
      docs.filter((doc) => doc.id.startsWith(prefix))
    );
  });

  return grouped;
}

export const aboutBlurb = `Tauri is a framework for building tiny, fast binaries for all major desktop and mobile platforms. Developers can integrate any frontend framework that compiles to HTML, JavaScript, and CSS for building their user experience while leveraging languages such as Rust, Swift, and Kotlin for backend logic when needed.`;

const organizationBlur = `This index links to documentation that covers everything from getting started to advanced concepts, and distribution of Tauri applications.

The index is organized into key sections:
- **start**: Information for getting up and running with Tauri, including prerequisites and installation instructions
- **core concepts**: Topics that you should get more intimately familiar with if you want to get the most out of the framework.
- **security**: High-level concepts and security features at the core of Tauri's design and ecosystem that make you, your applications and your users more secure by default
- **develop**: Topics pertaining to the development of Tauri applications, including how to use the Tauri API, communicating between the frontend and backend, configuration, state management, debugging and more.
- **distribute**: Information on the tooling you need to distribute your application either to the platform app stores or as platform-specific installers.
- **learn**: Tutorials intended to provided end-to-end learning experiences to guide you through specific Tauri topics and help you apply knowledge from the guides and reference documentation.
- **plugins**: Information on the extensibility of Tauri from Built-in Tauri features and functionality to provided plugins and recipes built by the Tauri community
- **about**: Various information about Tauri from governance, philosophy, and trademark guidelines.

Each section contains links to detailed markdown files that provide comprehensive information about Tauri's features and how to use them effectively.`;

export const GET: APIRoute = async ({ params, request }) => {
  const docs = await getCollection('docs');
  const grouped = groupDocsByPrefix(docs);
  let content = `# Tauri Full Documentation\n\n> ${aboutBlurb}\n\n${organizationBlur}\n\n**Table of Contents**\n`;
  for (const [prefix, items] of grouped) {
    if (items.length > 0) {
      content += `\n## ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}\n`;
      items.forEach((doc) => {
        content += `- [${doc.data.title}](https://v2.tauri.app/${doc.id})`;
        // TODO: We need to add a description on every docpage for it to show up here.
        if (doc.data.description && doc.data.description.trim() !== '') {
          content += `: ${doc.data.description}`;
        }
        content += '\n';
      });
    }
  }

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
