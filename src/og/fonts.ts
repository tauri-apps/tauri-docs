import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fontace } from 'fontace';
import { isProductionDeploy } from './env';

// CanvasKit only accepts TTF/OTF and `@fontsource/*` ships woff2 only, so these are fetched
// from the Fontsource API into `node_modules/.cache/` (preserved by Netlify's build cache).
// astro-og-canvas can fetch URLs itself; this layer adds the cross-build cache and a timeout
const catalog = {
  'inter-400': 'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
  'noto-sans-400': 'https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf',
  'noto-sans-sc-400':
    'https://api.fontsource.org/v1/fonts/noto-sans-sc/chinese-simplified-400-normal.ttf',
  'noto-sans-jp-400': 'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
  'noto-sans-kr-400': 'https://api.fontsource.org/v1/fonts/noto-sans-kr/korean-400-normal.ttf',
} as const;

export type FontName = keyof typeof catalog;

const cacheDir = 'node_modules/.cache/og-fonts';

// a stalled Fontsource response would otherwise hang the whole build with nothing in the log
const fetchTimeout = 30_000;

interface LoadedFont {
  file: string;
  family: string;
}

async function ensureFont(name: FontName): Promise<LoadedFont | undefined> {
  const url = catalog[name];
  const file = path.resolve(cacheDir, `${name}.ttf`);

  try {
    let data: Buffer;
    try {
      data = await readFile(file);
    } catch {
      const response = await fetch(url, { signal: AbortSignal.timeout(fetchTimeout) });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
      data = Buffer.from(await response.arrayBuffer());
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, data);
      console.log(`[og] downloaded ${name}.ttf`);
    }

    // read from the file rather than listed above because the name has to be the one CanvasKit
    // reports for it, `Thin` suffixes included (`Noto Sans SC Thin` for the 400 weight); asking
    // for a family the file doesn't carry renders every glyph as a tofu box with no warning
    const { family } = fontace(data);
    if (!family) throw new Error(`${name}.ttf carries no family name`);
    return { file, family };
  } catch (error) {
    // a missing font renders tofu silently, so production fails; elsewhere warn and carry on
    if (isProductionDeploy) throw error;
    console.warn(`[og] skipping ${name}, cards may be missing glyphs:`, error);
    return undefined;
  }
}

export async function fontStack(
  names: readonly FontName[]
): Promise<{ fonts: string[]; families: string[] }> {
  const loaded = (await Promise.all(names.map(ensureFont))).filter((font) => font !== undefined);
  return {
    fonts: loaded.map((font) => font.file),
    families: [...new Set(loaded.map((font) => font.family))],
  };
}
