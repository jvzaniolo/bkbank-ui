/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ raw: '' }],
  theme: {
    extend: { ...require('./packages/core/tokens') },
  },
  plugins: [],
};
