import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { UserCard, UserCardProps } from 'src/exports/organisms'

export default {
  title: 'organisms/UserCard',
  component: UserCard,
  args: {
    caption: 'Manage Account',
    firstName: 'Nick',
    lastName: 'Weaver',
    active: true,
    country: { isoCode: 'US', callingCode: 1, hasSeparator: true },
  },
} as Meta

const Template: StoryFn<UserCardProps> = args => <UserCard {...args}></UserCard>

const WithProfileImage = Template.bind({})
WithProfileImage.args = {
  profileImage: 'http://i.pravatar.cc/300',
}

export const Small = Template.bind({})
Small.args = {
  ...WithProfileImage.args,
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  ...WithProfileImage.args,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  ...WithProfileImage.args,
  size: 'large',
}

export const NoProfileImage = Template.bind({})
NoProfileImage.args = {
  size: 'medium',
}
