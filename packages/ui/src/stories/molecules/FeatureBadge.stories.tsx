import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { FeatureBadge, FeatureBadgeProps } from 'src/exports/molecules'
import { Div } from 'src'

export default {
  title: 'molecules/FeatureBadge',
  component: FeatureBadge,
  args: {
    title: 'Try New Editor',
    icon: 'star',
  },
} as Meta

const Template: StoryFn<FeatureBadgeProps> = args => (
  <Div outset="x4">
    <FeatureBadge
      backgroundColor={'success'}
      onClick={() => console.log('clicked!!!')}
      {...args}
    />
  </Div>
)

export const FeatureBadgeStory = Template.bind({})
FeatureBadgeStory.args = {}
