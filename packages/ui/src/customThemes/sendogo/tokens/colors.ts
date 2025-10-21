import { computeColorSwatch } from 'src/helpers/theme-functions/computeColorSwatch'

// TODO the current Sendogo theme has a base purple and orange, and then an alternative 'gradient' shade that we should calculate from the base instead

const PURPLE = '#8D7EAE'
const ORANGE = '#F36D2C'
const GREEN = '#1DE6B9'
const YELLOW = '#F7A14D'
const RED = '#FB2E4B'
const ACCENT = '#FFF'
const WHITE = '#FFF'
const BLUE = '#1DC5E6'

// const GREEN = '#1DE9B6' // This green is almost identical to DOGO_GREEN, probably don't need both

const purpleSwatch = computeColorSwatch(PURPLE)

const orangeSwatch = computeColorSwatch(ORANGE)

const greenSwatch = computeColorSwatch(GREEN)

const yellowSwatch = computeColorSwatch(YELLOW)

const redSwatch = computeColorSwatch(RED)

const accentSwatch = computeColorSwatch(ACCENT)

const blueSwatch = computeColorSwatch(BLUE)

const lightGray = '#EAEAEA'

export const colors = {
  purpleSwatch,
  orangeSwatch,
  greenSwatch,
  redSwatch,
  yellowSwatch,
  accentSwatch,
  WHITE,
  blueSwatch,
  lightGray,
}
