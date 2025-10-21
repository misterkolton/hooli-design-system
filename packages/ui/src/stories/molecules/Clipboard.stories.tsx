import React from 'react'
import { Clipboard, ClipboardProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { textControl } from '../../../.storybook/controls'

export default {
  title: 'molecules/Clipboard',
  component: Clipboard,
  args: {
    copyText: 'Hello World',
  },
  argTypes: {
    copyText: {
      ...textControl,
    },
  },
} as Meta

// If a template is required write it like this (Delete comments if not using)
/*
    const Template: StoryFn<ClipboardProps> = args => <Clipboard {...args} />

    export StoryName = Template.bind({})
    StoryName.args = {
      args here
    }
  */

export const StoryName: StoryFn<ClipboardProps> = args => (
  <Clipboard {...args} />
)
