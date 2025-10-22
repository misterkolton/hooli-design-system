import {
  ColorSelection,
  HOCColors,
  HOCColorKeys,
  LiteralUnion,
  Responsive,
} from '../hoc-types/entityValueTypes'
import { makeResponsive } from './makeResponsive'
import { mapArrayToObject } from './mapArrayToObject'
import { isColorSelectionType, isResponsiveType } from './typeChecks'

export const findColor = (
  property: string,
  value:
    | ColorSelection
    | LiteralUnion<HOCColorKeys>
    | Responsive<LiteralUnion<HOCColorKeys>>,
  entity: HOCColors,
) => {
  let style = []

  if (isColorSelectionType(value)) {
    const swatch = entity.swatches[value.swatch]
    const color = swatch[value.shade]

    if (color !== undefined) {
      style.push(makeResponsive(property, color))
    }
  } else {
    if (isResponsiveType<LiteralUnion<HOCColorKeys> | ColorSelection>(value)) {
      style.push(makeResponsive(property, value, entity))
    } else {
      if (entity[value] !== undefined) {
        style.push(makeResponsive(property, entity[value]))
        return mapArrayToObject(style)
      } else {
        if (typeof value === 'string') {
          style.push(makeResponsive(property, value))

          return mapArrayToObject(style)
        }
      }
    }
  }

  return mapArrayToObject(style)
}
