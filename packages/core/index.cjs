function objectifyFile(file) {
  const css = require('fs').readFileSync(
    require('path').resolve(__dirname, file),
    'utf8',
  );
  const root = require('postcss').parse(css);
  return require('postcss-js').objectify(root);
}

const plugin = require('tailwindcss/plugin')(
  function ({ addBase, addComponents }) {
    addBase(objectifyFile('./dist/base.css'));
    addComponents(objectifyFile('./dist/components.css'));
    // addUtilities();
    // addVariant();
  },
  {
    theme: {
      extend: { ...require('./theme.cjs') },
    },
    // Only include the plugins if we want to expose their classes
    // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  },
);

module.exports = plugin;
