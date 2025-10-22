import React, { FC, useState } from 'react'
import { Poster } from './components/poster'
import styles from './styles'
import { Div } from 'src/atoms/div/div'
import {
  BorderRadius,
  LiteralUnion,
  HOCBorderRadiusKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

export type VideoPlayerProps = {
  poster: string
  hasShadow: boolean
  videoId: string
  duration?: string
  width: string
  height?: string
  maxHeight?: string
  borderRadius?: BorderRadius | LiteralUnion<HOCBorderRadiusKeys>
  minWidth?: string
  shouldAutoplay?: boolean
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  poster,
  videoId,
  hasShadow,
  duration,
  width,
  height,
  maxHeight,
  borderRadius,
  minWidth,
  shouldAutoplay,
}) => {
  const [isPlaying, setIsPlaying] = useState(shouldAutoplay ?? false)
  return (
    <Div
      width={width}
      height={height}
      minWidth={minWidth}
      maxHeight={maxHeight}
    >
      <Div
        css={styles.videoPlayer(isPlaying)}
        borderRadius={borderRadius ? borderRadius : 'default'}
        boxShadow={isPlaying ? 'mediumDark' : undefined}
      >
        {isPlaying ? (
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${videoId}?autoplay=1`}
            allowFullScreen
            title="video"
          />
        ) : (
          <Poster
            borderRadius={borderRadius}
            poster={poster}
            hasShadow={hasShadow}
            playButton={true}
            duration={duration}
            onClick={() => setIsPlaying(!isPlaying)}
          />
        )}
      </Div>
    </Div>
  )
}
