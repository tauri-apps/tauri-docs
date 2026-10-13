// @ts-check
// Expressive Code options that cannot be serialized live here instead of astro.config.mjs,
// so the <Code> component gets them too.
import { defineEcConfig } from '@astrojs/starlight/expressive-code';
import { pluginHiddenLines } from './src/plugins/expressive-code-hidden-lines.mjs';

export default defineEcConfig({
  plugins: [pluginHiddenLines()],
});
