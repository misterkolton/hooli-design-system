import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div, DivProps } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/Div',
  component: Div,
  args: {
    display: 'flex',
    height: '200px',
    width: '1200px',
  },
  argTypes: {
    ...hocControls,
  },
} as Meta

export const HOC: StoryFn<DivProps> = args => (
  <Div
    {...args}
    onMouseEvent={e => console.log(e)}
    display="flex"
    backgroundColor={{ swatch: 'success', shade: 'base' }}
  >
    Modify Me!
  </Div>
)
