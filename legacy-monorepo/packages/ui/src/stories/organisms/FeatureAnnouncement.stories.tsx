import React, { useState } from 'react'
import {
  FeatureAnnouncement,
  FeatureAnnouncementProps,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'
import { Button } from 'src/exports/molecules'
import { Flex, Spacer } from 'src/exports/atoms'

export default {
  title: 'organisms/FeatureAnnouncement',
  component: FeatureAnnouncement,
  args: {
    title: 'Introducing Stickers!',
    description: 'Place Stickers on your card and move them anywhere you like',
    button: { title: 'Try it out now', type: 'secondary' },
    imageURL:
      'https://media0.giphy.com/media/Jq1bOmFKhJNWaywI5d/giphy.gif?cid=ecf05e47yqh7e9fjbhyvnrjqwb7376ondxjen3ogbqh0n26v&rid=giphy.gif&ct=g',
  },
} as Meta

export const StoryName: StoryFn<FeatureAnnouncementProps> = args => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Flex flexDirection="column" alignItems="center" width="100vw">
      <Div display="inline-flex">
        {isOpen && (
          <FeatureAnnouncement
            maxWidth="275px"
            onClose={() => setIsOpen(false)}
            {...args}
          />
        )}
      </Div>
      <Spacer space="x2" />
      {!isOpen && (
        <Button
          size="xSmall"
          title="Open FeatureAnnouncement"
          onClick={() => setIsOpen(true)}
        />
      )}
    </Flex>
  )
}
