/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.{js,jsx,ts,tsx,mdx}'],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [require('@bkbank/ui')],
};
