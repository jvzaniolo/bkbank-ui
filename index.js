module.exports = require('tailwindcss/plugin')(
  function ({ addBase, addComponents }) {
    addBase(require('./dist/base'));
    addComponents(require('./dist/components'));
  },
  {
    theme: {
      extend: { ...require('./packages/core/tokens') },
    },
  },
);
