import { useEntities } from './useEntities'

export const useColorSwatch = () => {
  const { hocs } = useEntities()
  const { colors } = hocs

  const {
    primaryBrand,
    secondaryBrand,
    success,
    danger,
    warning,
    accent,
    grayScale,
    blueScale,
    purpleScale,
  } = colors.swatches

  return {
    primaryBrand,
    secondaryBrand,
    success,
    danger,
    warning,
    accent,
    grayScale,
    blueScale,
    purpleScale,
  }
}
