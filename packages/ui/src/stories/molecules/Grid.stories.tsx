import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Grid, GridProps, GridItem } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Grid',
  component: Grid,
  args: {
    columnSize: 50,
    rowSize: 120,
    gap: 16,
    isDense: false,
  },
  argTypes: {
    columnSize: {
      control: {
        type: 'number',
      },
    },
    rowSize: {
      control: {
        type: 'number',
      },
    },
    gap: {
      control: {
        type: 'number',
      },
    },
    overflow: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
    maxHeight: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta

const colors = [
  'hsl(199, 77%, 15%)',
  'hsl(199, 77%, 25%)',
  'hsl(199, 77%, 35%)',
  'hsl(199, 77%, 40%)',
  'hsl(199, 77%, 50%)',
  'hsl(199, 77%, 55%)',
  'hsl(199, 77%, 60%)',
  'hsl(199, 77%, 65%)',
  'hsl(199, 77%, 70%)',
]

export const Primary: StoryFn<GridProps> = args => (
  <Grid {...args}>
    {colors.map((color, index) => (
      <GridItem
        key={color}
        gridRowSpan={index % 2 === 0 ? 1 : 2}
        borderRadius="xLarge"
      >
        <Div
          backgroundColor={color}
          width="100%"
          height="100%"
          borderRadius="inherit"
        />
      </GridItem>
    ))}
  </Grid>
)
