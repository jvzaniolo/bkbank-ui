module.exports = {
  '.btn': {
    '@apply rounded px-6 py-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2':
      '',
    '&.btn-md': { '@apply py-3': '' },
    '&.btn-lg': { '@apply py-4 text-base': '' },
    '&.btn-solid': {
      '&.btn-primary': {
        '@apply bg-primary-pure text-white hover:bg-primary-medium active:bg-primary-dark disabled:bg-high-dark disabled:text-high-medium focus:ring-primary-lighter':
          '',
      },
      '&.btn-secondary': {
        '@apply bg-secondary-pure text-white hover:bg-secondary-medium focus:ring-secondary-lighter active:bg-secondary-dark disabled:bg-high-dark disabled:text-high-medium':
          '',
      },
    },
    '&.btn-outline': {
      '@apply border disabled:bg-transparent': '',
      '&.btn-primary': {
        '@apply border-primary-pure text-primary-pure hover:bg-primary-medium hover:text-white focus:ring-primary-lighter active:bg-primary-dark disabled:border-high-dark disabled:bg-transparent disabled:text-high-dark':
          '',
      },
      '&.btn-secondary': {
        '@apply border-secondary-pure text-secondary-pure hover:bg-secondary-medium hover:text-white focus:ring-secondary-lighter active:bg-secondary-dark disabled:border-high-dark disabled:bg-transparent disabled:text-high-dark':
          '',
      },
    },
    '&.btn-ghost': {
      '&.btn-primary': {
        '@apply text-primary-pure hover:bg-high-light focus:ring-primary-lighter active:bg-high-dark disabled:bg-transparent disabled:text-high-dark':
          '',
      },
      '&.btn-secondary': {
        '@apply text-secondary-pure hover:bg-high-light focus:ring-secondary-lighter active:bg-high-dark disabled:bg-transparent disabled:text-high-dark':
          '',
      },
    },
  },
}
