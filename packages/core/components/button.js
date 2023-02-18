module.exports = theme => ({
  '.btn': {
    borderRadius: theme('borderRadius.DEFAULT'),
    padding: `${theme('spacing.2')} ${theme('spacing.6')}`,
    fontSize: theme('fontSize.sm'),
    fontWeight: theme('fontWeight.medium'),
    transitionProperty: theme('transitionProperty.colors'),
    transitionDuration: theme('transitionDuration.DEFAULT'),
    transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),

    '&.btn-md': {
      paddingBlock: theme('spacing.3'),
    },
    '&.btn-lg': {
      fontSize: theme('fontSize.base'),
      paddingBlock: theme('spacing.4'),
    },

    '&.btn-solid': {
      '&.btn-primary': {
        backgroundColor: theme('colors.primary.pure'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.primary.medium'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.primary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.primary.dark'),
        },
        '&:disabled': {
          color: theme('colors.high.medium'),
          backgroundColor: theme('colors.high.dark'),
        },
      },
      '&.btn-secondary': {
        backgroundColor: theme('colors.secondary.pure'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.secondary.medium'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.secondary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.secondary.dark'),
        },
        '&:disabled': {
          backgroundColor: theme('colors.high.dark'),
          color: theme('colors.high.medium'),
        },
      },
    },

    '&.btn-outline': {
      border: `${theme('borderWidth.DEFAULT')} solid transparent`,
      '&.btn-primary': {
        color: theme('colors.primary.pure'),
        borderColor: theme('colors.primary.pure'),
        '&:hover': {
          backgroundColor: theme('colors.primary.medium'),
          color: theme('colors.white'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.primary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.primary.dark'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          borderColor: theme('colors.high.dark'),
          color: theme('colors.high.dark'),
        },
      },
      '&.btn-secondary': {
        color: theme('colors.secondary.pure'),
        borderColor: theme('colors.secondary.pure'),
        '&:hover': {
          backgroundColor: theme('colors.secondary.medium'),
          color: theme('colors.white'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.secondary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.secondary.dark'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          borderColor: theme('colors.high.dark'),
          color: theme('colors.high.dark'),
        },
      },
    },

    '&.btn-ghost': {
      '&.btn-primary': {
        color: theme('colors.primary.pure'),
        '&:hover': {
          backgroundColor: theme('colors.high.light'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.primary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.high.dark'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme('colors.high.dark'),
        },
      },
      '&.btn-secondary': {
        color: theme('colors.secondary.pure'),
        '&:hover': {
          backgroundColor: theme('colors.high.light'),
        },
        '&:focus': {
          outline: `${theme('ringWidth.2')} solid ${theme(
            'colors.secondary.lighter',
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.high.dark'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme('colors.high.dark'),
        },
      },
    },
  },
});
