import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Span, SpanProps } from 'src/exports/atoms'
import { hocControls } from '../../../.storybook/controls'

export default {
  title: 'atoms/Span',
  component: Span,
  argTypes: {
    ...hocControls,
  },
} as Meta

export const HOC: StoryFn<SpanProps> = args => <Span {...args}>Modify Me!</Span>
