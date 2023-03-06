/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/stories/**/*.@(js|jsx|ts|tsx|mdx)',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { ...require('./theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
