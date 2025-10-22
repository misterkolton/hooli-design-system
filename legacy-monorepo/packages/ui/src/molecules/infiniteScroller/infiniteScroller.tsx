import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'

export type InfiniteScrollerProps = {
  hasMore: boolean
  isLoadingMore: boolean
  initialLoad?: boolean
  loadMore: (page?: number) => void
  pageStart?: number
  threshold?: number
  loader: React.ReactElement
  isScrollingOnWindow?: boolean
  children?: React.ReactNode
}

export const InfiniteScroller = ({
  pageStart,
  children,
  loader,
  loadMore,
  hasMore,
  threshold = 250,
  initialLoad = false,
  isLoadingMore,
  isScrollingOnWindow = false,
}: InfiniteScrollerProps) => {
  const handleLoadMore = (page: number) => {
    loadMore(page)
  }
  return (
    <InfiniteScroll
      useWindow={isScrollingOnWindow}
      initialLoad={initialLoad}
      pageStart={pageStart}
      threshold={threshold}
      loadMore={handleLoadMore}
      hasMore={hasMore}
    >
      <>
        {children}
        {isLoadingMore && loader}
      </>
    </InfiniteScroll>
  )
}
