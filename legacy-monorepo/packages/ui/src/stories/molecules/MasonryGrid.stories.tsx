import React from 'react'
import { MasonryGrid, MasonryGridProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/MasonryGrid',
  component: MasonryGrid,
  args: {
    columnSize: 100,
    rowSize: 100,
    gap: 16,
  },
} as Meta

export const Primary: StoryFn<MasonryGridProps> = args => (
  <MasonryGrid {...args} />
)
