/**
 * The reader's language is only known in the browser (`locale-memory`), never
 * at build time. Repoints the header at the remembered locale, reveals the
 * matching untranslated-content notice, and syncs the language picker.
 */
export function applyReleaseLocale(locale: string): void {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-locale-link]')) {
    const path = link.dataset.localeLink as string;
    link.href = locale ? `/${locale}${path}` : path;
  }

  const siteTitle = document.querySelector<HTMLAnchorElement>('a.site-title');
  if (siteTitle) siteTitle.href = locale ? `/${locale}/` : '/';

  const notice = document.querySelector<HTMLElement>('[data-untranslated-labels]');
  if (notice) {
    const labels: Record<string, string> = JSON.parse(notice.dataset.untranslatedLabels ?? '{}');
    const label = labels[locale];
    notice.hidden = !label;
    const text = notice.querySelector('span');
    if (text) text.textContent = label ?? '';
  }

  // both the header and the mobile menu render a picker
  for (const select of document.querySelectorAll<HTMLSelectElement>(
    'tauri-release-lang-select select'
  )) {
    select.value = locale;
  }
}
