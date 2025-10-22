import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  GridItem,
  Grid,
  Image,
  InfiniteScroller,
  InfiniteScrollerProps,
} from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/InfiniteScroller',
  component: InfiniteScroller,
} as Meta

export const ScrollImages: StoryFn<InfiniteScrollerProps> = () => {
  const [page, setPage] = React.useState(0)
  const [isLoadingMore, setIsLoadingMore] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(true)
  const [userImages, setUserImages] = React.useState<string[]>([])

  const BASE_URL = `https://dummyapi.io/data/api/user?page=${page}&limit=30`
  const APP_ID = '6001cda8f754c91122030ab6'

  type User = {
    email: string
    firstName: string
    id: string
    lastName: string
    picture: string
    title: string
  }

  const fetchUsers = async () => {
    setIsLoadingMore(true)
    const response = await fetch(`${BASE_URL}/user`, {
      headers: { 'app-id': APP_ID },
    })
    const images = await response
      .json()
      .then(res => res.data.map((data: User) => data.picture))

    setIsLoadingMore(false)

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    setUserImages([...userImages, ...images])
    setPage(page + 1)
  }

  const handleLoadMore = () => {
    fetchUsers()
    if (page >= 10) {
      setHasMore(false)
    }
  }
  React.useEffect(() => {
    fetchUsers()
  }, []) //eslint-disable-line

  return (
    <InfiniteScroller
      hasMore={hasMore}
      loadMore={handleLoadMore}
      loader={<p>Loading...</p>}
      isLoadingMore={isLoadingMore}
      isScrollingOnWindow={true}
    >
      <Div maxWidth="240px">
        <Grid height="100%" columnSize={42} rowSize={35} gap={16}>
          {userImages.map((image, index) => (
            <GridItem
              gridColSpan={2}
              gridRowSpan={index % 2 === 0 ? 2 : 4}
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
      </Div>
    </InfiniteScroller>
  )
}
