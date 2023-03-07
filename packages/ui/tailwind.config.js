/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: { ...require('./theme') },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
