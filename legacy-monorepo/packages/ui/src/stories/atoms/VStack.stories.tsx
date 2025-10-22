import React from 'react'
import { VStack, VStackProps, Div, Text } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { textControl } from '../../../.storybook/controls'

export default {
  title: 'atoms/VStack',
  component: VStack,
  args: {
    gap: 'x1',
    justifyContent: 'center',
  },
  argTypes: {
    justifyContent: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'initial',
          'inherit',
        ],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        options: [
          'self-start',
          'self-end',
          'space-evenly',
          'stretch',
          'start',
          'end',
          'baseline',
          'first baseline',
          'last baseline',
          'safe',
          'unsafe',
        ],
      },
    },
    alignContent: {
      control: {
        type: 'select',
        options: [
          'space-evenly',
          'stretch',
          'start',
          'end',
          'baseline',
          'first baseline',
          'last baseline',
          'safe',
          'unsafe',
        ],
      },
    },

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
    width: {
      ...textControl,
    },
    height: {
      ...textControl,
    },
    overflow: {
      control: {
        type: 'select',
        options: ['auto', 'scroll', 'hidden', 'visible'],
      },
    },
  },
} as Meta

export const Primary: StoryFn<VStackProps> = args => {
  return (
    <Div width="250px" outset={{ top: 'x4' }}>
      <VStack {...args}>
        <Div
          backgroundColor={{ swatch: 'blueScale', shade: 'base' }}
          height="100px"
          width="100px"
          boxShadow="light"
          borderRadius="small"
        >
          <Text type="subtitle" alignment="center" outset={{ top: 'x4' }}>
            Block 1
          </Text>
        </Div>
        <Div
          backgroundColor={{ swatch: 'blueScale', shade: 'base' }}
          height="100px"
          width="100px"
          boxShadow="light"
          borderRadius="small"
        >
          <Text type="subtitle" alignment="center" outset={{ top: 'x4' }}>
            Block 2
          </Text>
        </Div>
        <Div
          backgroundColor={{ swatch: 'blueScale', shade: 'base' }}
          height="100px"
          width="100px"
          boxShadow="light"
          borderRadius="small"
        >
          <Text type="subtitle" alignment="center" outset={{ top: 'x4' }}>
            Block 3
          </Text>
        </Div>
      </VStack>
    </Div>
  )
}
