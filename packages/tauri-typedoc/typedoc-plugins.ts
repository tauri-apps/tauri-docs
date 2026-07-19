import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
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
 * N times). The sidebar is built by `getTauriTypeDocPlugins()` too (explicit links, so
 * plugin pages stay flat entries instead of one-page directory groups) and consumed in
 * astro.config.mjs.
 *
 * Generation is skipped when the output already exists AND was generated from the submodule
 * revision currently checked out (tracked in .astro/tauri-typedoc-revisions.json). A
 * submodule bump therefore triggers regeneration on the next build.
 */

// All paths are anchored to the repo root (this file lives in <root>/packages/tauri-typedoc/),
// so the module behaves the same no matter which cwd loads astro.config.mjs. POSIX separators
// throughout: TypeDoc rejects Windows `\` in glob inputs (entryPoints), and node's fs
// accepts `/` on every platform.
const { join, dirname } = posix;
const PKG_DIR = fileURLToPath(new URL('.', import.meta.url)).replaceAll('\\', '/');
const ROOT = fileURLToPath(new URL('../..', import.meta.url)).replaceAll('\\', '/');
const TAURI_SUBMODULE = join(ROOT, 'packages/tauri');
const API_PACKAGE = join(TAURI_SUBMODULE, 'packages/api');
const PLUGINS_WORKSPACE = join(ROOT, 'packages/plugins-workspace');
const PLUGINS_DIR = join(PLUGINS_WORKSPACE, 'plugins');
const DOCS_DIR = join(ROOT, 'src/content/docs');
const REF_DIR = join(DOCS_DIR, 'reference/javascript');
const STAMP_FILE = join(ROOT, '.astro/tauri-typedoc-revisions.json');

const CORE_OUTPUT = 'reference/javascript/api';

type SidebarItem = NonNullable<StarlightUserConfig['sidebar']>[number];

/**
 * Auto-discover every plugin that ships a JS/TS guest API (`guest-js/index.ts`), instead of
 * hardcoding the list. New plugins in the submodule are picked up automatically.
 */
function discoverPlugins(): string[] {
  if (!existsSync(PLUGINS_DIR)) return [];
  return readdirSync(PLUGINS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => existsSync(join(PLUGINS_DIR, name, 'guest-js/index.ts')))
    .sort();
}

// Shared typedoc-plugin-markdown options — mirror the previous generator so the rendered
// pages and anchors match today's URLs (single page per module, flat output).
const sharedTypeDoc: StarlightTypeDocOptions['typeDoc'] = {
  plugin: ['typedoc-plugin-mdn-links', join(PKG_DIR, 'typedoc-tauri-plugin.mjs')],
  // Generate docs from the AST regardless of TypeScript errors in a plugin's own sources
  // (e.g. shell's guest-js/init.ts, a webview-injected script with DOM typing gaps).
  // Type-checking the plugins is their CI's job, not the docs build's.
  skipErrorChecking: true,
  // Git remote detection is unreliable inside submodule checkouts, so source links are
  // built from an explicit per-package `sourceLinkTemplate` + `displayBasePath` instead.
  // (`displayBasePath`, not `basePath`: with disableGit, the {path} placeholder is computed
  // relative to displayBasePath only — basePath affects the displayed file name but not URLs.)
  disableGit: true,
  outputFileStrategy: 'modules',
  flattenOutputFiles: true,
  entryFileName: 'index.md',
  hidePageHeader: true,
  hidePageTitle: true,
  hideBreadcrumbs: true,
  useCodeBlocks: true,
  parametersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  useHTMLAnchors: true,
};

// Each package MUST have its own output directory: TypeDoc cleans its output dir on every
// run, so multiple instances sharing one dir clobber each other. A dir per plugin
// (reference/javascript/<name>/index.md) yields the same public URL (/reference/javascript/<name>/)
// as the old flat <name>.md file, with no clobbering.
function pluginOutput(name: string): string {
  return `reference/javascript/${name}`;
}

function outputIndexExists(output: string): boolean {
  return existsSync(join(DOCS_DIR, output, 'index.md'));
}

/** HEAD commit of a submodule checkout, or null when it can't be determined. */
function submoduleRevision(dir: string): string | null {
  try {
    return execSync('git rev-parse HEAD', { cwd: dir, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return null;
  }
}

/** Map of output directory -> submodule revision the docs there were generated from. */
function readStamp(): Record<string, string> {
  try {
    return JSON.parse(readFileSync(STAMP_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function needsGeneration(
  output: string,
  revision: string | null,
  stamp: Record<string, string>
): boolean {
  if (!outputIndexExists(output)) return true;
  // Without a resolvable revision (no git), fall back to the existence check above.
  return revision !== null && stamp[output] !== revision;
}

/**
 * The old js-api-generator wrote flat files (fs.md, dialog.md, ...) directly into
 * reference/javascript/. Leftovers from a build on another branch collide with the new
 * <name>/index.md layout (duplicate slugs), so drop them. Everything in this directory is
 * generated (gitignored via src/content/docs/reference/.gitignore) — never authored.
 */
function removeLegacyFlatFiles(): void {
  if (!existsSync(REF_DIR)) return;
  for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) rmSync(join(REF_DIR, entry.name));
  }
}

function walkMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdownFiles(path));
    else if (entry.name.endsWith('.md')) files.push(path);
  }
  return files;
}

// TS 5.7+ makes Uint8Array generic, so signatures render as `Uint8Array<ArrayBuffer>` /
// `Uint8Array<ArrayBufferLike>`. The type parameter is lib-level noise for API docs (the
// old generator stripped it by rewriting the plugin sources before generation); normalize
// the rendered markdown instead. Covers raw code blocks, escaped text, and the
// typedoc-plugin-mdn-links linked form `[`Uint8Array`](...)\<[`ArrayBuffer`](...)\>`.
const UINT8_GENERIC_RE =
  /(\[`Uint8Array`\]\([^)\s]*\)|`?Uint8Array`?)\\?<(?:\[`ArrayBuffer(?:Like)?`\]\([^)\s]*\)|`?ArrayBuffer(?:Like)?`?)\\?>/g;

/**
 * Post-process a generated page (idempotent):
 *  - strip `Uint8Array<ArrayBuffer[Like]>` type parameters (see above)
 *  - restore the old generator's `tableOfContents.maxHeadingLevel: 5` frontmatter so h4/h5
 *    member headings (methods, enum members) stay reachable from the on-page ToC
 *    (Starlight's default cuts off at h3).
 */
function normalizeGeneratedPage(content: string): string {
  let result = content.replace(UINT8_GENERIC_RE, '$1');
  if (result.startsWith('---\n')) {
    const frontmatterEnd = result.indexOf('\n---', 4);
    if (frontmatterEnd !== -1 && !result.slice(0, frontmatterEnd).includes('tableOfContents:')) {
      result = `---\ntableOfContents:\n  maxHeadingLevel: 5\n${result.slice(4)}`;
    }
  }
  return result;
}

/**
 * Runs after all typedoc plugin instances (Starlight executes plugins in array order):
 * post-processes every generated page, then records the submodule revisions the outputs
 * were generated from. The stamp is only written here — after generation succeeded — so a
 * failed build stays marked stale and regenerates next time.
 */
function makeFinalizerPlugin(generated: Record<string, string>): StarlightPlugin {
  return {
    name: 'tauri-typedoc-finalizer',
    hooks: {
      'config:setup'({ command }) {
        if (command === 'preview') return;
        if (existsSync(REF_DIR)) {
          for (const file of walkMarkdownFiles(REF_DIR)) {
            const content = readFileSync(file, 'utf8');
            const normalized = normalizeGeneratedPage(content);
            if (normalized !== content) writeFileSync(file, normalized);
          }
        }
        if (Object.keys(generated).length > 0) {
          mkdirSync(dirname(STAMP_FILE), { recursive: true });
          writeFileSync(STAMP_FILE, `${JSON.stringify({ ...readStamp(), ...generated }, null, 2)}\n`);
        }
      },
    },
  };
}

/**
 * Sidebar items for the JavaScript reference section, replacing a plain `autogenerate` over
 * reference/javascript (which would render each plugin's one-page directory as a nested
 * single-item group labeled with the full package name). Mirrors the old sidebar: an "api"
 * group for the core package's module pages, then one flat link per plugin.
 */
function buildSidebarItems(coreReady: boolean, pluginsReady: boolean): SidebarItem[] {
  // Union of plugins that can be generated this run and plugin docs already on disk, so the
  // sidebar stays complete when generation is skipped or the submodule is missing.
  const names = new Set<string>(pluginsReady ? discoverPlugins() : []);
  if (existsSync(REF_DIR)) {
    for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
      if (entry.isDirectory() && entry.name !== 'api' && outputIndexExists(pluginOutput(entry.name))) {
        names.add(entry.name);
      }
    }
  }

  const items: SidebarItem[] = [];
  if (coreReady || outputIndexExists(CORE_OUTPUT)) {
    // Labeled autogenerate groups were removed in Starlight 0.39; the supported shape is a
    // labeled group containing a bare autogenerate item.
    items.push({
      label: 'api',
      collapsed: true,
      items: [{ autogenerate: { directory: CORE_OUTPUT, collapsed: true } }],
    });
  }
  for (const name of [...names].sort()) {
    items.push({ label: name, link: `/reference/javascript/${name}/` });
  }
  return items;
}

export function getTauriTypeDocPlugins(): {
  plugins: StarlightPlugin[];
  sidebarItems: SidebarItem[];
} {
  removeLegacyFlatFiles();

  const stamp = readStamp();
  const plugins: StarlightPlugin[] = [];
  // output directory -> revision, recorded by the finalizer once generation succeeded
  const generated: Record<string, string> = {};

  // Core @tauri-apps/api
  const coreReady = existsSync(join(API_PACKAGE, 'node_modules'));
  if (coreReady) {
    const coreRevision = submoduleRevision(TAURI_SUBMODULE);
    if (needsGeneration(CORE_OUTPUT, coreRevision, stamp)) {
      const [coreTypeDoc] = createStarlightTypeDocPlugin();
      plugins.push(
        coreTypeDoc({
          tsconfig: join(API_PACKAGE, 'tsconfig.json'),
          entryPoints: [join(API_PACKAGE, 'src/index.ts')],
          output: CORE_OUTPUT,
          typeDoc: {
            ...sharedTypeDoc,
            displayBasePath: TAURI_SUBMODULE,
            sourceLinkTemplate: 'https://github.com/tauri-apps/tauri/blob/dev/{path}#L{line}',
          },
        })
      );
      if (coreRevision) generated[CORE_OUTPUT] = coreRevision;
    }
  } else if (outputIndexExists(CORE_OUTPUT)) {
    console.warn(
      '[typedoc] Tauri V2 submodule is not initialized — serving previously generated @tauri-apps/api docs, which may be stale.'
    );
  } else {
    console.warn('Tauri V2 submodule is not initialized, respective API routes will not be rendered.');
  }

  // Plugins from plugins-workspace (auto-discovered)
  const pluginsReady = existsSync(join(PLUGINS_WORKSPACE, 'node_modules'));
  if (pluginsReady) {
    const pluginsRevision = submoduleRevision(PLUGINS_WORKSPACE);
    for (const name of discoverPlugins()) {
      const output = pluginOutput(name);
      if (!needsGeneration(output, pluginsRevision, stamp)) continue;
      const [pluginTypeDoc] = createStarlightTypeDocPlugin();
      plugins.push(
        pluginTypeDoc({
          tsconfig: join(PLUGINS_DIR, name, 'tsconfig.json'),
          entryPoints: [join(PLUGINS_DIR, name, 'guest-js/index.ts')],
          output,
          typeDoc: {
            ...sharedTypeDoc,
            displayBasePath: PLUGINS_WORKSPACE,
            sourceLinkTemplate:
              'https://github.com/tauri-apps/plugins-workspace/blob/v2/{path}#L{line}',
          },
        })
      );
      if (pluginsRevision) generated[output] = pluginsRevision;
    }
  } else {
    console.warn(
      'Plugins workspace submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  plugins.push(makeFinalizerPlugin(generated));

  return { plugins, sidebarItems: buildSidebarItems(coreReady, pluginsReady) };
}
