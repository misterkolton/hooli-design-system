import { useEntities } from './useEntities'
import { ColorStop } from 'src/types/global'

type RadialShape = 'ellipse' | 'circle'

type RadialSize =
  | 'farthest-corner'
  | 'closest-corner'
  | 'closest-side'
  | 'farthest-side'

export const useRadialGradient = (
  colors: ColorStop[],
  shape?: RadialShape,
  size?: RadialSize,
  position?: string,
) => {
  const colorSwatches = useEntities().hocs.colors.swatches
  const radialColors = colors
    .map(color => {
      const radialColor = colorSwatches[color.color]?.base ?? color.color
      return ` ${radialColor} ${color.percentage}%`
    })
    .join()

  return `radial-gradient(${shape ?? 'ellipse'} ${
    size ?? 'farthest-corner'
  } at ${position ?? 'center'}, ${radialColors})`
}
