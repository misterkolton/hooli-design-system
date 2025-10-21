import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { CloseButton, CloseButtonProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/CloseButton',
  component: CloseButton,
} as Meta

export const Primary: StoryFn<CloseButtonProps> = args => (
  <Div width="32px" position="relative">
    <CloseButton {...args} />
  </Div>
)
