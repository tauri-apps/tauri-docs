import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import i18n from 'astro-i18n'
import Icons from 'unplugin-icons/vite'
import { extractImageClass } from './src/plugins/remark-extract-image-class'

// https://astro.build/config
export default defineConfig({
  site: 'https://tauri-dev.netlify.app',
  integrations: [i18n(), prefetch(), tailwind(), sitemap()],
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
  markdown: {
    remarkPlugins: [extractImageClass],
  },
})
