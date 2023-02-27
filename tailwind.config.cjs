/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./storybook/stories/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: { ...require('./dist/core/theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
