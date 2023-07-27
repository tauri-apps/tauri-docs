import { TranslationStatusBuilder } from './lib/translation-status/builder';
import { locales } from '../../astro.config.mjs';

const translationStatusBuilder = new TranslationStatusBuilder({
  pageSourceDir: '../../src/content/docs',
  htmlOutputFilePath: './dist/index.html',
  sourceLanguage: 'en',
  targetLanguages: Object.values(locales)
    .map((el) => el.lang)
    .filter((lang) => lang !== 'en')
    .sort(),
  languageLabels: Object.values(locales)
    .filter((loc) => loc.lang !== 'en')
    .reduce((acc, curr) => ({ [curr.lang]: curr.label, ...acc }), {}),
  githubRepo: process.env.GITHUB_REPOSITORY || 'tauri-apps/tauri-docs',
  githubToken: process.env.GITHUB_TOKEN,
});

await translationStatusBuilder.run();
