import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StarlightTypeDocOptions } from 'starlight-typedoc';
import { normalizeGeneratedPage } from './normalize.mjs';

// Generation is skipped when the output exists and matches the checked-out submodule revision,
// so a typedoc option change alone regenerates nothing: delete the stamp file to force it.

// POSIX separators throughout: TypeDoc rejects Windows `\` in entryPoints globs.
const { join, dirname } = posix;
const PKG_DIR = fileURLToPath(new URL('.', import.meta.url)).replaceAll('\\', '/');
const ROOT = fileURLToPath(new URL('../..', import.meta.url)).replaceAll('\\', '/');
const TAURI_SUBMODULE = join(ROOT, 'packages/tauri');
const API_PACKAGE = join(TAURI_SUBMODULE, 'packages/api');
const PLUGINS_WORKSPACE = join(ROOT, 'packages/plugins-workspace');
const PLUGINS_DIR = join(PLUGINS_WORKSPACE, 'plugins');
const DOCS_DIR = join(ROOT, 'src/content/docs');
const REF_BASE = 'reference/javascript';
const REF_DIR = join(DOCS_DIR, REF_BASE);
const STAMP_FILE = join(ROOT, '.astro/tauri-typedoc-revisions.json');

const CORE_OUTPUT = `${REF_BASE}/api`;

// Stamped alongside the revisions, so editing normalize.mjs re-normalizes without regenerating.
const NORMALIZE_STAMP_KEY = 'normalize.mjs';
const NORMALIZE_HASH = createHash('sha1')
  .update(readFileSync(join(PKG_DIR, 'normalize.mjs')))
  .digest('hex');

type SidebarItem = NonNullable<StarlightUserConfig['sidebar']>[number];

function discoverPlugins(): string[] {
  if (!existsSync(PLUGINS_DIR)) return [];
  return readdirSync(PLUGINS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => existsSync(join(PLUGINS_DIR, name, 'guest-js/index.ts')))
    .sort();
}

// `frontmatterGlobals` comes from typedoc-plugin-frontmatter at runtime, not the bundled types.
const sharedTypeDoc: NonNullable<StarlightTypeDocOptions['typeDoc']> & {
  frontmatterGlobals?: Record<string, unknown>;
} = {
  plugin: [
    'typedoc-plugin-mdn-links',
    'typedoc-plugin-frontmatter',
    join(PKG_DIR, 'typedoc-tauri-plugin.mjs'),
  ],
  // Starlight's on-page ToC stops at h3, which would drop method and enum-member headings.
  frontmatterGlobals: { tableOfContents: { maxHeadingLevel: 3 } },
  // Plugin sources carry TS errors of their own; type-checking them is their CI's job.
  skipErrorChecking: true,
  // Git detection is unreliable in submodule checkouts. Note `displayBasePath`, not
  // `basePath`: under disableGit the {path} placeholder resolves against the former only.
  disableGit: true,
  outputFileStrategy: 'modules',
  flattenOutputFiles: true,
  entryFileName: 'index.md',
  useCodeBlocks: true,
  expandParameters: true,
  expandObjects: true,
  blockTagsPreserveOrder: ['@example'],
  parametersFormat: 'table',
  classPropertiesFormat: 'table',
  interfacePropertiesFormat: 'table',
  typeAliasPropertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  enumMembersFormat: 'table',
  useHTMLAnchors: true,
  // hideGroupHeadings: true,
  groupOrder: [
    'Documents',
    'Modules',
    'Namespaces',
    'Functions',
    'Enumerations',
    'Enumeration Members',
    'Classes',
    'Interfaces',
    'Type Aliases',
    'Constructors',
    'Properties',
    'Variables',
    'Accessors',
    'Methods',
    'References',
  ],
};

function outputIndexExists(output: string): boolean {
  return existsSync(join(DOCS_DIR, output, 'index.md'));
}

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
  // No resolvable revision (no git): fall back to the existence check above.
  return revision !== null && stamp[output] !== revision;
}

// This pipeline only writes into per-package subdirectories, so a flat `.md` here is leftover
// from an older checkout and would shadow the real pages.
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

// Must be pushed last, since Starlight runs plugins in array order. The stamp is written only
// after generation succeeds, so a failed build stays stale and retries next time.
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

function makePackagePlugin(opts: {
  tsconfig: string;
  entryPoints: string[];
  output: string;
  displayBasePath: string;
  sourceLinkTemplate: string;
}): StarlightPlugin {
  // A fresh instance per package, each with its own output dir: shared instances collide on
  // the sidebar placeholder, and TypeDoc wipes its output dir on every run.
  const [instance] = createStarlightTypeDocPlugin();
  return instance({
    tsconfig: opts.tsconfig,
    entryPoints: opts.entryPoints,
    output: opts.output,
    // starlight-typedoc otherwise emits `prev: false` / `next: false`, hiding the links.
    pagination: true,
    typeDoc: {
      ...sharedTypeDoc,
      displayBasePath: opts.displayBasePath,
      sourceLinkTemplate: opts.sourceLinkTemplate,
    },
  });
}

// Explicit rather than a plain `autogenerate` over reference/javascript, which would render
// each plugin's one-page directory as a nested single-item group named after the package.
function buildSidebarItems(coreReady: boolean, pluginNames: string[]): SidebarItem[] {
  // Docs already on disk count too, so the sidebar survives a skipped or missing submodule.
  const names = new Set<string>(pluginNames);
  if (existsSync(REF_DIR)) {
    for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
      if (
        entry.isDirectory() &&
        entry.name !== 'api' &&
        outputIndexExists(`${REF_BASE}/${entry.name}`)
      ) {
        names.add(entry.name);
      }
    }
  }

  const items: SidebarItem[] = [];
  if (coreReady || outputIndexExists(CORE_OUTPUT)) {
    // Starlight 0.39 dropped labeled autogenerate groups; the nesting here is the supported shape.
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
      '[typedoc] Tauri V2 submodule is not initialized, serving previously generated @tauri-apps/api docs which may be stale.'
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
      const output = `${REF_BASE}/${name}`;
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
