import { ColorSwatch } from './computeColorSwatch'
import Color from 'color'

export const computeGrayScale = (swatch: ColorSwatch) => {
  const grayScale: ColorSwatch = {
    _100: undefined,
    _200: undefined,
    _300: undefined,
    _400: undefined,
    _500: undefined,
    _600: undefined,
    _700: undefined,
    _800: undefined,
    _900: undefined,
    _1000: undefined,
    base: '',
  }
  Object.keys(swatch).forEach(key => {
    return (grayScale[key] = Color(swatch[key]).grayscale().hsl().toString())
  })
  return grayScale
}
