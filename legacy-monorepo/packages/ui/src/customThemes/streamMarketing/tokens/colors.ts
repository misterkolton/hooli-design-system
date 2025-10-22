import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const CARAMEL = '#B38048'
const DARK_TEAL = '#314A51'
const BEIGE = '#E0D5C0'
const BASE_GRAY = '#696767'

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const caramelSwatch = computeColorSwatch(CARAMEL)
const darkTealSwatch = computeColorSwatch(DARK_TEAL)
const beigeSwatch = computeColorSwatch(BEIGE)
const baseGraySwatch = computeColorSwatch(BASE_GRAY)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = '#FBF9F4'
const baseGray = BASE_GRAY

export const colors = {
  caramelSwatch,
  beigeSwatch,
  darkTealSwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  blueSwatch,
  baseGraySwatch,
  baseGray,
  purpleSwatch,
  BASE,
  WHITE,
}
