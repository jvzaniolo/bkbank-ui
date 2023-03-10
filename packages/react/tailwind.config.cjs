/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      ...require('@bkbank/ui/theme'),
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
