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
  ],
};
