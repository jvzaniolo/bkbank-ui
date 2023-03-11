import * as A from '@radix-ui/react-avatar'
import { styled } from 'tailwind-styled'

export const Root = styled(A.Root, [
  'relative rounded-full flex items-center justify-center',
  {
    variants: {
      size: {
        sm: '[&_svg]:w-4 [&_svg]:h-4 w-6 h-6 text-2xs leading-normal after:w-2 after:h-2',
        md: 'w-10 h-10 [&_svg]:w-6 [&_svg]:h-6 text-xs leading-normal after:w-2 after:h-2',
        lg: 'w-16 h-16 [&_svg]:w-8 [&_svg]:h-8 text-xl leading-[1.2] after:w-4 after:h-4',
      },
      color: {
        primary: 'bg-primary-pure text-white',
        high: 'bg-high-light text-primary-pure',
      },
      isActive: {
        true: 'border border-highlight-pure after:content-[""] after:absolute after:bottom-0 after:right-0 after:bg-highlight-pure after:rounded-full',
      },
    },
    defaultVariants: {
      size: 'sm',
      color: 'primary',
    },
  },
])
export const Image = styled(A.Image, ['absolute inset-0 object-cover rounded-full'])
export const Fallback = A.Fallback
