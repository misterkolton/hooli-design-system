import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Separator, SeparatorProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Separator',
  component: Separator,
} as Meta

const HorizontalTemplate: StoryFn<SeparatorProps> = args => (
  <Separator {...args} />
)

const VerticalTemplate: StoryFn<SeparatorProps> = args => (
  <Div height="320px">
    <Separator {...args} />
  </Div>
)

export const HorizontalStraight = HorizontalTemplate.bind({})
HorizontalStraight.args = {
  orientation: 'horizontal',
}

export const HorizontalDashed = HorizontalTemplate.bind({})
HorizontalDashed.args = {
  orientation: 'horizontal',
  dashed: true,
}

export const HorizontalDashedWithCaption = VerticalTemplate.bind({})
HorizontalDashedWithCaption.args = {
  ...HorizontalDashed.args,
  caption: 'Caption',
}

export const VerticalStraight = VerticalTemplate.bind({})
VerticalStraight.args = {
  orientation: 'vertical',
}

export const VerticalDashed = VerticalTemplate.bind({})
VerticalDashed.args = {
  orientation: 'vertical',
  dashed: true,
}

export const VerticalDashedWithCaption = VerticalTemplate.bind({})
VerticalDashedWithCaption.args = {
  ...VerticalDashed.args,
  caption: 'Caption',
}
