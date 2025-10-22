import React, { FC } from 'react'
import { Text, Spacer, Div, TextProps } from 'src/exports/atoms'
import { Input } from 'src/molecules/input/input'
import {
  Slider,
  SliderOriginType,
  SliderProgressColor,
} from 'src/molecules/slider/slider'
import useResizeObserver from 'use-resize-observer'
import {
  SpacingDirection,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

export type IncrementSettingProps = {
  value: number
  setValue: (value: number) => void
  title: string | TextProps
  min: number
  max: number
  isDisabled?: boolean
  layout: 'block' | 'inline' | 'inlineBlock'
  activeColor?: SliderProgressColor
  inputWidth?: number
  sliderOrigin?: SliderOriginType
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
}

export const IncrementSetting: FC<IncrementSettingProps> = ({
  value,
  title,
  setValue,
  min,
  max,
  isDisabled = false,
  layout,
  activeColor,
  inputWidth = 88,
  sliderOrigin = 'left',
  outset,
}) => {
  const spaceOffset = inputWidth + 24
  const { ref, width } = useResizeObserver<HTMLElement>()
  const titleProps = typeof title !== 'string' ? title : {}

  return (
    <Div
      ref={ref}
      display="flex"
      flexDirection={layout === 'block' ? 'column' : 'row'}
      alignItems={layout === 'inline' ? 'center' : 'flex-start'}
      flexWrap={layout === 'inline' ? 'nowrap' : 'wrap'}
      inset="x_25"
      outset={outset}
    >
      <Div width={layout === 'inlineBlock' ? '100%' : 'auto'}>
        <Text
          type="footnote"
          outset={{ bottom: layout !== 'inline' ? 'x1' : 'x0' }}
          {...titleProps}
        >
          {typeof title === 'string' && title}
        </Text>
      </Div>
      <Spacer
        orientation="horizontal"
        space={layout === 'inline' ? 'x3' : 'x0'}
      />
      <Input
        type="number"
        value={value.toString()}
        onChange={value => setValue(parseInt(value))}
        min={min}
        max={max}
        isDisabled={isDisabled}
        width={inputWidth}
        height={40}
        focusColor={activeColor}
        isTypingDisabled={true}
      />
      <Spacer
        orientation="horizontal"
        space={layout !== 'block' ? 'x3' : 'x0'}
      />
      {width && (
        <Div
          width={layout === 'block' ? '100%' : `calc(100% - ${spaceOffset}px)`}
        >
          <Slider
            value={value}
            min={min}
            max={max}
            setValue={value => setValue(value)}
            isDisabled={isDisabled}
            activeColor={activeColor}
            origin={sliderOrigin}
            width={width - spaceOffset}
          />
        </Div>
      )}
    </Div>
  )
}
