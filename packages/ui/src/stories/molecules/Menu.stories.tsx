import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Menu, MenuSection, MenuItem, MenuProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Menu',
  component: Menu,
} as Meta

export const MenuWithMenuItems: StoryFn<MenuProps> = args => (
  <Menu {...args}>
    <MenuSection divider={true}>
      <MenuItem
        onClick={() => console.log('hello')}
        title="Option 1"
        icon="chevron"
        iconOrientation="right"
      ></MenuItem>
    </MenuSection>
    <MenuSection divider={true}>
      <MenuItem
        onClick={() => console.log('hello')}
        title="2nd Section - Option 1"
      ></MenuItem>
      <MenuItem
        onClick={() => console.log('hello')}
        title="2nd Section - Option 2"
      ></MenuItem>
      <MenuItem
        onClick={() => console.log('hello')}
        title="2nd Section - Option 3"
      ></MenuItem>
      <MenuItem
        onClick={() => console.log('hello')}
        title="2nd Section - Option 4"
      ></MenuItem>
      <MenuItem
        onClick={() => console.log('hello')}
        title="2nd Section - Option 5"
      ></MenuItem>
    </MenuSection>
    <MenuSection divider={false}>
      <MenuItem
        onClick={() => console.log('hello')}
        title="Last Section Option 1"
        icon="tenDoor"
      ></MenuItem>
    </MenuSection>
  </Menu>
)
