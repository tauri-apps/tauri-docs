import type { OGImageOptions } from 'astro-og-canvas';

/**
 * Width budgets for roughly two rendered lines, in Latin-character units.
 *
 * An approximation, because the real constraint is rendered width and we can't measure that
 * from here. CanvasKit supports `maxLines`/`ellipsis` natively but astro-og-canvas doesn't
 * expose them; once it does, this goes away.
 */
const titleMax = 48;
const descriptionMax = 73;

// CJK glyphs are full-width, about twice an average Latin glyph at the same size; the two
// ranges are CJK punctuation and the full-width forms
const fullWidth = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}　-〿＀-￯]/u;
const widthOf = (grapheme: string) => (fullWidth.test(grapheme) ? 2 : 1);

const graphemes = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

// the Latin and CJK punctuation a cut can leave dangling before the ellipsis
const trailingPunctuation = /[\s.,;:!?\-，。、：；！？]+$/u;

function clampToTwoLines(text: string, maxWidth: number): string {
  let width = 0;
  let kept = '';
  // grapheme segments so an emoji or a combining sequence is never split in two
  for (const { segment } of graphemes.segment(text)) {
    width += widthOf(segment);
    if (width > maxWidth) return kept.replace(trailingPunctuation, '') + '…';
    kept += segment;
  }
  return text;
}

const assetsDir = './src/og/images';

export interface CardInput {
  title: string;
  description?: string;
  fonts: string[];
  families: string[];
}

// design per tauri-apps/tauri-docs#1616
export function cardOptions({
  title,
  description = '',
  fonts,
  families,
}: CardInput): OGImageOptions {
  const text = (size: number) => ({ size, lineHeight: 1.25, weight: 'Normal' as const, families });

  return {
    format: 'WEBP',
    quality: 90,
    title: clampToTwoLines(title, titleMax),
    description: clampToTwoLines(description, descriptionMax),
    padding: 66,
    bgImage: { path: `${assetsDir}/og-bg.png` },
    logo: { path: `${assetsDir}/og-logo.png` },
    font: { title: text(72), description: text(48) },
    fonts,
  };
}
