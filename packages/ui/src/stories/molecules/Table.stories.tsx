import React from 'react'
import {
  Table,
  TableProps,
  RowItem,
  TableRow,
  IconLink,
} from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Text } from 'src/exports/atoms'

export default {
  title: 'molecules/Table',
  component: Table,
  args: {
    rowCount: 3,
    columnCount: 3,
    headers: ['Product', 'Cost', 'Point Value'],
    headerAlignment: 'left',
    headerWeight: 'semiBold',
    headerInset: { vertical: 'x1', bottom: 'x1' },
    headerOutset: { bottom: 'x2' },
    headerBorder: '2px solid #ECECEC',
    headerTextColor: '#6B7280',
  },
  headerAlignment: 'left',
} as Meta
const rowInset = 'x2'
const rowGap = { bottom: 'x2' }
export const ManualTable: StoryFn<TableProps> = args => (
  <Table {...args}>
    <TableRow columnCount={3} inset={rowInset} outset={rowGap}>
      <RowItem alignment={args.headerAlignment}>
        <IconLink
          title="Consumable"
          icon="gift"
          onClick={() => console.log('Click')}
        />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="$25 - $50" />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="2-5 Points" />
      </RowItem>
    </TableRow>
    <TableRow columnCount={3} inset={rowInset} outset={rowGap}>
      <RowItem alignment={args.headerAlignment}>
        <IconLink
          title="Consumable"
          icon="gift"
          onClick={() => console.log('Click')}
        />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="$25 - $50" />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="2-5 Points" />
      </RowItem>
    </TableRow>
    <TableRow columnCount={3} inset={rowInset} outset={rowGap}>
      <RowItem alignment={args.headerAlignment}>
        <IconLink
          title="Consumable"
          icon="gift"
          onClick={() => console.log('Click')}
        />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="$25 - $50" />
      </RowItem>
      <RowItem alignment={args.headerAlignment}>
        <Text type="body" content="2-5 Points" />
      </RowItem>
    </TableRow>
  </Table>
)

export const DynamicDataTable: StoryFn<TableProps> = _args => {
  const tableData = [
    {
      rowItem1: 'Item 1',
      rowItem2: 'Item 2',
      rowItem3: 'Item 3',
      rowItem4: 'Item Extra',
    },
    {
      rowItem1: 'Item 4',
      rowItem2: 'Item 5',
      rowItem3: 'Item 6',
      rowItem4: 'Item Extra',
    },
    {
      rowItem1: 'Item 7',
      rowItem2: 'Item 8',
      rowItem3: 'Item 9',
      rowItem4: 'Item Extra',
    },
  ]
  const columns = Object.keys(tableData[0]).length

  return (
    <Table columnCount={columns} rowCount={tableData.length}>
      {tableData.map((data, index) => {
        return (
          <TableRow key={index} columnCount={columns}>
            {Object.keys(data).map((rowItem, index) => {
              return (
                <RowItem
                  key={index}
                  alignment="center"
                  inset={{ vertical: 'x3' }}
                >
                  {data[rowItem]}
                </RowItem>
              )
            })}
          </TableRow>
        )
      })}
    </Table>
  )
}
