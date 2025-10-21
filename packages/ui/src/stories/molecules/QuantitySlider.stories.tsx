import React, { useState } from 'react'
import { QuantitySlider, QuantitySliderProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'
import { StackedCardHead } from 'src/molecules/quantitySlider/components/stackedCardHead'

export default {
  title: 'molecules/QuantitySlider',
  component: QuantitySlider,
  args: {
    unitPrice: 1.5,
    salePrice: 1.2,
    quantityDescription: 'Cards',
    hasIncrement: false,
    width: 200,
  },
} as Meta

export const StoryName: StoryFn<QuantitySliderProps> = args => {
  const [quantity, setQuantity] = useState(0)
  return (
    <Flex width="100%" justifyContent="center" outset={{ top: 'x4' }}>
      <QuantitySlider
        {...args}
        head={
          <StackedCardHead
            quantity={3}
            quantityDescription={'Cards'}
            cardImage="https://images.unsplash.com/photo-1634725279880-dd65d3aeb109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
          />
        }
        setQuantity={setQuantity}
        quantity={quantity}
        min={0}
        max={400}
      />
    </Flex>
  )
}
