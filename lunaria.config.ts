import { defineConfig } from '@lunariajs/core/config';
import siteLocales from './locales.json' with { type: 'json' };
import renderer from './lunaria/renderer.config.ts';

const localeDirs = Object.keys(siteLocales).filter((locale) => locale !== 'root');

const locales = localeDirs.map((dir) => ({ label: siteLocales[dir].label, lang: dir }));

export default defineConfig({
  repository: {
    name: 'tauri-apps/tauri-docs',
    branch: 'v2',
    hosting: 'github',
  },
  sourceLocale: {
    label: 'English',
    lang: 'en',
  },
  locales,
  files: [
    {
      include: ['src/content/docs/**/*.{md,mdx}'],
      exclude: [
        ...localeDirs.map((locale) => `src/content/docs/${locale}/**`),
        'src/content/docs/reference/{acl,javascript}/**/*.{md,mdx}',
        'src/content/docs/reference/{config,cli}.{md,mdx}',
      ],
      pattern: {
        source: 'src/content/docs/@path',
        locales: 'src/content/docs/@lang/@path',
      },
      type: 'universal',
    },
  ],
  tracking: {
    localizableProperty: 'i18nReady',
    ignoredKeywords: [
      'lunaria-ignore',
      'i18n-ignore',
      'typo',
      'en-only',
      'broken link',
      'i18nReady',
      'i18nIgnore',
    ],
  },
  outDir: './dist/contribute/translate-status',
  dashboard: {
    title: 'Tauri Docs Translation Status',
    site: 'https://tauri.app/contribute/translate-status/',
    description:
      'Translation progress tracker for the Tauri Docs site. See how much has been translated in your language and get involved!',
    favicon: {
      external: [
        {
          link: 'https://tauri.app/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
    },
    basesToHide: ['src/content/docs/'],
    customCss: ['./lunaria/style.css'],
    ui: {
      'statusByLocale.heading': 'Translation progress by locale',
      'statusByLocale.incompleteLocalizationLink': 'incomplete translation',
      'statusByLocale.outdatedLocalizationLink': 'outdated translation',
      'statusByLocale.completeLocalization': 'This translation is complete, amazing job! 🎉',
      'statusByFile.heading': 'Translation status by file',
    },
  },
  renderer,
});
