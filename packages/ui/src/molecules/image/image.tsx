import React, { FC } from 'react'
import { FilterType } from './filters'
import styles from './styles'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import {
  BorderRadiusDirection,
  LiteralUnion,
  HOCBorderRadiusKeys,
  Responsive,
} from 'src/helpers/hoc-types/entityValueTypes'
import { ImageLoader } from './loaders/ImageLoader'
import { isBorderRadiusDirectionType } from 'src/helpers/hoc-functions/typeChecks'
import useResizeObserver from 'use-resize-observer'
import { BackgroundSize } from 'src/helpers/hoc-types/cssValueTypes'
import { useProgressiveImage } from '../../hooks/useProgressiveImage'

export type ImageType = {
  url: string
}
export type ImageProps = {
  image: ImageType
  activeFilter?: FilterType
  width: string
  height: string
  isActive: boolean
  title?: string
  borderRadius?: BorderRadiusDirection | LiteralUnion<HOCBorderRadiusKeys>
  onClick?: () => void
  backgroundSize?: Responsive<BackgroundSize> | BackgroundSize
}
export const Image: FC<ImageProps> = ({
  image,
  activeFilter = {
    name: 'none',
    filter: 'initial',
    background: 'initial',
  },
  width: imageWidth,
  height: imageHeight,
  isActive,
  title,
  borderRadius = 'default',
  onClick,
  backgroundSize = 'cover',
}) => {
  const { ref, width, height } = useResizeObserver<HTMLDivElement>()
  const loaderRadius = isBorderRadiusDirectionType(borderRadius)
    ? 'default'
    : borderRadius

  const src = useProgressiveImage(image.url)

  return (
    <Div
      css={styles.imageContainer(isActive, imageWidth, imageHeight)}
      ref={ref}
    >
      {typeof src === 'string' ? (
        <Div
          css={styles.imageCss(isActive)}
          onClick={onClick && (() => onClick())}
          borderRadius={borderRadius}
        >
          <Div css={styles.filter(activeFilter)}>
            <Div
              backgroundSize={backgroundSize}
              css={styles.image(image.url)}
            />
          </Div>
        </Div>
      ) : (
        typeof width === 'number' &&
        typeof height === 'number' && (
          <ImageLoader
            width={width}
            height={height}
            isActive={isActive}
            borderRadius={loaderRadius}
          />
        )
      )}
      <Text type="body">{title}</Text>
    </Div>
  )
}
