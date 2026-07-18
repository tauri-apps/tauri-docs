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
  return frontmatter?.match(/^description:\s*(.+?)\s*$/m)?.[1].replace(/^(['"])(.*)\1$/, '$2');
}

export default {
  projectName: 'Tauri',
  description:
    'Tauri is a framework for building tiny, fast binaries for all major desktop and mobile platforms. Developers can integrate any frontend framework that compiles to HTML, JavaScript, and CSS for building their user experience while leveraging languages such as Rust, Swift, and Kotlin for backend logic when needed.',
  details: `
The documentation is organized into key sections:

${sections
  .flatMap((section) => {
    const description = sectionDescription(section);
    return description ? [`- **${section}**: ${description}`] : [];
  })
  .join('\n')}
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
  // `exclude` only applies to llms-small.txt; `demote` sorts to the end of llms-full.txt
  exclude: ['release/**', 'blog/**', 'contribute/**', '_fragments/**'],
  demote: ['release/**', 'blog/**', '_fragments/**'],
};
