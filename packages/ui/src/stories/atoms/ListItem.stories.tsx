import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { ListItem, ListItemProps, Div, Text } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/ListItem',
  component: ListItem,
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    ...hocControls,
  },
} as Meta

export const HOC: StoryFn<ListItemProps> = args => (
  <ListItem {...args}>
    <Div backgroundColor={{ swatch: 'secondaryBrand', shade: '_900' }}>
      <Text type="subtitle">List Item</Text>
    </Div>
  </ListItem>
)
