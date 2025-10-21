import React from 'react'
import styles from './styles'
import { Div, Text, WeightType } from 'src/exports/atoms'
import { TableRow } from './components/tableRow'
import { RowItem } from './components/rowItem'
import {
  SpacingDirection,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

export type TableItemAlignment = 'left' | 'center' | 'right'

export type TableProps = {
  rowCount: number
  columnCount: number
  headers?: string[]
  headerAlignment?: TableItemAlignment
  headerWeight?: WeightType
  headerInset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  headerOutset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  headerTextColor?: string
  headerBorder?: string
  children?: React.ReactNode
}

export const Table = ({
  columnCount,
  rowCount,
  headers,
  headerAlignment = 'left',
  headerWeight = 'semiBold',
  headerInset = { vertical: 'x1', bottom: 'x2' },
  headerOutset = { bottom: 'x1' },
  headerBorder = '1.5px solid #ECECEC',
  headerTextColor = '#6B7280',
  children,
}: TableProps) => {
  return (
    <Div css={styles.table(rowCount)}>
      {headers && (
        <Div display={{ xSmall: 'none', small: 'inline-block' }}>
          <TableRow
            backgroundColor="transparent"
            radius={0}
            inset={headerInset}
            outset={headerOutset}
            columnCount={columnCount}
            border={headerBorder}
          >
            {headers?.map((header, index) => {
              return (
                <RowItem
                  key={`${header} ${index}`}
                  alignment={headerAlignment}
                  inset={headerInset}
                >
                  <Text
                    type="body"
                    content={header}
                    weight={headerWeight}
                    style={{ color: headerTextColor }}
                  />
                </RowItem>
              )
            })}
          </TableRow>
        </Div>
      )}
      {children}
    </Div>
  )
}
