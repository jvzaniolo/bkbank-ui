import { tv, type VariantProps } from 'tailwind-variants'

export type AvatarVariantProps = VariantProps<typeof avatar>
export const avatar = tv({
  slots: {
    base: 'relative rounded-full flex items-center justify-center font-medium',
    image: 'absolute inset-0 object-cover rounded-full',
    fallback: '',
  },
  variants: {
    size: {
      sm: {
        base: '[&_svg]:w-4 [&_svg]:h-4 w-6 h-6 text-2xs leading-normal',
      },
      md: {
        base: 'w-10 h-10 [&_svg]:w-6 [&_svg]:h-6 text-xs leading-normal',
      },
      lg: {
        base: 'w-16 h-16 [&_svg]:w-8 [&_svg]:h-8 text-xl leading-[1.2]',
      },
    },
    color: {
      primary: {
        base: 'bg-primary-pure text-white',
      },
      high: {
        base: 'bg-high-light text-primary-pure',
      },
    },
    isActive: {
      true: {
        base: 'border border-highlight-pure after:content-[""] after:absolute after:bottom-0 after:right-0 after:bg-highlight-pure after:rounded-full',
      },
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      isActive: true,
      className: {
        base: 'after:w-2 after:h-2',
      },
    },
    {
      size: 'md',
      isActive: true,
      className: {
        base: 'after:w-2 after:h-2',
      },
    },
    {
      size: 'lg',
      isActive: true,
      className: {
        base: 'after:w-4 after:h-4',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'high',
  },
})
