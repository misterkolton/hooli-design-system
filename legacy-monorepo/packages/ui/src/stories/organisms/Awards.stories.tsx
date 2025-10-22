import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  AwardCard,
  ExpandedAwardCard,
  AwardCardProps,
} from 'src/exports/organisms'
import { Flex } from 'src/exports/atoms'
import { Overlay } from 'src/exports/molecules'

export default {
  title: 'organisms/Awards',
  component: AwardCard,
  args: {
    image:
      'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80',
    title: 'Award Title',
  },
} as Meta

const BasicTemplate: StoryFn<AwardCardProps> = args => <AwardCard {...args} />

export const BasicNotEarned = BasicTemplate.bind({})
BasicNotEarned.args = {
  progress: 67,
}

export const BasicEarned = BasicTemplate.bind({})
BasicEarned.args = {
  progress: 100,
}

export const IncrementalEarned = BasicTemplate.bind({})
IncrementalEarned.args = {
  progress: {
    count: 3,
    title: 'Title here',
    icon: 'award',
  },
}

const ExpandableTemplate: StoryFn<AwardCardProps> = args => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Flex width="100%" height="100vh" justifyContent="flex-start">
      <AwardCard {...args} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Overlay>
          <ExpandedAwardCard
            close={() => setIsOpen(false)}
            progress={{
              title: 'Team Managers',
              icon: 'multipleUsers3x',
              count: 0,
            }}
            title="Send 3 Award"
            image="https://www.sendoutcards.com/thumbnail/hpQAWpn2soarVfDIA6U0Wxnd2zs=/award_graphics/FullAward-11-man.png"
            description="Enhanced, Card-A-Day, or the Unlimited subscription. Select the plan that's right for you to earn this award!."
            checklist={[
              'Send a heartfelt card',
              'Send another one',
              'Send one more',
            ]}
            checklistTitle={'Things to do'}
            checklistSubtitle={'Complete the following and receive the award'}
          />
        </Overlay>
      )}
    </Flex>
  )
}

export const Expandable = ExpandableTemplate.bind({})
Expandable.args = {
  progress: 67,
}
