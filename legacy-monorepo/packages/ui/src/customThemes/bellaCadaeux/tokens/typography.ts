const BASE_VALUE = 1
const BASE_UNITS = 'rem'
// Rename to typography
const computeFontSize = (multiplier: number) => {
  return BASE_VALUE * multiplier
}

export const XXSMALL_FONT = computeFontSize(0.625) + BASE_UNITS
export const XSMALL_FONT = computeFontSize(0.75) + BASE_UNITS
export const SMALL_FONT = computeFontSize(0.875) + BASE_UNITS
export const MEDIUM_FONT = computeFontSize(1) + BASE_UNITS
export const MEDIUM_PLUS_FONT = computeFontSize(1.25) + BASE_UNITS
export const LARGE_FONT = computeFontSize(1.75) + BASE_UNITS
export const XLARGE_FONT = computeFontSize(2.125) + BASE_UNITS
export const XXLARGE_FONT = computeFontSize(3) + BASE_UNITS

export const XSMALL_LINE_HEIGHT = computeFontSize(1.5) + BASE_UNITS
export const SMALL_LINE_HEIGHT = computeFontSize(1.75) + BASE_UNITS
export const MEDIUM_LINE_HEIGHT = computeFontSize(2) + BASE_UNITS
export const LARGE_LINE_HEIGHT = computeFontSize(2.5) + BASE_UNITS
export const XLARGE_LINE_HEIGHT = computeFontSize(3) + BASE_UNITS
export const XXLARGE_LINE_HEIGHT = computeFontSize(3.5) + BASE_UNITS

export const HEADING_FONT_FAMILY = "'Poppins', 'Open Sans',  sans-serif"

export const BODY_FONT_FAMILY = "'Poppins', 'Open Sans', sans-serif"
export const BODY_FONT_IMPORT =
  'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
export const HEADING_FONT_IMPORT =
  'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'

export const WEIGHT_THIN = 300
export const WEIGHT_REGULAR = 400
export const WEIGHT_SEMI_BOLD = 600
export const WEIGHT_BOLD = 700
export const WEIGHT_EXTRA_BOLD = 800
