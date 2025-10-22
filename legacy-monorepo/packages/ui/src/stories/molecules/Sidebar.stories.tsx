import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Sidebar, SidebarProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Sidebar',
  component: Sidebar,
} as Meta

export const EmptySidebar: StoryFn<SidebarProps> = args => (
  <Div height="100vh" display="flex">
    <Sidebar {...args}></Sidebar>
  </Div>
)
