import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { PinInput, PinInputProps } from 'src/exports/organisms'
import { Span, Div } from 'src/exports/atoms'

export default {
  title: 'organisms/PinInput',
  component: PinInput,
} as Meta

const Template: StoryFn<PinInputProps> = args => {
  const [pinValue, setPinValue] = React.useState('')
  return (
    <Div>
      <Span inset={{ bottom: 'x1' }}>Your PIN is: {pinValue}</Span>
      <PinInput {...args} onChange={setPinValue}></PinInput>
    </Div>
  )
}

export const FourComboPin = Template.bind({})
FourComboPin.args = {
  length: 4,
}

export const SixComboPin = Template.bind({})
SixComboPin.args = {
  length: 6,
}

export const Secret = Template.bind({})
Secret.args = {
  ...FourComboPin.args,
  isSecret: true,
}
