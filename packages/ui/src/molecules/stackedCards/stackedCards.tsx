import React from 'react'
import { Card } from 'src'
import { Flex } from 'src/exports/atoms'
import {
  BackgroundColor,
  BorderRadius,
} from 'src/helpers/hoc-types/hocBaseUnion'

export type StackedCardsProps = {
  width: number
  height: number
  stackCount?: number
  backgroundImage?: string
  stackBackgroundColor?: BackgroundColor
  borderRadius?: BorderRadius
  children?: React.ReactNode
}

export const StackedCards = ({
  width,
  height,
  stackCount = 5,
  children,
  backgroundImage,
  borderRadius = 'small',
}: StackedCardsProps) => {
  const stackCountArr = Array.from(Array(stackCount - 1).keys())
  return (
    <Flex
      position="relative"
      justifyContent={'flex-start'}
      alignContent="center"
      width={`${width}px`}
      height={`${height}px`}
      outset={{ horizontal: 'auto' }}
    >
      <Card
        width={`${width}px`}
        height={`${height}px`}
        position="absolute"
        top={'50%'}
        boxShadow="mediumLight"
        backgroundColor={!backgroundImage ? 'foreground' : undefined}
        backgroundImage={backgroundImage}
        backgroundPosition="center"
        borderStyle="solid"
        borderColor="foreground"
        backgroundSize="cover"
        borderRadius={borderRadius}
        style={{
          scale: 1,
          translateY: '-50%',
        }}
        zIndex={stackCountArr.length}
      >
        {!backgroundImage && children}
      </Card>
      {stackCountArr.map((_, index) => {
        index += 1
        return (
          <Card
            borderRadius={borderRadius}
            key={index}
            backgroundImage={backgroundImage}
            borderStyle="solid"
            backgroundPosition="right center"
            borderColor="background"
            width={`${width}px`}
            height={`${height}px`}
            style={{
              scale: 1 - index / 16,
              translateY: '-50%',
            }}
            position="absolute"
            top={'50%'}
            boxShadow="mediumLight"
            zIndex={stackCountArr.length - index}
            transformOrigin={'145% 50%'}
          />
        )
      })}
    </Flex>
  )
}
