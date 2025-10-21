export type MediaQueryTypes = {
  xSmall: string
  small: string
  medium: string
  large: string
  xLarge: string
}

export const querySizes = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
}
export const MEDIA_QUERIES: MediaQueryTypes = {
  // Mobile
  xSmall: `@media screen and (min-width: 0px)`,
  // Large Mobile
  small: `@media screen and (min-width: ${querySizes.small}px)`,
  // Tablet
  medium: `@media screen and (min-width: ${querySizes.medium}px)`,
  // Large Tablet
  large: `@media screen and (min-width: ${querySizes.large}px)`,
  // Desktop
  xLarge: `@media screen and (min-width: ${querySizes.xLarge}px)`,
}
