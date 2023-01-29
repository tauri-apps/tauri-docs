import { defineAstroI18nConfig } from 'astro-i18n'

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['fr', 'zh-cn', 'ko', 'it'],
  showDefaultLangCode: false,
  translations: {
    en: 'src/i18n/en.json',
    fr: 'src/i18n/fr.json',
    'zh-cn': 'src/i18n/zh-cn.json',
    ko: 'src/i18n/ko.json',
    it: 'src/i18n/it.json',
  },
  routeTranslations: {},
})
