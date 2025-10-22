import React, { FC, useRef, useEffect, useCallback } from 'react'
import styles from './styles'
import { Div } from 'src/atoms/div/div'
import { useMotionValue, useTransform } from 'framer-motion'
import { useEntities } from 'src/hooks/useEntities'
import { IconColors } from 'src/exports/atoms'

export type SliderProgressColor = IconColors
export type SliderOriginType = 'left' | 'center'

export type SliderProps = {
  value: number
  min: number
  max: number
  setValue: (value: number) => void
  activeColor?: SliderProgressColor
  isDisabled?: boolean
  origin?: SliderOriginType
  width: number
}
export const Slider: FC<SliderProps> = ({
  value,
  min,
  max,
  setValue,
  activeColor = 'primaryBrand',
  isDisabled = false,
  origin = 'left',
  width,
}) => {
  const { slider, icons } = useEntities()
  const handleHeight = 18

  const containerRef = useRef<HTMLDivElement>(null)

  const widthOffset = width - handleHeight
  const range = max - min

  const getInitialValue = useCallback(
    (value: number) => {
      const verifiedInitial = value <= min || value > max ? min : value
      const percentage = (verifiedInitial - min) / range
      return widthOffset * percentage
    },
    [max, min, range, widthOffset],
  )

  const handleX = useMotionValue(getInitialValue(value))
  const progressScaleX = useTransform(
    handleX,
    [0, width - handleHeight + 2],
    [0, 1],
  )

  const progressScaleXLeft = useTransform(handleX, [0, width / 2], [1, 0])
  const progressScaleXRight = useTransform(handleX, [width, width / 2], [1, 0])
  const constraintsRef = useRef<HTMLDivElement>(null)
  const getValueFromPercentage = useCallback(
    (percentage: number) => {
      return min + range * percentage
    },
    [min, range],
  )
  const getPositionPercentage = useCallback(
    (currentPosition: number) => {
      return currentPosition / widthOffset
    },
    [widthOffset],
  )
  const handleDrag = useCallback(() => {
    const val = Math.round(
      getValueFromPercentage(getPositionPercentage(handleX.get())),
    )
    setValue(val)
  }, [setValue, getPositionPercentage, handleX, getValueFromPercentage])

  useEffect(() => {
    if (typeof width === 'number') {
      handleX.set(getInitialValue(value))
    }
  }, [value, handleX, getInitialValue, width])

  useEffect(() => {
    if (typeof width === 'number') {
      handleDrag()
    }
  }, [handleDrag, value, width])

  return (
    <>
      <Div
        width={`${width}px`}
        height={'40px'}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
        ref={containerRef}
      >
        <Div
          css={styles.sliderBar(slider)}
          ref={constraintsRef}
          display="flex"
          flexDirection="row"
        >
          {origin === 'center' ? (
            <>
              <Div
                css={styles.sliderProgress(isDisabled)}
                backgroundColor={icons.colors[activeColor]}
                style={{
                  scaleX: progressScaleXLeft,
                  position: 'relative',
                  left: '2px',
                }}
                transformOrigin="100% 50%"
              />
              <Div
                css={styles.sliderProgress(isDisabled)}
                backgroundColor={icons.colors[activeColor]}
                style={{
                  scaleX: progressScaleXRight,
                  position: 'relative',
                  left: '2px',
                }}
                transformOrigin="0% 50%"
              />
            </>
          ) : (
            <Div
              css={styles.sliderProgress(isDisabled)}
              backgroundColor={icons.colors[activeColor]}
              style={{ scaleX: progressScaleX }}
              transformOrigin="0% 50%"
            />
          )}
        </Div>
        <Div
          css={styles.sliderHandle(isDisabled, slider, handleHeight)}
          drag={isDisabled ? undefined : 'x'}
          onDrag={handleDrag}
          onDragEnd={handleDrag}
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: handleX }}
          whileDrag={{ scale: 1.2 }}
        />
      </Div>
    </>
  )
}
