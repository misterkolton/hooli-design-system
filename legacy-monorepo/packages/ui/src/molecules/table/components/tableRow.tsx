import React from 'react'
import { Div } from 'src/atoms/div/div'
import styles from '../styles'
import { useEntities } from 'src/hooks/useEntities'
import {
  HOCSpacingKeys,
  LiteralUnion,
  SpacingDirection,
} from 'src/helpers/hoc-types/entityValueTypes'

type TableRowProps = {
  columnCount: number
  children?: React.ReactNode
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  radius?: number
  backgroundColor?: string
  border?: string
}
export const TableRow = ({
  columnCount,
  inset = { horizontal: 'x2', vertical: 'x1_5' },
  outset = { top: 'x1', bottom: 'x2' },
  radius = 16,
  backgroundColor = '#eef0f2',
  children,
  border = 'none',
}: TableRowProps) => {
  const { mediaQueries } = useEntities()
  return (
    <Div
      inset={inset}
      outset={outset}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: radius,
        borderBottom: border,
      }}
      css={styles.tableRow(columnCount, mediaQueries.rawValues.small)}
    >
      {children}
    </Div>
  )
}
