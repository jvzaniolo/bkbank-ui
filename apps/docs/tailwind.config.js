/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{md,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: { ...require('@bkbank/ui/theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
