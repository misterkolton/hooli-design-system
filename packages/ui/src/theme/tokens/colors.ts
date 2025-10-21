import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'
// EXTERNAL VALUES
const PINK = '#FF04A0'
const LIGHT_BLUE = '#02C3E2'
const GREEN = '#44D5A4'
const YELLOW = '#F4E467'
const RED = '#F26666'
// TODO change ACCENT
const ACCENT = '#FFF'
const WHITE = '#FFF'
const BLUE = '#32abe4'
const PURPLE = '#703a96'

const pinkSwatch = computeColorSwatch(PINK)

const brightBlueSwatch = computeColorSwatch(LIGHT_BLUE)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const accentSwatch = computeColorSwatch(ACCENT)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const lightGray = '#f5f6f7'

export const colors = {
  pinkSwatch,
  brightBlueSwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  accentSwatch,
  WHITE,
  blueSwatch,
  purpleSwatch,
  lightGray,
}
