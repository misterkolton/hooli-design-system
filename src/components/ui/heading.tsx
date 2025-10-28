import * as React from 'react'
import { cn } from '@/lib/utils'

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4'
type Level = 1 | 2 | 3 | 4
type Align = 'start' | 'center' | 'end'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingAs
  level?: Level
  align?: Align
  balance?: boolean
}

const SIZE_BY_LEVEL: Record<Level, string> = {
  1: 'text-[var(--heading-1)] leading-[var(--leading-tight)]',
  2: 'text-[var(--heading-2)] leading-[1.2]',
  3: 'text-[var(--heading-3)] leading-[1.3]',
  4: 'text-[var(--heading-4)] leading-[1.35]'
}

const ALIGN_CLASSES: Record<Align, string> = {
  start: 'text-start',
  center: 'text-center',
  end: 'text-end'
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, level = 1, align = 'start', balance, className, style, ...rest }, ref) => {
    const tag: HeadingAs = as ?? (('h' + level) as HeadingAs)
    const Comp: any = tag
    const shouldBalance = balance ?? (level === 1 || level === 2)
    return (
      <Comp
        ref={ref}
        className={cn(
          SIZE_BY_LEVEL[level],
          'font-[var(--heading-weight)] tracking-[var(--tracking-tight)]',
          ALIGN_CLASSES[align],
          shouldBalance && 'text-balance',
          className,
        )}
        style={style}
        {...rest}
      />
    )
  }
)
Heading.displayName = 'Heading'

export default Heading

