const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Rubik', ...fontFamily.sans],
        mono: ['IBM Plex Mono', ...fontFamily.mono],
      },
    },
  },
}
