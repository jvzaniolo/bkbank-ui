import { forwardRef, type ReactElement, type ElementType, cloneElement } from 'react'
import { LoadingIcon } from './LoadingIcon'
import { button, type ButtonVariantProps } from './styles'
import type { ComponentWithDisplayName, PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../types'

type ButtonProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  ButtonVariantProps & {
    leftIcon?: ReactElement
    rightIcon?: ReactElement
  }
>

interface ButtonComponent extends ComponentWithDisplayName {
  <C extends ElementType = 'button'>(props: ButtonProps<C>): ReactElement | null
}

export const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'button'>(
    { as, type, children, className, leftIcon, rightIcon, size, color, variant, isLoading, ...rest }: ButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    let LeftIcon = leftIcon
    let RightIcon = rightIcon
    const Tag = as || 'button'

    if (leftIcon) {
      LeftIcon = cloneElement(leftIcon, {
        role: 'presentation',
        'aria-hidden': true,
      })
    }

    if (rightIcon) {
      RightIcon = cloneElement(rightIcon, {
        role: 'presentation',
        'aria-hidden': true,
      })
    }

    return (
      <Tag
        ref={ref}
        type={Tag === 'button' ? type || 'button' : undefined}
        className={button({ size, color, variant, isLoading, className })}
        {...rest}
      >
        {leftIcon && LeftIcon}
        {isLoading ? <LoadingIcon /> : children}
        {rightIcon && RightIcon}
      </Tag>
    )
  }
)

Button.displayName = 'BKBankUI.Button'
