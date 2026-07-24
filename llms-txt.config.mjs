import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const sections = [
  'start',
  'concept',
  'security',
  'develop',
  'distribute',
  'learn',
  'plugin',
  'about',
];
const referenceDescription =
  'Auto-generated reference documentation for the JavaScript API, configuration schema, command line interface, and the permission system (ACL)';

function sectionDescription(section) {
  const indexFile = fileURLToPath(
    new URL(`./src/content/docs/${section}/index.mdx`, import.meta.url)
  );
  const frontmatter = readFileSync(indexFile, 'utf-8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
  const description = frontmatter
    ?.match(/^description:\s*(.+?)\s*$/m)?.[1]
    .replace(/^(['"])(.*)\1$/, '$2');
  if (!description) {
    throw Error(
      `Missing or unparseable description frontmatter in ${section}/index.mdx (used to describe the section in llms.txt)`
    );
  }
  return description;
}

export default {
  projectName: 'Tauri',
  description:
    'Tauri is a framework for building tiny, fast binaries for all major desktop and mobile platforms. Developers can integrate any frontend framework that compiles to HTML, JavaScript, and CSS for building their user experience while leveraging languages such as Rust, Swift, and Kotlin for backend logic when needed.',
  details: `
The documentation is organized into key sections:

${sections.map((section) => `- **${section}**: ${sectionDescription(section)}`).join('\n')}
- **reference**: ${referenceDescription}`,
  customSets: [
    {
      label: 'Guides',
      description:
        'guides, concepts, and tutorials for developing and distributing Tauri applications',
      paths: sections.map((section) => `${section}{,/**}`),
    },
    {
      label: 'Reference',
      description:
        'reference documentation for the JavaScript API, configuration schema, command line interface, and the permission system (ACL)',
      paths: ['reference{,/**}'],
    },
  ],
  optionalLinks: [
    {
      label: 'Tauri GitHub repository',
      url: 'https://github.com/tauri-apps/tauri',
      description: 'source code and issue tracker for the Tauri framework',
    },
    {
      label: 'Awesome Tauri',
      url: 'https://github.com/tauri-apps/awesome-tauri',
      description: 'list of community plugins, templates, and resources',
    },
  ],
  // sort the getting-started content to the top of llms-full.txt and llms-small.txt
  promote: ['index*', 'start{,/**}'],
  // `exclude` only applies to llms-small.txt; `demote` sorts to the end of llms-full.txt
  exclude: ['release/**', 'blog/**', 'contribute/**', '_fragments/**', '_it/**'],
  demote: ['release/**', 'blog/**', '_fragments/**', '_it/**'],
  customSelectors: {
    all: [
      // "Section titled …" heading anchor links
      '.sl-anchor-link',
      // homepage sponsor logo grid
      '.sponsors',
      // astro-d2 diagram images (render as broken image paths)
      'img[src^="/d2/"]',
      // features/community search and platform filter UI on the plugin page
      '.pagefind-ui',
    ],
  },
  // keep `:::note` asides in llms-small.txt (tips are still stripped)
  minify: { note: false },
};
