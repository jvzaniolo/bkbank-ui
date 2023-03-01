/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  theme: {
    extend: { ...require('@bkbank/ui/theme.cjs') },
  },
  plugins: [require('@tailwindcss/forms')],
};
