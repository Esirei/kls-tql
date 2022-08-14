const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EF2C5A',
        secondary: '#FFFBF7',
      },

      fontFamily: {
        sans: ['General Sans', ...defaultTheme.fontFamily.sans],
        'sans-alt': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    plugin(({ addVariant }) => {
      ['compact'].forEach(variant => {
        addVariant(variant, [`&.${variant}`, `:merge(.${variant}), &`]);
      });
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        '*': {
          scrollbarWidth: theme('scrollbar.moz-width', 'thin'),
          scrollbarColor: `${theme('scrollbar.thumb-color', 'lightgray')} ${theme(
            'scrollbar.track-color',
            '#FFF',
          )}`,
        },

        '::-webkit-scrollbar': {
          width: theme('scrollbar.width', '12px'),
          height: theme('scrollbar.height', '12px'),
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme('scrollbar.thumb-color', 'lightgray'),
          borderRadius: theme('scrollbar.radius', '12px'),
          border: `3px solid ${theme('scrollbar.track-color', '#FFF')}`,
          '&:hover': {
            backgroundColor: theme('scrollbar.hover.thumb-color', 'gray'),
          },
        },

        '::-webkit-scrollbar-track': {
          background: theme('scrollbar.track-color', '#FFF'),
        },
      });
    }),
  ],
};
