/**
 * The reader's locale, kept in the browser: the last non-English locale they
 * browsed, or whatever they last picked in the language selector. English-only
 * sections (`/release/*`, `/blog/*`) have no locale in their URLs, so this is
 * the only way they can point the header back at the reader's locale.
 * Empty string = English (Starlight's `root` locale).
 */
import locales from '../../locales.json';

const LOCALE_KEY = 'tauri-docs-locale';

// `root` is English, which is spelled '' here and never appears in a URL
const KNOWN = new Set(Object.keys(locales).filter((code) => code !== 'root'));

export function isKnownLocale(locale: string): boolean {
  return KNOWN.has(locale);
}

export function readRememberedLocale(): string {
  try {
    const stored = localStorage.getItem(LOCALE_KEY) ?? '';
    // a decommissioned locale reads as English rather than a dead prefix
    return isKnownLocale(stored) ? stored : '';
  } catch {
    // storage blocked (private mode, cookie settings): nothing was remembered
    return '';
  }
}

/**
 * browsing signal: never records English. English URLs are the form links get
 * shared in, so landing on one says nothing about the reader's preference;
 * only `recordPickedLocale` can set the locale back to English
 */
export function recordBrowsedLocale(locale: string): void {
  if (locale) recordPickedLocale(locale);
}

/** an explicit selector pick always records, including English ('') */
export function recordPickedLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // same as `readRememberedLocale`
  }
}
