import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { tv, type VariantProps } from 'tailwind-variants'

const tabs = tv({
  slots: {
    tabsRoot: '',
    tabsList: 'flex',
    tabsTrigger:
      'text-low-medium hover:text-low-dark hover:bg-high-light flex items-center gap-2 border-b-2 text-sm leading-normal font-medium border-high-medium hover:border-high-dark data-[state=active]:border-primary-medium data-[state=active]:text-primary-pure [&_svg]:w-[13px] [&_svg]:h-[13px] active:bg-high-medium active:text-black active:border-high-dark focus:ring-2 focus:outline-none focus:ring-primary-lighter focus:z-10',
    tabsContent: 'p-4',
  },
  variants: {
    size: {
      md: {
        tabsTrigger: 'px-4 py-2 [&_svg]:m-1',
      },
      lg: {
        tabsTrigger: 'py-4 px-6 [&_svg]:m-1.5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const TabsContext = React.createContext<{
  classes: ReturnType<typeof tabs>
} | null>(null)

function TabsProvider({ size, children }: { size: VariantProps<typeof tabs>['size']; children: React.ReactNode }) {
  const classes = tabs({ size })
  return <TabsContext.Provider value={{ classes }}>{children}</TabsContext.Provider>
}

export const Root = React.forwardRef<HTMLDivElement, VariantProps<typeof tabs> & Tabs.TabsProps>(
  (props, forwardedRef) => (
    <TabsProvider size={props.size}>
      <Tabs.Root ref={forwardedRef} className={tabs().tabsRoot()} {...props} />
    </TabsProvider>
  )
)
Root.displayName = 'TabsRoot'

export const List = React.forwardRef<HTMLDivElement, Tabs.TabsListProps>((props, forwardedRef) => {
  const { classes } = React.useContext(TabsContext)!
  return <Tabs.List ref={forwardedRef} className={classes.tabsList()} {...props} />
})
List.displayName = 'TabsList'

export const Trigger = React.forwardRef<HTMLButtonElement, Tabs.TabsTriggerProps>((props, forwardedRef) => {
  const { classes } = React.useContext(TabsContext)!
  return <Tabs.Trigger ref={forwardedRef} className={classes.tabsTrigger()} {...props} />
})
Trigger.displayName = 'TabsTrigger'

export const Content = React.forwardRef<HTMLDivElement, Tabs.TabsContentProps>((props, forwardedRef) => {
  const { classes } = React.useContext(TabsContext)!
  return <Tabs.Content ref={forwardedRef} className={classes.tabsContent()} {...props} />
})
Content.displayName = 'TabsContent'
