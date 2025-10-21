import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/exports/atoms'
import { Input, InputProps } from 'src/exports/molecules'
import { textControl } from '../../../.storybook/controls'

export default {
  title: 'molecules/Input',
  component: Input,
  args: {
    type: 'text',
  },
  argTypes: {
    placeholder: {
      ...textControl,
    },
    label: {
      ...textControl,
    },
    height: {
      ...textControl,
    },
    width: {
      ...textControl,
    },
    maxLength: {
      ...textControl,
    },
    focusColor: {
      // type: 'select',
      options: [
        'primaryBrand',
        'secondaryBrand',
        'success',
        'danger',
        'warning',
        'accent',
      ],
    },
    icon: {
      control: {
        type: 'select',
        options: [
          'fullBleedPortrait',
          'sliderVertical',
          'frame',
          'Cut',
          'wand',
          'layerAdd',
          'layerRemove',
          'layerDisabled',
          'signature',
          'shadows',
          'rotateLeft',
          'rotateRight',
          'colorPalette',
          'dropper',
          'textBox',
          'fontSize',
          'flipHorizontal',
          'flipVertical',
          'filter',
          'brightness',
          'aText',
          'frameWidth',
          'frameHeight',
          'cropRotate',
          'layerUp',
          'layerDown',
          'capitalizedText',
          'uppercaseText',
          'lowercaseText',
          'fullBleedImage',
          'fullBleedText',
          'panelMode',
          'viewPanels',
          'rotate',
          'view',
          'replaceImage',
          'quotation',
          'facebook',
          'instagram',
          'twitter',
          'linkedIn',
          'youTube',
          'pinterest',
          'visible',
          'invisible',
          'clearPanel',
          'viewCarousel',
          'viewSinglePanel',
        ],
      },
    },
  },
} as Meta

const Template: StoryFn<InputProps> = args => {
  const [value, setValue] = React.useState('')
  const [isMaxLengthHit, setIsMaxLengthHit] = React.useState(false)

  return (
    <Div maxWidth="320px" inset={{ horizontal: 'x2', vertical: 'x4' }}>
      <Input
        {...args}
        value={value}
        onChange={setValue || setIsMaxLengthHit}
        isMaxLengthHit={isMaxLengthHit}
      />
    </Div>
  )
}

export const Label = Template.bind({})
Label.args = {
  label: 'Label Placeholder',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Placeholder',
}

export const LabelPlaceholder = Template.bind({})
LabelPlaceholder.args = {
  labelPlaceholder: 'Label Placeholder',
}

export const Icon = Template.bind({})
Icon.args = {
  placeholder: 'Icon input',
  icon: 'user',
}
export const Number = Template.bind({})
Number.args = {
  type: 'number',
}

export const DangerMessage = Template.bind({})
DangerMessage.args = {
  focusColor: 'danger',
  placeholder: 'Danger Message',
  message: {
    type: 'danger',
    content: 'Oh No! There was a problem!',
  },
}

export const SuccessMessage = Template.bind({})
SuccessMessage.args = {
  focusColor: 'success',
  placeholder: 'Success Message',
  message: {
    type: 'success',
    content: 'Successfully used this input!',
  },
}

export const WarningMessage = Template.bind({})
WarningMessage.args = {
  focusColor: 'warning',
  placeholder: 'Warning Message',
  message: {
    type: 'warning',
    content: 'A different password would be more secure',
  },
}

export const WarningMessageWithIcon = Template.bind({})
WarningMessageWithIcon.args = {
  message: {
    type: 'warning',
    content: 'This input is invalid',
    icon: 'information',
    onClick: () => alert('Warning message!'),
  },
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  labelPlaceholder: 'Loading is True',
}

export const ShowPassword = Template.bind({})
ShowPassword.args = {
  type: 'password',
}

export const HideShowPassword = Template.bind({})
HideShowPassword.args = {
  type: 'password',
  hasSecurePassword: true,
}

export const MaxLength = Template.bind({})
MaxLength.args = {
  type: 'text',
  maxLength: 8,
  isFullWidth: true,
}
