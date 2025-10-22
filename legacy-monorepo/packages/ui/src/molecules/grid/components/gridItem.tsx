import React from 'react'
import styles from '../styles'
import {
  BorderRadiusDirection,
  LiteralUnion,
  HOCBorderRadiusKeys,
} from 'src/helpers/hoc-types/entityValueTypes'
import { Div } from 'src/atoms/div/div'

type GridItemProps = {
  gridRowSpan?: number
  gridColSpan?: number
  gridRowStart?: number
  gridColStart?: number
  borderRadius?: BorderRadiusDirection | LiteralUnion<HOCBorderRadiusKeys>
  aspectRatio?: string
  children?: React.ReactNode
}
export const GridItem = ({
  gridRowSpan,
  gridColSpan,
  gridRowStart,
  gridColStart,
  borderRadius,
  aspectRatio,
  children,
}: GridItemProps) => {
  return (
    <Div
      borderRadius={borderRadius ? borderRadius : 'none'}
      css={styles.gridItem(
        gridRowSpan,
        gridColSpan,
        gridRowStart,
        gridColStart,
        aspectRatio,
      )}
    >
      {children}
    </Div>
  )
}
