module.exports = require('tailwindcss/plugin')(
  function ({ addBase, addComponents }) {
    addBase(require('./lib/css-to-js')('./dist/base.css'));
    addComponents(require('./lib/css-to-js')('./dist/components.css'));
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
