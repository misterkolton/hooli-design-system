import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Progress, ProgressProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Progress',
  component: Progress,
} as Meta

const Template: StoryFn<ProgressProps> = args => <Progress {...args} />

export const ProgressLessThan100 = Template.bind({})
ProgressLessThan100.args = {
  percentage: 67,
}

export const ProgressReached100 = Template.bind({})
ProgressReached100.args = {
  percentage: 100,
}
