import { defineAstroI18nConfig } from 'astro-i18n'

export const nonEnglishLocales = ['fr', 'zh-cn', 'ko', 'it']

let translations = {}

Object.assign(translations, { en: 'src/i18n/en.json' })

nonEnglishLocales.forEach((locale) => {
  Object.assign(translations, { [locale]: `src/i18n/${locale}.json` })
})

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: nonEnglishLocales,
  showDefaultLangCode: false,
  translations,
  routeTranslations: {},
})
