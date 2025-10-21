import {
  Responsive,
  BorderRadiusDirection,
  SpacingDirection,
  ColorSelection,
} from '../hoc-types/entityValueTypes'
import { TextType } from 'src/exports/atoms'

export const isResponsiveType = <T>(
  valueToCheck: any,
): valueToCheck is Responsive<T> => {
  const responsive = valueToCheck as Responsive<T>
  if (
    (responsive.xSmall ||
      responsive.small ||
      responsive.medium ||
      responsive.large ||
      responsive.xLarge) !== undefined
  ) {
    return true
  }
  return false
}

export const isBorderRadiusDirectionType = (
  valueToCheck: any,
): valueToCheck is BorderRadiusDirection => {
  const borderRadius = valueToCheck as BorderRadiusDirection
  if (
    (borderRadius.bottom ||
      borderRadius.bottomLeft ||
      borderRadius.bottomRight ||
      borderRadius.top ||
      borderRadius.topLeft ||
      borderRadius.topRight ||
      borderRadius.right ||
      borderRadius.left) !== undefined
  ) {
    return true
  }

  return false
}

export const isSpacingDirectionType = (
  valueToCheck: any,
): valueToCheck is SpacingDirection => {
  const spacing = valueToCheck as SpacingDirection
  if (
    (spacing.bottom ||
      spacing.top ||
      spacing.right ||
      spacing.horizontal ||
      spacing.vertical ||
      spacing.left) !== undefined
  ) {
    return true
  }
  return false
}

export const isColorSelectionType = (
  valueToCheck: any,
): valueToCheck is ColorSelection => {
  return (valueToCheck as ColorSelection).swatch !== undefined
}

export const isTextType = (valueToCheck: any): valueToCheck is TextType => {
  const textType = valueToCheck as TextType
  if (
    textType === 'body' ||
    textType === 'caption' ||
    textType === 'footnote' ||
    textType === 'heroTitle' ||
    textType === 'largeBody' ||
    textType === 'subtitle' ||
    textType === 'title'
  ) {
    return true
  }
  return false
}
