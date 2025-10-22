import React from 'react'
import { Div } from 'src/atoms/div/div'
import { Flex } from 'src/atoms/flex/flex'
import {
  HOCSpacingKeys,
  LiteralUnion,
  SpacingDirection,
} from 'src/helpers/hoc-types/entityValueTypes'
import { JustifyContent, AlignItems } from 'src/helpers/hoc-types/cssValueTypes'

export type HStackProps = {
  gap: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  justify: JustifyContent
  alignItems?: AlignItems
  shouldWrap?: boolean
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  childWidth?: string
  children?: React.ReactNode
}

export const HStack = ({
  children,
  gap,
  justify = 'center',
  alignItems = 'center',
  shouldWrap = false,
  inset,
  outset,
  childWidth = 'initial',
}: HStackProps) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <Flex
      width="auto"
      inset={inset}
      outset={outset}
      alignItems={alignItems}
      justifyContent={justify}
      flexWrap={shouldWrap ? 'wrap' : 'nowrap'}
    >
      {childrenArray.map((child, i) => {
        if (child) {
          const isLastItem = i === childrenArray.length - 1
          return (
            <Div
              outset={
                typeof gap === 'object'
                  ? gap
                  : {
                      right: isLastItem ? 'x0' : gap,
                      bottom: shouldWrap ? gap : 'x0',
                    }
              }
              width={childWidth}
              inset={inset}
            >
              {child}
            </Div>
          )
        }
        return <></>
      })}
    </Flex>
  )
}
