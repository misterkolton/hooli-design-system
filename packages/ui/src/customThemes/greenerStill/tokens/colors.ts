import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const BRIGHT_GREEN = '#74C468'
const LIGHT_BLUE = '#52C1D1'
const BASE_GRAY = '#696767'
const COPPER = '#BB7E3D'

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const brightGreenSwatch = computeColorSwatch(BRIGHT_GREEN)

const lightBlueSwatch = computeColorSwatch(LIGHT_BLUE)

const baseGraySwatch = computeColorSwatch(BASE_GRAY)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const copperSwatch = computeColorSwatch(COPPER)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = '#FBF9F4'

export const colors = {
  brightGreenSwatch,
  lightBlueSwatch,
  greenSwatch,
  copperSwatch,
  baseGraySwatch,
  redSwatch,
  yellowSwatch,
  blueSwatch,
  purpleSwatch,
  BASE,
  WHITE,
}
