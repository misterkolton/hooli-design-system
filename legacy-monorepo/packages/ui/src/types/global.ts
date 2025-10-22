import React from 'react'
import {
  HOCSwatchColorKeys,
  LiteralUnion,
} from 'src/helpers/hoc-types/entityValueTypes'
import { entities } from 'src/theme/theming/entities'

export type SizeProperties<T> = {
  xSmall: T
  small: T
  medium: T
  large: T
  xLarge: T
}
export type SizeType = keyof SizeProperties<never>

export type ColorModeType = 'light' | 'dark'

export type BaseColorType = keyof typeof entities.hocs.colors.swatches

export type ColorStop = {
  color: LiteralUnion<HOCSwatchColorKeys>
  percentage: number
}

export type OnMouseEvent = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
) => void

export type ThemeModeProperies<T> = {
  primary: T
  secondary: T
  success: T
  warning: T
  danger: T
  shadow: T
  accent: T
}

export type ThemeMode = keyof ThemeModeProperies<never>

export type Char =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'

export type Country = {
  isoCode: string
  callingCode: number
  hasSeparator?: boolean
}
