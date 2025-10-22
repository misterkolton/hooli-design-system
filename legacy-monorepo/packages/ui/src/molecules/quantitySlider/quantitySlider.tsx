import React, { FC } from 'react'
import { Div, Text, Flex, Spacer } from 'src/exports/atoms'
import { Slider, SliderProgressColor } from 'src/exports/molecules'
import { IncrementSetting } from 'src/exports/organisms'

export type QuantitySliderProps = {
  quantity: number
  min: number
  max: number
  setQuantity: (quantity: number) => void
  salePrice?: number
  sliderFill?: SliderProgressColor
  unitPrice: number
  width: number
  hasIncrement?: boolean
  head?: React.ReactNode
}

export const QuantitySlider: FC<QuantitySliderProps> = ({
  quantity,
  min,
  max,
  setQuantity,
  salePrice,
  unitPrice,
  sliderFill,
  width,
  hasIncrement,
  head,
}) => {
  const subtotal = salePrice ? salePrice * quantity : unitPrice * quantity

  return (
    <Flex justifyContent="center" flexDirection="column">
      {head && (
        <Flex
          width="100%"
          justifyContent="center"
          flexDirection="column"
          outset={{ bottom: 'x2' }}
        >
          {head}
        </Flex>
      )}
      {salePrice ? (
        <>
          <Text
            type="caption"
            color="primaryHeading"
            content="Sale"
            alignment="center"
            style={{ letterSpacing: '1px' }}
          />
          <Flex justifyContent="center">
            <Spacer orientation="horizontal" space="x1" />
            <Text
              type="caption"
              color="primaryHeading"
              weight="semiBold"
              content={`$${unitPrice?.toFixed(2)}`}
              isStrikeThrough
              alignment="center"
              style={{ letterSpacing: '1px' }}
            />
            <Spacer orientation="horizontal" space="x1" />
            <Text
              type="largeBody"
              color="danger"
              weight="bold"
              content={`$${salePrice.toFixed(2)} /each`}
              style={{ letterSpacing: '1px' }}
            />
          </Flex>
        </>
      ) : (
        <Text
          type="body"
          color="primaryHeading"
          weight="semiBold"
          content={`$${unitPrice?.toFixed(2)} /each`}
          alignment="center"
          style={{ letterSpacing: '1px' }}
        />
      )}
      <Text
        type="body"
        content={`Subtotal: $${subtotal.toFixed(2)}`}
        alignment="center"
      />
      <Flex justifyContent="center">
        {hasIncrement ? (
          <Div width="370px">
            <Spacer orientation="vertical" space="x2" />
            <IncrementSetting
              title=""
              min={min}
              max={max}
              value={quantity}
              layout="inline"
              setValue={quantity => setQuantity(quantity)}
              activeColor={sliderFill}
              inputWidth={width}
            />
          </Div>
        ) : (
          <Slider
            min={min}
            max={max}
            value={quantity}
            setValue={quantity => setQuantity(quantity)}
            width={width}
            activeColor={sliderFill}
          />
        )}
      </Flex>
    </Flex>
  )
}
