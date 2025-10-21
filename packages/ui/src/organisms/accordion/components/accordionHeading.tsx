import React, { useContext } from 'react'
import { AccordionContext } from '../context/accordionContext'
import { Div } from 'src/atoms/div/div'
import { SizeType } from 'src/types/global'
import { Text } from 'src/atoms/typography/text'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Span } from 'src/atoms/span/span'
import { computeTextTypeFromSize } from 'src/helpers/style-functions/computeTextTypeFromSize'

export type AccordionHeadingProps = {
  eventKey: number | string
  headingSize?: SizeType
  background?: 'background' | 'foreground'
  arrowLocation?: 'right' | 'left' | 'none'
  isBackgroundInverse?: boolean
  onHeadingClick?: () => void
  children: React.ReactNode
}
const variants = {
  expanded: {
    transform: 'rotate(90deg)',
  },
  collapsed: {
    transform: 'rotate(0deg)',
  },
}
export const AccordionHeading = ({
  children,
  eventKey,
  headingSize,
  onHeadingClick,
  arrowLocation = 'right',
}: AccordionHeadingProps) => {
  const context = useContext(AccordionContext)
  const isActive = context.activeIndexes.some(i => i === eventKey)
  const handleSetActiveIndex = (eventKey: number | string) => {
    if (context.isExclusive) {
      if (context.activeIndexes.some(activeIndex => activeIndex === eventKey)) {
        context.setActiveIndexes([-1])
      } else {
        context.setActiveIndexes([eventKey])
      }
    } else {
      if (isActive) {
        const filteredIndexes = context.activeIndexes.filter(key => {
          return key !== eventKey
        })
        const newArray = filteredIndexes.length === 0 ? [-1] : filteredIndexes
        context.setActiveIndexes(newArray)
      } else {
        const newArray = [eventKey]
        context.setActiveIndexes([
          ...context.activeIndexes.filter(index => index !== -1),
          ...newArray,
        ])
      }
    }
  }
  return (
    <Div
      onClick={() => {
        handleSetActiveIndex(eventKey)
        onHeadingClick?.()
      }}
      display="flex"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      cursor="pointer"
      inset="x1_5"
      position="relative"
      zIndex={5}
      flexDirection={arrowLocation === 'left' ? 'row' : 'row-reverse'}
    >
      {arrowLocation !== 'none' && (
        <Span
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          variants={variants}
          initial={isActive ? 'expanded' : 'collapsed'}
          animate={isActive ? 'expanded' : 'collapsed'}
        >
          <Icon
            size="medium"
            name="chevron"
            primaryColor="default"
            orientation="right"
          />
        </Span>
      )}
      {/* This generally evaluates to false as the heading passed into the AccordionSection is basically always a React.ReactElement. Leaving comment as a breadcrumb if we device to refactor how this component should work. */}
      {typeof children === 'string' ? (
        <Text
          content={children}
          type={headingSize ? computeTextTypeFromSize(headingSize) : 'body'}
          color="primaryBody"
          weight={isActive ? 'semiBold' : 'regular'}
        />
      ) : (
        children
      )}
    </Div>
  )
}
