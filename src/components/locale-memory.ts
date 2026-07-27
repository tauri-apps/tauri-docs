/**
 * The locale the reader last browsed in, kept in the browser.
 *
 * `/release/*` and `/blog/*` are English-only sections whose URLs carry no
 * locale prefix, so on those pages Starlight resolves the root locale and a
 * reader who walked in from the French docs would be dropped back into English
 * on the way out. Remembering the locale is what lets those pages point the
 * header where the reader came from and show the untranslated-content notice.
 *
 * The empty string is English (Starlight's `root` locale).
 */
export const LOCALE_KEY = 'tauri-docs-locale';

export function readRememberedLocale(): string {
  try {
    return localStorage.getItem(LOCALE_KEY) ?? '';
  } catch {
    // Storage blocked (private mode, cookie settings): nothing was remembered.
    return '';
  }
}

export function rememberLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // Same as above - the reader just gets the English chrome.
  }
}
