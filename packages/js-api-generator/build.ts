import { Application, TSConfigReader, LogLevel, DefaultTheme, type TypeDocOptions } from 'typedoc';
import { existsSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_OUTPUT_DIR = resolve(__dirname, '../../public/api-reference');

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
  sourceLinkTemplate:
    'https://github.com/tauri-apps/{repository}/blob/{gitRevision}/{path}#L{line}',
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
  console.log(`Generating docs for ${options.name || 'unknown'}`);

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

  // TODO: move this to a file and improve layout
  // TODO: copy assets to the output directory
  // TODO: improve theme switcher
  // TODO: link to docs
  // TODO: make docs link to here
  const indexContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <title>Tauri JS API Reference</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.slate.min.css">
    <style>
        .grid {
            --grid-min-value: 16rem;
            grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-value), 1fr));
        }
        .tauri-logo {
            height: 2rem;
            vertical-align: middle;
            margin-right: 0.5rem;
        }
        .logo-light { display: none; }
        .logo-dark { display: none; }
        @media (prefers-color-scheme: dark) {
          .logo-dark { display: inline; }
          .logo-light { display: none; }
        }
        @media (prefers-color-scheme: light), (prefers-color-scheme: no-preference) {
          .logo-light { display: inline; }
          .logo-dark { display: none; }
        }
        [data-theme="dark"] .logo-dark { display: inline; }
        [data-theme="dark"] .logo-light { display: none; }
        [data-theme="light"] .logo-light { display: inline; }
        [data-theme="light"] .logo-dark { display: none; }
    </style>
</head>
<body>
    <header class="container">
    <nav>
        <ul>
            <li>
              <img src="./assets/logo_light.svg" alt="Tauri Logo" class="tauri-logo logo-light" loading="lazy">
              <img src="./assets/logo.svg" alt="Tauri Logo" class="tauri-logo logo-dark" loading="lazy">
            </li>
        </ul>
        <ul>
            <li>
                <select id="theme-switcher" aria-label="Theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto" selected>Auto</option>
                </select>
            </li>
        </ul>
        </nav>
    </header>
    <main class="container">
        <hgroup>
            <h1>Javascript Reference</h1>
            <p>API reference for Tauri core and plugins</p>
        </hgroup>
        <section>
          <div>${cardTemplate('Tauri Core API', './core/index.html')}</div>
            <h3>Plugins</h3>
            <div class="grid">
                ${pluginsGridHtml}
            </div>
        </section>
    </main>
    <footer class="container">
        <small>&copy; 2025 Tauri Apps. All rights reserved.</small>
    </footer>
    <script>
        const themeSwitcher = document.getElementById('theme-switcher');
        function setTheme(theme) {
            if (theme === 'auto') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.removeItem('theme');
            } else {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        }
        themeSwitcher.value = localStorage.getItem('theme') || 'auto';
        setTheme(themeSwitcher.value);
        themeSwitcher.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    </script>
</body>
</html>
  `;

  const cssDir = join(BASE_OUTPUT_DIR, 'assets');
  if (!existsSync(cssDir)) {
    mkdirSync(cssDir, { recursive: true });
  }
  try {
    writeFileSync(indexPath, indexContent);
    console.log(`Generated index page at ${indexPath}`);
  } catch (error) {
    console.error('Failed to write index files:', error);
  }
}

class TauriDefaultTheme extends DefaultTheme {}

generator().catch((error) => {
  console.error('Failed to generate documentation:', error);
  process.exit(1);
});
