import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Circle, CircleProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Circle',
  component: Circle,
  args: {
    icon: 'catalog',
    fill: 'inverseBodyText',
  },
} as Meta

export const Primary: StoryFn<CircleProps> = args => <Circle {...args} />
