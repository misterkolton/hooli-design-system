import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  Image,
  ImageProps,
  InfiniteScroller,
  GridItem,
  Grid,
} from 'src/exports/molecules'
import { VStack, LoadingSpinner, Div } from 'src/exports/atoms'
import { textControl, borderRadiusControls } from '../../../.storybook/controls'

export default {
  title: 'molecules/Image',
  component: Image,
  args: {
    image: {
      url: 'https://images.unsplash.com/photo-1612967302509-244bef8964c2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    width: '400px',
    height: '400px',
    isActive: true,
    borderRadius: 'default',
  },
  argTypes: {
    height: {
      ...textControl,
    },
    width: {
      ...textControl,
    },
    borderRadius: {
      ...borderRadiusControls,
    },
  },
} as Meta

export const Single: StoryFn<ImageProps> = args => <Image {...args} />

export const ContainBackgroundImage: StoryFn<ImageProps> = args => (
  <Image {...args} backgroundSize="contain" />
)

export const Multiple: StoryFn<ImageProps> = args => {
  const emptyArray = Array.from(Array(40))
  return (
    <VStack gap="x2">
      {emptyArray.map((_, index) => {
        return <Image key={`${index}`} {...args} />
      })}
    </VStack>
  )
}

export const InfiniteOverflow: StoryFn<ImageProps> = _args => {
  const results = [
    'https://images.unsplash.com/photo-1620942330127-41f1f787d10f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1626711934535-9749ea30dba8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1626685471996-4f8265dbadee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ]
  const initialState = {
    hasMore: true,
    isLoading: false,
    results: [...results, ...results, ...results, ...results],
  }
  const [images, setImages] = React.useState(initialState)

  const loadMoreImages = () => {
    const newState = { ...images, isLoading: true }
    setImages(newState)

    setTimeout(() => {
      const newState = {
        ...images,
        isLoading: false,
        results: [...images.results, ...images.results],
      }
      setImages(newState)
    }, 3000)
  }

  return (
    <Div
      width={'400px'}
      outset={{ vertical: 'x4' }}
      position="relative"
      overflow="auto"
      height={'640px'}
    >
      <InfiniteScroller
        hasMore={images.hasMore}
        isLoadingMore={images.isLoading}
        loadMore={loadMoreImages}
        isScrollingOnWindow={false}
        loader={
          <Div inset="x8">
            <LoadingSpinner size="xLarge" />
          </Div>
        }
      >
        <Grid height="100%" columnSize={42} rowSize={35} gap={16}>
          {images.results.map((image, index) => (
            <GridItem
              gridColSpan={2}
              gridRowSpan={4}
              borderRadius={'medium'}
              key={index}
            >
              <Image
                image={{ url: image }}
                width={'100%'}
                height={'100%'}
                isActive={true}
                borderRadius={'small'}
              />
            </GridItem>
          ))}
        </Grid>
      </InfiniteScroller>
    </Div>
  )
}
