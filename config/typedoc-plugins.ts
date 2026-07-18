import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import type { StarlightPlugin } from '@astrojs/starlight/types';
import { existsSync } from 'node:fs';
import type { StarlightTypeDocOptions } from 'starlight-typedoc';

/**
 * PROTOTYPE A — native Markdown via the upstream `starlight-typedoc` plugin.
 *
 * Replaces the hand-rolled `packages/js-api-generator` (which copied starlight-typedoc's
 * internals) with the real plugin. Output URL structure + typedoc options are kept
 * compatible with the current site so existing `/reference/javascript/*` links keep working:
 *   - core   -> src/content/docs/reference/javascript/api/index.md   (/reference/javascript/api/)
 *   - plugin -> src/content/docs/reference/javascript/<name>.md      (/reference/javascript/<name>/)
 *
 * Each package gets its own plugin instance via `createStarlightTypeDocPlugin()` (unique
 * sidebar placeholder — avoids the shared-singleton conflict of calling the default export
 * N times). We drive the sidebar with `autogenerate` in astro.config.mjs, so the plugin is
 * used purely for generation.
 */

// Slice for the "build both, then decide" prototype. Flip PROTOTYPE_FULL to true to
// generate every plugin (needed for a fully link-clean site build).
const PROTOTYPE_FULL = false;

const ALL_PLUGINS = [
  'autostart',
  'barcode-scanner',
  'biometric',
  'cli',
  'clipboard-manager',
  'deep-link',
  'dialog',
  'fs',
  'geolocation',
  'global-shortcut',
  'haptics',
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

// The evaluated slice: core + a namespaced plugin (fs) + a flat plugin (autostart).
const SLICE_PLUGINS = ['fs', 'autostart'];

const PLUGINS = PROTOTYPE_FULL ? ALL_PLUGINS : SLICE_PLUGINS;

// Shared typedoc-plugin-markdown options — mirror the current generator so the rendered
// pages and anchors match today's URLs (single page per module, flat output).
const sharedTypeDoc: StarlightTypeDocOptions['typeDoc'] = {
  plugin: ['typedoc-plugin-mdn-links', './config/typedoc-tauri-plugin.mjs'],
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
  if (existsSync('packages/tauri/packages/api/node_modules') && !alreadyGenerated(CORE_OUTPUT)) {
    const [coreTypeDoc] = createStarlightTypeDocPlugin();
    plugins.push(
      coreTypeDoc({
        tsconfig: './packages/tauri/packages/api/tsconfig.json',
        entryPoints: ['./packages/tauri/packages/api/src/index.ts'],
        output: CORE_OUTPUT,
        typeDoc: { ...sharedTypeDoc, entryFileName: 'index.md', gitRevision: 'dev' },
      })
    );
  }

  // Plugins from plugins-workspace
  if (existsSync('packages/plugins-workspace/node_modules')) {
    for (const name of PLUGINS) {
      const output = pluginOutput(name);
      if (alreadyGenerated(output)) continue;
      const [pluginTypeDoc] = createStarlightTypeDocPlugin();
      plugins.push(
        pluginTypeDoc({
          tsconfig: `./packages/plugins-workspace/plugins/${name}/tsconfig.json`,
          entryPoints: [`./packages/plugins-workspace/plugins/${name}/guest-js/index.ts`],
          output,
          typeDoc: { ...sharedTypeDoc, entryFileName: 'index.md', gitRevision: 'v2' },
        })
      );
    }
  }

  return { plugins };
}
