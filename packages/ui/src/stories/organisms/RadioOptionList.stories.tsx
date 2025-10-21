import React from 'react'
import { RadioOptionList, RadioOptionListProps } from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/RadioOptionList',
  component: RadioOptionList,
} as Meta

const Template: StoryFn<RadioOptionListProps> = args => (
  <RadioOptionList {...args} />
)

export const StoryName = Template.bind({})
StoryName.args = {
  options: [
    {
      title: '$97.00/Month',
      subtitle: 'For unlimited single card sends',
      isFeatured: true,
      optionId: '789797',
      isSelected: false,
      onSelect: (optionId: string) => console.log(optionId),
    },
    {
      title: '$37.00/Month',
      subtitle: 'A really good subscription',
      isFeatured: false,
      optionId: '324132',
      isSelected: false,
      infoAction: () => console.log('clicked 37'),
      onSelect: (optionId: string) => console.log(optionId),
    },
  ],
  extraLink: {
    title: 'View more options',
    onClick: () => console.log('link clicked'),
    href: '@',
  },
  submitAction: {
    title: 'Subscribe Now',
    type: 'secondary',
    onClick: (optionId: string) => console.log(optionId),
  },
}
