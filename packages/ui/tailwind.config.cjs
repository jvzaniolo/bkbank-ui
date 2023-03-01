/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: { ...require('./theme.cjs') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
