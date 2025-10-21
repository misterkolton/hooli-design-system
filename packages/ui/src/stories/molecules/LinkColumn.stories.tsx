import React from 'react'
import { LinkColumn, LinkColumnProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/LinkColumn',
  component: LinkColumn,
  args: {
    linkColumn: {
      title: 'Shop Categories',
      links: [
        { title: 'New Arrivals', href: '#' },
        { title: 'Festive', href: '#' },
        { title: 'New Arrivals', href: '#' },
        { title: 'New Arrivals', href: '#' },
      ],
    },
  },
} as Meta

export const StoryName: StoryFn<LinkColumnProps> = args => (
  <Div width="100vw">
    <LinkColumn {...args} />
    <Div
      outset={{ top: '60px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    />
  </Div>
)
