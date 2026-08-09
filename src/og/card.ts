import type { OGImageOptions } from 'astro-og-canvas';

/**
 * Character budgets for roughly two rendered lines.
 *
 * An approximation, because the real constraint is rendered width and we can't measure that
 * from here. CanvasKit supports `maxLines`/`ellipsis` natively but astro-og-canvas doesn't
 * expose them; once it does, this goes away.
 */
const titleMax = 48;
const descriptionMax = 73;

function clampToTwoLines(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/[\s.,;:!?-]+$/, '') + '…';
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
