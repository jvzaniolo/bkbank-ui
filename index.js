function cssToJS(file) {
  const css = require('fs').readFileSync(
    require('path').resolve(__dirname, file),
    'utf8',
  );
  const root = require('postcss').parse(css);
  return require('postcss-js').objectify(root);
}

module.exports = require('tailwindcss/plugin')(
  function ({ addBase, addComponents }) {
    addBase(cssToJS('./dist/base.css'));
    addComponents(cssToJS('./dist/components.css'));
  },
  {
    theme: {
      extend: { ...require('./packages/core/tokens') },
    },
  },
);
