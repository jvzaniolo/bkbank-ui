module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(require('./lib/components.css.js'));
  },
  {
    theme: {
      extend: { ...require('./theme') },
    },
  },
);
