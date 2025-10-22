import * as React from 'react'

import { cn } from '@/lib/utils'

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      if (import.meta.env?.DEV) {
        console.warn('Slot expects a single valid React element child.')
      }

      return null
    }

    return React.cloneElement(children, {
      ...props,
      ref,
      className: cn(children.props.className, className),
    })
  },
)

Slot.displayName = 'Slot'
