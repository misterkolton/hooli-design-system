import React, { FC, useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { Card, Flex } from 'src/exports/atoms'

type GlareType = 'standard' | 'satin' | 'pearl'
export type DimensionScale = 'small' | 'medium' | 'large'

export type SelectableOptions = {
  title: string
  thumbnail: string
  glare: GlareType
}

export type AnimatedTiltCardProps = {
  containerHeight?: string
  containerWidth?: string
  childHeight?: string
  childWidth?: string
  selectableOptions: SelectableOptions
  dimensionScale?: DimensionScale
}

const scaleFactors: Record<DimensionScale, number> = {
  small: 0.5,
  medium: 0.8,
  large: 1,
}

export const AnimatedTiltCard: FC<AnimatedTiltCardProps> = ({
  selectableOptions,
  dimensionScale = 'medium',
}) => {
  const [imageDimensions, setImageDimensions] = useState<{
    width: number
    height: number
  } | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = selectableOptions.thumbnail
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height })
    }
  }, [selectableOptions.thumbnail])

  const glareColor =
    selectableOptions.glare === 'standard'
      ? '#ffffff00'
      : selectableOptions.glare === 'pearl'
      ? '#EAE0C8'
      : selectableOptions.glare === 'satin'
      ? '#E5E6DE'
      : undefined

  const cardWidth = imageDimensions
    ? imageDimensions.width * scaleFactors[dimensionScale]
    : 300
  const cardHeight = imageDimensions
    ? imageDimensions.height * scaleFactors[dimensionScale]
    : 450

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      position="relative"
      flexDirection="column"
      inset="x2"
    >
      <Tilt
        reset={false}
        tiltReverse
        glareEnable
        glareColor={glareColor}
        glarePosition="all"
        glareBorderRadius="12px"
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
        gyroscope
      >
        <Card
          backgroundImage={selectableOptions.thumbnail}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width={`${cardWidth}px`}
          height={`${cardHeight}px`}
        />
      </Tilt>
    </Flex>
  )
}
