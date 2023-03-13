import { type ElementType, forwardRef, type ReactElement, cloneElement } from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { AvatarIcon } from './AvatarIcon'
import { avatar, type AvatarVariantProps } from './styles'
import type { ComponentWithDisplayName, PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../types'

function getInitials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}${lastName ? lastName[0] : ''}`
}

type AvatarProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  AvatarVariantProps & {
    src?: string
    alt?: string
    icon?: ReactElement
    name?: string
    delayMs?: number
    onLoadingStatusChange?: (status: 'idle' | 'loading' | 'loaded' | 'error') => void
    className?: {
      base?: string
      image?: string
      fallback?: string
    }
  }
>

interface AvatarComponent extends ComponentWithDisplayName {
  <C extends ElementType = 'span'>(props: AvatarProps<C>): ReactElement | null
}

export const Avatar: AvatarComponent = forwardRef(
  <C extends ElementType = 'span'>(props: AvatarProps<C>, ref: PolymorphicRef<C>) => {
    const { as, src, alt, icon, name, isActive, size, color, className, delayMs, onLoadingStatusChange, ...rest } =
      props
    let Icon = icon
    const Tag = as || 'span'

    const { base, image, fallback } = avatar({ size, color, isActive })

    if (icon) {
      Icon = cloneElement(icon, {
        role: 'presentation',
        'aria-hidden': true,
      })
    }

    return (
      <RadixAvatar.Root asChild>
        <Tag ref={ref} className={base({ className: className?.base })} {...rest}>
          {src && (
            <RadixAvatar.Image
              src={src}
              alt={alt || name}
              className={image({ className: className?.image })}
              onLoadingStatusChange={onLoadingStatusChange}
            />
          )}
          <RadixAvatar.Fallback delayMs={delayMs} className={fallback({ className: className?.fallback })} asChild>
            {icon ? Icon : name ? <>{getInitials(name)}</> : <AvatarIcon />}
          </RadixAvatar.Fallback>
        </Tag>
      </RadixAvatar.Root>
    )
  }
)

Avatar.displayName = 'BKBankUI.Avatar'
