import React from 'react'
import { Aside, AsideProps, Text } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/Aside',
  component: Aside,
  argTypes: {
    ...hocControls,
  },
} as Meta

// If a template is required write it like this (Delete comments if not using)
/*
    const Template: StoryFn<AsideProps> = args => <Aside {...args} />

    export StoryName = Template.bind({})
    StoryName.args = {
      args here
    }
  */

export const StoryName: StoryFn<AsideProps> = args => (
  <Aside {...args}>
    <Text type="largeBody">Pass</Text>
    <Text type="largeBody">as</Text>
    <Text type="largeBody">Chilren</Text>
  </Aside>
)
