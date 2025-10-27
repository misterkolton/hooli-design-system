import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export type SizeType = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'

type Tone =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted'
  | 'destructive'

// Minimal mapping for legacy BackgroundColor swatch objects: { swatch, shade }
type LegacyBackgroundColor = { swatch?: string; shade?: string }
type LegacyTextColor =
  | 'primaryBody'
  | 'primaryHeading'
  | 'inverseBody'
  | 'inverseHeading'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'anchorBlue'
  | 'primaryBrand'
  | 'secondaryBrand'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full text-[11px] font-semibold leading-none',
  {
    variants: {
      tone: {
        default: 'bg-muted text-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        accent: 'bg-accent text-accent-foreground',
        success: 'bg-emerald-600 text-emerald-50',
        warning: 'bg-amber-500 text-amber-950',
        danger: 'bg-red-600 text-red-50',
        muted: 'bg-muted text-muted-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
      },
      variant: {
        solid: '',
        outline:
          'bg-transparent border border-border text-foreground',
        soft: 'bg-muted text-foreground',
      },
      size: {
        xSmall: 'px-1.5 py-0.5 text-[10px]',
        small: 'px-2 py-0.5 text-[11px]',
        medium: 'px-2.5 py-0.5 text-xs',
        large: 'px-3 py-1 text-sm',
        xLarge: 'px-3.5 py-1 text-sm',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    defaultVariants: {
      tone: 'primary',
      variant: 'solid',
      size: 'small',
      pill: true,
    },
  },
)

function mapLegacySwatchToTone(bg?: LegacyBackgroundColor): Tone | undefined {
  const s = bg?.swatch?.toLowerCase()
  switch (s) {
    case 'primarybrand':
      return 'primary'
    case 'secondarybrand':
      return 'secondary'
    case 'accent':
      return 'accent'
    case 'success':
      return 'success'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'danger'
    default:
      return undefined
  }
}

function mapLegacyTextColor(c?: LegacyTextColor): string | undefined {
  switch (c) {
    case 'inverseBody':
    case 'inverseHeading':
      return 'text-primary-foreground'
    case 'primaryBody':
    case 'primaryHeading':
      return 'text-foreground'
    case 'success':
      return 'text-emerald-50'
    case 'warning':
      return 'text-amber-950'
    case 'danger':
      return 'text-red-50'
    case 'accent':
      return 'text-accent-foreground'
    default:
      return undefined
  }
}

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof badgeVariants> {
  item?: string | number
  children?: React.ReactNode
  max?: number // cap numeric counts, defaults to 10 like QDS
  backgroundColor?: LegacyBackgroundColor
  color?: LegacyTextColor
  icon?: React.ReactNode
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      item,
      children,
      tone,
      variant,
      size = 'small',
      pill = true,
      max = 10,
      backgroundColor,
      color,
      icon,
      ...props
    },
    ref,
  ) => {
    const contentRaw = item ?? (typeof children === 'string' || typeof children === 'number' ? children : undefined)
    const parsed = (() => {
      const n = typeof contentRaw === 'string' || typeof contentRaw === 'number' ? parseInt(String(contentRaw)) : NaN
      if (!Number.isNaN(n)) {
        return n > max ? `${max}+` : String(n)
      }
      return String(contentRaw ?? '')
    })()

    const isNumeric = !Number.isNaN(parseInt(String(contentRaw)))

    // legacy backgroundColor swatch can set tone when provided
    const derivedTone = tone ?? mapLegacySwatchToTone(backgroundColor) ?? 'primary'
    const textColorClass = mapLegacyTextColor(color)

    // Numeric badges have fixed sizing similar to QDS: 18px circle or 22x24 for "10+"
    const numericDims = isNumeric
      ? parsed === `${max}+`
        ? { height: 22, width: 24 }
        : { height: 18, width: 18 }
      : undefined

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ tone: derivedTone, variant, size, pill }),
          isNumeric && 'p-0',
          textColorClass,
          className,
        )}
        style={numericDims ? { height: numericDims.height, width: numericDims.width } : undefined}
        {...props}
      >
        {icon ? <span className="mr-1 inline-flex h-3.5 w-3.5 items-center justify-center">{icon}</span> : null}
        {parsed}
      </div>
    )
  },
)

Badge.displayName = 'Badge'

export { badgeVariants }

