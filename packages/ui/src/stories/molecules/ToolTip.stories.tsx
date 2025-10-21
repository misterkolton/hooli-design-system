import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Tooltip, TooltipProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Tooltip',
  component: Tooltip,
  args: {
    title:
      'This card is $0.00 because of available System Cards or available Card Package cards',
    background: 'light',
  },
  argTypes: {
    background: {
      control: { type: 'select', options: ['light', 'dark'] },
    },
    direction: {
      control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
    },
    whiteSpace: {
      control: { type: 'select', options: ['normal', 'nowrap', 'pre'] },
    },
  },
} as Meta

const Template: StoryFn<TooltipProps> = args => (
  <Div width="216px" inset={'x2'} position="absolute" display="flex">
    <Tooltip {...args} />
  </Div>
)

export const RightDirection = Template.bind({})
RightDirection.args = {
  direction: 'right',
}

export const LeftDirection = Template.bind({})
LeftDirection.args = {
  direction: 'left',
}

export const BottomDirection = Template.bind({})
BottomDirection.args = {
  direction: 'bottom',
}

export const TopDirection = Template.bind({})
TopDirection.args = {
  direction: 'top',
}
