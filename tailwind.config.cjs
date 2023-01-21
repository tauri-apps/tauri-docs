const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'base-100': 'rgb(var(--color-base-100) / <alpha-value>)',
      'base-200': 'rgb(var(--color-base-200) / <alpha-value>)',
      'base-300': 'rgb(var(--color-base-300) / <alpha-value>)',
      'base-content': 'rgb(var(--color-base-content) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Rubik', ...fontFamily.sans],
        mono: ['IBM Plex Mono', ...fontFamily.mono],
      },
    },
  },
}
