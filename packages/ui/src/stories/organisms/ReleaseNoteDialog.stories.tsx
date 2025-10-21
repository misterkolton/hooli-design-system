import React from 'react'
import {
  ReleaseNoteDialog,
  ReleaseNoteDialogProps,
  NoteSection,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Button } from 'src/exports/molecules'

export default {
  title: 'organisms/ReleaseNoteDialog',
  component: ReleaseNoteDialog,
  args: {
    title: 'Theres been a new Release!',
    versionNumber: '0.1.2',
    releaseDate: '23 Aug, 2021',
    description:
      'We have listened to your feed back and you will find the following bugfixes and feature enhancements as you continue to play with the beta. Thank you for your ongoing help and support!',
    dismissAction: {
      title: 'Dismiss',
      type: 'success',
      onClick: () => console.log('dismissed'),
    },
  },
} as Meta

export const StoryName: StoryFn<ReleaseNoteDialogProps> = args => {
  const [isOpen, setIsOpen] = React.useState(true)

  const notes: NoteSection[] = [
    {
      releaseType: 'fix',
      notes: [
        'Image upload hard to find, this has been relocated to the top of the image drawer',
        'Photo Drop Cards now work',
        'You can now edit and send cards from the card history',
      ],
    },
    {
      releaseType: 'new',
      notes: [
        'Multiple image uploads are now supported!',
        'Tag and search your images',
        'Drag and Drop Upload',
        'Stickers',
        'and some other stuff that might be pretty neat',
      ],
    },
    {
      releaseType: 'note',
      notes: [
        'Multiple image uploads are now supported!',
        'Tag and search your images',
        'Drag and Drop Upload',
        'Stickers',
        'and some other stuff that might be pretty neat',
      ],
    },
  ]

  return (
    <>
      {!isOpen && (
        <Button
          type="primary"
          size="medium"
          title="Open Release"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <ReleaseNoteDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        button={{
          title: 'Dismiss',
          type: 'success',
          onClick: () => setIsOpen(!isOpen),
        }}
        noteSections={notes}
      />
    </>
  )
}
