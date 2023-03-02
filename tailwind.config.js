/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./storybook/stories/**/*.@(js|jsx|ts|tsx|mdx)'],
  theme: {
    extend: { ...require('./packages/ui/theme.ts') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
