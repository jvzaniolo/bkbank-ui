module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(require('./dist/components.css.js'));
  },
  {
    theme: {
      extend: { ...require('./theme') },
    },
  },
);
