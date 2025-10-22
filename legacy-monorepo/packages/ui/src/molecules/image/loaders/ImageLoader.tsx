import React, { FC } from 'react'
import { Loader } from '../../../exports/molecules'
import { useEntities } from 'src/hooks/useEntities'
import {
  HOCBorderRadiusKeys,
  LiteralUnion,
} from 'src/helpers/hoc-types/entityValueTypes'
import { getNumberFromString } from 'src/helpers/style-functions/getNumberFromString'

export type ImageLoaderProps = {
  height: number
  width: number
  isActive: boolean
  borderRadius: LiteralUnion<HOCBorderRadiusKeys>
}

export const ImageLoader: FC<ImageLoaderProps> = ({
  width,
  height,
  isActive,
  borderRadius,
}) => {
  const { hocs } = useEntities()
  const radius = hocs.borderRadius[borderRadius]

  const scaledWidth = isActive ? width : width * 0.88
  const scaledHeight = isActive ? height : height * 0.88

  return (
    <Loader width={scaledWidth} height={scaledHeight}>
      <rect
        width={scaledWidth}
        height={scaledHeight}
        rx={getNumberFromString(radius)}
        ry={getNumberFromString(radius)}
      />
    </Loader>
  )
}
