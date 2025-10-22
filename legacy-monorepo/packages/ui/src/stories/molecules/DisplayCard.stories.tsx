import React from 'react'
import { DisplayCard, DisplayCardProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'
import { Image } from 'src/exports/molecules'

export default {
  title: 'molecules/DisplayCard',
  component: DisplayCard,
  args: {
    title: 'Basic Paper',
    description: 'Our blandest paper option with nothing special.',
  },
} as Meta

export const Primary: StoryFn<DisplayCardProps> = args => {
  return (
    <Flex width="100%" justifyContent="center">
      <DisplayCard {...args}>
        <Image
          width={'100%'}
          height={'100%'}
          isActive={true}
          image={{
            url: 'https://unsplash.com/photos/8pb7Hq539Zw/download?force=true',
          }}
        />
      </DisplayCard>
    </Flex>
  )
}
