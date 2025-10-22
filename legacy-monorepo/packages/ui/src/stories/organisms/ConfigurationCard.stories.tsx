import React, { useState } from 'react'
import {
  ConfigurationCard,
  ConfigurationCardProps,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { AnimatedCheckMark, Div, StackedCards } from 'src'

export default {
  title: 'organisms/ConfigurationCard',
  component: ConfigurationCard,
  args: {
    title: 'Blank Envelopes',
    description: 'Address and send yourself',
    isSelected: false,
    isFeatured: false,
    stackedCardImage:
      'https://www.sendoutcards.com/thumbnail/0F2c_sYzVLRz9gYGid4o5W1tBtA=/fit-in/700x0/system_images/2019/12/4/0fab54d8-4b71-4923-89da-a257e7c182ce.png',
  },
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
} as Meta

const Template: StoryFn<ConfigurationCardProps> = args => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Div inset="x2" minWidth="320px">
      <ConfigurationCard
        onSelect={() => setIsSelected(!isSelected)}
        {...args}
      />
    </Div>
  )
}
export const ConfigurationCardWithCallback = Template.bind({})
ConfigurationCardWithCallback.args = {
  cost: 0.29,
  itemPriceTitle: 'per envelope',
  configurationId: '27',
  isSelected: false,
  graphic: (
    <Div position="relative" width={{ xSmall: '100px', small: '116px' }}>
      <StackedCards
        width={100}
        height={75}
        stackCount={5}
        backgroundImage={
          'https://www.sendoutcards.com/thumbnail/0F2c_sYzVLRz9gYGid4o5W1tBtA=/fit-in/700x0/system_images/2019/12/4/0fab54d8-4b71-4923-89da-a257e7c182ce.png'
        }
      ></StackedCards>
    </Div>
  ),
}

export const Upsale = Template.bind({})
Upsale.args = {
  cost: 97,
  type: 'upsale',
  itemPriceTitle: '/ Month',
  configurationId: '27',
  graphic: <AnimatedCheckMark color="primary" />,
  isSelected: false,
  isFeatured: true,
}

export const Info = Template.bind({})
Info.args = {
  title: 'Upgrade your Paper',
  type: 'info',
  cost: 69,
  description:
    'Why select a regular old boring paper option, when you can get our shimmering paper? ',

  configurationId: '456info',
  onSelect: (configurationId: string) => console.log(configurationId),
}

export const Vertical = Template.bind({})
Vertical.args = {
  cost: 0.29,
  itemPriceTitle: 'per envelope',
  configurationId: '27',
  layout: 'vertical',
  type: 'addon',
}
