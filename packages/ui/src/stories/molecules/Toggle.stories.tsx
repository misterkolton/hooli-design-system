import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Toggle, ToggleProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Toggle',
  component: Toggle,
} as Meta

const Template: StoryFn<ToggleProps> = args => {
  return <Toggle {...args} />
}

export const ToggleStory = Template.bind({})
