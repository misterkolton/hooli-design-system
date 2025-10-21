import { makeResponsive } from './makeResponsive'
import { mapArrayToObject } from './mapArrayToObject'
import {
  BorderWidthDirection,
  HOCBorderWidthKeys,
  HOCBorderWidth,
  LiteralUnion,
  BorderStyleDirection,
} from '../hoc-types/entityValueTypes'
import { isResponsiveType } from './typeChecks'
import { BorderStyles } from '../hoc-types/cssValueTypes'

const isBorderWidthDirectionType = (
  valueToCheck: any,
): valueToCheck is BorderWidthDirection => {
  const borderRadius = valueToCheck as BorderWidthDirection
  if (
    (borderRadius.bottom ||
      borderRadius.top ||
      borderRadius.right ||
      borderRadius.left) !== undefined
  ) {
    return true
  }
  return false
}

export const findBorderDirection = (
  property: string,
  value:
    | BorderWidthDirection
    | BorderStyleDirection
    | LiteralUnion<HOCBorderWidthKeys>
    | LiteralUnion<BorderStyles>,
  entity?: HOCBorderWidth,
) => {
  const propertyCapitalized =
    property.charAt(0).toUpperCase() + property.slice(1)

  let style = []

  if (typeof value === 'string' || isResponsiveType(value)) {
    style.push(makeResponsive(`border${propertyCapitalized}`, value, entity))
  } else {
    if (isBorderWidthDirectionType(value)) {
      if (value.bottom !== undefined) {
        style.push(
          makeResponsive(
            `borderBottom${propertyCapitalized}`,
            value.bottom,
            entity,
          ),
        )
      }
      if (value.top !== undefined) {
        style.push(
          makeResponsive(`borderTop${propertyCapitalized}`, value.top, entity),
        )
      }
      if (value.left !== undefined) {
        style.push(
          makeResponsive(
            `borderLeft${propertyCapitalized}`,
            value.left,
            entity,
          ),
        )
      }
      if (value.right !== undefined) {
        style.push(
          makeResponsive(
            `borderRight${propertyCapitalized}`,
            value.right,
            entity,
          ),
        )
      }
    }
  }

  return mapArrayToObject(style)
}
