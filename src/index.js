module.exports = require('tailwindcss/plugin')(
  function ({ addComponents }) {
    addComponents(require('./components'));
  },
  {
    theme: {
      extend: {
        fontSize: {
          '2xs': '0.625rem',
        },
        colors: {
          primary: {
            lightest: '#E0E0FF',
            lighter: '#9EA4FD',
            light: '#696FCA',
            medium: '#000080',
            pure: '#00003C',
            dark: '#000019',
          },
          secondary: {
            lightest: '#D7E2FF ',
            lighter: '#ACC7FF',
            light: '#6590DE',
            medium: '#2E5DA8',
            pure: '#2B4A7E',
            dark: '#002F67',
          },
          highlight: {
            lightest: '#BEF9FF ',
            lighter: '#96F5FE',
            light: '#41EFFF',
            pure: '#00CDDF',
            medium: '#00BFD0',
            dark: '#009AA8',
          },
          success: {
            light: '#40E4B8',
            pure: '#00BA88',
            medium: '#00976E',
            dark: '#004D38',
          },
          warning: {
            light: '#F4A360',
            pure: '#EB7E24',
            medium: '#DB6300',
            dark: '#9D4700',
          },
          error: {
            light: '#F3635F',
            pure: '#DE3730',
            medium: '#BD0600',
            dark: '#770300',
          },
          high: {
            light: '#F2F2F2',
            pure: '#FFFFFF',
            medium: '#E0E0E0',
            dark: '#BFBFBF',
          },
          low: {
            light: '#A4A4A4',
            pure: '#000000',
            medium: '#7A7A7A',
            dark: '#2F2F2F',
          },
        },
      },
    },
  },
);
