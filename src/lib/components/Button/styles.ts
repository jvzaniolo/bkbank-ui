import { tv, type VariantProps } from 'tailwind-variants'

export type ButtonVariantProps = VariantProps<typeof button>
export const button = tv({
  base: 'rounded border inline-flex gap-2 items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-primary-lighter [&_svg]:w-[1em] [&_svg]:h-[1em]',
  variants: {
    size: {
      sm: 'text-sm px-6 py-2 leading-none',
      md: 'text-sm px-6 py-3 leading-normal',
      lg: 'text-base px-6 py-4 leading-normal',
    },
    isLoading: {
      true: '[&_svg]:animate-spin',
    },
    color: {
      primary:
        'bg-primary-pure border-primary-pure text-primary-pure hover:bg-primary-medium hover:border-primary-medium active:bg-primary-dark active:border-primary-dark',
      secondary:
        'bg-secondary-pure border-secondary-pure text-secondary-pure hover:bg-secondary-medium hover:border-secondary-medium active:bg-secondary-dark active:border-secondary-dark',
    },
    variant: {
      solid: 'text-white disabled:bg-high-medium disabled:text-high-dark disabled:border-high-medium',
      outline:
        'border bg-transparent hover:text-white disabled:bg-high-medium disabled:text-high-dark disabled:border-high-medium',
      ghost:
        'border-transparent bg-transparent hover:bg-high-light hover:border-transparent active:bg-high-medium active:border-transparent disabled:text-high-dark disabled:border-transparent disabled:hover:bg-transparent',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      isLoading: true,
      className: 'text-secondary-lighter',
    },
  ],
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    variant: 'solid',
  },
})
