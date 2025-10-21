import React from 'react'
import { CountdownTimer, CountdownTimerProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/CountdownTimer',
  component: CountdownTimer,
  args: {
    endDate: '2021-02-19',
    endTime: {
      hour: 19,
      minute: 39,
      second: 30,
    },
    size: 'small',
  },
} as Meta

export const StoryName: StoryFn<CountdownTimerProps> = args => (
  <CountdownTimer {...args} />
)
