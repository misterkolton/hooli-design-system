import React, { FC } from 'react'
import { Div } from 'src/exports/atoms'
import { Grid, GridItem } from 'src/exports/molecules'

export type MasonryGridProps = {
  columnSize: number
  rowSize: number
  gap: number
}

export const MasonryGrid: FC<MasonryGridProps> = ({
  columnSize = 100,
  rowSize = 100,
  gap = 16,
}) => {
  return (
    <Div width="100%" height="100%">
      <Grid
        maxWidth={800}
        columnSize={columnSize}
        rowSize={rowSize}
        gap={gap}
        isDense={false}
      >
        <GridItem gridColSpan={3} gridColStart={2}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'primaryBrand', shade: 'base' }}
          />
        </GridItem>
        <GridItem gridColSpan={3}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'secondaryBrand', shade: 'base' }}
          />
        </GridItem>
        <GridItem gridColSpan={3}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'accent', shade: 'base' }}
          />
        </GridItem>
        <GridItem gridColSpan={3}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'success', shade: 'base' }}
          />
        </GridItem>
        <GridItem gridColSpan={3} gridColStart={2}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'warning', shade: 'base' }}
          />
        </GridItem>
        <GridItem gridColSpan={3}>
          <Div
            height="100%"
            width="100%"
            borderRadius="default"
            backgroundColor={{ swatch: 'danger', shade: 'base' }}
          />
        </GridItem>
      </Grid>
    </Div>
  )
}
