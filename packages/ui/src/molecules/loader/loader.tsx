import React from 'react'
import ContentLoader from 'react-content-loader'

export type LoaderProps = {
  width: number
  height: number
  speed?: number
  children?: React.ReactNode
}

// react-content-loader produces unstable props
const ContentLoaderComponent =
  process.env.NODE_ENV === 'test' ? () => <></> : ContentLoader
export const Loader = ({ children, width, height, speed = 2 }: LoaderProps) => {
  return (
    <ContentLoaderComponent
      speed={speed}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {children}
    </ContentLoaderComponent>
  )
}
