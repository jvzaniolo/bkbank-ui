/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  theme: {
    extend: {},
  },
  plugins: [require('@bkbank/ui')],
};
