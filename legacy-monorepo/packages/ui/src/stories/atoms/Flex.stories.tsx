import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex, FlexProps } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/Flex',
  component: Flex,
  args: {
    justifyContent: 'space-between',
    maxWidth: '516px',
    maxHeight: '516px',
  },
  argTypes: {
    ...hocControls,
  },
} as Meta

export const HOC: StoryFn<FlexProps> = args => (
  <Flex {...args}>
    <span>Flex Item 1</span>
    <span>Flex Item 2</span>
    <span>Flex Item 3</span>
    <span>Flex Item 4</span>
  </Flex>
)
