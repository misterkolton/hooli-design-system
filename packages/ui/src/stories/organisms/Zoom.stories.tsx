import React from 'react'
import { Zoom, ZoomProps } from 'src/exports/organisms'
import { Div } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/Zoom',
  component: Zoom,
} as Meta

const zoomItems = [
  { value: '1200', label: '1200%' },
  { value: '1000', label: '1000%' },
  { value: '800', label: '800%' },
  { value: '600', label: '600%' },
  { value: '400', label: '400%' },
  { value: '300', label: '300%' },
  { value: '200', label: '200%' },
  { value: '150', label: '150%' },
  { value: '100', label: '100%' },
  { value: '75', label: '75%' },
  { value: '50', label: '50%' },
  { value: '25', label: '25%' },
  { value: '10', label: '10%' },
]

export const DropdownAbove: StoryFn<ZoomProps> = args => {
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(8)

  return (
    <Div display="flex">
      <Div height="90vh" width="300px" display="flex" alignItems="flex-end">
        <Zoom
          {...args}
          items={zoomItems}
          selectedOptionIndex={selectedOptionIndex}
          onChange={setSelectedOptionIndex}
          isDropDownAbove
          background="foreground"
        />
      </Div>
    </Div>
  )
}
export const DropdownBelow: StoryFn<ZoomProps> = args => {
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(8)

  return (
    <Div display="flex">
      <Div height="90vh" width="300px" display="flex" alignItems="flex-start">
        <Zoom
          {...args}
          items={zoomItems}
          selectedOptionIndex={selectedOptionIndex}
          onChange={setSelectedOptionIndex}
          isDropDownAbove={false}
          background="foreground"
        />
      </Div>
    </Div>
  )
}
