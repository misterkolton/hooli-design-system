import React, { useState } from 'react'
import {
  IncrementSetting,
  IncrementSettingProps,
  Accordion,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VStack, Div } from 'src/exports/atoms'

export default {
  title: 'organisms/IncrementSetting',
  component: IncrementSetting,
  args: {
    layout: 'inlineBlock',
    activeColor: 'primaryBrand',
    sliderOrigin: 'center',
    outset: { horizontal: 'x2' },
  },
  argTypes: {
    layout: {
      control: { type: 'select', options: ['block', 'inline', 'inlineBlock'] },
    },
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
    sliderOrigin: {
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
    },
  },
} as Meta

export const Primary: StoryFn<IncrementSettingProps> = args => {
  const [value, setValue] = useState(0)

  return (
    <>
      <IncrementSetting
        {...args}
        value={value}
        min={-360}
        max={360}
        title="Slide Values"
        setValue={setValue}
      />
    </>
  )
}

export const InAccordion: StoryFn<IncrementSettingProps> = args => {
  const [value, setValue] = useState(0)
  const [otherValue, setOtherValue] = useState(0)
  return (
    <Accordion
      isExclusive={false}
      sections={[
        {
          heading: 'Setting',
          onHeadingClick: () => console.log('Heading Click'),
          body: (
            <Div width="290px" inset={{ bottom: 'x3' }}>
              <VStack gap="x2_5">
                <Div>
                  <IncrementSetting
                    {...args}
                    value={value}
                    min={-360}
                    max={360}
                    title="Slide Values"
                    setValue={setValue}
                  />
                </Div>
                <Div>
                  <IncrementSetting
                    {...args}
                    value={otherValue}
                    min={-360}
                    max={360}
                    title="Other Slide Values"
                    setValue={setOtherValue}
                  />
                </Div>
              </VStack>
            </Div>
          ),
          key: 'setting',
        },
      ]}
    ></Accordion>
  )
}
