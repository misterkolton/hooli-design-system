import React, { useState } from 'react'
import { CardEntryDialog, CardEntryDialogProps } from 'src/exports/socPortfolio'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'SOC/CardEntryDialog',
  component: CardEntryDialog,
} as Meta

const Template: StoryFn<CardEntryDialogProps> = args => {
  const [isOpen, setIsOpen] = useState(true)
  const onClose = () => setIsOpen(false)
  return <CardEntryDialog {...args} isOpen={isOpen} onClose={onClose} />
}

export const CardEntryDialogStory = Template.bind({})
CardEntryDialogStory.args = {
  title: 'Use our amazing card sending system!',
  description:
    'We’ve preselected our bestselling build-your-own postcard for you to personalize and send to try SendOutCards! A postcard with a photo on the front is a great way to get someone’s attention - people love getting fun, personal mail! If you’d prefer, you can view different card types or choose from our designed cards.',
  primaryAction: {
    title: 'Continue with a postcard',
    onClick: () => alert('Editing postcard'),
  },
  secondaryAction: {
    title: 'View all card options',
    onClick: () => alert('View the catalog'),
  },
}
