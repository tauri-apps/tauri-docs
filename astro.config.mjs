import { defineConfig } from 'astro/config'

import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import Unocss from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollections: true,
  },
  integrations: [
    prefetch(),
    tailwind(),
    Unocss({
      presets: [presetIcons()],
    }),
  ],
})
