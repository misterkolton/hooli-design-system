import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  ComparisonIncludesList,
  ComparisonIncludesListProps,
} from 'src/exports/organisms'
import { Div } from 'src/exports/atoms'

export default {
  title: 'organisms/ComparisonIncludesList',
  component: ComparisonIncludesList,
  args: {
    items: [
      {
        title: 'UNLIMITED Photo Postcards!',
        description:
          'Send Unlimited 4x6 postcards - stamps included, mailed out when you hit SEND!',
        isNotIncluded: false,
      },
      {
        title: 'UNLIMITED Heartfelt Prompting Cards!',
        description:
          'Send unlimited 5x7 greeting cards, stamps included. Mailed for you. Immediately!',
        isNotIncluded: false,
      },
      {
        title: 'Contact Manager',
        description:
          'Keep track of birthdays, special occasions, reminders, include notes if you choose, and get a history of every card sent.',
        isNotIncluded: false,
      },
      {
        title: '30 Automated Card sends!',
        description:
          'Our Automated sending process does all the work for you, schedule, send to one or multiple people, even take advantage of our drip campaign feature!',
        isNotIncluded: true,
      },
      {
        title: '30% off gifts',
        description: '',
        isNotIncluded: true,
      },
      {
        title: '30% shipping',
        description: '',
        isNotIncluded: true,
      },
    ],
  },
} as Meta

const Template: StoryFn<ComparisonIncludesListProps> = args => {
  return (
    <Div position="relative" top="32px" left="32px" width="500px">
      <ComparisonIncludesList {...args} />
    </Div>
  )
}

export const IsIncluded = Template.bind({})
IsIncluded.args = {}
