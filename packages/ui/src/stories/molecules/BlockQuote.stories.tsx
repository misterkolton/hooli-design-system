import React from 'react'
import { BlockQuote, BlockQuoteProps } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/BlockQuote',
  component: BlockQuote,
  args: {
    type: 'primary',
    background: 'background',
    contentTextType: 'largeBody',
    textColor: 'primaryBody',
    borderRadius: 'none',
    boxShadow: 'mediumLight',
    author: 'Steve Jobs',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      },
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'default', 'large'],
      },
    },
    background: {
      control: {
        type: 'select',
        options: ['background', 'foreground'],
      },
    },
    boxShadow: {
      control: {
        type: 'select',
        options: ['dark', 'mediumDark', 'mediumLight', 'light'],
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    author: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryFn<BlockQuoteProps> = args => (
  <Flex height="fit-content" width="800px">
    <BlockQuote {...args}>
      Creativity is just connecting things. When you ask creative people how
      they did something, they feel a little guilty because they didn't really
      do it, they just saw something. It seemed obvious to them after a while.
      That's because they were able to connect experiences they've had and
      synthesize new things.
    </BlockQuote>
  </Flex>
)
