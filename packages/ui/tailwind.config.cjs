/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: { ...require('./theme.ts') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
