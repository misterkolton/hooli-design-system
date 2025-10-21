import { makeResponsive } from './makeResponsive'
import { mapArrayToObject } from './mapArrayToObject'
import {
  HOCSpacing,
  HOCSpacingKeys,
  LiteralUnion,
  Spacing,
} from '../hoc-types/entityValueTypes'
import { isSpacingDirectionType, isResponsiveType } from './typeChecks'

export const findDirection = (
  property: string,
  value: Spacing | LiteralUnion<HOCSpacingKeys>,
  entity?: HOCSpacing,
) => {
  let style = []

  if (typeof value === 'string' || isResponsiveType(value)) {
    style.push(makeResponsive(property, value, entity))
  } else {
    if (isSpacingDirectionType(value)) {
      if (value.horizontal !== undefined) {
        style.push(makeResponsive(`${property}Left`, value.horizontal, entity))
        style.push(makeResponsive(`${property}Right`, value.horizontal, entity))
      }
      if (value.vertical !== undefined) {
        style.push(makeResponsive(`${property}Top`, value.vertical, entity))
        style.push(makeResponsive(`${property}Bottom`, value.vertical, entity))
      }
      if (value.bottom !== undefined) {
        style.push(makeResponsive(`${property}Bottom`, value.bottom, entity))
      }
      if (value.top !== undefined) {
        style.push(makeResponsive(`${property}Top`, value.top, entity))
      }
      if (value.left !== undefined) {
        style.push(makeResponsive(`${property}Left`, value.left, entity))
      }
      if (value.right !== undefined) {
        style.push(makeResponsive(`${property}Right`, value.right, entity))
      }
    }
  }

  return mapArrayToObject(style)
}
