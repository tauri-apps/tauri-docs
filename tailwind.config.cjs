const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [{ pattern: /pl-(4|8|12|16|20|24)/ }],
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
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.base-content'),
            '--tw-prose-headings': theme('colors.base-content'),
            '--tw-prose-lead': theme('colors.base-content/75'),
            '--tw-prose-links': theme('colors.base-content'),
            '--tw-prose-bold': theme('colors.base-content'),
            '--tw-prose-counters': theme('colors.base-content/50'),
            '--tw-prose-bullets': theme('colors.base-content/50'),
            '--tw-prose-hr': theme('colors.base-content/25'),
            '--tw-prose-quotes': theme('colors.base-content'),
            '--tw-prose-quote-borders': theme('colors.base-content/25'),
            '--tw-prose-captions': theme('colors.base-content/75'),
            '--tw-prose-code': theme('colors.base-content'),
            '--tw-prose-pre-code': theme('colors.base-content/15'),
            '--tw-prose-pre-bg': theme('colors.base-content'),
            '--tw-prose-th-borders': theme('colors.base-content/25'),
            '--tw-prose-td-borders': theme('colors.base-content/25'),
            maxWidth: 'unset',
            // overflowWrap: 'anywhere',
            // pre: {
            //   whiteSpace: 'pre-wrap',
            //   wordBreak: 'break-word',
            // },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
