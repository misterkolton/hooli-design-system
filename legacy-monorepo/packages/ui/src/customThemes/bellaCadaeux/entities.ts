import Color from 'color'
import { concepts } from './concepts'
import { computeSpace } from 'src/helpers/theme-functions/computeSpacing'
import { Entities } from '../../theme/theming/entities'
import { Sphere, Widget } from 'src/theme/types'

const space = computeSpace(
  concepts.spacing.baseValue,
  concepts.spacing.baseUnits,
)

const spacing = {
  x0: space(0),
  x_25: space(0.25), // 2px
  x_5: space(0.5), // 4px
  x_75: space(0.75), // 6px
  x1: space(1), // 8px
  x1_5: space(1.5), // 12px
  x2: space(2), // 16px
  x2_5: space(2.5), // 20px
  x3: space(3), // 24px
  x4: space(4), // 32px
  x5: space(5), // 40px
  x6: space(6), // 48px
  x7: space(7), // 56px
  x8: space(8), // 64px
  x9: space(9), // 72px
}

const borders = {
  thin: `${concepts.borders.thin}px`,
  default: `${concepts.borders.default}px`,
  bold: `${concepts.borders.bold}px`,
}

const text = {
  imports: {
    body: concepts.typography.imports.body,
    heading: concepts.typography.imports.heading,
  },
  families: {
    body: concepts.typography.families.body,
    heading: concepts.typography.families.heading,
  },
  types: {
    heroTitle: {
      color: concepts.typography.colors.primaryHeading,
      size: concepts.typography.sizes.xxLarge,
      fontWeight: concepts.typography.weights.extraBold,
      lineHeight: concepts.typography.lineHeight.xxLarge,
      fontFamily: concepts.typography.families.heading,
    },
    title: {
      color: concepts.typography.colors.primaryHeading,
      size: concepts.typography.sizes.xLarge,
      fontWeight: concepts.typography.weights.bold,
      lineHeight: concepts.typography.lineHeight.xLarge,
      fontFamily: concepts.typography.families.heading,
    },
    subtitle: {
      color: concepts.typography.colors.primaryHeading,
      size: concepts.typography.sizes.large,
      fontWeight: concepts.typography.weights.regular,
      lineHeight: concepts.typography.lineHeight.medium,
      fontFamily: concepts.typography.families.heading,
    },
    largeBody: {
      color: concepts.typography.colors.primaryBody,
      size: concepts.typography.sizes.mediumPlus,
      fontWeight: concepts.typography.weights.regular,
      lineHeight: concepts.typography.lineHeight.small,
      fontFamily: concepts.typography.families.body,
    },
    body: {
      color: concepts.typography.colors.primaryBody,
      size: concepts.typography.sizes.medium,
      fontWeight: concepts.typography.weights.regular,
      lineHeight: concepts.typography.lineHeight.small,
      fontFamily: concepts.typography.families.body,
    },
    caption: {
      color: concepts.typography.colors.primaryBody,
      size: concepts.typography.sizes.small,
      fontWeight: concepts.typography.weights.regular,
      lineHeight: concepts.typography.lineHeight.small,
      fontFamily: concepts.typography.families.body,
    },
    footnote: {
      color: concepts.typography.colors.primaryBody,
      size: concepts.typography.sizes.xSmall,
      fontWeight: concepts.typography.weights.regular,
      lineHeight: concepts.typography.lineHeight.xSmall,
      fontFamily: concepts.typography.families.body,
    },
  },
  colors: {
    primaryBrand: concepts.colors.primaryBrand.base,
    secondaryBrand: concepts.colors.secondaryBrand.base,
    primaryHeading: concepts.typography.colors.primaryHeading,
    primaryBody: concepts.typography.colors.primaryBody,
    inverseHeading: concepts.typography.colors.inverseHeading,
    inverseBody: concepts.typography.colors.inverseBody,
    accent: concepts.colors.accent.base,
    success: concepts.colors.success.base,
    warning: concepts.colors.warning.base,
    danger: concepts.colors.danger.base,
    anchorBlue: concepts.colors.blueScale.base,
  },
  weights: {
    thin: concepts.typography.weights.thin,
    regular: concepts.typography.weights.regular,
    semiBold: concepts.typography.weights.semiBold,
    bold: concepts.typography.weights.bold,
    extraBold: concepts.typography.weights.extraBold,
  },
}

const mediaQueries = {
  queries: {
    xSmall: `@media screen and (min-width: 0px)`,
    // Large Mobile
    small: `@media screen and (min-width: ${concepts.mediaQueries.small}px)`,
    // Tablet
    medium: `@media screen and (min-width: ${concepts.mediaQueries.medium}px)`,
    // Large Tablet
    large: `@media screen and (min-width: ${concepts.mediaQueries.large}px)`,
    // Desktop
    xLarge: `@media screen and (min-width: ${concepts.mediaQueries.xLarge}px)`,
  },
  rawValues: {
    xSmall: 0,
    small: concepts.mediaQueries.small,
    medium: concepts.mediaQueries.medium,
    large: concepts.mediaQueries.large,
    xLarge: concepts.mediaQueries.xLarge,
  },
}

const hocs = {
  colors: {
    swatches: {
      primaryBrand: concepts.colors.primaryBrand,
      secondaryBrand: concepts.colors.secondaryBrand,
      success: concepts.colors.success,
      danger: concepts.colors.danger,
      warning: concepts.colors.warning,
      accent: concepts.colors.accent,
      grayScale: concepts.colors.grayScale,
      blueScale: concepts.colors.blueScale,
      purpleScale: concepts.colors.purpleScale,
    },
    background: concepts.colors.background,
    foreground: concepts.colors.foreground,
  },

  textColors: text.colors,
  spacing: spacing,
  borderRadius: concepts.radius,
  shadows: concepts.shadows,
  borders: borders,
}
// TODO - revisit buttons for contrast and font color
const buttons = {
  boxShadow: concepts.shadows.generate,
  borderSize: borders.default,
  outlinedBackgroundColor: concepts.colors.foreground,
  fontWeight: concepts.typography.weights.semiBold,
  sizes: {
    xSmall: {
      inset: `${spacing.x1} ${spacing.x2}`,
      outlinedInset: {
        vertical: `calc(${spacing.x1} - 2px)`,
        horizontal: `calc(${spacing.x2} - 2px)`,
      },
      fontSize: text.types.footnote.size,
      borderRadius: concepts.radius.default,
    },
    small: {
      inset: `${spacing.x1_5} ${spacing.x2_5}`,
      outlinedInset: {
        vertical: `calc(${spacing.x1_5} - 2px)`,
        horizontal: `calc(${spacing.x2_5} - 2px)`,
      },
      fontSize: text.types.caption.size,
      borderRadius: concepts.radius.default,
    },
    medium: {
      inset: `${spacing.x1_5} ${spacing.x3}`,
      outlinedInset: {
        vertical: `calc(${spacing.x1_5} - 2px)`,
        horizontal: `calc(${spacing.x3} - 2px)`,
      },
      fontSize: text.types.body.size,
      borderRadius: concepts.radius.default,
    },
    large: {
      inset: `${spacing.x2} ${spacing.x4}`,
      outlinedInset: {
        vertical: `calc(${spacing.x2} - 2px)`,
        horizontal: `calc(${spacing.x4} - 2px)`,
      },
      fontSize: text.types.largeBody.size,
      borderRadius: concepts.radius.default,
    },
    xLarge: {
      inset: `${spacing.x3} ${spacing.x5}`,
      outlinedInset: {
        vertical: `calc(${spacing.x3} - 2px)`,
        horizontal: `calc(${spacing.x5} - 2px)`,
      },
      fontSize: text.types.subtitle.size,
      borderRadius: concepts.radius.default,
    },
  },
  primary: {
    backgroundColor: concepts.colors.primaryBrand.base,
    fontColor: concepts.typography.colors.inverseBody,
    fontFamily: concepts.typography.families.body,
  },
  secondary: {
    backgroundColor: concepts.colors.secondaryBrand.base,
    fontColor: concepts.typography.colors.inverseBody,
    fontFamily: concepts.typography.families.body,
  },
  warning: {
    backgroundColor: concepts.colors.warning.base,
    fontColor: concepts.typography.colors.inverseBody,
    fontFamily: concepts.typography.families.body,
  },
  success: {
    backgroundColor: concepts.colors.success.base,
    fontColor: concepts.typography.colors.inverseBody,
    fontFamily: concepts.typography.families.body,
  },
  danger: {
    backgroundColor: concepts.colors.danger.base,
    fontColor: concepts.typography.colors.inverseBody,
    fontFamily: concepts.typography.families.body,
  },
  shadow: {
    backgroundColor: concepts.colors.foreground,
    fontColor: concepts.typography.colors.primaryBody,
    fontFamily: concepts.typography.families.body,
  },
  accent: {
    backgroundColor: concepts.colors.accent.base,
    fontColor: concepts.typography.colors.primaryBody,
    fontFamily: concepts.typography.families.body,
  },
  smoke: {
    backgroundColor: concepts.colors.background,
    fontColor: concepts.typography.colors.primaryBody,
    fontFamily: concepts.typography.families.body,
  },
}

const slider = {
  backgroundColor: concepts.colors.background,
  borderRadius: concepts.radius.small,
  handleRadius: concepts.radius.circle,
  handleColor: concepts.colors.foreground,
  handleShadow: concepts.shadows.light,
}

const inputs = {
  checkbox: {
    border: borders.default,
    borderRadius: concepts.radius.small,
    unCheckedBackgroundColor: concepts.colors.grayScale._800,
    checkmarkColor: concepts.typography.colors.inverseBody,
    labelColor: concepts.typography.colors.primaryBody,
  },
  text: {
    borderRadius: concepts.radius.default,
    labelColor: concepts.colors.accent,
    placeholderColor: concepts.typography.colors.primaryBody,
    labelFontSize: text.types.caption.size,
    textFontSize: text.types.caption.size,
    borderWidth: borders.default,
    defaultFocusColor: concepts.colors.blueScale.base,
  },
  select: {
    dropDownShadow: concepts.shadows.mediumDark,
    dropDownBackgroundColor: concepts.colors.foreground,
    boxShadow: concepts.shadows.light,
    borderRadius: concepts.radius.default,
  },
  number: {
    backgroundColor: concepts.colors.grayScale._200,
    fontColor: concepts.typography.colors.inverseBody,
    fontSize: text.types.body.size,
    borderRadius: concepts.radius.default,
  },
  backgroundColor: concepts.colors.background,
  fontSize: text.types.caption.size,
  fontColor: concepts.typography.colors.primaryBody,
  fontFamily: concepts.typography.families.body,
  colors: {
    primary: concepts.colors.primaryBrand.base,
    secondary: concepts.colors.secondaryBrand.base,
    success: concepts.colors.success.base,
    warning: concepts.colors.warning.base,
    danger: concepts.colors.danger.base,
    accent: concepts.colors.accent.base,
    dark: concepts.colors.primaryBrand._100,
    blue: concepts.colors.blueScale.base,
  },
}

const icons = {
  sizes: {
    xSmall: concepts.sizing.icons.xSmall,
    small: concepts.sizing.icons.small,
    medium: concepts.sizing.icons.medium,
    large: concepts.sizing.icons.large,
    xLarge: concepts.sizing.icons.xLarge,
  },
  colors: {
    default: concepts.colors.grayScale._800,
    primaryBodyText: concepts.typography.colors.primaryBody,
    primaryHeadingText: concepts.typography.colors.primaryHeading,
    inverseBodyText: concepts.typography.colors.inverseBody,
    inverseHeadingText: concepts.typography.colors.inverseHeading,
    primaryBrand: concepts.colors.primaryBrand.base,
    secondaryBrand: concepts.colors.secondaryBrand.base,
    warning: concepts.colors.warning.base,
    danger: concepts.colors.danger.base,
    success: concepts.colors.success.base,
    background: concepts.colors.background,
    accent: concepts.colors.background,
  },
}
const animatedCheckmark = {
  sizeMap: {
    xSmall: concepts.sizing.icons.xSmall,
    small: concepts.sizing.icons.small,
    medium: concepts.sizing.icons.medium,
    large: concepts.sizing.icons.large,
    xLarge: concepts.sizing.icons.xLarge,
  },
  colors: {
    primary: concepts.colors.primaryBrand.base,
    secondary: concepts.colors.secondaryBrand.base,
    success: concepts.colors.success.base,
    accent: concepts.colors.accent.base,
  },
  strokeWidth: {
    small: concepts.borders.small,
    default: concepts.borders.default,
    large: concepts.borders.large,
  },
  borderRadius: concepts.radius.circle,
  checkmarkFilledColor: concepts.colors.foreground,
}

const avatar = {
  borderWidth: borders.thin,
  borderColor: concepts.colors.grayScale._800,
  borderRadius: concepts.radius.circle,
  boxShadow: concepts.shadows.mediumLight,
  backgroundColor: concepts.colors.foreground,
  bubbleBackgroundColors: {
    isActive: concepts.colors.success.base,
    default: concepts.colors.grayScale._800,
  },
  defaultBackgroundColors: {
    primary: concepts.colors.primaryBrand.base,
    secondary: concepts.colors.secondaryBrand.base,
    success: concepts.colors.success.base,
    accent: concepts.colors.accent.base,
    warning: concepts.colors.warning.base,
    danger: concepts.colors.danger.base,
  },
  sizes: {
    xSmall: {
      avatarSize: 34,
      bubbleLeftPosition: 22,
      bubbleSize: 12,
    },
    small: {
      avatarSize: 44,
      bubbleLeftPosition: 28,
      bubbleSize: 14,
    },
    medium: {
      avatarSize: 60,
      bubbleLeftPosition: 40,
      bubbleSize: 16,
    },
    large: {
      avatarSize: 76,
      bubbleLeftPosition: 52,
      bubbleSize: 20,
    },
    xLarge: {
      avatarSize: 96,
      bubbleLeftPosition: 64,
      bubbleSize: 28,
    },
  },
}

const loadingSpinner = {
  size: {
    xSmall: concepts.sizing.icons.xSmall,
    small: concepts.sizing.icons.small,
    medium: concepts.sizing.icons.medium,
    large: concepts.sizing.icons.large,
    xLarge: concepts.sizing.icons.xLarge,
  },
  colors: {
    primary: concepts.colors.primaryBrand.base,
    secondary: concepts.colors.secondaryBrand.base,
    success: concepts.colors.success.base,
    warning: concepts.colors.warning.base,
    danger: concepts.colors.danger.base,
  },
}

const separator = {
  border: borders.default,
  color: concepts.colors.grayScale._800,
}

const card = {
  backgroundColor: concepts.colors.warning.base,
  borderRadius: concepts.radius.default,
  boxShadow: concepts.shadows.mediumDark,
  defaultInset: `${spacing.x4} ${spacing.x2} ${spacing.x2} ${spacing.x2}`,
}

const dialog = {
  backgroundColor: concepts.colors.foreground,
  borderRadius: concepts.radius.default,
  boxShadow: concepts.shadows.mediumDark,
  defaultInset: `${spacing.x6} ${spacing.x4} ${spacing.x4} ${spacing.x4}`,
}

const navigation = {
  backgroundColor: concepts.colors.foreground,
  border: borders.thin,
  borderColor: concepts.colors.grayScale._800,
}

const drawer = {
  backgroundColor: concepts.colors.foreground,
  borderRadius: concepts.radius.small,
  boxShadow: concepts.shadows.mediumLight,
  bottomDirectionShadow: concepts.shadows.generate(
    'mediumLight',
    Color(concepts.colors.defaultShadowColor).rgb().alpha(0.1).toString(),
    true,
  ),
  hoverBoxShadow: concepts.shadows.mediumDark,
  hoverBottomDirectionShadow: concepts.shadows.generate(
    'mediumDark',
    Color(concepts.colors.defaultShadowColor).rgb().alpha(0.1).toString(),
    true,
  ),
  defaultInset: `${spacing.x1}`,
  tab: {
    dark: {
      backgroundColor: concepts.colors.grayScale._600,
      arrowColor: concepts.colors.foreground,
    },
    light: {
      backgroundColor: concepts.colors.foreground,
      arrowColor: icons.colors.default,
    },
  },
}

const sheet = {
  mobileBorderRadius: concepts.radius.large,
  desktopBorderRadius: concepts.radius.default,
  backgroundColor: concepts.colors.foreground,
  boxShadow: concepts.shadows.mediumDark,
}

const toggle = {
  isActiveColor: concepts.colors.success.base,
  isNotActiveColor: concepts.colors.grayScale._900,
}

const tooltip = {
  lightBackgroundColor: concepts.colors.foreground,
  darkBackgroundColor: concepts.colors.grayScale._100,
  boxShadow: concepts.shadows.mediumLight,
  borderColor: concepts.colors.background,
}
const colorPicker = {
  backgroundColor: concepts.colors.background,
  borderColor: 'transparent',
  boxShadow: concepts.shadows.mediumLight,
  borderRadius: concepts.radius.small,
}

const sphere: Sphere = {
  xSmall: {
    circumference: concepts.sizing.sphere.xSmall,
    textType: 'title',
  },
  small: {
    circumference: concepts.sizing.sphere.small,
    textType: 'title',
  },
  medium: {
    circumference: concepts.sizing.sphere.medium,
    textType: 'heroTitle',
  },
  large: {
    circumference: concepts.sizing.sphere.large,
    textType: 'heroTitle',
  },
  xLarge: {
    circumference: concepts.sizing.sphere.xLarge,
    textType: 'heroTitle',
  },
}

const widget: Widget = {
  primary: {
    backgroundColor: concepts.colors.primaryBrand.base,
    fontColor: 'inverseBody',
  },
  secondary: {
    backgroundColor: concepts.colors.secondaryBrand.base,
    fontColor: 'inverseBody',
  },
  warning: {
    backgroundColor: concepts.colors.warning.base,
    fontColor: 'primaryBody',
  },
  success: {
    backgroundColor: concepts.colors.success.base,
    fontColor: 'primaryBody',
  },
  danger: {
    backgroundColor: concepts.colors.danger.base,
    fontColor: 'inverseBody',
  },
  shadow: {
    backgroundColor: concepts.colors.foreground,
    fontColor: 'primaryBody',
  },
  accent: {
    backgroundColor: concepts.colors.accent.base,
    fontColor: 'primaryBody',
  },
}

const colorOption = {
  defaults: {
    circleFill: concepts.shadows.generate(
      [0, 0, 6, 1],
      Color(concepts.colors.defaultShadowColor).rgb().alpha(0.1).toString(),
    ),
    innerRing: concepts.shadows.generate(
      [0, 0, 0, 11],
      Color([20, 30, 50]).rgb().alpha(0.03).toString(),
    ),
    outerRing: concepts.shadows.generate(
      [0, 0, 6, 1],
      Color(concepts.colors.defaultShadowColor).rgb().alpha(0.06).toString(),
    ),
  },
}

export const entities: Entities = {
  mediaQueries,
  hocs,
  text,
  spacing,
  buttons,
  inputs,
  icons,
  card,
  separator,
  loadingSpinner,
  animatedCheckmark,
  avatar,
  dialog,
  sheet,
  navigation,
  toggle,
  tooltip,
  drawer,
  slider,
  colorPicker,
  sphere,
  widget,
  colorOption,
}
