import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { List, ListProps, ListItem, Text, Div } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/List',
  component: List,
  args: {
    alignContent: 'center',
  },
  argTypes: {
    ...hocControls,
  },
} as Meta

const listItems = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
]

export const Horizontal: StoryFn<ListProps> = args => (
  <List {...args}>
    {listItems.map(item => {
      return (
        <ListItem orientation="horizontal">
          <Div backgroundColor={{ swatch: 'secondaryBrand', shade: '_900' }}>
            <Text
              type="body"
              alignment="center"
              color="primaryBody"
              weight="semiBold"
            >
              Item {item}
            </Text>
          </Div>
        </ListItem>
      )
    })}
  </List>
)
Horizontal.args = {
  orientation: 'horizontal',
}
export const Vertical: StoryFn<ListProps> = args => (
  <List {...args}>
    {listItems.map(item => {
      return (
        <ListItem orientation="vertical">
          <Div
            backgroundColor={{ swatch: 'secondaryBrand', shade: '_900' }}
            justifyContent="space-between"
          >
            <Text type="body" color="primaryBody" weight="semiBold">
              Item {item}
            </Text>
          </Div>
        </ListItem>
      )
    })}
  </List>
)
Vertical.args = {
  orientation: 'vertical',
}
