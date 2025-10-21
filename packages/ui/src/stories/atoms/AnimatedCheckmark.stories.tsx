import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  AnimatedCheckMark,
  AnimatedCheckMarkProps,
  Div,
  Flex,
} from 'src/exports/atoms'

export default {
  title: 'atoms/AnimatedCheckMark',
  component: AnimatedCheckMark,
  args: {
    size: 'large',
  },
} as Meta

export const Filled: StoryFn<AnimatedCheckMarkProps> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Div>
        <AnimatedCheckMark {...args} />
      </Div>
    </Flex>
  )
}

export const Lined: StoryFn<AnimatedCheckMarkProps> = args => (
  <AnimatedCheckMark {...args} />
)

Filled.args = {
  filled: true,
}

Lined.args = {
  filled: false,
}
