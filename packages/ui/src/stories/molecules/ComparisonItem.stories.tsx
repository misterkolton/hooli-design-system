import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { ComparisonItem, ComparisonItemProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/ComparisonItem',
  component: ComparisonItem,
  args: {
    title: 'Unlimited Heartfelt Cards',
    isNotIncluded: false,
    maxWidth: '455px',
  },
  argTypes: {
    checkMarkFill: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'accent', 'success'],
      },
    },
  },
} as Meta

const Template: StoryFn<ComparisonItemProps> = args => {
  return (
    <Div position="relative" top="32px" left="32px">
      <ComparisonItem {...args} />
    </Div>
  )
}

export const WithSingleDescription = Template.bind({})
WithSingleDescription.args = { description: 'Sent anywhere in the world' }

export const WithMultiDescription = Template.bind({})
WithMultiDescription.args = {
  description: ['Sent anywhere in the world', 'sent from home'],
}
export const WithoutDescription = Template.bind({})
WithoutDescription.args = {}
