import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://tauri.app',
  integrations: [prefetch(), tailwind(), sitemap()],
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
})
