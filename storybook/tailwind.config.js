/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./storybook/stories/**/*.{js,jsx,ts,tsx,mdx}'],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [require('../index')],
};
