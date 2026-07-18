import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import type { StarlightPlugin } from '@astrojs/starlight/types';
import { existsSync, readdirSync } from 'node:fs';
import type { StarlightTypeDocOptions } from 'starlight-typedoc';

/**
 * JavaScript API reference generation via the upstream `starlight-typedoc` plugin.
 *
 * Replaces the hand-rolled `packages/js-api-generator` (which copied starlight-typedoc's
 * internals). Output URL structure + typedoc options are kept compatible with the current
 * site so existing `/reference/javascript/*` links keep working:
 *   - core   -> src/content/docs/reference/javascript/api/index.md   (/reference/javascript/api/)
 *   - plugin -> src/content/docs/reference/javascript/<name>/index.md (/reference/javascript/<name>/)
 *
 * Each package gets its own plugin instance via `createStarlightTypeDocPlugin()` (unique
 * sidebar placeholder — avoids the shared-singleton conflict of calling the default export
 * N times). The sidebar is driven by `autogenerate` in astro.config.mjs, so the plugin is
 * used purely for generation.
 */

const API_PACKAGE = 'packages/tauri/packages/api';
const PLUGINS_DIR = 'packages/plugins-workspace/plugins';

/**
 * Auto-discover every plugin that ships a JS/TS guest API (`guest-js/index.ts`), instead of
 * hardcoding the list. New plugins in the submodule are picked up automatically.
 */
function discoverPlugins(): string[] {
  if (!existsSync(PLUGINS_DIR)) return [];
  return readdirSync(PLUGINS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => existsSync(`${PLUGINS_DIR}/${name}/guest-js/index.ts`))
    .sort();
}

// Shared typedoc-plugin-markdown options — mirror the previous generator so the rendered
// pages and anchors match today's URLs (single page per module, flat output).
const sharedTypeDoc: StarlightTypeDocOptions['typeDoc'] = {
  plugin: ['typedoc-plugin-mdn-links', './config/typedoc-tauri-plugin.mjs'],
  // Generate docs from the AST regardless of TypeScript errors in a plugin's own sources
  // (e.g. shell's guest-js/init.ts, a webview-injected script with DOM typing gaps).
  // Type-checking the plugins is their CI's job, not the docs build's.
  skipErrorChecking: true,
  outputFileStrategy: 'modules',
  flattenOutputFiles: true,
  hidePageHeader: true,
  hidePageTitle: true,
  hideBreadcrumbs: true,
  useCodeBlocks: true,
  parametersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  useHTMLAnchors: true,
};

const CORE_OUTPUT = 'reference/javascript/api';

// Each package MUST have its own output directory: TypeDoc cleans its output dir on every
// run, so multiple instances sharing one dir clobber each other. A dir per plugin
// (reference/javascript/<name>/index.md) yields the same public URL (/reference/javascript/<name>/)
// as the old flat <name>.md file, with no clobbering.
function pluginOutput(name: string): string {
  return `reference/javascript/${name}`;
}

function alreadyGenerated(output: string): boolean {
  return existsSync(`src/content/docs/${output}/index.md`);
}

export function getTauriTypeDocPlugins(): { plugins: StarlightPlugin[] } {
  const plugins: StarlightPlugin[] = [];

  // Core @tauri-apps/api
  if (existsSync(`${API_PACKAGE}/node_modules`) && !alreadyGenerated(CORE_OUTPUT)) {
    const [coreTypeDoc] = createStarlightTypeDocPlugin();
    plugins.push(
      coreTypeDoc({
        tsconfig: `./${API_PACKAGE}/tsconfig.json`,
        entryPoints: [`./${API_PACKAGE}/src/index.ts`],
        output: CORE_OUTPUT,
        typeDoc: { ...sharedTypeDoc, entryFileName: 'index.md', gitRevision: 'dev' },
      })
    );
  }

  // Plugins from plugins-workspace (auto-discovered)
  if (existsSync(`${PLUGINS_DIR}/../node_modules`)) {
    for (const name of discoverPlugins()) {
      const output = pluginOutput(name);
      if (alreadyGenerated(output)) continue;
      const [pluginTypeDoc] = createStarlightTypeDocPlugin();
      plugins.push(
        pluginTypeDoc({
          tsconfig: `./${PLUGINS_DIR}/${name}/tsconfig.json`,
          entryPoints: [`./${PLUGINS_DIR}/${name}/guest-js/index.ts`],
          output,
          typeDoc: { ...sharedTypeDoc, entryFileName: 'index.md', gitRevision: 'v2' },
        })
      );
    }
  }

  return { plugins };
}
