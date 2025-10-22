import React from 'react'
import { Spacer, SpacerProps } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'

export default {
  title: 'atoms/Spacer',
  component: Spacer,
  args: {
    space: 'x2',
  },
  argTypes: {
    space: {
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
  },
} as Meta

const VerticalTemplate: StoryFn<SpacerProps> = args => {
  return (
    <>
      <Div
        {...args}
        inset="x8"
        outset={{ top: 'x2', right: 'x8', bottom: 'x0', left: 'x8' }}
        backgroundColor={{ swatch: 'success', shade: 'base' }}
        display="grid"
        justifyContent="center"
        boxShadow="mediumDark"
        borderRadius="medium"
        borderWidth="thin"
      >
        Upper Item
      </Div>
      <Spacer {...args} />
      <Div
        {...args}
        inset="x8"
        outset={{ top: 'x0', right: 'x8', bottom: 'x0', left: 'x8' }}
        backgroundColor={{ swatch: 'success', shade: '_100' }}
        color="inverseBody"
        display="grid"
        justifyContent="center"
        boxShadow="mediumDark"
        borderRadius="medium"
        borderWidth="thin"
      >
        Lower Item
      </Div>
    </>
  )
}

const HorizontalTemplate: StoryFn<SpacerProps> = args => {
  return (
    <Div width="100%" display="flex" justifyContent="flex-start">
      <Div
        {...args}
        inset="x8"
        outset={{ top: 'x2', right: 'x0', bottom: 'x0', left: 'x2' }}
        backgroundColor={{ swatch: 'success', shade: 'base' }}
        display="grid"
        justifyContent="center"
        boxShadow="mediumDark"
        borderRadius="medium"
        borderWidth="thin"
      >
        Left Item
      </Div>
      <Spacer {...args} />
      <Div
        {...args}
        inset="x8"
        outset={{ top: 'x2', right: 'x2', bottom: 'x0', left: 'x0' }}
        backgroundColor={{ swatch: 'success', shade: '_100' }}
        color="inverseBody"
        display="grid"
        justifyContent="center"
        boxShadow="mediumDark"
        borderRadius="medium"
        borderWidth="thin"
      >
        Right Item
      </Div>
    </Div>
  )
}

export const VerticalSpace = VerticalTemplate.bind({})
VerticalSpace.args = {
  space: 'x4',
}

export const HorizontalSpace = HorizontalTemplate.bind({})
HorizontalSpace.args = {
  space: 'x4',
  orientation: 'horizontal',
}
