const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const plugin = require('tailwindcss/plugin');

function cssToJs(filePath) {
  const css = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  const root = postcss.parse(css);
  return postcssJs.objectify(root);
}

module.exports = plugin(
  function ({ addComponents }) {
    addComponents(cssToJs('./components.css'));
  },
  {
    theme: {
      extend: { ...require('./theme') },
    },
  },
);
