import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// CanvasKit only accepts TTF/OTF and `@fontsource/*` ships woff2 only, so these are fetched
// from the Fontsource API into `node_modules/.cache/` (preserved by Netlify's build cache).
// `family` must match what CanvasKit reports for the file, `Thin` suffixes included; a
// mismatch doesn't warn, the card just renders tofu.
const catalog = {
  'inter-400': {
    file: 'inter-400.ttf',
    url: 'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
    family: 'Inter',
  },
  'noto-sans-400': {
    file: 'noto-sans-400.ttf',
    url: 'https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf',
    family: 'Noto Sans',
  },
  'noto-sans-sc-400': {
    file: 'noto-sans-sc-400.ttf',
    url: 'https://api.fontsource.org/v1/fonts/noto-sans-sc/chinese-simplified-400-normal.ttf',
    family: 'Noto Sans SC Thin',
  },
  'noto-sans-jp-400': {
    file: 'noto-sans-jp-400.ttf',
    url: 'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
    family: 'Noto Sans JP Thin',
  },
  'noto-sans-kr-400': {
    file: 'noto-sans-kr-400.ttf',
    url: 'https://api.fontsource.org/v1/fonts/noto-sans-kr/korean-400-normal.ttf',
    family: 'Noto Sans KR Thin',
  },
} as const;

export type FontName = keyof typeof catalog;

const cacheDir = 'node_modules/.cache/og-fonts';

async function ensureFont(name: FontName): Promise<string | undefined> {
  const { file: filename, url } = catalog[name];
  const file = path.resolve(cacheDir, filename);
  try {
    await access(file);
    return file;
  } catch {}

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${url}`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await response.arrayBuffer()));
    console.log(`[og] downloaded ${filename}`);
    return file;
  } catch (error) {
    // a missing font renders tofu silently, so production fails; elsewhere warn and carry on
    if (process.env.CONTEXT === 'production') throw error;
    console.warn(`[og] could not fetch ${filename}, cards may be missing glyphs:`, error);
    return undefined;
  }
}

export async function fontStack(
  names: readonly FontName[]
): Promise<{ fonts: string[]; families: string[] }> {
  const loaded = (
    await Promise.all(names.map(async (name) => [name, await ensureFont(name)] as const))
  ).filter((entry): entry is readonly [FontName, string] => typeof entry[1] === 'string');

  return {
    fonts: loaded.map(([, file]) => file),
    families: [...new Set(loaded.map(([name]) => catalog[name].family))],
  };
}
