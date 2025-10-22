import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from 'src/exports/molecules'

export default {
  title: 'molecules/Checkbox',
  component: Checkbox,
  args: {
    boxShadow: 'Checkbox',
    padding: '32px 16px 16px 16px',
    width: '212px',
    height: '312px',
  },
} as Meta

const Template: StoryFn<CheckboxProps> = args => {
  const [isChecked, setIsChecked] = React.useState(false)
  return <Checkbox {...args} isChecked={isChecked} onChange={setIsChecked} />
}

export const PrimaryCheckbox = Template.bind({})
PrimaryCheckbox.args = {
  type: 'primary',
  label: 'Primary',
}

export const SecondaryCheckbox = Template.bind({})
SecondaryCheckbox.args = {
  type: 'secondary',
  label: 'Secondary',
}

export const SuccessCheckbox = Template.bind({})
SuccessCheckbox.args = {
  type: 'success',
  label: 'Success',
}

export const WarningCheckbox = Template.bind({})
WarningCheckbox.args = {
  type: 'warning',
  label: 'Warning',
}

export const DangerCheckbox = Template.bind({})
DangerCheckbox.args = {
  type: 'danger',
  label: 'Danger',
}

export const DarkCheckbox = Template.bind({})
DarkCheckbox.args = {
  type: 'dark',
  label: 'Dark',
}
