import { useTranslations } from '@astrojs/starlight/internal';
import locales from '../../../locales.json';

/**
 * The untranslated-content notice in every locale, serialized once per build
 * rather than per page. Which one to show is decided in the browser (see
 * `release-locale.ts`).
 */
export const untranslatedLabels = JSON.stringify(
  Object.fromEntries(
    Object.entries(locales)
      .filter(([code]) => code !== 'root')
      .map(([code, locale]) => [
        code,
        { lang: locale.lang, text: useTranslations(locale.lang)('i18n.untranslatedContent') },
      ])
  )
);
