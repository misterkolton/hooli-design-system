import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Flex } from 'src/atoms/flex/flex'
import {
  SpacingDirection,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'
import { ColorThumbnailLoader } from './loaders/colorThumbnailLoader'

export type ColorThumbnailProps = {
  backgroundColor: string
  isSelected: boolean
  isRounded?: boolean
  thumbnailSize?: number
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  onSelect: (fill: string) => void
  isLoading?: boolean
}

export const ColorThumbnail: FC<ColorThumbnailProps> = ({
  backgroundColor,
  isSelected,
  onSelect,
  thumbnailSize = 32,
  outset,
  isRounded = false,
  isLoading = false,
}) => {
  const selectedThumbnailSize = `calc(${thumbnailSize} / 2.75)`

  if (isLoading) {
    return <ColorThumbnailLoader diameter={thumbnailSize} outset={outset} />
  }

  return (
    <Flex
      onClick={() => onSelect(backgroundColor)}
      backgroundColor={backgroundColor}
      whileHover={{ scale: 1.2 }}
      cursor="pointer"
      borderRadius={isRounded ? 'circle' : 'small'}
      width={`${thumbnailSize}px`}
      height={`${thumbnailSize}px`}
      minWidth={`${thumbnailSize}px`}
      outset={outset}
      justifyContent="center"
      alignItems="center"
    >
      {isSelected && (
        <Div
          backgroundColor="foreground"
          width={selectedThumbnailSize}
          height={selectedThumbnailSize}
          borderRadius={isRounded ? 'circle' : '3px'}
          boxShadow="mediumLight"
        />
      )}
    </Flex>
  )
}
