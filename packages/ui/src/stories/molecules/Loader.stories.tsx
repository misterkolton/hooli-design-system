import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Loader, LoaderProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Loader',
  component: Loader,
  args: {
    width: '',
    height: '',
    speed: 2,
  },
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    speed: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: StoryFn<LoaderProps> = args => <Loader {...args}></Loader>

export const LoaderWithRectSVG = Template.bind({})
LoaderWithRectSVG.args = {
  children: <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />,
}

export const LoaderWithCircleSVG = Template.bind({})
LoaderWithCircleSVG.args = {
  children: <circle cx="24" cy="24" r="24" />,
}
