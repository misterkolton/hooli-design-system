import { colors as tokenColors } from '../tokens/colors'
import { radius } from '../tokens/radius'
import { SHADOW_DEFAULT_COLOR } from '../tokens/shadows'
import { borders } from '../tokens/borders'
import { BASE_UNITS, BASE_VALUE } from '../tokens/spacing'
import { mediaQuerySizes } from '../tokens/mediaQueries'
import * as typography from '../tokens/typography'
import { icons, sphere } from '../tokens/sizing'
import { computeShadow } from 'src/helpers/theme-functions/computeShadow'
import Color from 'color'
import { computeGrayScale } from 'src/helpers/theme-functions/computeGrayScale'
import { ColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

export type RequiredColorSwatch = Required<ColorSwatch>

const colors = {
  primaryBrand: tokenColors.pinkSwatch as RequiredColorSwatch, // external
  secondaryBrand: tokenColors.brightBlueSwatch as RequiredColorSwatch, // external
  accent: tokenColors.accentSwatch as RequiredColorSwatch, // external
  success: tokenColors.greenSwatch as RequiredColorSwatch, // external
  warning: tokenColors.yellowSwatch as RequiredColorSwatch, // external
  danger: tokenColors.redSwatch as RequiredColorSwatch, // external
  background: tokenColors.lightGray, // external
  foreground: tokenColors.WHITE, // external
  grayScale: computeGrayScale(tokenColors.pinkSwatch),
  blueScale: tokenColors.blueSwatch as RequiredColorSwatch,
  purpleScale: tokenColors.purpleSwatch,
  white: tokenColors.WHITE,
  defaultShadowColor: SHADOW_DEFAULT_COLOR,
}

export const concepts = {
  colors: { ...colors },
  radius: {
    none: radius.none,
    small: radius.small,
    medium: radius.mediumLarge,
    default: radius.medium, // External
    large: radius.large, // External
    circle: radius.circle,
  },
  shadows: {
    light: computeShadow(
      'light',
      Color(colors.defaultShadowColor).rgb().alpha(0.06).toString(),
    ),
    mediumLight: computeShadow(
      'mediumLight',
      Color(colors.defaultShadowColor).rgb().alpha(0.08).toString(),
    ),
    mediumDark: computeShadow(
      'mediumDark',
      Color(colors.defaultShadowColor).rgb().alpha(0.1).toString(),
    ),
    dark: computeShadow(
      'dark',
      Color(colors.defaultShadowColor).rgb().alpha(0.12).toString(),
    ),
    generate: computeShadow,
  },
  typography: {
    imports: {
      body: typography.BODY_FONT_IMPORT,
      heading: typography.HEADING_FONT_IMPORT,
    },
    colors: {
      primaryHeading: colors.grayScale._200, // external
      primaryBody: colors.grayScale.base, // external
      inverseHeading: colors.white,
      inverseBody: colors.white,
    },
    families: {
      heading: typography.BODY_FONT_FAMILY, // external
      body: typography.HEADING_FONT_FAMILY, // external
    },
    sizes: {
      xSmall: typography.XSMALL_FONT,
      small: typography.SMALL_FONT,
      medium: typography.MEDIUM_FONT,
      mediumPlus: typography.MEDIUM_PLUS_FONT,
      large: typography.LARGE_FONT,
      xLarge: typography.XLARGE_FONT,
      xxLarge: typography.XXLARGE_FONT,
    },
    weights: {
      thin: typography.WEIGHT_THIN,
      regular: typography.WEIGHT_REGULAR,
      semiBold: typography.WEIGHT_SEMI_BOLD,
      bold: typography.WEIGHT_BOLD,
      extraBold: typography.WEIGHT_EXTRA_BOLD,
    },
    lineHeight: {
      xSmall: typography.XSMALL_LINE_HEIGHT,
      small: typography.SMALL_LINE_HEIGHT,
      medium: typography.MEDIUM_LINE_HEIGHT,
      large: typography.LARGE_LINE_HEIGHT,
      xLarge: typography.XLARGE_LINE_HEIGHT,
      xxLarge: typography.XXLARGE_LINE_HEIGHT,
    },
  },
  borders: {
    thin: borders.xSmall,
    small: borders.small,
    default: borders.medium,
    large: borders.large,
    bold: borders.xLarge,
  },
  spacing: {
    baseValue: BASE_VALUE,
    baseUnits: BASE_UNITS,
  },
  mediaQueries: {
    small: mediaQuerySizes.small,
    medium: mediaQuerySizes.medium,
    large: mediaQuerySizes.large,
    xLarge: mediaQuerySizes.xLarge,
  },
  sizing: {
    icons: {
      xSmall: icons.xSmall,
      small: icons.small,
      medium: icons.medium,
      large: icons.large,
      xLarge: icons.xLarge,
    },
    sphere: {
      xSmall: sphere.xSmall,
      small: sphere.small,
      medium: sphere.medium,
      large: sphere.large,
      xLarge: sphere.xLarge,
    },
  },
}

export type Concepts = typeof concepts
