module.exports = require('tailwindcss/plugin')(
  function ({ addComponents, theme }) {
    addComponents(require('./packages/core/components')(theme));
  },
  {
    theme: {
      extend: { ...require('./packages/core/tokens') },
    },
  },
);
