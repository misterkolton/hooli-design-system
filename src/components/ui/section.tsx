import * as React from 'react'
import { cn } from '@/lib/utils'
import { Heading } from '@/components/ui/heading'

// Types
export type Align = 'start' | 'center' | 'end'
export type Padding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Tone = 'default' | 'muted' | 'card' | 'primary' | 'secondary' | 'accent'

export interface SectionProps extends Omit<React.ComponentPropsWithoutRef<'section'>, 'title'> {
  as?: 'section' | 'div'
  tone?: Tone
  padding?: Padding
  divider?: 'none' | 'top' | 'bottom' | 'both'
  align?: Align
  contained?: boolean
  containerClassName?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: React.ReactNode
}

// Local helpers (simple, readable mappings)
function toneClass(tone: Tone): string {
  switch (tone) {
    case 'muted':
      return 'bg-muted text-foreground'
    case 'card':
      return 'bg-card text-card-foreground'
    case 'primary':
      return 'bg-primary text-primary-foreground'
    case 'secondary':
      return 'bg-secondary text-secondary-foreground'
    case 'accent':
      return 'bg-accent text-accent-foreground'
    default:
      return 'bg-background text-foreground'
  }
}

function paddingClass(padding: Padding): string {
  switch (padding) {
    case 'none':
      return 'py-0'
    case 'xs':
      return 'py-4'
    case 'sm':
      return 'py-6'
    case 'md':
      return 'py-10'
    case 'lg':
      return 'py-14'
    case 'xl':
      return 'py-20'
  }
}

function dividerClass(divider: SectionProps['divider']): string {
  switch (divider) {
    case 'top':
      return 'border-t border-border'
    case 'bottom':
      return 'border-b border-border'
    case 'both':
      return 'border-y border-border'
    default:
      return ''
  }
}

function textAlignClass(align: Align): string {
  return align === 'center' ? 'text-center' : align === 'end' ? 'text-right' : 'text-left'
}
function itemsAlignClass(align: Align): string {
  return align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-start'
}
function actionsJustifyClass(align: Align): string {
  return align === 'center' ? 'justify-center' : 'justify-end'
}

const SectionRoot = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as = 'section',
      tone = 'default',
      padding = 'md',
      divider = 'none',
      align = 'start',
      contained = true,
      containerClassName,
      title,
      subtitle,
      actions,
      className,
      role = 'region',
      children,
      ...rest
    },
    ref,
  ) => {
    const idBase = React.useId()
    const titleId = title ? `${idBase}-title` : undefined

    const header = (title || subtitle || actions) && (
      <div className={cn('flex flex-col gap-2', itemsAlignClass(align), textAlignClass(align))}>
        {typeof title === 'string' || typeof title === 'number' ? (
          <Heading id={titleId} level={2} className={cn(textAlignClass(align))}>
            {title}
          </Heading>
        ) : title ? (
          <div id={titleId}>{title}</div>
        ) : null}
        {subtitle ? (
          <p className={cn('text-sm text-muted-foreground md:text-base', textAlignClass(align))}>{subtitle}</p>
        ) : null}
        {actions ? (
          <div className={cn('mt-2 flex gap-2', actionsJustifyClass(align))}>{actions}</div>
        ) : null}
      </div>
    )

    const content = (
      <div>
        {header}
        {children}
      </div>
    )

    const inner = contained ? (
      <div className={cn('mx-auto max-w-6xl px-6', containerClassName)}>{content}</div>
    ) : (
      content
    )

    const commonProps = {
      role,
      'aria-labelledby': titleId,
      className: cn('w-full', toneClass(tone), paddingClass(padding), dividerClass(divider), className),
      ...rest,
    }

    return as === 'div' ? (
      <div ref={ref as React.Ref<HTMLDivElement>} {...commonProps}>
        {inner}
      </div>
    ) : (
      <section ref={ref as React.Ref<HTMLElement>} {...commonProps}>
        {inner}
      </section>
    )
  },
)
SectionRoot.displayName = 'Section'

// Optional slots for composition
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Align
  compact?: boolean
}
export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, align = 'start', compact, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col', compact ? 'gap-1.5' : 'gap-2.5', itemsAlignClass(align), textAlignClass(align), className)}
      {...rest}
    />
  ),
)
SectionHeader.displayName = 'SectionHeader'

export type SectionContentProps = React.HTMLAttributes<HTMLDivElement>
export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, ...rest }, ref) => <div ref={ref} className={cn('mt-6', className)} {...rest} />,
)
SectionContent.displayName = 'SectionContent'

export interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}
export const SectionFooter = React.forwardRef<HTMLDivElement, SectionFooterProps>(
  ({ className, divider, ...rest }, ref) => (
    <div ref={ref} className={cn('mt-8', divider && 'border-t border-border pt-6', className)} {...rest} />
  ),
)
SectionFooter.displayName = 'SectionFooter'

// Compound export for ergonomic imports
type SectionCompound = React.ForwardRefExoticComponent<
  SectionProps & React.RefAttributes<HTMLElement>
> & {
  Header: typeof SectionHeader
  Content: typeof SectionContent
  Footer: typeof SectionFooter
}

export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
  Content: SectionContent,
  Footer: SectionFooter,
}) as SectionCompound

export default Section
