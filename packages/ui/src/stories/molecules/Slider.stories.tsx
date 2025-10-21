import React from 'react'
import { Slider, SliderProps } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div, Flex } from 'src/exports/atoms'

export default {
  title: 'molecules/Slider',
  component: Slider,
  args: {
    min: 0,
    max: 100,
    activeColor: 'primaryBrand',
    width: 240,
    isDiasabled: false,
  },
  argTypes: {
    activeColor: {
      control: {
        type: 'select',
        options: [
          'primaryBrand',
          'secondaryBrand',
          'success',
          'warning',
          'danger',
        ],
      },
    },
    origin: {
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
    },
  },
} as Meta

export const Primary: StoryFn<SliderProps> = args => {
  const [sliderValue, setSliderValue] = React.useState(0)
  return (
    <Flex width="100%" justifyContent="center">
      <Div
        height="150px"
        width="320px"
        inset="x5"
        backgroundColor="#222"
        color="inverseBody"
      >
        <Slider {...args} value={sliderValue} setValue={setSliderValue} />
        <Div> Value: {sliderValue}</Div>
      </Div>
    </Flex>
  )
}
