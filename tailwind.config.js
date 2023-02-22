/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/storybook/stories/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: { ...require('./packages/core/theme') },
  },
  plugins: [],
};
