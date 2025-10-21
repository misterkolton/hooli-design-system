import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

const AQUA = '#61DCE8'
const DARK_BLUE = '#1F4177'
const TEAL = '#309D8E'
const BASE_GRAY = '#313438'

const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'
const PURPLE = '#703A96'

const aquaSwatch = computeColorSwatch(AQUA)
const darkBlueSwatch = computeColorSwatch(DARK_BLUE)
const tealSwatch = computeColorSwatch(TEAL)
const baseGraySwatch = computeColorSwatch(BASE_GRAY)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const blueSwatch = computeColorSwatch(BLUE)

const purpleSwatch = computeColorSwatch(PURPLE)

const BASE = '#F5F6F7'
const baseGray = BASE_GRAY

export const colors = {
  darkBlueSwatch,
  aquaSwatch,
  tealSwatch,
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
