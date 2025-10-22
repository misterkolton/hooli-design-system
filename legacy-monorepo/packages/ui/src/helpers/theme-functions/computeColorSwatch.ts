import Color from 'color'

export type ColorSwatch = {
  base: string
  _100?: string
  _200?: string
  _300?: string
  _400?: string
  _500?: string
  _600?: string
  _700?: string
  _800?: string
  _900?: string
  _1000?: string
}

export const computeColorSwatch = (hexValue: string) => {
  const HSL = Color(hexValue).hsl()
  const h = Math.round(HSL.array()[0])
  const s = Math.round(HSL.array()[1])
  const l = Math.round(HSL.array()[2])

  const baseColor = Color.hsl([h, s, l]).toString()
  const hslColors = computeHSLColors(h, s, computeLScale(l))

  return mapColorsToKeys(hslColors, baseColor)
}

const computeHSLColors = (h: number, s: number, lScaleValues: number[]) => {
  const hslColors = lScaleValues.map((l: number) => {
    const hslColor = Color.hsl([h, s, l]).toString()

    return hslColor
  })

  return hslColors
}

const computeLScale = (l: number) => {
  const lastDigit = l % 10
  const scaleLimit = lastDigit === 0 ? 10 : 9
  let scaleValues = [1]

  let counter = 0
  while (counter < scaleLimit) {
    counter++
    let scaleValue = counter * 10 + lastDigit
    scaleValues.push(scaleValue)
  }
  return scaleValues
}

const mapColorsToKeys = (hslColors: string[], baseColor: string) => {
  const colorSwatchObject: ColorSwatch = { base: '' }

  hslColors.forEach((hslColor, index) => {
    if (baseColor === hslColor) {
      colorSwatchObject['base'] = hslColor
      colorSwatchObject[`_${(index + 1) * 100}`] = hslColor
    } else {
      colorSwatchObject[`_${(index + 1) * 100}`] = hslColor
    }
  })
  return colorSwatchObject
}
