import clsx from 'clsx'
import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'

export type RootProps = Tabs.TabsProps & {
  size?: 'md' | 'lg'
}

const sizeClass = {
  md: 'tabs-md',
  lg: 'tabs-lg',
}

export const TabsRoot = React.forwardRef<HTMLDivElement, RootProps>(
  ({ className, size = 'md', ...rest }, ref) => (
    <Tabs.Root
      ref={ref}
      className={clsx('tabs', sizeClass[size], className)}
      {...rest}
    />
  ),
)

export const TabsList = React.forwardRef<HTMLDivElement, Tabs.TabsListProps>(
  ({ className, ...rest }, ref) => (
    <Tabs.List ref={ref} className={clsx('tabs-list', className)} {...rest} />
  ),
)

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  Tabs.TabsTriggerProps
>(({ className, ...rest }, ref) => (
  <Tabs.TabsTrigger
    ref={ref}
    className={clsx('tabs-trigger', className)}
    {...rest}
  />
))

export const TabsContent = React.forwardRef<
  HTMLDivElement,
  Tabs.TabsContentProps
>(({ className, ...rest }, ref) => (
  <Tabs.Content
    ref={ref}
    className={clsx('tabs-content', className)}
    {...rest}
  />
))
