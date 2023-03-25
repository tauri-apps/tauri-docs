import { defineAstroI18nConfig } from 'astro-i18n'
import { nonDefaultLocales } from './locales.js'

let translations = {}

Object.assign(translations, { en: 'src/i18n/en.json' })

nonDefaultLocales.forEach((locale) => {
  Object.assign(translations, { [locale]: `src/i18n/${locale}.json` })
})

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: nonDefaultLocales,
  showDefaultLangCode: false,
  translations,
})

export { nonDefaultLocales }
