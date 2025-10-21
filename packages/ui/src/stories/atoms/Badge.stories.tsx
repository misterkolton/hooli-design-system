import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Badge, BadgeProps, Div } from 'src/exports/atoms'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as Meta

const Template: StoryFn<BadgeProps> = args => {
  return (
    <Div inset="x2">
      <Badge {...args} />
    </Div>
  )
}

export const LessThanTen = Template.bind({})
LessThanTen.args = {
  item: '5',
}

export const Ten = Template.bind({})
Ten.args = {
  item: '10',
}

export const GreaterThanTen = Template.bind({})
GreaterThanTen.args = {
  item: '11',
}

export const NotANumber = Template.bind({})
NotANumber.args = {
  item: 'I am not a number!',
}
