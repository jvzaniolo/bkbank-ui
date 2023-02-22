function cssToJS(file) {
  const css = require('fs').readFileSync(
    require('path').resolve(__dirname, file),
    'utf8',
  );
  const root = require('postcss').parse(css);
  return require('postcss-js').objectify(root);
}

module.exports = require('tailwindcss/plugin')(
  function ({ addBase, addComponents, addUtilities, addVariant }) {
    addBase(cssToJS('./dist/base.css'));
    addComponents(cssToJS('./dist/components.css'));
    // addUtilities();
    // addVariant();
  },
  {
    theme: {
      extend: { ...require('./packages/core/theme') },
    },
    // Only include the plugins if we want to expose their classes
    // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  },
);
