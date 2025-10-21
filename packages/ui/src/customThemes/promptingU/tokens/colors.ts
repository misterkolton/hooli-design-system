import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const DARK_BLUE = '#1F4177'
const GOLD = '#A99A67'
const BASE_GRAY = '#313438'
const ORANGE = '#E49944'

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const darkBlueSwatch = computeColorSwatch(DARK_BLUE)
const goldSwatch = computeColorSwatch(GOLD)
const baseGraySwatch = computeColorSwatch(BASE_GRAY)
const orangeSwatch = computeColorSwatch(ORANGE)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = '#EAEAEA'
const baseGray = BASE_GRAY

export const colors = {
  darkBlueSwatch,
  goldSwatch,
  baseGraySwatch,
  orangeSwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  blueSwatch,
  baseGray,
  purpleSwatch,
  BASE,
  WHITE,
}
