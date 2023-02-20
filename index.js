module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(require('./dist/components'));
  },
  {
    theme: {
      extend: { ...require('./packages/core/tokens') },
    },
  },
);
