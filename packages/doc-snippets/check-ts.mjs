// Type checks the TypeScript and JavaScript code blocks in the docs against the
// @tauri-apps/api and plugin sources from the git submodules.
//
// usage: node check-ts.mjs [--report] [--all-locales] [--verbose]
//   --report       print failures but exit successfully
//   --all-locales  also check translated pages
//   --verbose      also print errors reported outside the snippets (environment issues)
//
// Blocks marked `ignore` (```ts ignore) are skipped.
import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blocksFor, hasFlag, root } from './extract.mjs';

const args = process.argv.slice(2);
const report = args.includes('--report');
const verbose = args.includes('--verbose');

const packageDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = path.join(packageDir, '.snippets/ts');
const tsc = path.join(packageDir, 'node_modules/.bin/tsc');

const api = path.join(root, 'packages/tauri/packages/api/src');
const plugins = path.join(root, 'packages/plugins-workspace/plugins');

// TypeScript snippets are checked in strict mode, JavaScript ones only for API misuse.
const programs = [
  {
    name: 'ts',
    langs: { ts: 'ts', typescript: 'ts', tsx: 'tsx' },
    compilerOptions: { strict: true },
  },
  {
    name: 'js',
    langs: { js: 'js', javascript: 'js', jsx: 'jsx' },
    compilerOptions: { strict: false },
  },
];

const allBlocks = blocksFor(
  programs.flatMap((program) => Object.keys(program.langs)),
  { allLocales: args.includes('--all-locales') }
).filter((block) => !hasFlag(block, 'ignore'));

/** @type {Map<import('./extract.mjs').Block, string[]>} */
const failures = new Map();
const codes = new Map();
const external = new Set();

rmSync(outDir, { recursive: true, force: true });

for (const program of programs) {
  const dir = path.join(outDir, program.name);
  /** @type {Map<string, import('./extract.mjs').Block>} */
  const byPath = new Map();
  for (const block of allBlocks.filter((block) => block.lang in program.langs)) {
    const name = block.file.replace(/^src\/content\/docs\//, '').replace(/\.mdx?$/, '');
    const file = path.join(dir, 'snippets', name, `L${block.line}.${program.langs[block.lang]}`);
    mkdirSync(path.dirname(file), { recursive: true });
    // every snippet is its own module so top-level names don't collide
    writeFileSync(file, `${block.code}\nexport {};\n`);
    byPath.set(path.relative(dir, file), block);
  }

  const tsconfig = {
    compilerOptions: {
      target: 'esnext',
      module: 'esnext',
      moduleResolution: 'bundler',
      lib: ['esnext', 'dom', 'dom.iterable'],
      jsx: 'react-jsx',
      allowJs: true,
      checkJs: true,
      noEmit: true,
      skipLibCheck: true,
      types: ['node', 'mocha', '@wdio/globals/types'],
      paths: {
        '@tauri-apps/api': [path.join(api, 'index.ts')],
        '@tauri-apps/api/*': [path.join(api, '*')],
        '@tauri-apps/plugin-*': [path.join(plugins, '*/guest-js/index.ts')],
      },
      ...program.compilerOptions,
    },
    include: ['snippets', path.join(api, 'global.d.ts'), path.join(packageDir, 'env.d.ts')],
    exclude: [],
  };

  // tsc only reports semantic errors once every file parses, so snippets with
  // syntax errors are reported and excluded before the semantic pass.
  while (true) {
    writeFileSync(path.join(dir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
    const result = spawnSync(tsc, ['-p', dir, '--pretty', 'false'], { cwd: dir, encoding: 'utf8' });
    if (result.error) throw result.error;

    const failed = new Set();
    for (const line of result.stdout.split('\n')) {
      const diagnostic = /^(.+?)\((\d+),(\d+)\): error (TS\d+): (.*)$/.exec(line);
      if (!diagnostic) continue;
      const [, file, row, , code, message] = diagnostic;
      const block = byPath.get(path.normalize(file));
      if (!block) {
        // the api sources only type check in strict mode
        if (program.compilerOptions.strict) external.add(line);
        continue;
      }
      failed.add(path.normalize(file));
      if (!failures.has(block)) failures.set(block, []);
      failures.get(block).push(`${block.file}:${block.line + Number(row) - 1} ${code}: ${message}`);
      codes.set(code, (codes.get(code) ?? 0) + 1);
    }
    // a pass with syntax errors (TS1xxx) stopped before the semantic checks
    if (!/: error TS1\d{3}: /.test(result.stdout)) break;
    tsconfig.exclude.push(...failed);
  }
}

for (const messages of failures.values()) for (const message of messages) console.log(message);
if (verbose) for (const line of external) console.log(`(outside snippets) ${line}`);
console.log(
  `\n${allBlocks.length - failures.size}/${allBlocks.length} TS/JS blocks type check, ${failures.size} fail` +
    (external.size ? ` (${external.size} errors outside snippets, see --verbose)` : '')
);
if (codes.size) {
  console.log(
    'errors by code:',
    [...codes]
      .sort((a, b) => b[1] - a[1])
      .map(([code, count]) => `${code}×${count}`)
      .join(' ')
  );
}
process.exit(failures.size && !report ? 1 : 0);
