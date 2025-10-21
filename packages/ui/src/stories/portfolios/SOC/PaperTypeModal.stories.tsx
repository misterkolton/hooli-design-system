import React from 'react'
import {
  PaperTypeModal,
  PaperTypeModalProps,
  DisplayCardPaperOptions,
} from 'src/exports/socPortfolio'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Button } from 'src/exports/molecules'

export default {
  title: 'SOC/PaperTypeModal',
  component: PaperTypeModal,
  args: {
    title: 'Our Paper Types',
    subtitle:
      'We offer 3 unique paper finishes to make your card even more, well... you!',
    isOpen: true,
  },
} as Meta

export const StoryName: StoryFn<PaperTypeModalProps> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  const paperOptions: DisplayCardPaperOptions[] = [
    {
      title: 'Basic Paper',
      description: 'Our blandest paper option with nothing special',
      image:
        'https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',
    },
    {
      title: 'Pearl Paper',
      description: 'Our shiny finish paper which is really special',
      image:
        'https://images.unsplash.com/photo-1529405643518-5cf24fddfc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'Satin Paper',
      description: 'Our dullest finish which is really special',
      image:
        'https://images.unsplash.com/photo-1623594616209-8ca505bd54c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    },
  ]

  return (
    <>
      {!isOpen && (
        <Button
          title="open modal"
          size="medium"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <PaperTypeModal
        {...args}
        options={paperOptions}
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  )
}
