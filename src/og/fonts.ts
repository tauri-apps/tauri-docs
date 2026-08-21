import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// CanvasKit only accepts TTF/OTF and `@fontsource/*` ships woff2 only, so these are fetched
// from the Fontsource API into `node_modules/.cache/` (preserved by Netlify's build cache).
// `family` must match what CanvasKit reports for the file, `Thin` suffixes included; a
// mismatch doesn't warn, the card just renders tofu — so `ensureFont` checks it against the
// file's own name table.
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

// a stalled Fontsource response would otherwise hang the whole build with nothing in the log
const fetchTimeout = 30_000;

/**
 * The font family from a TrueType/OpenType `name` table (name ID 1, the one CanvasKit's
 * `FontMgr.getFamilyName` reports). Enough of the format to read one string; not a parser.
 */
export function familyNameOf(font: Buffer): string | undefined {
  const view = new DataView(font.buffer, font.byteOffset, font.byteLength);
  const tableCount = view.getUint16(4);
  for (let i = 0; i < tableCount; i++) {
    const record = 12 + i * 16;
    if (font.toString('latin1', record, record + 4) !== 'name') continue;
    const table = view.getUint32(record + 8);
    const count = view.getUint16(table + 2);
    const strings = table + view.getUint16(table + 4);
    let fallback: string | undefined;
    for (let j = 0; j < count; j++) {
      const entry = table + 6 + j * 12;
      const platform = view.getUint16(entry);
      const language = view.getUint16(entry + 4);
      const nameId = view.getUint16(entry + 6);
      if (nameId !== 1) continue;
      const length = view.getUint16(entry + 8);
      const offset = strings + view.getUint16(entry + 10);
      // Windows platform strings are UTF-16BE; prefer the English one, keep any as fallback
      if (platform !== 3) continue;
      const value = Buffer.from(font.subarray(offset, offset + length))
        .swap16()
        .toString('utf16le');
      if (language === 0x0409) return value;
      fallback ??= value;
    }
    return fallback;
  }
  return undefined;
}

async function ensureFont(name: FontName): Promise<string | undefined> {
  const { file: filename, url, family } = catalog[name];
  const file = path.resolve(cacheDir, filename);

  try {
    let data: Buffer;
    try {
      await access(file);
      data = await readFile(file);
    } catch {
      const response = await fetch(url, { signal: AbortSignal.timeout(fetchTimeout) });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${url}`);
      data = Buffer.from(await response.arrayBuffer());
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, data);
      console.log(`[og] downloaded ${filename}`);
    }

    const actual = familyNameOf(data);
    if (actual !== family) {
      throw new Error(
        `${filename} reports family ${JSON.stringify(actual)}, catalog says ${JSON.stringify(family)}`
      );
    }
    return file;
  } catch (error) {
    // a missing or misnamed font renders tofu silently, so production fails; elsewhere warn
    // and carry on
    if (process.env.CONTEXT === 'production') throw error;
    console.warn(`[og] skipping ${filename}, cards may be missing glyphs:`, error);
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
