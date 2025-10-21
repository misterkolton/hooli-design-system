import React from 'react'
import { Sphere, SphereProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'molecules/Sphere',
  component: Sphere,
  args: {
    size: 'medium',
    step: {
      content: 1,
      color: 'inverseBody',
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
  },
} as Meta

export const Primary: StoryFn<SphereProps> = args => {
  return (
    <Flex justifyContent="center" width="100%">
      <Sphere {...args} />
    </Flex>
  )
}
