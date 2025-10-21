import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Input, Select, SelectProps } from 'src/exports/molecules'
import { Spacer } from 'src/atoms/spacer/spacer'
import { Text } from 'src/exports/atoms'

export default {
  title: 'molecules/Select',
  component: Select,
} as Meta

type SelectStoryProps = {
  selectProps: SelectProps
  frontLabel?: string
  shouldRenderSupportAssets?: boolean
}

const Template: StoryFn<SelectStoryProps> = args => {
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0)
  return (
    <>
      {args.shouldRenderSupportAssets && (
        <>
          <Text type="caption">
            Support assets are meant to test tab functionality
          </Text>
          <Input type="number" onChange={() => {}} value="3" />
          <Spacer space="x2" />
        </>
      )}
      <Select
        {...args.selectProps}
        frontLabel={args.frontLabel}
        selectedOptionIndex={selectedOptionIndex}
        onChange={setSelectedOptionIndex}
      />
      {args.shouldRenderSupportAssets && (
        <>
          <Input type="number" onChange={() => {}} value="3" />
          <Spacer space="x2" />
        </>
      )}
    </>
  )
}

const textOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
]
export const WithTextOptions = Template.bind({})
WithTextOptions.args = {
  selectProps: {
    type: 'text',
    options: textOptions,
  },
  frontLabel: '',
}

const graphicOption = [
  // Can pass icons
  {
    value: 'catalog',
    label: {
      icon: 'catalog',
    },
  },
  // Or images
  {
    value: 'myimage',
    label: {
      url: 'https://images.unsplash.com/photo-1599635492191-094d4ff14123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    },
  },
  {
    value: 'user',
    label: {
      icon: 'user',
    },
  },
  {
    value: 'catalog',
    label: {
      icon: 'catalog',
    },
  },
  {
    value: 'information',
    label: {
      icon: 'information',
    },
  },
]
export const WithGraphicOption = Template.bind({})
WithGraphicOption.args = {
  selectProps: {
    type: 'graphic',
    options: graphicOption,
  },
  frontLabel: '',
}

const graphicTextOption = [
  // Can pass icons
  {
    value: 'catalog',
    label: {
      icon: 'catalog',
      text: 'Catalog Icon',
    },
  },
  // Or images
  {
    value: 'myimage',
    label: {
      text: 'URL Image',
      url: 'https://images.unsplash.com/photo-1599635492191-094d4ff14123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    },
  },
  {
    value: 'user',
    label: {
      text: 'User Icon',
      icon: 'user',
    },
  },
  {
    value: 'catalog',
    label: {
      text: 'Catalog Icon',
      icon: 'catalog',
    },
  },
  {
    value: 'information',
    label: {
      text: 'Information Icon',
      icon: 'information',
    },
  },
]
export const WithGraphicAndTextOption = Template.bind({})
WithGraphicAndTextOption.args = {
  selectProps: {
    type: 'graphicText',
    options: graphicTextOption,
  },
  frontLabel: '',
}

const textMessageOptions = [
  { value: 'option1', label: 'Apple' },
  { value: 'option2', label: 'Grape' },
  { value: 'option3', label: 'Orange' },
  { value: 'option4', label: 'Pineapple' },
  { value: 'option5', label: 'Strawberry' },
]

export const WithMessageAndExtras = Template.bind({})
WithMessageAndExtras.args = {
  selectProps: {
    type: 'text',
    options: textMessageOptions,
    dropDownMaxHeight: '150px',
    message: {
      type: 'danger',
      content: 'This is a warning message',
    },
  },
  frontLabel: '',
  shouldRenderSupportAssets: true,
}

const reactNodeOptions = [
  { value: 'value1', label: <div>Option 1</div> },
  { value: 'value2', label: <>Option 2</> },
  { value: 'value3', label: <>Option 3</> },
]

export const WithReactNode = Template.bind({})
WithReactNode.args = {
  selectProps: {
    type: 'reactNode',
    options: reactNodeOptions,
    dropDownMaxHeight: '150px',
  },
  frontLabel: '',
}
