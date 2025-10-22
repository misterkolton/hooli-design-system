import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const CARAMEL = '#CE8E47' // primary
const BASE_GRAY = '#525A59' // secondary
const TAN = '#E0D5C0' // accent
const OFF_WHITE = '#FBF9F4' //base

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const caramelSwatch = computeColorSwatch(CARAMEL)

const baseGraySwatch = computeColorSwatch(BASE_GRAY)

const tanSwatch = computeColorSwatch(TAN)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = OFF_WHITE
const baseGray = BASE_GRAY

export const colors = {
  caramelSwatch,
  tanSwatch,
  baseGraySwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  blueSwatch,
  baseGray,
  purpleSwatch,
  BASE,
  WHITE,
}
