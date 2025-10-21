import { SizeType } from 'src/types/global'
import { entities } from 'src/theme/theming/entities'
import { mapSizeType } from './mapSizeType'

export type AvatarSizeMap = typeof entities.avatar.sizes
export type AvatarSizeMapProperties = typeof entities.avatar.sizes.large

export const computeAvatarProperties = (
  size: SizeType,
  sizeMap: AvatarSizeMap,
): AvatarSizeMapProperties => {
  return mapSizeType<AvatarSizeMapProperties>(size, sizeMap)
}
