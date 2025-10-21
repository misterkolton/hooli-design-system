import {
  LiteralUnion,
  HOCColorKeys,
  Responsive,
  ColorSelection,
  HOCBorderRadiusKeys,
  BorderRadiusDirection,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

export type BackgroundColor =
  | ColorSelection
  | LiteralUnion<HOCColorKeys>
  | Responsive<HOCColorKeys>

export type BorderRadius =
  | BorderRadiusDirection
  | LiteralUnion<HOCBorderRadiusKeys>

export type Width =
  | Responsive<LiteralUnion<HOCSpacingKeys>>
  | LiteralUnion<HOCSpacingKeys>

export type Height =
  | Responsive<LiteralUnion<HOCSpacingKeys>>
  | LiteralUnion<HOCSpacingKeys>
