import { SizeType } from 'src/types/global'

export const mapSizeType = <T>(
  size: SizeType,
  sizeMap: Record<SizeType, T>,
): T => {
  return sizeMap[size]
}
