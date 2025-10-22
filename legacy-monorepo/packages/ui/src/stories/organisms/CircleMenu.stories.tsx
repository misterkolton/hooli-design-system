import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { CircleMenu, CircleMenuProps } from 'src/exports/organisms'

export default {
  title: 'organisms/CircleMenu',
  component: CircleMenu,
  args: {
    icon: 'plus',
    isOpen: true,
    setIsSheetOpen: () => console.log('Sheet open'),
    size: 'medium',
  },
} as Meta

export const Basic: StoryFn<CircleMenuProps> = args => (
  <CircleMenu {...args}></CircleMenu>
)
