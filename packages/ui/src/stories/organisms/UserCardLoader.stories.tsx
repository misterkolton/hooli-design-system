import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { UserCardLoader, UserCardLoaderProps } from 'src/exports/organisms'

export default {
  title: 'organisms/UserCardLoader',
  component: UserCardLoader,
} as Meta

const Template: StoryFn<UserCardLoaderProps> = args => (
  <UserCardLoader {...args} />
)

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}
