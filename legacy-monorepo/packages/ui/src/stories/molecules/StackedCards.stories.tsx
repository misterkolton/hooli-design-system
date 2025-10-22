import React from 'react'
import { StackedCards, StackedCardsProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src'

export default {
  title: 'molecules/StackedCard',
  component: StackedCards,
  args: {
    width: 470,
    height: 340,
    stackCount: 5,
    backgroundImage:
      'https://www.sendoutcards.com/thumbnail/X6JVeLVBn7EFtpacbqsNNriMLHU=/fit-in/700x0/system_images/2022/1/5/0f91a7b6-e39c-4b92-babb-c7133e986c70.png',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const StoryName: StoryFn<StackedCardsProps> = args => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <StackedCards {...args}></StackedCards>
  </Flex>
)
