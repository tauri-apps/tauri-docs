import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StarlightTypeDocOptions } from 'starlight-typedoc';
import { PLUGIN_SOURCES, hashFiles } from './pipeline-sources.mjs';

// an output is regenerated when it's missing or its stamp doesn't match the checked-out
// submodule revision and the current pipeline hash

// POSIX separators throughout, TypeDoc rejects Windows `\` in entryPoints globs
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

// everything that shapes the output: this file, the plugin sources and the installed dependency
// versions. Pages are rewritten in place, so a changed transform needs a full regeneration
const PIPELINE_HASH = hashFiles([join(PKG_DIR, 'typedoc-plugins.ts'), ...PLUGIN_SOURCES])
  .update(dependencyVersions().join('\n'))
  .digest('hex');

function dependencyVersions(): string[] {
  const { dependencies } = JSON.parse(readFileSync(join(PKG_DIR, 'package.json'), 'utf8'));
  return Object.keys(dependencies).map((name) => {
    const manifest = readFileSync(join(PKG_DIR, 'node_modules', name, 'package.json'), 'utf8');
    return `${name}@${JSON.parse(manifest).version}`;
  });
}

type SidebarItem = NonNullable<StarlightUserConfig['sidebar']>[number];

// a plugin without a tsconfig can't be converted, and skipping it beats failing every astro command
function discoverPlugins(): string[] {
  return readdirSync(PLUGINS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter(
      (name) =>
        existsSync(join(PLUGINS_DIR, name, 'guest-js/index.ts')) &&
        existsSync(join(PLUGINS_DIR, name, 'tsconfig.json'))
    )
    .sort();
}

// `frontmatterGlobals` comes from typedoc-plugin-frontmatter at runtime, not the bundled types
const sharedTypeDoc: NonNullable<StarlightTypeDocOptions['typeDoc']> & {
  frontmatterGlobals?: Record<string, unknown>;
} = {
  plugin: [
    'typedoc-plugin-mdn-links',
    'typedoc-plugin-frontmatter',
    join(PKG_DIR, 'typedoc-tauri-plugin.mjs'),
  ],
  // kind groups (h2) and symbols (h3), 5 would also list class and enum members
  frontmatterGlobals: { tableOfContents: { maxHeadingLevel: 3 } },
  // plugin sources have TS errors of their own, type-checking them is their CI's job
  skipErrorChecking: true,
  // git detection is unreliable in submodules, and without it the {path} placeholder resolves
  // against `displayBasePath`, not `basePath`
  disableGit: true,
  router: 'module',
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
  // TypeDoc's default order with Functions moved ahead of the type-level groups
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
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: dir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

/** what the docs in one output directory were generated from */
type StampEntry = { revision: string | null; pipeline: string };
type Stamp = Record<string, StampEntry>;

function readStamp(): Stamp {
  try {
    return JSON.parse(readFileSync(STAMP_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function needsGeneration(output: string, revision: string | null, stamp: Stamp): boolean {
  if (!outputIndexExists(output)) return true;
  const entry = stamp[output];
  if (entry?.pipeline !== PIPELINE_HASH) return true;
  // no git, so the pipeline check is all there is
  return revision !== null && entry.revision !== revision;
}

// a flat `.md` here is left over from an older checkout and would shadow the real pages, this
// pipeline only writes per-package directories
function removeStaleFlatFiles(): void {
  if (!existsSync(REF_DIR)) return;
  for (const entry of readdirSync(REF_DIR, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) rmSync(join(REF_DIR, entry.name));
  }
}

/** plugin output directories on disk, whether or not the submodule still has them */
function pluginDirsOnDisk(): string[] {
  if (!existsSync(REF_DIR)) return [];
  return readdirSync(REF_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== 'api')
    .map((entry) => entry.name)
    .sort();
}

function previouslyGeneratedPlugins(): string[] {
  return pluginDirsOnDisk().filter((name) => outputIndexExists(`${REF_BASE}/${name}`));
}

// must be pushed last, Starlight runs plugins in array order. The stamp is only written after
// generation succeeds, so a failed build retries next time. `stalePlugins` were removed or
// renamed upstream and their pages would otherwise keep building
function makeFinalizerPlugin(
  stamp: Stamp,
  generated: Stamp,
  stalePlugins: string[]
): StarlightPlugin {
  return {
    name: 'tauri-typedoc-finalizer',
    hooks: {
      'config:setup'({ command }) {
        if (command === 'preview') return;
        removeStaleFlatFiles();
        const next = { ...stamp, ...generated };
        for (const name of stalePlugins) {
          rmSync(join(REF_DIR, name), { recursive: true, force: true });
          delete next[`${REF_BASE}/${name}`];
        }
        if (Object.keys(generated).length === 0 && stalePlugins.length === 0) return;
        mkdirSync(dirname(STAMP_FILE), { recursive: true });
        writeFileSync(STAMP_FILE, `${JSON.stringify(next, null, 2)}\n`);
      },
    },
  };
}

/** a package whose docs are out of date */
type PackageJob = {
  output: string;
  revision: string | null;
  /** holds the package's `tsconfig.json` */
  dir: string;
  entryPoint: string;
  displayBasePath: string;
  sourceLinkTemplate: string;
};

// starlight-typedoc pulls in TypeDoc and TypeScript, most of a second, so it's only imported
// when something needs generating
async function makePackagePlugins(jobs: PackageJob[]): Promise<StarlightPlugin[]> {
  if (jobs.length === 0) return [];
  const { createStarlightTypeDocPlugin } = await import('starlight-typedoc');
  return jobs.map((job) => {
    // one instance per package, since starlight-typedoc rejects overlapping output dirs. Its
    // sidebar placeholder goes unused, the sidebar is built from what's on disk
    const [instance] = createStarlightTypeDocPlugin();
    return instance({
      tsconfig: join(job.dir, 'tsconfig.json'),
      entryPoints: [join(job.dir, job.entryPoint)],
      output: job.output,
      // otherwise starlight-typedoc emits `prev: false` / `next: false` and hides the links
      pagination: true,
      typeDoc: {
        ...sharedTypeDoc,
        displayBasePath: job.displayBasePath,
        sourceLinkTemplate: job.sourceLinkTemplate,
      },
    });
  });
}

// explicit links, because `autogenerate` over reference/javascript would turn each plugin's
// single page into a one-item group
function buildSidebarItems(
  coreReady: boolean,
  pluginsReady: boolean,
  pluginNames: string[]
): SidebarItem[] {
  // without the submodule the docs on disk stand in, with it the discovered list wins and the
  // finalizer removes leftover directories
  const names = pluginsReady ? pluginNames : previouslyGeneratedPlugins();

  const items: SidebarItem[] = [];
  if (coreReady || outputIndexExists(CORE_OUTPUT)) {
    // Starlight doesn't take a label on an autogenerate entry, so it goes on a wrapping group
    items.push({
      label: 'api',
      collapsed: true,
      items: [{ autogenerate: { directory: CORE_OUTPUT, collapsed: true } }],
    });
  }
  for (const name of names) {
    items.push({ label: name, link: `/${REF_BASE}/${name}/` });
  }
  return items;
}

export async function getTauriTypeDocPlugins(): Promise<{
  plugins: StarlightPlugin[];
  sidebarItems: SidebarItem[];
}> {
  const stamp = readStamp();
  const jobs: PackageJob[] = [];
  const queueIfStale = (job: PackageJob) => {
    if (needsGeneration(job.output, job.revision, stamp)) jobs.push(job);
  };

  const coreReady = existsSync(join(API_PACKAGE, 'node_modules'));
  if (coreReady) {
    queueIfStale({
      output: CORE_OUTPUT,
      revision: submoduleRevision(TAURI_SUBMODULE),
      dir: API_PACKAGE,
      entryPoint: 'src/index.ts',
      displayBasePath: TAURI_SUBMODULE,
      sourceLinkTemplate: 'https://github.com/tauri-apps/tauri/blob/dev/{path}#L{line}',
    });
  } else if (outputIndexExists(CORE_OUTPUT)) {
    console.warn(
      '[typedoc] Tauri V2 submodule is not initialized, serving previously generated @tauri-apps/api docs which may be stale.'
    );
  } else {
    console.warn(
      '[typedoc] Tauri V2 submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  const pluginsReady = existsSync(join(PLUGINS_WORKSPACE, 'node_modules'));
  const pluginNames = pluginsReady ? discoverPlugins() : [];
  if (pluginsReady) {
    const pluginsRevision = submoduleRevision(PLUGINS_WORKSPACE);
    for (const name of pluginNames) {
      queueIfStale({
        output: `${REF_BASE}/${name}`,
        revision: pluginsRevision,
        dir: join(PLUGINS_DIR, name),
        entryPoint: 'guest-js/index.ts',
        displayBasePath: PLUGINS_WORKSPACE,
        sourceLinkTemplate:
          'https://github.com/tauri-apps/plugins-workspace/blob/v2/{path}#L{line}',
      });
    }
  } else {
    console.warn(
      '[typedoc] Plugins workspace submodule is not initialized, respective API routes will not be rendered.'
    );
  }

  const generated: Stamp = Object.fromEntries(
    jobs.map((job) => [job.output, { revision: job.revision, pipeline: PIPELINE_HASH }])
  );
  const stalePlugins = pluginsReady
    ? pluginDirsOnDisk().filter((name) => !pluginNames.includes(name))
    : [];
  const packagePlugins = await makePackagePlugins(jobs);

  return {
    plugins: [...packagePlugins, makeFinalizerPlugin(stamp, generated, stalePlugins)],
    sidebarItems: buildSidebarItems(coreReady, pluginsReady, pluginNames),
  };
}
