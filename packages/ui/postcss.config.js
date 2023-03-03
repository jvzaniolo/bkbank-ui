module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './packages/ui/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
