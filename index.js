const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

function parseComponents() {
  const css = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.css'),
    'utf8',
  );

  const root = postcss.parse(css);
  return postcssJs.objectify(root);
}

module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(parseComponents());
  },
  {
    theme: {
      extend: require('./src/tokens'),
    },
  },
);
