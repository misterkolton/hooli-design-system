import React, { FC } from 'react'
import { QuantitySlider, QuantitySliderProps } from 'src/exports/molecules'

import { StackedCardHead } from 'src/molecules/quantitySlider/components/stackedCardHead'

export type CardQuantitySliderProps = {
  cardImage?: string
  cardOrientation?: 'vertical' | 'horizontal'
  quantityDescription: string
  secondaryAction?: React.ReactNode
} & QuantitySliderProps

export const CardQuantitySlider: FC<CardQuantitySliderProps> = props => {
  const {
    cardOrientation,
    cardImage,
    quantityDescription,
    secondaryAction,
    ...rest
  } = props
  return (
    <>
      <QuantitySlider
        {...rest}
        head={
          <StackedCardHead
            cardOrientation={cardOrientation}
            quantity={rest.quantity}
            quantityDescription={quantityDescription}
            cardImage={cardImage}
            secondaryAction={secondaryAction}
          />
        }
      />
    </>
  )
}
