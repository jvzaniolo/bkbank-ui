/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: { ...require('./src/lib/theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
