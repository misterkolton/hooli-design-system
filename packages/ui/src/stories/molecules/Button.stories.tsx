import React from 'react'
import { StoryFn } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'molecules/Button',
  component: Button,
  args: {
    onClick: () => console.log('Button Click'),
    size: 'xLarge',
    disabled: false,
    disabledCaption: '',
    outlined: false,
    boxShadow: false,
  },
  argTypes: {
    size: {
      type: 'select',
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
  },
}

const Template: StoryFn<ButtonProps> = args => (
  <Flex
    inset="x2_5"
    backgroundColor={
      args.type === 'shadow'
        ? '#313638'
        : args.type === 'accent'
        ? '#313638'
        : undefined
    }
    width="100%"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Button {...args} />
  </Flex>
)

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  type: 'primary',
  title: 'Primary',
}
export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  type: 'secondary',
  title: 'Secondary',
}
export const SuccessButton = Template.bind({})
SuccessButton.args = {
  type: 'success',
  title: 'Success',
}
export const WarningButton = Template.bind({})
WarningButton.args = {
  type: 'warning',
  title: 'Warning',
}
export const DangerButton = Template.bind({})
DangerButton.args = {
  type: 'danger',
  title: 'Danger',
}
export const ShadowButton = Template.bind({})
ShadowButton.args = {
  type: 'shadow',
  title: 'Shadow',
}
export const AccentButton = Template.bind({})
AccentButton.args = {
  type: 'accent',
  title: 'Accent',
}
export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  type: 'success',
  title: 'Outline',
  outlined: true,
}
export const SmokeButton = Template.bind({})
SmokeButton.args = {
  type: 'smoke',
  title: 'Upload Image',
  icon: { name: 'upload', fill: 'primaryHeading' },
}
export const BackgroundOverride = Template.bind({})
BackgroundOverride.args = {
  title: 'Override',
  backgroundColorOverride: '#000',
}
export const DisabledButton = Template.bind({})
DisabledButton.args = {
  type: 'success',
  title: 'Outline',
  outlined: false,
  disabledCaption: 'Disabled!',
  disabled: true,
}
