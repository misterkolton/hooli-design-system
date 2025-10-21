import React from 'react'
import { ReleaseNote, ReleaseNoteProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div, Flex } from 'src'

export default {
  title: 'molecules/ReleaseNote',
  component: ReleaseNote,
  args: {
    capsule: {
      title: 'fix',
      backgroundColor: 'secondaryBrand',
      fontColor: 'inverseBody',
    },
    note: {
      title:
        'Panel Settings now has enhanced UI to allow you to choose a background color and background image',
      color: 'primaryBody',
    },
  },
} as Meta

export const StoryName: StoryFn<ReleaseNoteProps> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center" inset="x2">
      <Div
        backgroundColor="background"
        borderColor={{ swatch: 'secondaryBrand', shade: 'base' }}
        borderRadius="default"
        borderStyle="solid"
        inset="x2"
      >
        <ReleaseNote {...args} />
      </Div>
    </Flex>
  )
}
