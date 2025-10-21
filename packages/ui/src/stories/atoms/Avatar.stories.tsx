import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Avatar, AvatarProps } from 'src/exports/atoms'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
  args: {
    isActive: true,
    isSelected: false,
    initials: 'SB',
    avatarImage: 'http://i.pravatar.cc/700',
  },
} as Meta
export const XLarge: StoryFn<AvatarProps> = args => <Avatar {...args} />
export const Large: StoryFn<AvatarProps> = args => <Avatar {...args} />
export const Medium: StoryFn<AvatarProps> = args => <Avatar {...args} />
export const Small: StoryFn<AvatarProps> = args => <Avatar {...args} />
export const XSmall: StoryFn<AvatarProps> = args => <Avatar {...args} />

XLarge.args = {
  size: 'xLarge',
}
Large.args = {
  size: 'large',
}
Medium.args = {
  size: 'medium',
}
Small.args = {
  size: 'small',
}
XSmall.args = {
  size: 'xSmall',
}
