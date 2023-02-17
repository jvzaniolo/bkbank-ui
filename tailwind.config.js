/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.css'],
  theme: {
    extend: require('./src/tokens'),
  },
  plugins: [],
};
