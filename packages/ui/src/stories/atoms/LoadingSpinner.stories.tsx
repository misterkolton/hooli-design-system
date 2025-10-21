import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { LoadingSpinner, LoadingSpinnerProps } from 'src/exports/atoms'

export default {
  title: 'atoms/LoadingSpinner',
  component: LoadingSpinner,
  args: {
    size: 'xLarge',
    hasNoColor: false,
  },
} as Meta

const Template: StoryFn<LoadingSpinnerProps> = args => (
  <LoadingSpinner {...args}></LoadingSpinner>
)

export const WithColor = Template.bind({})
WithColor.args = {
  title: 'Loading Spinner w/Color',
}

export const WithoutColor = Template.bind({})
WithoutColor.args = {
  title: 'Loading Spinner w/o Color',
  hasNoColor: true,
}
