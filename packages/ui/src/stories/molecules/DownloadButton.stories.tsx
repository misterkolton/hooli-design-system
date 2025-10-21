import React from 'react'
import { DownloadButton, DownloadButtonProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/DownloadButton',
  component: DownloadButton,
  args: {
    href: 'https://unsplash.com/photos/8pb7Hq539Zw/download?force=true',
    id: 'greener-still',
    buttonProps: {
      title: 'Download',
      size: 'large',
      type: 'primary',
      onClick: () => console.log('Download Started'),
      disabled: false,
      disabledCaption: '',
      outlined: false,
    },
  },
} as Meta

export const StoryName: StoryFn<DownloadButtonProps> = args => (
  <DownloadButton {...args} />
)
