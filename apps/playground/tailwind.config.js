/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: { ...require('@bkbank/ui/theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
