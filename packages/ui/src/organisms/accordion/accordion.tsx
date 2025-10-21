import React, { FC, useState, useEffect } from 'react'
import { AccordionContext } from './context/accordionContext'
import { AccordionHeading } from './components/accordionHeading'
import { AccordionBody } from './components/accordionBody'
import styles from './styles'
import { Div, Flex } from 'src/exports/atoms'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'
import { Overflow } from 'src/helpers/hoc-types/cssValueTypes'

export type AccordionProps = {
  defaultActiveKeys?: (number | string)[]
  isExclusive?: boolean
  sections: AccordionSection[]
  background?: 'background' | 'foreground'
  isHeadingBackgroundInverse?: boolean
  arrowLocation?: 'right' | 'left'
  /** Make sure duplicate keys are not created in the state if you are overriding */
  /** TODO - Handle duplicate case in QDS and remove them  */
  stateOverride?: {
    activeIndexes: (string | number)[]
    setActiveIndexes: (activeIndexes: (string | number)[]) => void
  }
  inset?: HOCSpacingKeys
  insetBody?: HOCSpacingKeys
  overflowBody?: Overflow
}

export type AccordionSection = {
  key: number | string
  heading: React.ReactElement | string
  body: React.ReactElement
  onAnimationComplete?: () => void
  onHeadingClick?: () => void
}
export const Accordion: FC<AccordionProps> = ({
  sections,
  defaultActiveKeys,
  isExclusive = false,
  background,
  isHeadingBackgroundInverse = false,
  stateOverride,
  inset = { vertical: 'x2', horizontal: 'x1' },
  insetBody,
  overflowBody,
  arrowLocation,
}) => {
  const defaultActiveIndexes = isExclusive
    ? defaultActiveKeys
      ? [defaultActiveKeys[0]]
      : [-1]
    : defaultActiveKeys
    ? [...defaultActiveKeys]
    : [-1]

  const [activeIndexes, setActiveIndexes] =
    useState<(string | number)[]>(defaultActiveIndexes)
  const defaultEventKey = defaultActiveKeys ? defaultActiveKeys : [-1]

  useEffect(() => {
    /** We only want the default state sent back on initial render */
    stateOverride?.setActiveIndexes(defaultActiveIndexes)
  }, []) //eslint-disable-line

  return (
    <Div backgroundColor={background} borderRadius="medium" inset={inset}>
      <AccordionContext.Provider
        value={{
          activeIndexes: stateOverride?.activeIndexes ?? activeIndexes,
          setActiveIndexes: stateOverride?.setActiveIndexes ?? setActiveIndexes,
          defaultActiveIndexes: defaultEventKey,
          isExclusive,
        }}
      >
        {sections.map(section => {
          return (
            <section key={section.key} css={styles.accordionContainer}>
              <AccordionHeading
                eventKey={section.key}
                arrowLocation={arrowLocation}
                isBackgroundInverse={isHeadingBackgroundInverse}
                onHeadingClick={section.onHeadingClick}
              >
                {section.heading}
              </AccordionHeading>
              <AccordionBody
                eventKey={section.key}
                onAnimationComplete={section.onAnimationComplete}
                insetBody={insetBody}
                overflow={overflowBody}
              >
                <Flex width="100%">{section.body}</Flex>
              </AccordionBody>
            </section>
          )
        })}
      </AccordionContext.Provider>
    </Div>
  )
}
