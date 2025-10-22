import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { InfoBlock } from 'src/exports/molecules'
import { Text, Span } from 'src/exports/atoms'
import styles from './styles'

type ThumbnailType = {
  image: string
  orientation: 'portrait' | 'landscape'
}
export type OrderCardProps = {
  thumbnail: ThumbnailType
  title: string
  subtitle?: string
  price: string
  discountPrice?: string
  backgroundColor?: 'background' | 'foreground'
}
export const OrderCard: FC<OrderCardProps> = ({
  thumbnail,
  title,
  subtitle,
  price,
  discountPrice,
  backgroundColor = 'background',
}) => {
  return (
    <Div
      minWidth="280px"
      width="100%"
      borderRadius="small"
      backgroundColor={backgroundColor}
    >
      <Div
        minHeight="48px"
        inset="x1"
        width="100%"
        display="flex"
        justifyContent="space-between"
      >
        <Div display="flex" alignItems="center" css={styles.thumbnailContainer}>
          <Div
            backgroundImage={thumbnail.image}
            backgroundPosition="center"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            borderRadius={'small'}
            width={thumbnail.orientation === 'portrait' ? '36px' : '60px'}
            height={thumbnail.orientation === 'portrait' ? '48px' : '40px'}
          ></Div>
          <Div inset={{ left: 'x1' }}>
            <InfoBlock caption={subtitle ?? ''} heading={title} size="small" />
          </Div>
        </Div>
        <Span display="flex" alignItems="center" inset={{ left: 'x1' }}>
          <Text
            content={`${price}`}
            weight="semiBold"
            type="footnote"
            color="primaryBody"
            isStrikeThrough={discountPrice ? true : false}
          />
          {discountPrice && (
            <Text
              inset={{ left: 'x_5' }}
              content={`${discountPrice}`}
              type="footnote"
              color="primaryBody"
              weight="semiBold"
            />
          )}
        </Span>
      </Div>
    </Div>
  )
}
