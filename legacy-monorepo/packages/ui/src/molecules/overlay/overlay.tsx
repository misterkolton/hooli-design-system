import React from 'react'
import { Div } from 'src/atoms/div/div'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import Color from 'color'
import { useEntities } from 'src/hooks/useEntities'
import { Responsive } from 'src/helpers/hoc-types/entityValueTypes'
import { Position } from 'src/helpers/hoc-types/cssValueTypes'
import { PinnedType } from '../dialog/dialog'

export type OverlayPropTypes = {
  zIndex?: number
  position?: Responsive<Position> | Position
  bgElementSelector?: string
  children?: React.ReactNode
  pinned?: PinnedType
  backgroundVariant?: 'solid' | 'blur'
  shouldScroll?: boolean
} & HOCMotionProps

export const Overlay = ({
  children,
  zIndex,
  animate,
  initial,
  exit,
  variants,
  transition,
  motionKey,
  position,
  backgroundVariant = 'solid',
  pinned = 'center',
  shouldScroll,
  ...rest
}: OverlayPropTypes) => {
  const { hocs } = useEntities()
  const pinnedPosition =
    pinned === 'top'
      ? 'flex-start'
      : pinned === 'bottom'
      ? 'flex-end'
      : 'center'

  return (
    <Div
      motionKey={motionKey}
      variants={variants}
      animate={animate}
      initial={initial}
      exit={exit}
      zIndex={zIndex}
      display="flex"
      justifyContent="center"
      alignItems={pinnedPosition}
      position={position ?? 'fixed'}
      top="0"
      left="0"
      width="100%"
      height="100%"
      style={
        backgroundVariant === 'blur'
          ? {
              background: 'rgba(145, 145, 145, 0.1)',
              backdropFilter: 'blur(20px)',
            }
          : undefined
      }
      backgroundColor={
        backgroundVariant !== 'blur'
          ? Color(hocs.colors.swatches.grayScale._800)
              .rgb()
              .alpha(0.98)
              .toString()
          : undefined
      }
      overflow={shouldScroll ? 'scroll' : 'hidden'}
      transition={transition}
      {...rest}
    >
      {children}
    </Div>
  )
}
