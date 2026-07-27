/**
 * Release pages are English-only and live at unprefixed URLs, so none of this
 * can be decided at build time: the reader's language is only known from
 * `locale-memory`, in the browser.
 *
 * Repoints the header at the remembered locale, reveals the matching
 * untranslated-content notice, and syncs the language picker.
 */
export function applyReleaseLocale(locale: string): void {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-locale-link]')) {
    const path = link.dataset.localeLink ?? link.pathname;
    link.href = locale ? `/${locale}${path}` : path;
  }

  const siteTitle = document.querySelector<HTMLAnchorElement>('a.site-title');
  if (siteTitle) siteTitle.href = locale ? `/${locale}/` : '/';

  for (const notice of document.querySelectorAll<HTMLElement>('[data-untranslated-locale]')) {
    notice.hidden = notice.dataset.untranslatedLocale !== locale;
  }

  // Both the header and the mobile menu render a picker.
  for (const select of document.querySelectorAll<HTMLSelectElement>(
    'tauri-release-lang-select select'
  )) {
    select.value = locale;
  }
}
