import React, { useState } from 'react'
import {
  ImageUploadWidget,
  ImageUploadWidgetProps,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'
import { Button, Drawer } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'organisms/ImageUploadWidget',
  component: ImageUploadWidget,
  args: {
    width: 264,
  },
} as Meta

export const StoryName: StoryFn<ImageUploadWidgetProps> = args => {
  const [shouldDisplayWidget, setShouldDisplayWidget] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Drawer
      location="right"
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      openValue={300}
      overflow="visible"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Div position="relative">
          <ImageUploadWidget
            {...args}
            userImages={userImages}
            isOpen={shouldDisplayWidget}
            onUpload={(obj, fileList) => console.log(obj, fileList)}
            x={-396}
            y={-32}
            onFinished={() => setShouldDisplayWidget(false)}
            hasMore={true}
            loadMore={() => console.log('Hello')}
            dataLength={userImages.length}
            endMessage={'All Images Loaded'}
          />
          <Button
            onClick={() => setShouldDisplayWidget(!shouldDisplayWidget)}
            icon={{ name: 'image', fill: 'primaryBodyText' }}
            type="smoke"
            title="Add..."
          />
        </Div>
      </Flex>
    </Drawer>
  )
}

const userImages = [
  {
    url: 'https://picsum.photos/id/230/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/231/200/300',
    isHorizontal: false,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/232/200/300',
    isHorizontal: false,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/233/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/234/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/235/200/300',
    isHorizontal: false,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/236/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/237/200/300',
    isHorizontal: false,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/238/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/239/200/300',
    isHorizontal: true,
    onClick: () => console.log('Clicked'),
  },
  {
    url: 'https://picsum.photos/id/240/200/300',
    isHorizontal: false,
    onClick: () => console.log('Clicked'),
  },
]
