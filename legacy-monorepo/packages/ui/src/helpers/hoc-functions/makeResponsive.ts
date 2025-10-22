import { entities } from 'src/theme/theming/entities'
import {
  HOCSpacing,
  HOCBorderRadius,
  HOCBorderWidth,
  HOCValues,
  HOCShadows,
  HOCPrimitive,
  HOCTextColors,
  Responsive,
  ColorSelection,
  HOCColorKeys,
  LiteralUnion,
  HOCColors,
} from '../hoc-types/entityValueTypes'
import { CSSValues } from '../hoc-types/cssValueTypes'
import { TextColor } from 'src/exports/atoms'

const { mediaQueries } = entities

export const makeResponsive = (
  property: string,
  value:
    | HOCValues
    | CSSValues
    | HOCPrimitive
    | Responsive<HOCPrimitive>
    | LiteralUnion<HOCColorKeys>
    | TextColor
    | Responsive<ColorSelection>,
  entity?:
    | HOCSpacing
    | HOCBorderRadius
    | HOCBorderWidth
    | HOCShadows
    | HOCTextColors
    | HOCColors,
) => {
  let style: { [key: string]: string | Responsive<string> } = {}
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    // @ts-ignore
    style[`${property}`] = (entity && entity[`${value}`]) || `${value}`
  } else {
    Object.keys(value).forEach((key: keyof typeof value) => {
      if (key === 'xSmall') {
        style[property] = (entity && entity[`${value[key]}`]) || `${value[key]}`
      } else {
        style[mediaQueries.queries[key]] = {
          [property]: (entity && entity[`${value[key]}`]) || `${value[key]}`,
        }
      }
    })
  }
  return style
}
