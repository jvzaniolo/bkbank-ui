/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [{ content: 'raw' }],
  theme: {
    extend: {},
  },
  plugins: [require('./src')],
}
