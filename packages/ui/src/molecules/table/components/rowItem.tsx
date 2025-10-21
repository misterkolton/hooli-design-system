import React from 'react'
import { Div } from 'src/atoms/div/div'
import styles from '../styles'
import {
  SpacingDirection,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

type RowItemProps = {
  alignment?: 'left' | 'center' | 'right'
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  children?: React.ReactNode
}
export const RowItem = ({
  alignment = 'center',
  children,
  inset = 'x1',
}: RowItemProps) => {
  return (
    <Div css={styles.rowItem(alignment)} inset={inset}>
      {children}
    </Div>
  )
}
