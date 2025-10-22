import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/exports/atoms'
import { Button, DropDownMenu, DropDownMenuProps } from 'src/exports/molecules'

export default {
  title: 'molecules/DropDownMenu',
  component: DropDownMenu,
  args: {
    linkColumn: {
      title: 'My Account',
      links: [
        { title: 'Dashboard', href: '#' },
        { title: 'Notifications', href: '#' },
        {
          title: <Div>I am a node Link</Div>,
          href: '#',
        },
        { title: 'Logout', icon: 'tenDoor', href: '#', iconLinkWithText: true },
      ],
    },
  },
} as Meta

export const StoryName: StoryFn<DropDownMenuProps> = args => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Div width="300px">
      <Button onClick={() => setIsOpen(!isOpen)} />
      <DropDownMenu {...args} isOpen={isOpen} />
    </Div>
  )
}
