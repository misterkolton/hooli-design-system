import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Capsule, CapsuleProps } from 'src/exports/atoms'
import { textControl } from '../../../.storybook/controls'

export default {
  title: 'atoms/Capsule',
  component: Capsule,
  args: {
    title: 'New',
  },
  argTypes: {
    title: {
      ...textControl,
    },
  },
} as Meta

export const CapsuleStory: StoryFn<CapsuleProps> = args => {
  return <Capsule {...args} />
}
