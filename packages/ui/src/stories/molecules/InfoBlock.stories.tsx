import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { InfoBlock, InfoBlockProps } from 'src/exports/molecules'

export default {
  title: 'molecules/InfoBlock',
  component: InfoBlock,
  args: {
    heading: 'Title',
    caption: 'Subtitle',
  },
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: [
          'space-evenly',
          'stretch',
          'start',
          'end',
          'baseline',
          'first baseline',
          'last baseline',
          'safe',
          'unsafe',
          'center',
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'initial',
          'inherit',
          'self-end',
          'self-start',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
    caption: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: StoryFn<InfoBlockProps> = args => <InfoBlock {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'large',
}
