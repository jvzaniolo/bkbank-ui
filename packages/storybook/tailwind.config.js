/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/storybook/**/*.{js,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('../../index')],
};
