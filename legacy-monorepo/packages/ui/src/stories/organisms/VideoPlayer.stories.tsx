import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VideoPlayer, VideoPlayerProps } from 'src/exports/organisms'

export default {
  title: 'organisms/VideoPlayer',
  component: VideoPlayer,
  args: {
    poster:
      'https://images.unsplash.com/photo-1592981669578-022a13f5c0a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1705&q=80',
    videoId: '8y897kw96l',
  },
} as Meta

export const Basic: StoryFn<VideoPlayerProps> = args => (
  <VideoPlayer
    {...args}
    hasShadow={false}
    height="100%"
    width="100%"
  ></VideoPlayer>
)
