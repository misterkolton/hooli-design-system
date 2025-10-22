import React, { FC } from 'react'
import { Div } from '../div/div'
import { Overflow, Position } from 'src/helpers/hoc-types/cssValueTypes'
import { useEntities } from 'src/hooks/useEntities'
import {
  BackgroundColor,
  Width,
  Height,
} from 'src/helpers/hoc-types/hocBaseUnion'

export type BarProps = {
  height: Height
  width: Width
  overflow?: Overflow
  position?: Position
  backgroundColor?: BackgroundColor
}

export const Bar: FC<BarProps> = ({
  height,
  width,
  overflow = 'visible',
  position,
  backgroundColor,
}) => {
  const { hocs } = useEntities()
  return (
    <Div
      backgroundColor={
        backgroundColor ?? `${hocs.colors.swatches.grayScale._700}`
      }
      height={height}
      width={width}
      overflow={overflow}
      position={position}
    />
  )
}
