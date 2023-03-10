import React from 'react'
import clsx from 'clsx'
import { Button, type ButtonProps } from './Button'

export type IconButtonProps = ButtonProps & {
  icon?: React.ReactElement
  'aria-label': string
}

export const IconButton = ({
  icon,
  children,
  size = 'sm',
  className,
  'aria-label': ariaLabel,
  ...rest
}: IconButtonProps) => (
  <Button
    size={size}
    className={clsx('btn-icon', className)}
    aria-label={ariaLabel}
    {...rest}
  >
    {icon ? icon : children}
  </Button>
)
