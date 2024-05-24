import { TranslationStatusBuilder } from './lib/translation-status/builder';
import locales from '../../locales.json';

const translationStatusBuilder = new TranslationStatusBuilder({
  pageSourceDir: '../../src/content/docs',
  htmlOutputFilePath: '../../dist/contribute/translate-status.html',
  sourceLanguage: 'en',
  targetLanguages: Object.values(locales)
    .reduce((acc, { lang }) => (lang !== 'en' ? [lang, ...acc] : acc), [])
    .sort(),
  languageLabels: Object.values(locales)
    .filter((loc) => loc.lang !== 'en')
    .reduce((acc, curr) => ({ [curr.lang]: curr.label, ...acc }), {}),
  githubRepo: process.env.GITHUB_REPOSITORY || 'tauri-apps/tauri-docs',
  gitHubRef: 'v2',
  githubToken: process.env.GITHUB_TOKEN,
});

await translationStatusBuilder.run();
