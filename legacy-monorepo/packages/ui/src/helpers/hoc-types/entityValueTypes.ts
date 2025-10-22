import { entities } from 'src/theme/theming/entities'
import { ColorSwatch } from '../theme-functions/computeColorSwatch'
import { RequiredColorSwatch } from 'src/theme/theming/concepts'
import { BorderStyles } from './cssValueTypes'

export const { colors, spacing, borderRadius, borders, shadows, textColors } =
  entities.hocs

// HOC Object Types
export type HOCPrimitive = string | number
export type HOCColors = typeof colors
export type HOCSwatchColors = typeof colors.swatches
export type HOCSpacing = typeof spacing
export type HOCBorderRadius = typeof borderRadius
export type HOCBorderWidth = typeof borders
export type HOCShadows = typeof shadows
export type HOCTextColors = typeof textColors
// HOC Object Key Types
export type HOCSpacingKeys = keyof HOCSpacing
export type HOCBorderRadiusKeys = keyof HOCBorderRadius
export type HOCBorderWidthKeys = keyof HOCBorderWidth
export type HOCColorKeysWithSwatch = keyof HOCColors
export type HOCColorKeys = Exclude<HOCColorKeysWithSwatch, 'swatches'>
export type HOCShadowKeys = keyof HOCShadows
export type HOCSwatchColorKeys = keyof HOCSwatchColors
export type ColorSwatchKeys = keyof ColorSwatch

export type Responsive<T> = {
  xSmall?: T
  small?: T
  medium?: T
  large?: T
  xLarge?: T
}
export type Spacing = {
  left?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
  right?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
  top?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
  bottom?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
  vertical?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
  horizontal?:
    | LiteralUnion<HOCSpacingKeys>
    | Responsive<LiteralUnion<HOCSpacingKeys, string>>
}

export type SpacingDirection = Spacing & Responsive<HOCSpacingKeys>

export type BorderRadius = {
  left?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  right?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  top?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  topRight?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  topLeft?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  bottom?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  bottomRight?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
  bottomLeft?:
    | LiteralUnion<HOCBorderRadiusKeys, string>
    | Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>
}

export type BorderRadiusDirection = BorderRadius &
  Responsive<LiteralUnion<HOCBorderRadiusKeys, string>>

export type BorderDirection<T> = {
  left?: T
  right?: T
  bottom?: T
  top?: T
}
export type BorderWidth =
  | BorderDirection<HOCBorderWidthKeys>
  | BorderDirection<Responsive<HOCBorderWidthKeys>>

export type BorderWidthDirection = BorderWidth & Responsive<HOCBorderWidthKeys>

export type BorderStyleDirection =
  | BorderDirection<BorderStyles>
  | BorderDirection<Responsive<BorderStyles>>

export type Shadows =
  | LiteralUnion<HOCShadowKeys, string>
  | Responsive<LiteralUnion<HOCShadowKeys, string>>

/* Colors */
export type ColorSelection =
  | PrimaryBrandColorSelection
  | SecondaryBrandColorSelection
  | SuccessColorSelection
  | WarningColorSelection
  | DangerColorSelection
  | AccentColorSelection
  | GrayScaleColorSelection
  | BlueScaleColorSelection
  | PurpleScaleColorSelection

type PrimaryBrandColorSelection = {
  swatch: 'primaryBrand'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type SecondaryBrandColorSelection = {
  swatch: 'secondaryBrand'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type SuccessColorSelection = {
  swatch: 'success'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type WarningColorSelection = {
  swatch: 'warning'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type DangerColorSelection = {
  swatch: 'danger'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type AccentColorSelection = {
  swatch: 'accent'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type BlueScaleColorSelection = {
  swatch: 'blueScale'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type GrayScaleColorSelection = {
  swatch: 'grayScale'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

type PurpleScaleColorSelection = {
  swatch: 'purpleScale'
  shade: LiteralUnion<keyof RequiredColorSwatch>
}

export type LiteralUnion<T extends U, U = string> = T | (U & { _?: never })

export type HOCValues =
  | Spacing
  | HOCSpacingKeys
  | BorderRadius
  | HOCBorderRadiusKeys
  | BorderWidth
  | HOCBorderWidthKeys
  | ColorSelection
  | Shadows
  | ColorSwatch
