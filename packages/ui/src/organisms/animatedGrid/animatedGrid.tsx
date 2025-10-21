import React from 'react'
import { Div, Flex } from 'src/exports/atoms'
import { Grid, Image, GridItem } from 'src/exports/molecules'

export type AnimateGridProps = {
  gridImages?: AnimatedGridImageType[]
  shouldAnimate?: boolean
  animationDirection?: 'horizontal' | 'vertical'
  rotation?: RotationAndOffsetType
  gap?: number
  columnSize?: number
  rowSize?: number
  maxWidth?: number
  children?: React.ReactNode
}

export type AnimatedGridImageType = {
  url: string
  colSpan?: number
  rowSpan?: number
}

type RotationAndOffsetType = {
  degrees: number
  offset?: number
}

export const AnimatedGrid = ({
  gridImages,
  shouldAnimate = true,
  animationDirection = 'vertical',
  rotation = { degrees: 0, offset: 0 },
  gap = 24,
  columnSize = 240,
  rowSize = 240,
  maxWidth = 1000,
  children,
}: AnimateGridProps) => {
  const gridChildren = React.Children.toArray(children)
  const numChildren = gridChildren.length + (gridImages ? gridImages.length : 0)
  const rowHeight = rowSize + gap
  const colWidth = columnSize + gap
  const numCols = Math.floor(maxWidth / colWidth)
  const numRows = numChildren / numCols
  const gridHeight = numRows * rowHeight
  const yAnimationValue = gridHeight - rowHeight * 3 - (rotation.offset ?? 0)

  return (
    <Div transform={`rotateZ(${rotation.degrees}deg)`} width="100%">
      <Flex
        animate={
          shouldAnimate
            ? animationDirection === 'vertical'
              ? { y: `-${yAnimationValue}px` }
              : { x: `${maxWidth}px` }
            : undefined
        }
        transition={{
          repeatType: 'mirror',
          type: 'tween',
          duration:
            animationDirection === 'vertical' ? gridHeight / 45 : maxWidth / 45,
          ease: 'linear',
        }}
        width="100%"
        justifyContent="center"
        position="relative"
        left={`${rotation.offset}px`}
        top={`-${rotation.offset}px`}
      >
        <Grid
          gap={gap}
          columnSize={columnSize}
          rowSize={rowSize}
          maxWidth={maxWidth}
        >
          {gridImages &&
            gridImages.map((gridImage, index) => (
              <GridItem
                key={index}
                gridColSpan={gridImage.colSpan}
                gridRowSpan={gridImage.rowSpan}
              >
                <Div height="100%" width="100%" borderRadius="default">
                  <Image
                    height="100%"
                    width="100%"
                    image={{ url: gridImage.url }}
                    isActive
                  />
                </Div>
              </GridItem>
            ))}
          {gridChildren.length > 0 &&
            gridChildren.map((child, index) => (
              <GridItem key={index}>
                <Div height="100%" width="100%" borderRadius="default">
                  {child}
                </Div>
              </GridItem>
            ))}
        </Grid>
      </Flex>
    </Div>
  )
}
