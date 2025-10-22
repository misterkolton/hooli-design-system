import React from 'react'
import { ColorThumbnail, ColorThumbnailProps, Flex } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'atoms/ColorThumbnail',
  component: ColorThumbnail,
  args: {
    isSelected: false,
    isRounded: false,
    backgroundColor: '#AAD2BA',
    thumbnailSize: '32px',
  },
} as Meta

export const StoryName: StoryFn<ColorThumbnailProps> = args => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <ColorThumbnail {...args} />
  </Flex>
)
