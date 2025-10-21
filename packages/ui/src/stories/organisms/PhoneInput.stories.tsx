import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { PhoneInput, PhoneInputProps } from 'src/exports/organisms'

const countries = [
  { isoCode: 'US', callingCode: 1, hasSeparator: true },
  { isoCode: 'AW', callingCode: 247 },
  { isoCode: 'AF', callingCode: 93 },
  { isoCode: 'AO', callingCode: 1 },
  { isoCode: 'AI', callingCode: 358 },
]
export default {
  title: 'organisms/PhoneInput',
  component: PhoneInput,
  args: {
    countries,
  },
} as Meta

const Template: StoryFn<PhoneInputProps> = args => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(0)
  return (
    <PhoneInput
      {...args}
      selectedCountryIndex={activeIndex}
      phoneNumber={phoneNumber}
      onPhoneNumberChange={setPhoneNumber}
      onSelectedCountryIndexChange={setActiveIndex}
      message={{
        type: 'warning',
        content: 'Example message',
        icon: 'information',
        onClick: () => alert('Test message!'),
      }}
    ></PhoneInput>
  )
}
export const WithCountries = Template.bind({})
