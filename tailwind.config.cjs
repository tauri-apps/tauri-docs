const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [{ pattern: /pl-(2|4|6|8|10|12)/ }],
  theme: {
    borderRadius: {
      none: '0',
      DEFAULT: '6px',
      lg: '16px',
    },
    colors: {
      transparent: 'transparent',
      'base-100': 'rgb(var(--color-base-100) / <alpha-value>)',
      'base-200': 'rgb(var(--color-base-200) / <alpha-value>)',
      'base-300': 'rgb(var(--color-base-300) / <alpha-value>)',
      'base-content': 'rgb(var(--color-base-content) / <alpha-value>)',
      'content-hover': 'rgba(var(--color-content-hover))',
      border: 'rgb(var(--color-border) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      info: 'rgb(var(--color-info) / <alpha-value>)',
      success: 'rgb(var(--color-success) / <alpha-value>)',
      caution: 'rgb(var(--color-caution) / <alpha-value>)',
      danger: 'rgb(var(--color-danger) / <alpha-value>)',
    },
    zIndex: {
      dropdown: '1',
      nav: '2',
      'mobile-nav': '3',
      'nav-dropdown': '4',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
        mono: ['IBM Plex Mono', ...fontFamily.mono],
        ...fontFamily,
      },
    },
  },
}
