import { makeResponsive } from './makeResponsive'
import { mapArrayToObject } from './mapArrayToObject'
import {
  BorderRadius,
  HOCBorderRadius,
  HOCBorderRadiusKeys,
  LiteralUnion,
} from '../hoc-types/entityValueTypes'
import { isBorderRadiusDirectionType, isResponsiveType } from './typeChecks'

export const findBorderRadiusDirection = (
  value: BorderRadius | LiteralUnion<HOCBorderRadiusKeys>,
  entity?: HOCBorderRadius,
) => {
  let style = []

  if (typeof value === 'string' || isResponsiveType(value)) {
    style.push(makeResponsive('borderRadius', value, entity))
  } else {
    if (isBorderRadiusDirectionType(value)) {
      if (value.bottom !== undefined) {
        style.push(
          makeResponsive('borderBottomRightRadius', value.bottom, entity),
        )
        style.push(
          makeResponsive('borderBottomLeftRadius', value.bottom, entity),
        )
      }
      if (value.bottomLeft !== undefined) {
        style.push(
          makeResponsive('borderBottomLeftRadius', value.bottomLeft, entity),
        )
      }
      if (value.bottomRight !== undefined) {
        style.push(
          makeResponsive('borderBottomRightRadius', value.bottomRight, entity),
        )
      }
      if (value.top !== undefined) {
        style.push(makeResponsive('borderTopLeftRadius', value.top, entity))
        style.push(makeResponsive('borderTopRightRadius', value.top, entity))
      }
      if (value.topLeft !== undefined) {
        style.push(makeResponsive('borderTopLeftRadius', value.topLeft, entity))
      }
      if (value.topRight !== undefined) {
        style.push(
          makeResponsive('borderTopRightRadius', value.topRight, entity),
        )
      }
      if (value.left !== undefined) {
        style.push(makeResponsive('borderTopLeftRadius', value.left, entity))
        style.push(makeResponsive('borderBottomLeftRadius', value.left, entity))
      }
      if (value.right !== undefined) {
        style.push(makeResponsive('borderTopRightRadius', value.right, entity))
        style.push(
          makeResponsive('borderBottomRightRadius', value.right, entity),
        )
      }
    }
  }

  return mapArrayToObject(style)
}
