// Compiles the Rust code blocks in the docs as rustdoc doctests against the tauri
// and plugin crates from the git submodules.
//
// Each docs page becomes a module whose documentation contains only that page's Rust
// blocks, kept on their original lines so failures point at the .mdx source.
// Blocks are compiled but never run (`no_run`) and follow the rustdoc conventions:
// lines starting with `# ` are compiled but hidden in the rendered docs, and a block
// without `fn main` is wrapped in one.
//
// Docs often show a builder chain on its own (`tauri::Builder::default().setup(..)`),
// so the trailing expression of a block without `fn main` is terminated with a `;`.
//
// usage: node check-rust.mjs [--report] [--all-locales] [--verbose] [paths...] [-- <cargo test args>]
//   paths          only check docs files starting with these paths (relative to the repo root),
//                  e.g. src/content/docs/plugin/
//   --report       print failures but exit successfully
//   --all-locales  also check translated pages
//   --verbose      print the full compiler output of each failure
//
// Blocks marked `ignore` (```rust ignore) are skipped.
import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blocksFor, hasFlag, root } from './extract.mjs';

const separator = process.argv.indexOf('--');
const args = separator === -1 ? process.argv.slice(2) : process.argv.slice(2, separator);
const cargoArgs = separator === -1 ? [] : process.argv.slice(separator + 1);
const report = args.includes('--report');
const paths = args.filter((arg) => !arg.startsWith('--'));
const verbose = args.includes('--verbose');

const packageDir = fileURLToPath(new URL('.', import.meta.url));
// one directory per run so concurrent runs don't clobber each other
const outDir = path.join(packageDir, '.snippets/rust', String(process.pid));

// process.exit drops whatever is still buffered when stdout is a pipe (as in CI),
// so wait for the pending writes to flush first
const exit = async (code) => {
  await new Promise((resolve) => process.stdout.write('', resolve));
  process.exit(code);
};

const blocks = blocksFor(['rust', 'rs'], { allLocales: args.includes('--all-locales') }).filter(
  (block) =>
    !hasFlag(block, 'ignore') &&
    (!paths.length || paths.some((prefix) => block.file.startsWith(prefix.replace(/^\.\//, ''))))
);

if (!blocks.length) {
  console.log('no Rust blocks to check');
  process.exit(0);
}

/** @type {Map<string, import('./extract.mjs').Block[]>} */
const pages = new Map();
for (const block of blocks) {
  if (!pages.has(block.file)) pages.set(block.file, []);
  pages.get(block.file).push(block);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

/** @type {Map<string, string>} module name -> docs file */
const modules = new Map();
const items = [];
for (const [file, pageBlocks] of pages) {
  const source = readFileSync(path.join(root, file), 'utf8').split('\n');
  const lines = source.map(() => '');
  for (const block of pageBlocks) {
    const code = block.code.split('\n');
    lines[block.line - 2] = '```rust,no_run';
    code.forEach((line, i) => (lines[block.line - 1 + i] = line));
    const close = block.line - 1 + code.length;
    if (/\bfn\s+main\s*\(/.test(block.code)) {
      lines[close] = '```';
    } else if (source[close + 1]?.trim()) {
      // no blank line to move the closing fence to
      lines[close - 1] += ' ;';
      lines[close] = '```';
    } else {
      // the `;` takes the closing fence's line and the fence moves to the (blank) line
      // after it, so the following blocks keep their source line numbers
      lines[close] = ';';
      lines[close + 1] = '```';
    }
  }
  let name = file
    .replace(/^src\/content\/docs\//, '')
    .replace(/\.mdx?$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_');
  while (modules.has(name)) name += '_';
  modules.set(name, file);

  const markdown = path.join(outDir, `${name}.md`);
  // rustdoc reports doc lines one less than the line in the file, so pad with one
  writeFileSync(markdown, ['', ...lines].join('\n'));
  items.push(`#[doc = include_str!(${JSON.stringify(markdown)})]\npub mod ${name} {}\n`);
}
writeFileSync(path.join(outDir, 'pages.rs'), items.join('\n'));

const cargo = spawnSync('cargo', ['test', '--doc', '--no-fail-fast', ...cargoArgs], {
  cwd: packageDir,
  env: { ...process.env, DOC_SNIPPETS_PAGES: path.join(outDir, 'pages.rs') },
  encoding: 'utf8',
  stdio: ['inherit', 'pipe', 'pipe'],
  maxBuffer: 1024 * 1024 * 1024,
});
if (cargo.error) throw cargo.error;
const output = cargo.stdout + cargo.stderr;
rmSync(outDir, { recursive: true, force: true });

// test src/lib.rs - develop_calling_rust (line 23) - compile ... FAILED
const testLine = /^test .+? - (\w+) \(line (\d+)\)(?: - compile)? \.\.\. (\w+)/;
const results = [...output.matchAll(new RegExp(testLine.source, 'gm'))];
if (!results.length) {
  console.log(output);
  console.log('could not compile the doc-snippets crate');
  await exit(1);
}

// rustdoc reports the line of the opening fence
const location = (module, line) => `${modules.get(module)}:${line}`;
const failed = results.filter(([, , , status]) => status === 'FAILED');
const codes = new Map();
// ---- src/lib.rs - develop_calling_rust (line 23) stdout ----
for (const section of output.split(/^---- /m).slice(1)) {
  const header = /^.+? - (\w+) \(line (\d+)\)/.exec(section);
  if (!header) continue;
  const source = modules.get(header[1]);
  if (verbose) {
    // the generated markdown keeps the source line numbers, so only the path differs
    const body = section
      .replace(/^[^\n]*\n/, '')
      .replace(/\n(failures:|test result:)[\s\S]*$/, '')
      .replaceAll(path.join(outDir, `${header[1]}.md`), source);
    console.log(`---- ${location(header[1], header[2])}\n${body}`);
    continue;
  }
  const errors = [...section.matchAll(/^error(?:\[(E\d+)\])?: (.*)$/gm)].filter(
    ([, , message]) =>
      !/^aborting due to|^could not compile|^doctest failed|targets? failed/.test(message)
  );
  console.log(`${location(header[1], header[2])}`);
  for (const [, code = 'error', message] of errors) {
    console.log(`  ${code}: ${message}`);
    codes.set(code, (codes.get(code) ?? 0) + 1);
  }
}

console.log(
  `\n${results.length - failed.length}/${results.length} Rust blocks compile, ${failed.length} fail`
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
await exit(failed.length && !report ? 1 : 0);
