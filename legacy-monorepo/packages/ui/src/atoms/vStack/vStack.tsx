import React from 'react'
import { Div } from 'src/atoms/div/div'
import {
  HOCSpacingKeys,
  Responsive,
  SpacingDirection,
  LiteralUnion,
} from 'src/helpers/hoc-types/entityValueTypes'
import {
  CSSGridBaseValues,
  Overflow,
} from 'src/helpers/hoc-types/cssValueTypes'
import { Width, Height } from 'src/helpers/hoc-types/hocBaseUnion'

export type VStackProps = {
  gap: HOCSpacingKeys
  justifyContent?: Responsive<CSSGridBaseValues> | CSSGridBaseValues
  alignContent?: Responsive<CSSGridBaseValues> | CSSGridBaseValues
  alignItems?: Responsive<CSSGridBaseValues> | CSSGridBaseValues
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  width?: Width
  height?: Height
  overflow?: Overflow
  children?: React.ReactNode
}

export const VStack = ({
  children,
  gap,
  justifyContent,
  alignItems,
  alignContent,
  inset,
  outset,
  width = '100%',
  height,
  overflow,
}: VStackProps) => {
  return (
    <Div
      display="grid"
      width={width}
      height={height}
      overflow={overflow}
      rowGap={gap}
      justifyContent={justifyContent}
      alignContent={alignContent}
      alignItems={alignItems}
      inset={inset}
      outset={outset}
    >
      {children}
    </Div>
  )
}
