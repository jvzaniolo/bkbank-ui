import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import plugin from 'tailwindcss/plugin';

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
      extend: { ...require('../theme') },
    },
  },
);
