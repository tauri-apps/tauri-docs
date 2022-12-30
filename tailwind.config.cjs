/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#24C8DB',
          secondary: '#2F2F2F',
          accent: '#FFC131',
          neutral: '#f6f6f6',
          'base-100': '#0F0F0F',
          'base-200': '#222222',
          'base-300': '#333333',
          info: '#24C8DB',
          success: '#23db69',
          warning: '#FFC131',
          error: '#db2c23',
        },
      },
    ],
  },
}
