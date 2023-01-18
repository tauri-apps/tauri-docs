import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { rehypeTabPlugins } from './src/rehype-tabs/plugins'

// https://astro.build/config
export default defineConfig({
  site: 'https://tauri.app',
  experimental: {
    contentCollections: true,
  },
  integrations: [prefetch(), tailwind(), sitemap()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      ...rehypeTabPlugins()
    ],
  },
})
