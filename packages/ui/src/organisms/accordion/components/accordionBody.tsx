import React, { FC, useContext } from 'react'
import { AccordionContext } from '../context/accordionContext'
import { Div, Flex } from 'src/exports/atoms'
import { AnimatePresence } from 'framer-motion'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'
import { Overflow } from 'src/helpers/hoc-types/cssValueTypes'

export type AccordionBodyProps = {
  eventKey: number | string
  onAnimationComplete?: () => void
  overflow?: Overflow
  insetBody?: HOCSpacingKeys
}
type AccordionContentProps = {
  onAnimationComplete?: () => void
  inset?: HOCSpacingKeys
  overflow?: Overflow
  children?: React.ReactNode
}

const AccordionContent = ({
  children,
  onAnimationComplete,
  inset = 'x2_5',
  overflow = 'auto',
}: AccordionContentProps) => {
  return (
    <Div
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
        damping: 300,
      }}
      overflow={overflow}
      onAnimationComplete={onAnimationComplete}
    >
      <Flex
        inset={inset}
        justifyContent="flex-start"
        alignItems="center"
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        {children}
      </Flex>
    </Div>
  )
}
export const AccordionBody: FC<AccordionBodyProps> = ({
  eventKey,
  children,
  onAnimationComplete,
  insetBody,
  overflow,
}) => {
  const context = useContext(AccordionContext)
  return (
    <AnimatePresence>
      {context.activeIndexes.map(activeIndex => {
        return (
          activeIndex === eventKey && (
            <AccordionContent
              onAnimationComplete={onAnimationComplete}
              inset={insetBody}
              overflow={overflow}
            >
              {children}
            </AccordionContent>
          )
        )
      })}
    </AnimatePresence>
  )
}
