import React, { FC } from 'react'
import { Flex } from 'src/exports/atoms'
import { Loader } from 'src/exports/molecules'
import {
  HOCSpacingKeys,
  SpacingDirection,
  LiteralUnion,
} from 'src/helpers/hoc-types/entityValueTypes'

type ColorThumbnailLoaderProps = {
  diameter: number
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
}

export const ColorThumbnailLoader: FC<ColorThumbnailLoaderProps> = ({
  diameter,
  outset,
}) => {
  const radius = diameter / 2
  return (
    <Flex outset={outset}>
      <Loader width={diameter} height={diameter}>
        <circle cy={radius} cx={radius} r={radius} />
      </Loader>
    </Flex>
  )
}
