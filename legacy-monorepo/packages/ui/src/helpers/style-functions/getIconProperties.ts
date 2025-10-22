import { IconsEntity } from 'src/theme/theming/entities'
import { SizeType } from 'src/types/global'
import { IconColors } from 'src/exports/atoms'
import { LiteralUnion } from '../hoc-types/entityValueTypes'

export const getIconColor = (
  color: LiteralUnion<IconColors>,
  entity: IconsEntity,
) => {
  return entity.colors[color] ?? color
}
export const getIconSize = (
  size: LiteralUnion<SizeType> | number,
  entity: IconsEntity,
) => {
  if (typeof size === 'number') return size
  return entity.sizes[size]
}
