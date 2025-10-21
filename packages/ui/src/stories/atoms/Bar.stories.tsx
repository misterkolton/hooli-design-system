import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Bar, BarProps, Div } from 'src/exports/atoms'

export default {
  title: 'atoms/Bar',
  component: Bar,
  argTypes: {
    height: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: StoryFn<BarProps> = args => {
  return (
    <Div outset="x5">
      <Bar {...args} />
    </Div>
  )
}

export const VerticalBar = Template.bind({})
VerticalBar.args = {
  height: '60px',
  width: '3px',
}

export const HorizontalBar = Template.bind({})
HorizontalBar.args = {
  height: '3px',
  width: '60px',
}
