const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

function parseComponents() {
  const components = fs.readFileSync(
    path.resolve(__dirname, 'styles/index.css'),
    'utf8',
  );
  const root = postcss.parse(components);
  return postcssJs.objectify(root);
}

module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(parseComponents());
  },
  {
    theme: {
      extend: require('./tokens'),
    },
  },
);
