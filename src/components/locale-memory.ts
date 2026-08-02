/**
 * The locale the reader last browsed in, kept in the browser. English-only
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

export function rememberLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // same as above
  }
}
