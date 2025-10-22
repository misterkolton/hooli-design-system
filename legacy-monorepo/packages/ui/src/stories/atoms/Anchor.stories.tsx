import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Anchor, AnchorProps, Div, Flex } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/Anchor',
  component: Anchor,
  args: {
    href: '',
    title: 'Anchor Text',
    size: 'xSmall',
    color: 'primary',
    isDecorated: true,
    target: '_blank',
    inset: 'x0',
    outset: 'x0',
    borderRadius: 'default',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'background',
    backgroundColor: 'background',
    shouldDownload: true,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primaryBrand',
          'secondaryBrand',
          'primaryHeading',
          'primaryBody',
          'inverseHeading',
          'inverseBody',
          'accent',
          'success',
          'warning',
          'danger',
          'anchorBlue',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
    target: {
      control: {
        type: 'select',
        options: ['_blank', '_self', '_parent', '_top'],
      },
    },
    shouldDownload: {
      control: {
        type: 'boolean',
      },
    },

    ...hocControls,
  },
} as Meta

export const HOC: StoryFn<AnchorProps> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Div>
        <Anchor {...args} />
      </Div>
    </Flex>
  )
}
