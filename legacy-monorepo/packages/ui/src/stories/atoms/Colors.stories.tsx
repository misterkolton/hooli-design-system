import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div, DivProps } from 'src/exports/atoms'
import { Grid, GridItem } from 'src/exports/molecules'
import {
  HOCSwatchColorKeys,
  ColorSwatchKeys,
} from 'src/helpers/hoc-types/entityValueTypes'
import { Text } from 'src/exports/atoms'

export default {
  title: 'atoms/Colors',
  component: Grid,
  args: {
    swatch: 'primaryBrand',
  },
} as Meta

type SwatchProps = {
  swatch: HOCSwatchColorKeys
  baseColorShade?: ColorSwatchKeys
} & DivProps

const SwatchTemplate: StoryFn<SwatchProps> = args => {
  const arr = [
    'base',
    '_100',
    '_200',
    '_300',
    '_400',
    '_500',
    '_600',
    '_700',
    '_800',
    '_900',
    '_1000',
  ]

  return (
    <Grid gap={16} columnSize={128} rowSize={128}>
      <GridItem gridColSpan={1} gridRowSpan={1}>
        {arr.map((shade: ColorSwatchKeys) => {
          return (
            <Div width="100%" height="100%">
              <Div
                width="100%"
                height="90%"
                backgroundColor={{ swatch: args.swatch, shade: shade }}
              ></Div>
              <Text type="caption">{shade}</Text>
            </Div>
          )
        })}
      </GridItem>
    </Grid>
  )
}

export const PrimaryBrand = SwatchTemplate.bind({})
PrimaryBrand.args = {
  swatch: 'primaryBrand',
}

export const SecondaryBrand = SwatchTemplate.bind({})
SecondaryBrand.args = {
  swatch: 'secondaryBrand',
}

export const Success = SwatchTemplate.bind({})
Success.args = {
  swatch: 'success',
}

export const Warning = SwatchTemplate.bind({})
Warning.args = {
  swatch: 'warning',
}

export const Danger = SwatchTemplate.bind({})
Danger.args = {
  swatch: 'danger',
}

export const Accent = SwatchTemplate.bind({})
Accent.args = {
  swatch: 'accent',
}

export const GrayScale = SwatchTemplate.bind({})
GrayScale.args = {
  swatch: 'grayScale',
}

export const BlueScale = SwatchTemplate.bind({})
BlueScale.args = {
  swatch: 'blueScale',
}
export const PurpleScale = SwatchTemplate.bind({})
PurpleScale.args = {
  swatch: 'purpleScale',
}
