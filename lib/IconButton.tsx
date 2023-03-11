import React from 'react'
import { Button } from './Button'
import { styled } from 'tailwind-styled'

const StyledIconButton = styled(Button, [
  '',
  {
    variants: {
      size: {
        sm: 'p-2',
        md: 'p-3 [&_svg]:w-[21px] [&_svg]:h-[21px]',
        lg: 'p-3 [&_svg]:w-6 [&_svg]:h-6',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
])

export type IconButtonProps = React.ComponentPropsWithRef<typeof StyledIconButton> & {
  icon?: React.ReactNode
  'aria-label': string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, isLoading, 'aria-label': ariaLabel, children, ...rest }, ref) => (
    <StyledIconButton ref={ref} isLoading={isLoading} aria-label={ariaLabel} {...rest}>
      {icon ? icon : children}
    </StyledIconButton>
  )
)
IconButton.displayName = 'IconButton'
