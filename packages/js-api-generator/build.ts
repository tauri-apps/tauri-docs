import { Application, TSConfigReader, LogLevel, DefaultTheme, type TypeDocOptions } from 'typedoc';
import { existsSync, mkdirSync, writeFileSync, readdirSync, readFileSync, cpSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_OUTPUT_DIR = resolve(__dirname, '../../public/reference/javascript');

const OUTPUT_DOCS_SRC_DIR = resolve(__dirname, '../../src');

const typeDocConfigBaseOptions: Partial<TypeDocOptions> = {
  // TypeDoc options
  // https://typedoc.org/options/
  githubPages: false,
  hideGenerator: true,
  theme: 'tauri-theme',
  plugin: ['typedoc-plugin-mdn-links'],
  readme: 'none',
  logLevel: LogLevel.Warn,
  includeVersion: true,
  searchInComments: true,
  navigationLinks: {
    'Tauri Docs': 'https://tauri.app',
    GitHub: 'https://github.com/tauri-apps/tauri',
  },
  visibilityFilters: {
    protected: true,
    private: false,
    inherited: true,
    external: false,
  },
  categorizeByGroup: true,
  cleanOutputDir: true,
  // disableSources: false,
  sort: ['source-order'],
  highlightLanguages: ['typescript', 'javascript', 'json', 'bash', 'shell', 'rust', 'toml'],
};

async function generator() {
  if (existsSync('../tauri/packages/api/node_modules')) {
    const coreJsOptions: Partial<TypeDocOptions> = {
      entryPoints: ['../tauri/packages/api/src/index.ts'],
      tsconfig: '../tauri/packages/api/tsconfig.json',
      gitRevision: 'dev',
      out: join(BASE_OUTPUT_DIR, 'core'),
      name: 'Tauri Core API',
      ...typeDocConfigBaseOptions,
    };

    await generateDocs(coreJsOptions);
  } else {
    console.log(
      'Tauri V2 submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  const plugins = [
    'autostart',
    'barcode-scanner',
    'biometric',
    'cli',
    'clipboard-manager',
    'deep-link',
    'dialog',
    'fs',
    'global-shortcut',
    'http',
    'log',
    'nfc',
    'notification',
    'opener',
    'os',
    'positioner',
    'process',
    'shell',
    'sql',
    'store',
    'stronghold',
    'updater',
    'upload',
    'websocket',
    'window-state',
  ];

  if (existsSync('../plugins-workspace/node_modules')) {
    const pluginsPromises = plugins.map(async (plugin) => {
      const pluginJsOptions: Partial<TypeDocOptions> = {
        entryPoints: [`../plugins-workspace/plugins/${plugin}/guest-js/index.ts`],
        tsconfig: `../plugins-workspace/plugins/${plugin}/tsconfig.json`,
        gitRevision: 'v2',
        out: join(BASE_OUTPUT_DIR, 'plugins', plugin),
        name: `@tauri-apps/plugin-${plugin}`,
        ...typeDocConfigBaseOptions,
      };

      return generateDocs(pluginJsOptions);
    });

    await Promise.all(pluginsPromises);
  } else {
    console.log(
      'Plugins workspace submodule is not initialized, respective API routes will not be rendered.'
    );
  }
  await generateIndexPage();
}

async function generateDocs(options: Partial<TypeDocOptions>) {
  // console.log(`Generating docs for ${options.name}`);

  const outDir = options.out as string;
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  const app = await Application.bootstrapWithPlugins(options);
  app.options.addReader(new TSConfigReader());

  options.theme = 'tauri-theme';
  app.renderer.defineTheme('tauri-theme', TauriDefaultTheme);

  const project = await app.convert();
  if (!project) {
    throw new Error(`Failed to convert project: ${options.name}`);
  }

  await app.generateDocs(project, outDir);
}

async function generateIndexPage() {
  const indexPath = join(BASE_OUTPUT_DIR, 'index.html');

  const cardTemplate = (name: string, path: string) => {
    return ` <article>
    <hgroup>
        <h4>${name}</h4>
        <a href="${path}">View</a>
        </hgroup>
      </article>`;
  };

  let pluginsGridHtml;
  if (existsSync(join(BASE_OUTPUT_DIR, 'plugins'))) {
    const pluginDirs = readdirSync(join(BASE_OUTPUT_DIR, 'plugins'));

    pluginsGridHtml = pluginDirs
      .map((plugin: string) => cardTemplate(plugin, `./plugins/${plugin}/index.html`))
      .join('');
  }

  // TODO: improve layout
  // TODO: improve theme switcher
  // TODO: link to docs
  // TODO: make docs link to here
  const indexTemplatePath = join(__dirname, 'indexTemplate.html');
  const indexContent = readFileSync(indexTemplatePath, 'utf-8')
    .replace('{{ pluginsGridHtml }}', pluginsGridHtml || '')
          .replace('{{ tauriCard }}', cardTemplate('Tauri Core API', '/reference/javascript/core/'));

  const assetsDir = join(BASE_OUTPUT_DIR, 'assets');
  if (!existsSync(assetsDir)) {
    mkdirSync(assetsDir, { recursive: true });
  }
  const distAssetsDir = join(__dirname, 'assets');
  if (existsSync(distAssetsDir)) {
    try {
      cpSync(distAssetsDir, assetsDir, { recursive: true, force: true });
    } catch (err) {
      console.error('Failed to copy assets:', err);
    }
  } else {
    console.warn(`Assets directory not found at ${distAssetsDir}`);
  }
  try {
    writeFileSync(indexPath, indexContent);
    // Starlight  topics especific sidebar structure
          const sidebar = [
            {
              label: 'Index',
              link: '/reference/javascript/index.html',
            },
            {
              label: 'Tauri Core API',
              link: '/reference/javascript/core/index.html',
            },
            ...(pluginsGridHtml && existsSync(join(BASE_OUTPUT_DIR, 'plugins'))
              ? readdirSync(join(BASE_OUTPUT_DIR, 'plugins')).map((plugin) => ({
                  label: plugin,
                  link: `/reference/javascript/plugins/${plugin}/index.html`,
                }))
              : []),
          ];
    const sidebarFilePath = join(OUTPUT_DOCS_SRC_DIR, '_generated-javascript-reference-sidebar.js');
    writeFileSync(sidebarFilePath, 'export default ' + JSON.stringify(sidebar, null, 2) + ';\n');
  } catch (error) {
    console.error('Failed to write index files:', error);
  }
}

class TauriDefaultTheme extends DefaultTheme {}

generator().catch((error) => {
  console.error('Failed to generate documentation:', error);
  process.exit(1);
});
