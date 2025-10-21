import React from 'react'
import {
  HStack,
  HStackProps,
  Div,
  IconType,
  Flex,
  Text,
} from 'src/exports/atoms'
import { IconLink } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { SizeType } from 'src/types/global'

export default {
  title: 'atoms/HStack',
  component: HStack,
  args: {
    gap: 'x2',
    justify: 'flex-start',
    shouldWrap: 'false',
    display: 'top',
    inset: 'x_2',
    outset: 'x_2',
  },
  argTypes: {
    gap: {
      control: {
        type: 'select',
        options: [
          'x0',
          'x_25',
          'x_5',
          'x_75',
          'x1',
          'x1_5',
          'x2',
          'x2_5',
          'x3',
          'x4',
          'x5',
          'x6',
          'x7',
          'x8',
          'x9',
        ],
      },
    },
    inset: {
      control: {
        type: 'select',
        options: [
          'x0',
          'x_25',
          'x_5',
          'x_75',
          'x1',
          'x1_5',
          'x2',
          'x2_5',
          'x3',
          'x4',
          'x5',
          'x6',
          'x7',
          'x8',
          'x9',
        ],
      },
    },
    outset: {
      control: {
        type: 'select',
        options: [
          'x0',
          'x_25',
          'x_5',
          'x_75',
          'x1',
          'x1_5',
          'x2',
          'x2_5',
          'x3',
          'x4',
          'x5',
          'x6',
          'x7',
          'x8',
          'x9',
        ],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: ['flex-start', 'flex-end', 'center'],
      },
    },
    shouldWrap: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

type iconListType = {
  icon: IconType
  onClick: () => void
  size: SizeType
}

const iconList: iconListType[] = [
  { icon: 'star', onClick: () => {}, size: 'small' },
  { icon: 'wand', onClick: () => {}, size: 'small' },
  { icon: 'play', onClick: () => {}, size: 'small' },
  { icon: 'plus', onClick: () => {}, size: 'small' },
  { icon: 'delete', onClick: () => {}, size: 'small' },
  { icon: 'wand', onClick: () => {}, size: 'small' },
]

export const Primary: StoryFn<HStackProps> = args => {
  return (
    <>
      <Flex
        width="auto"
        height="auto"
        justifyContent="center"
        alignItems="center"
        backgroundColor="background"
      >
        <Div width="225px" backgroundColor="foreground">
          <HStack {...args}>
            {iconList.map(icon => (
              <IconLink
                icon={icon.icon}
                onClick={icon.onClick}
                size={icon.size}
              />
            ))}
            {false && <div>This won't appear</div>}
          </HStack>
        </Div>
      </Flex>
      <Text type="footnote">
        If shouldWrap is false and items overflow container, you can scroll
        horizontally to see them
      </Text>
    </>
  )
}
