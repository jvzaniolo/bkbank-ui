module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './packages/core/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
