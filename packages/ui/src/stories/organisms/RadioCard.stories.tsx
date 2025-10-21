import React from 'react'
import { RadioOptionCard, RadioOptionCardProps } from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/RadioCard',
  component: RadioOptionCard,
  args: {
    title: '$97.00/Month',
    subtitle: 'Unlimited single card sending',
    optionId: 'flamigo',
  },
} as Meta

const Template: StoryFn<RadioOptionCardProps> = args => {
  const [selectedOption, setSelectedOption] = React.useState('')

  return (
    <RadioOptionCard
      {...args}
      isSelected={selectedOption === args.optionId}
      isFeatured={true}
      onSelect={() => setSelectedOption(args.optionId)}
      infoAction={() => console.log('clicked on icon')}
    />
  )
}

export const StoryName = Template.bind({})
StoryName.args = {}
