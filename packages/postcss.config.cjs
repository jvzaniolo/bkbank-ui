module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './packages/tailwind.config.cjs',
    },
    autoprefixer: {},
  },
};
