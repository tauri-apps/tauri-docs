/**
 * The reader's locale, kept in the browser: the last non-English locale they
 * browsed, or whatever they last picked in the language selector. English-only
 * sections (`/release/*`, `/blog/*`) have no locale in their URLs, so this is
 * the only way they can point the header back at the reader's locale.
 * Empty string = English (Starlight's `root` locale).
 */
const LOCALE_KEY = 'tauri-docs-locale';

export function readRememberedLocale(): string {
  try {
    return localStorage.getItem(LOCALE_KEY) ?? '';
  } catch {
    // storage blocked (private mode, cookie settings): nothing was remembered
    return '';
  }
}

/**
 * browsing signal: never records English. English URLs are the form links get
 * shared in, so landing on one says nothing about the reader's preference;
 * only recordPickedLocale can set the locale back to English
 */
export function recordBrowsedLocale(locale: string): void {
  if (locale) recordPickedLocale(locale);
}

/** an explicit selector pick always records, including English ('') */
export function recordPickedLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // same as readRememberedLocale
  }
}
