import { useEntities } from './useEntities'
import { ColorStop } from 'src/types/global'
import {
  LiteralUnion,
  HOCSwatchColorKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

type LinearColorStop = number | LiteralUnion<HOCSwatchColorKeys> | ColorStop

const isLiteralHocSwatchKey = (
  valueToCheck: any,
): valueToCheck is LiteralUnion<HOCSwatchColorKeys> => {
  return (typeof valueToCheck as LiteralUnion<HOCSwatchColorKeys>) !== 'string'
}

export const useLinearGradient = (angle: number, colors: LinearColorStop[]) => {
  const colorSwatches = useEntities().hocs.colors.swatches
  const linearStops = colors
    .map(color => {
      if (typeof color === 'number') {
        return ` ${color}%`
      } else if (isLiteralHocSwatchKey(color)) {
        return colorSwatches[color]?.base ?? color
      } else {
        return ` ${colorSwatches[color.color]?.base ?? color.color} ${
          color.percentage
        }%`
      }
    })
    .join()

  return `linear-gradient(${angle}deg, ${linearStops})`
}
