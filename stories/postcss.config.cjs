module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './stories/tailwind.config.cjs',
    },
    autoprefixer: {},
  },
};
