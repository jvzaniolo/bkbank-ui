import React from 'react'
import { twStyled } from 'tailwind-styled'

export const StyledButton = twStyled('button', [
  'rounded border inline-flex gap-2 items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-primary-lighter [&_svg]:w-[1em] [&_svg]:h-[1em]',
  {
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
  },
])

export type ButtonProps = React.ComponentPropsWithRef<typeof StyledButton>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', children, ...props }, ref) => (
    <StyledButton ref={ref} type={type} {...props}>
      {props.isLoading ? <LoadingIcon /> : children}
    </StyledButton>
  )
)
Button.displayName = 'Button'

const LoadingIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM2.91096 8C2.91096 10.8106 5.1894 13.089 8 13.089C10.8106 13.089 13.089 10.8106 13.089 8C13.089 5.1894 10.8106 2.91096 8 2.91096C5.1894 2.91096 2.91096 5.1894 2.91096 8Z"
        fill="currentColor"
        fillOpacity={0.2}
      />
    </g>
    <path
      d="M8 1C9.38447 1 10.7378 1.41054 11.889 2.17971C13.0401 2.94888 13.9373 4.04213 14.4672 5.32122C14.997 6.6003 15.1356 8.00777 14.8655 9.36563C14.5954 10.7235 13.9287 11.9708 12.9497 12.9497C11.9708 13.9287 10.7235 14.5954 9.36563 14.8655C8.00777 15.1356 6.6003 14.997 5.32122 14.4672C4.04213 13.9373 2.94888 13.0401 2.17971 11.889C1.41054 10.7378 1 9.38447 1 8L2.91096 8C2.91096 9.00652 3.20943 9.99043 3.76862 10.8273C4.32781 11.6642 5.12261 12.3165 6.05251 12.7017C6.98241 13.0868 8.00565 13.1876 8.99282 12.9913C9.98 12.7949 10.8868 12.3102 11.5985 11.5985C12.3102 10.8868 12.7949 9.98 12.9913 8.99282C13.1876 8.00565 13.0868 6.98241 12.7017 6.05251C12.3165 5.12261 11.6642 4.32781 10.8273 3.76862C9.99043 3.20943 9.00652 2.91096 8 2.91096L8 1Z"
      fill="currentColor"
    />
  </svg>
)
