import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Heading, type HeadingProps } from '@/components/ui/heading'

// Root styles: background + vertical spacing. Keep tokens and a11y friendly.
const sectionVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        transparent: 'bg-transparent',
        default: 'bg-background text-foreground',
        muted: 'bg-muted text-foreground',
        card: 'bg-card text-card-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        accent: 'bg-accent text-accent-foreground',
      },
      space: {
        none: 'py-0',
        xs: 'py-4',
        sm: 'py-6',
        md: 'py-10',
        lg: 'py-14',
        xl: 'py-20',
      },
      divider: {
        none: '',
        top: 'border-t border-border',
        bottom: 'border-b border-border',
        both: 'border-y border-border',
      },
      contained: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'transparent',
      space: 'md',
      divider: 'none',
      contained: true,
    },
  },
)

type Align = 'start' | 'center' | 'end'

type SectionContextValue = {
  idBase: string
  align: Align
  setHasTitle: (v: boolean) => void
}

const SectionContext = React.createContext<SectionContextValue | null>(null)

export interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'>,
    VariantProps<typeof sectionVariants> {
  align?: Align
  /**
   * When true, children render inside a centered container with horizontal padding.
   * Disable to manage layout externally (e.g., nested sections or full-bleed content).
   */
  contained?: boolean
  /** Optional class to apply to the inner container wrapper when contained */
  containerClassName?: string
}

export const Section = React.forwardRef<React.ElementRef<'section'>, SectionProps>(
  (
    {
      align = 'start',
      contained = true,
      containerClassName,
      variant,
      space,
      divider,
      className,
      role = 'region',
      children,
      ...rest
    },
    ref,
  ) => {
    const idBase = React.useId()
    const [hasTitle, setHasTitle] = React.useState(false)

    const labelledBy = hasTitle ? `${idBase}-title` : undefined

    return (
      <section
        ref={ref}
        role={role}
        aria-labelledby={labelledBy}
        className={cn(sectionVariants({ variant, space, divider }), className)}
        {...rest}
      >
        <SectionContext.Provider value={{ idBase, align, setHasTitle }}>
          {contained ? (
            <div className={cn('mx-auto max-w-6xl px-6', containerClassName)}>
              {children}
            </div>
          ) : (
            children
          )}
        </SectionContext.Provider>
      </section>
    )
  },
)
Section.displayName = 'Section'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Align
  /**
   * Optional compact mode reduces spacing between header elements.
   */
  compact?: boolean
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, align, compact, ...rest }, ref) => {
    const ctx = React.useContext(SectionContext)
    const a = align ?? ctx?.align ?? 'start'
    const alignCls = a === 'center' ? 'items-center text-center' : a === 'end' ? 'items-end text-right' : 'items-start text-left'

    return (
      <div
        ref={ref}
        className={cn('flex flex-col', compact ? 'gap-1.5' : 'gap-2.5', alignCls, className)}
        {...rest}
      />
    )
  },
)
SectionHeader.displayName = 'SectionHeader'

export interface SectionTitleProps extends Omit<HeadingProps, 'align'> {
  /**
   * Overrides section alignment for the title only.
   */
  align?: Align
}

export const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ id, align, level = 2, className, ...rest }, ref) => {
    const ctx = React.useContext(SectionContext)
    const computedId = id ?? (ctx ? `${ctx.idBase}-title` : undefined)

    React.useEffect(() => {
      if (!ctx) return
      ctx.setHasTitle(true)
      return () => ctx.setHasTitle(false)
    }, [ctx])

    const a = align ?? ctx?.align ?? 'start'
    const alignCls = a === 'center' ? 'text-center' : a === 'end' ? 'text-right' : 'text-left'

    return (
      <Heading
        id={computedId}
        ref={ref}
        level={level}
        className={cn(alignCls, className)}
        {...rest}
      />
    )
  },
)
SectionTitle.displayName = 'SectionTitle'

export type SectionEyebrowProps = React.HTMLAttributes<HTMLDivElement>

export const SectionEyebrow = React.forwardRef<HTMLDivElement, SectionEyebrowProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600',
          'dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-200',
          className,
        )}
        {...rest}
      />
    )
  },
)
SectionEyebrow.displayName = 'SectionEyebrow'

export interface SectionDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  align?: Align
  /** Limit readable width for long copy */
  maxWidth?: 'none' | 'sm' | 'md' | 'lg'
}

export const SectionDescription = React.forwardRef<HTMLParagraphElement, SectionDescriptionProps>(
  ({ className, align, maxWidth = 'lg', ...rest }, ref) => {
    const ctx = React.useContext(SectionContext)
    const a = align ?? ctx?.align ?? 'start'
    const alignCls = a === 'center' ? 'text-center mx-auto' : a === 'end' ? 'text-right ml-auto' : 'text-left'
    const mwCls = maxWidth === 'none' ? '' : maxWidth === 'sm' ? 'max-w-xl' : maxWidth === 'md' ? 'max-w-2xl' : 'max-w-3xl'

    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground md:text-base', alignCls, mwCls, className)}
        {...rest}
      />
    )
  },
)
SectionDescription.displayName = 'SectionDescription'

export interface SectionActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Align
}

export const SectionActions = React.forwardRef<HTMLDivElement, SectionActionsProps>(
  ({ className, align }, ref) => {
    const ctx = React.useContext(SectionContext)
    const a = align ?? ctx?.align ?? 'start'
    const alignCls = a === 'center' ? 'justify-center' : a === 'end' ? 'justify-end' : 'justify-start'

    return (
      <div ref={ref} className={cn('mt-3 flex gap-2', alignCls, className)} />
    )
  },
)
SectionActions.displayName = 'SectionActions'

export type SectionContentProps = React.HTMLAttributes<HTMLDivElement>

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, ...rest }, ref) => {
    return <div ref={ref} className={cn('mt-6', className)} {...rest} />
  },
)
SectionContent.displayName = 'SectionContent'

export interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a top divider above footer */
  divider?: boolean
}

export const SectionFooter = React.forwardRef<HTMLDivElement, SectionFooterProps>(
  ({ className, divider, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mt-8', divider && 'border-t border-border pt-6', className)}
        {...rest}
      />
    )
  },
)
SectionFooter.displayName = 'SectionFooter'

export default Section
