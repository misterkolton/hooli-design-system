import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const BRIGHT_BLUE = '#140FEE'
const TEAL = '#35A4BC'
const BRIGHT_GREEN = '#74C468'
const BASE_GRAY = '#696767'

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const brightBlueSwatch = computeColorSwatch(BRIGHT_BLUE)
const tealSwatch = computeColorSwatch(TEAL)
const brightGreenSwatch = computeColorSwatch(BRIGHT_GREEN)
const baseGraySwatch = computeColorSwatch(BASE_GRAY)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = '#F5F6F7'
const baseGray = BASE_GRAY

export const colors = {
  brightBlueSwatch,
  tealSwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  brightGreenSwatch,
  blueSwatch,
  baseGraySwatch,
  baseGray,
  purpleSwatch,
  BASE,
  WHITE,
}
