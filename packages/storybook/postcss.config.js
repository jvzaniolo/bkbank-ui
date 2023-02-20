module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './packages/storybook/tailwind.config.js',
    },
    autoprefixer: {},
  },
};
