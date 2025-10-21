import React from 'react'
import { TitledList, TitledListProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'

export default {
  title: 'molecules/TitledList',
  component: TitledList,
  args: {
    title: 'Bugfixes:',
    listItems: [
      'Image Upload Hard to find, this has been relocated to the top of the image drawer',
      'Photo Drop Card Now Working!',
      'You can now edit and send cards from the card history',
    ],
  },
  argTypes: {
    titleSize: {
      control: {
        type: 'select',
        options: ['subtitle', 'largeBody', 'body'],
      },
    },
  },
} as Meta

export const StoryName: StoryFn<TitledListProps> = args => {
  return (
    <Div inset="x2">
      <TitledList {...args} />
    </Div>
  )
}
