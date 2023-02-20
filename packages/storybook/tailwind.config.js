/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/storybook/stories/**/*.{js,mdx}'],
  theme: {
    extend: { ...require('../core/tokens') },
  },
  plugins: [],
};
