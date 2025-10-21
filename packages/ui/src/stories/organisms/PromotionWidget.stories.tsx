import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { PromotionWidget, PromotionWidgetProps } from 'src/exports/organisms'
import { Flex } from 'src'

export default {
  title: 'organisms/PromotionWidget',
  component: PromotionWidget,
  args: {
    type: 'primary',
    capsuleTitle: 'New',
    buttonSize: 'medium',
    width: '100%',
    title: 'Love our Products & Services?',
    description:
      "Are you finding yourself sharing with other? What if we told you that you could earn money by becoming an Affiliate. It's as easy as FREE!",
    primaryAction: {
      onClick: () => console.log('click'),
      title: 'Unlock Your Potential',
    },
    secondaryAction: {
      title: 'Learn More',
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'shadow',
          'accent',
        ],
      },
    },
    buttonSize: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
  },
} as Meta

export const PromotionWidgetStory: StoryFn<PromotionWidgetProps> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <PromotionWidget {...args} width="80%"></PromotionWidget>
    </Flex>
  )
}
