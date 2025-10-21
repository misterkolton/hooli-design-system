import React, { useState } from 'react'
import {
  QuantumColorPicker,
  SettingInput,
  SettingInputProps,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'

export default {
  title: 'organisms/SettingInput',
  component: SettingInput,
  args: {},
  argTypes: {
    settingsType: {
      control: {
        type: 'select',
        options: ['color', 'image'],
      },
    },
    label: {
      control: {
        type: 'select',
        options: ['Color', 'Image'],
      },
    },
  },
} as Meta

export const ColorSettings: StoryFn<SettingInputProps> = args => {
  const [shouldShowColorPicker, setShouldShowColorPicker] = useState(false)
  const [activeColor, setActiveColor] = useState<string | null>(null)
  return (
    <Div inset="x2">
      <SettingInput
        {...args}
        onRemove={() => setActiveColor(null)}
        settingsType="color"
        value={activeColor}
        inactiveTitle="Add..."
        onClick={() => setShouldShowColorPicker(!shouldShowColorPicker)}
      />
      {shouldShowColorPicker && (
        <Div minWidth="230px">
          <QuantumColorPicker
            color={activeColor ?? '#fff'}
            onChange={setActiveColor}
          />
        </Div>
      )}
    </Div>
  )
}

export const ImageSettings: StoryFn<SettingInputProps> = args => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  return (
    <Div inset="x2">
      <SettingInput
        {...args}
        onRemove={() => setActiveImage(null)}
        settingsType="image"
        value={activeImage}
        inactiveTitle="Add..."
        onClick={() =>
          setActiveImage(
            'https://www.sendoutcards.com/thumbnail/L4ACmmJ1pEV3zJ-C0AhS4P9scsE=/fit-in/320x0/system_images/2020/5/18/d7bf2927-8684-4203-bd6b-ff9d3947d7d9.png',
          )
        }
      />
    </Div>
  )
}
