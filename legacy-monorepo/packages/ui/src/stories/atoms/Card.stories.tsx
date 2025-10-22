import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Card, CardProps } from 'src/exports/atoms'

export default {
  title: 'atoms/Card',
  component: Card,
  args: {
    width: '312px',
    height: '512px',
  },
} as Meta

export const EmptyCard: StoryFn<CardProps> = args => (
  <Card {...args}>Pass card content as children</Card>
)
