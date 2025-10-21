import { SizeType } from 'src/types/global'
import { mapSizeType } from './mapSizeType'
import { entities } from 'src/theme/theming/entities'

type ButtonSizeMap = typeof entities.buttons.sizes
type ButtonSizeProperty = typeof entities.buttons.sizes.xSmall

export const computeButtonSizeProperties = (
  size: SizeType,
  sizeMap: ButtonSizeMap,
): ButtonSizeProperty => {
  return mapSizeType<ButtonSizeProperty>(size, sizeMap)
}
