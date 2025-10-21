import React, { FC } from 'react'
import { Text, VStack } from 'src/exports/atoms'
import { StackedCards } from 'src/exports/molecules'

export type StackedCardHeadProps = {
  cardImage?: string
  cardOrientation?: 'vertical' | 'horizontal'
  quantity: number
  quantityDescription: string
  secondaryAction?: React.ReactNode
}

export const StackedCardHead: FC<StackedCardHeadProps> = ({
  cardImage,
  cardOrientation,
  quantity,
  quantityDescription,
  secondaryAction,
}) => {
  return (
    <VStack gap="x2">
      <StackedCards
        width={cardOrientation === 'vertical' ? 200 : 285}
        height={cardOrientation === 'vertical' ? 285 : 200}
        stackBackgroundColor="background"
        backgroundImage={cardImage}
      />
      {secondaryAction && secondaryAction}
      <Text
        type="largeBody"
        weight="bold"
        color="primaryHeading"
        content={`${quantity} ${quantityDescription}`}
        alignment="center"
        style={{ letterSpacing: '1px' }}
        whiteSpace="nowrap"
      />
    </VStack>
  )
}
