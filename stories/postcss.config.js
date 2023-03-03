module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './stories/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
