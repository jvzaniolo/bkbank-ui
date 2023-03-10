import React from 'react'
import _clsx, { type ClassValue } from 'clsx'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default 'base'
   */
  color?: 'base' | 'primary'
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * @default false
   */
  isActive?: boolean
  /**
   * Override or extend the styles applied to the component.
   * Uses the clsx library.
   *
   * @example <Component clsx={{ avatar: { 'bg-red-500': boolean } }} />
   */
  clsx?: {
    avatar?: ClassValue
  }
}

const SIZE_CLASS = {
  sm: 'avatar-sm',
  md: '',
  lg: 'avatar-lg',
}

const COLOR_CLASS = {
  base: '',
  primary: 'avatar-primary',
}

export function Avatar({
  size = 'md',
  color = 'base',
  isActive = false,
  clsx,
  className,
  ...rest
}: AvatarProps) {
  return (
    <div
      className={_clsx(
        'avatar',
        SIZE_CLASS[size],
        COLOR_CLASS[color],
        { 'avatar-active': isActive },
        className,
        clsx?.avatar,
      )}
      {...rest}
    />
  )
}
