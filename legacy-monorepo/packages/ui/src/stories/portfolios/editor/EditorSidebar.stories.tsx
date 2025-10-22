import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { EditorSidebarProps, EditorSidebar } from 'src/exports/editor'

export default {
  title: 'Editor/EditorSidebar',
  component: EditorSidebar,
  args: {
    logo: {
      icon: 'socLogo',
      color: 'primary',
    },
    mainMenuAction: () => console.log('Main Menu'),
    options: [
      {
        icon: 'image',
        title: 'Image',
        onClick: () => console.log('Image Clicked'),
        isActive: false,
      },
      {
        icon: 'text',
        title: 'Text',
        onClick: () => console.log('Text clicked'),
        isActive: false,
      },
      {
        icon: 'color',
        title: 'Color',
        onClick: () => console.log('Color clicked'),
        isActive: true,
      },
      {
        icon: 'template',
        title: 'Template',
        onClick: () => console.log('Template clicked'),
        isActive: false,
      },
    ],
  },
} as Meta

export const SidebarFive: StoryFn<EditorSidebarProps> = args => (
  <EditorSidebar {...args} />
)
