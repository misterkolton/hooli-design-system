import {
  SpacingDirection,
  HOCSpacingKeys,
  BorderWidthDirection,
  HOCBorderWidthKeys,
  ColorSelection,
  Shadows,
  Responsive,
  LiteralUnion,
  HOCColorKeys,
  BorderStyleDirection,
} from './entityValueTypes'
import {
  BorderStyles,
  Cursor,
  Display,
  JustifyContent,
  AlignContent,
  AlignItems,
  JustifyItems,
  FlexDirection,
  FlexWrap,
  BackgroundSize,
  BackgroundPosition,
  BackgroundRepeat,
  Overflow,
  Position,
} from './cssValueTypes'
import { TextColor } from 'src/exports/atoms'
import { OnMouseEvent } from 'src/types/global'
import {
  BackgroundColor,
  BorderRadius,
  Width,
  Height,
} from 'src/helpers/hoc-types/hocBaseUnion'

export type HOCBaseProps = {
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  borderRadius?: BorderRadius
  borderWidth?: BorderWidthDirection | HOCBorderWidthKeys
  borderStyle?: BorderStyleDirection | BorderStyles
  borderColor?: ColorSelection | LiteralUnion<HOCColorKeys>
  backgroundColor?: BackgroundColor
  color?: LiteralUnion<TextColor>
  boxShadow?: Shadows
  height?: Height
  width?: Width
  maxHeight?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  maxWidth?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  minHeight?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  minWidth?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  position?: Responsive<Position> | Position
  top?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys, number | string>

  left?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys, number | string>
  bottom?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys, number | string>
  right?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys, number | string>
  justifyContent?: Responsive<JustifyContent> | JustifyContent
  alignContent?: Responsive<AlignContent> | AlignContent
  alignItems?: Responsive<AlignItems> | AlignItems
  flexDirection?: Responsive<FlexDirection> | FlexDirection
  flexGrow?: Responsive<number> | number
  flexShrink?: Responsive<number> | number
  flexWrap?: Responsive<FlexWrap> | FlexWrap
  rowGap?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  columnGap?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  justifyItems?: Responsive<JustifyItems> | JustifyItems
  order?: Responsive<number> | number
  cursor?: Responsive<Cursor> | Cursor
  zIndex?: Responsive<number> | number
  opacity?: Responsive<number> | number
  display?: Responsive<Display> | Display
  backgroundImage?: Responsive<string> | string
  backgroundSize?: Responsive<BackgroundSize> | BackgroundSize
  backgroundPosition?: Responsive<BackgroundPosition> | BackgroundPosition
  backgroundRepeat?: Responsive<BackgroundRepeat> | BackgroundRepeat
  gradient?: Responsive<string> | string
  transform?: Responsive<string> | string
  transformOrigin?: Responsive<string> | string
  overflow?: Responsive<Overflow> | Overflow
  overflowX?: Responsive<Overflow> | Overflow
  overflowY?: Responsive<Overflow> | Overflow
  onClick?: () => void
  onMouseEvent?: OnMouseEvent
}
