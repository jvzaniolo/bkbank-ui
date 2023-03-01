/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.@(js|jsx|ts|tsx|mdx)'],
  theme: {
    extend: { ...require('./packages/ui/theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
