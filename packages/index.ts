import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import tailwindPlugin from 'tailwindcss/plugin';

function objectifyFile(file: string) {
  const css = fs.readFileSync(path.resolve(__dirname, file), 'utf8');
  const root = postcss.parse(css);
  return postcssJs.objectify(root);
}

const plugin = tailwindPlugin(
  function ({ addBase, addComponents }) {
    addBase(objectifyFile('./core/base.css'));
    addComponents(objectifyFile('./core/components.css'));
    // addUtilities();
    // addVariant();
  },
  {
    theme: {
      extend: { ...require('./core/theme') },
    },
    // Only include the plugins if we want to expose their classes
    // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  },
);

module.exports = plugin;
