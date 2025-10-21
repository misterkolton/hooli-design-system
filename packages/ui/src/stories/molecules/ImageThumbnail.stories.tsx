import React from 'react'
import { ImageThumbnail, ImageThumbnailProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'molecules/ImageThumbnail',
  component: ImageThumbnail,
  args: {
    url: 'https://images.unsplash.com/photo-1636346667446-fe770a0ef778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80',
    width: 200,
    height: 200,
    onRemove: () => console.log('image removed'),
    uploadProgress: 50,
  },
} as Meta

export const StoryName: StoryFn<ImageThumbnailProps> = args => (
  <Flex
    width="400px"
    flexWrap="wrap"
    justifyContent="center"
    outset={{ top: 'x2' }}
  >
    {gridImages.map((image, index) => {
      return <ImageThumbnail {...args} key={index} url={image.url} />
    })}
  </Flex>
)

const gridImages = [
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
  },
]
