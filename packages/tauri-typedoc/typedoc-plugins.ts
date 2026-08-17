import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StarlightTypeDocOptions } from 'starlight-typedoc';
import { normalizeGeneratedPage } from './normalize.mjs';

/**
 * JavaScript API reference generation via the upstream `starlight-typedoc` plugin.
 *
 * Output layout:
 *   - core   -> src/content/docs/reference/javascript/api/index.md   (/reference/javascript/api/)
 *   - plugin -> src/content/docs/reference/javascript/<name>/index.md (/reference/javascript/<name>/)
 *
 * Each package gets its own plugin instance via `createStarlightTypeDocPlugin()` (unique
 * sidebar placeholder — avoids the shared-singleton conflict of calling the default export
 * N times). `getTauriTypeDocPlugins()` also builds the sidebar (explicit links, so plugin
 * pages stay flat entries instead of one-page directory groups); astro.config.mjs consumes
 * both.
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
// URL-path base of the JS reference section; output paths and sidebar links derive from it.
const REF_BASE = 'reference/javascript';
const REF_DIR = join(DOCS_DIR, REF_BASE);
const STAMP_FILE = join(ROOT, '.astro/tauri-typedoc-revisions.json');

const CORE_OUTPUT = `${REF_BASE}/api`;

// Content hash of normalize.mjs, stamped alongside the submodule revisions so pages are
// re-normalized when the transforms change — without requiring a typedoc regeneration —
// and normalization is skipped entirely on warm starts.
const NORMALIZE_STAMP_KEY = 'normalize.mjs';
const NORMALIZE_HASH = createHash('sha1')
  .update(readFileSync(join(PKG_DIR, 'normalize.mjs')))
  .digest('hex');

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

// Shared typedoc-plugin-markdown options: one page per module, flat output, member tables.
// `frontmatterGlobals` is declared at runtime by typedoc-plugin-frontmatter (loaded via
// `plugin` below) and is not part of starlight-typedoc's bundled option types.
const sharedTypeDoc: NonNullable<StarlightTypeDocOptions['typeDoc']> & {
  frontmatterGlobals?: Record<string, unknown>;
} = {
  plugin: [
    'typedoc-plugin-mdn-links',
    'typedoc-plugin-frontmatter',
    join(PKG_DIR, 'typedoc-tauri-plugin.mjs'),
  ],
  // Serialized into each page's frontmatter by typedoc-plugin-frontmatter, which
  // starlight-typedoc detects and merges its own keys (title, prev/next, editUrl) into.
  // h4/h5 member headings (methods, enum members) must stay reachable from the on-page
  // ToC; Starlight's default cuts off at h3.
  frontmatterGlobals: { tableOfContents: { maxHeadingLevel: 5 } },
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
  expandParameters: true,
  blockTagsPreserveOrder: ['@example'],
  parametersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  useHTMLAnchors: true,
};

// Each package MUST have its own output directory: TypeDoc cleans its output dir on every
// run, so multiple instances sharing one dir clobber each other. A dir per plugin
// (reference/javascript/<name>/index.md) serves the page at /reference/javascript/<name>/.
function pluginOutput(name: string): string {
  return `${REF_BASE}/${name}`;
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
 * Remove flat `.md` pages sitting directly in reference/javascript/: the previous
 * generator wrote pages there, while this pipeline only writes into per-package
 * subdirectories — so any flat file is stale output from an older checkout and would
 * shadow or duplicate the real pages.
 */
function removeStaleFlatFiles(): void {
  if (!existsSync(REF_DIR)) return;
  for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) rmSync(join(REF_DIR, entry.name));
  }
}

function walkMarkdownFiles(dir: string): string[] {
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => join(entry.parentPath.replaceAll('\\', '/'), entry.name));
}

/**
 * Runs after all typedoc plugin instances (Starlight executes plugins in array order):
 * post-processes the generated pages, then records what they were generated from. The
 * stamp is only written here — after generation succeeded — so a failed build stays
 * marked stale and regenerates next time. On warm starts (nothing regenerated and
 * normalize.mjs unchanged since the pages were written) the hook is a no-op.
 */
function makeFinalizerPlugin(
  stamp: Record<string, string>,
  generated: Record<string, string>
): StarlightPlugin {
  return {
    name: 'tauri-typedoc-finalizer',
    hooks: {
      'config:setup'({ command }) {
        if (command === 'preview') return;
        if (Object.keys(generated).length === 0 && stamp[NORMALIZE_STAMP_KEY] === NORMALIZE_HASH)
          return;
        if (existsSync(REF_DIR)) {
          for (const file of walkMarkdownFiles(REF_DIR)) {
            const content = readFileSync(file, 'utf8');
            const normalized = normalizeGeneratedPage(content);
            if (normalized !== content) writeFileSync(file, normalized);
          }
        }
        mkdirSync(dirname(STAMP_FILE), { recursive: true });
        writeFileSync(
          STAMP_FILE,
          `${JSON.stringify(
            { ...stamp, ...generated, [NORMALIZE_STAMP_KEY]: NORMALIZE_HASH },
            null,
            2
          )}\n`
        );
      },
    },
  };
}

/** One starlight-typedoc instance configured for a single package. */
function makePackagePlugin(opts: {
  tsconfig: string;
  entryPoints: string[];
  output: string;
  displayBasePath: string;
  sourceLinkTemplate: string;
}): StarlightPlugin {
  // A fresh instance per package: unique sidebar placeholder (see module comment).
  const [instance] = createStarlightTypeDocPlugin();
  return instance({
    tsconfig: opts.tsconfig,
    entryPoints: opts.entryPoints,
    output: opts.output,
    // Starlight prev/next links: the starlight-typedoc default emits `prev: false` /
    // `next: false` frontmatter, which hides them.
    pagination: true,
    typeDoc: {
      ...sharedTypeDoc,
      displayBasePath: opts.displayBasePath,
      sourceLinkTemplate: opts.sourceLinkTemplate,
    },
  });
}

/**
 * Sidebar items for the JavaScript reference section: an "api" group for the core package's
 * module pages, then one flat link per plugin. Built explicitly rather than with a plain
 * `autogenerate` over reference/javascript, which would render each plugin's one-page
 * directory as a nested single-item group labeled with the full package name.
 */
function buildSidebarItems(coreReady: boolean, pluginNames: string[]): SidebarItem[] {
  // Union of plugins that can be generated this run and plugin docs already on disk, so the
  // sidebar stays complete when generation is skipped or the submodule is missing.
  const names = new Set<string>(pluginNames);
  if (existsSync(REF_DIR)) {
    for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
      if (
        entry.isDirectory() &&
        entry.name !== 'api' &&
        outputIndexExists(pluginOutput(entry.name))
      ) {
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
    items.push({ label: name, link: `/${REF_BASE}/${name}/` });
  }
  return items;
}

export function getTauriTypeDocPlugins(): {
  plugins: StarlightPlugin[];
  sidebarItems: SidebarItem[];
} {
  removeStaleFlatFiles();

  const stamp = readStamp();
  const plugins: StarlightPlugin[] = [];
  // output directory -> revision, recorded by the finalizer once generation succeeded
  const generated: Record<string, string> = {};

  // Core @tauri-apps/api
  const coreReady = existsSync(join(API_PACKAGE, 'node_modules'));
  if (coreReady) {
    const coreRevision = submoduleRevision(TAURI_SUBMODULE);
    if (needsGeneration(CORE_OUTPUT, coreRevision, stamp)) {
      plugins.push(
        makePackagePlugin({
          tsconfig: join(API_PACKAGE, 'tsconfig.json'),
          entryPoints: [join(API_PACKAGE, 'src/index.ts')],
          output: CORE_OUTPUT,
          displayBasePath: TAURI_SUBMODULE,
          sourceLinkTemplate: 'https://github.com/tauri-apps/tauri/blob/dev/{path}#L{line}',
        })
      );
      if (coreRevision) generated[CORE_OUTPUT] = coreRevision;
    }
  } else if (outputIndexExists(CORE_OUTPUT)) {
    console.warn(
      '[typedoc] Tauri V2 submodule is not initialized — serving previously generated @tauri-apps/api docs, which may be stale.'
    );
  } else {
    console.warn(
      'Tauri V2 submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  // Plugins from plugins-workspace (auto-discovered)
  const pluginsReady = existsSync(join(PLUGINS_WORKSPACE, 'node_modules'));
  const pluginNames = pluginsReady ? discoverPlugins() : [];
  if (pluginsReady) {
    const pluginsRevision = submoduleRevision(PLUGINS_WORKSPACE);
    for (const name of pluginNames) {
      const output = pluginOutput(name);
      if (!needsGeneration(output, pluginsRevision, stamp)) continue;
      plugins.push(
        makePackagePlugin({
          tsconfig: join(PLUGINS_DIR, name, 'tsconfig.json'),
          entryPoints: [join(PLUGINS_DIR, name, 'guest-js/index.ts')],
          output,
          displayBasePath: PLUGINS_WORKSPACE,
          sourceLinkTemplate:
            'https://github.com/tauri-apps/plugins-workspace/blob/v2/{path}#L{line}',
        })
      );
      if (pluginsRevision) generated[output] = pluginsRevision;
    }
  } else {
    console.warn(
      'Plugins workspace submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  plugins.push(makeFinalizerPlugin(stamp, generated));

  return { plugins, sidebarItems: buildSidebarItems(coreReady, pluginNames) };
}
