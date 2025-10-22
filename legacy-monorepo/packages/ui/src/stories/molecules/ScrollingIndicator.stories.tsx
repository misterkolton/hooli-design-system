import React from 'react'
import {
  ScrollingIndicator,
  ScrollingIndicatorProps,
} from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/ScrollingIndicator',
  component: ScrollingIndicator,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const StoryName: StoryFn<ScrollingIndicatorProps> = args => (
  <ScrollingIndicator {...args} size={'50px'} />
)
