import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import plugin from 'tailwindcss/plugin';

function cssToJs(filePath: string) {
  const css = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  const root = postcss.parse(css);
  return postcssJs.objectify(root);
}

module.exports = plugin(
  function ({ addBase, addComponents }) {
    addBase(cssToJs('./base.css'));
    addComponents(cssToJs('./components.css'));
    // addUtilities();
    // addVariant();
  },
  {
    theme: {
      extend: { ...require('../theme') },
    },
    // Only include the plugins if we want to expose their classes
    // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  },
);
