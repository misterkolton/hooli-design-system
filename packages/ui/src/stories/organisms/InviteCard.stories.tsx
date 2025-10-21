import React from 'react'
import { InviteCard, InviteCardProps } from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'

export default {
  title: 'organisms/InviteCard',
  component: InviteCard,
} as Meta

const Template: StoryFn<InviteCardProps> = args => {
  return (
    <Div
      height=" 425px"
      width="400px"
      outset="0 auto"
      boxShadow="mediumLight"
      borderRadius="default"
    >
      <InviteCard {...args} />
    </Div>
  )
}

export const SOCInviteCard = Template.bind({})
SOCInviteCard.args = {
  user: {
    name: 'Dave Smith',
    profileDate: 'Created 6/20/21',
    activityFeed: 'Creating Post Card',
    activityDescription: 'User is currently building a card',
  },
  avatar: {
    size: 'medium',
    isActive: true,
    avatarImage: 'http://i.pravatar.cc/700',
    initials: 'DS',
  },
  action: {
    type: 'secondary',
    title: 'Send a Card',
    onClick: () => console.log('get ready to send a card'),
  },
  extraLink: {
    size: 'small',
    href: 'href',
    isDecorated: false,
    title: 'View More Details',
  },
}
