import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const TEAL = '#00E0E0'

const DARK_BLUE = '#023473'
const LIGHT_BLUE = '#00AEEF'
const ACCENT_BLUE = '#02C3E2'

const BASE_GRAY = '#6A7177'

const GREEN = '#0A9392'
const GOLD = '#DFB614'
const SALMON = '#F58795'
const PURPLE = '#703A96'

const BASE = '#FBF9F4'
const WHITE = '#FFF'

const tealSwatch = computeColorSwatch(TEAL)
const darkBlueSwatch = computeColorSwatch(DARK_BLUE)
const graySwatch = computeColorSwatch(BASE_GRAY)
const lightBlueSwatch = computeColorSwatch(LIGHT_BLUE)
const accentBlueSwatch = computeColorSwatch(ACCENT_BLUE)
const greenSwatch = computeColorSwatch(GREEN)
const yellowSwatch = computeColorSwatch(GOLD)
const redSwatch = computeColorSwatch(SALMON)
const purpleSwatch = computeColorSwatch(PURPLE)

export const colors = {
  tealSwatch,
  darkBlueSwatch,
  lightBlueSwatch,
  graySwatch,
  accentBlueSwatch,
  greenSwatch,
  yellowSwatch,
  redSwatch,
  purpleSwatch,
  WHITE,
  BASE,
}
