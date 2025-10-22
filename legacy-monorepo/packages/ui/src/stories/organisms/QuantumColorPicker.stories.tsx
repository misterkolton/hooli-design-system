import React, { useState } from 'react'
import {
  QuantumColorPicker,
  QuantumColorPickerProps,
  QuantumRGB,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Spacer, Text } from 'src/exports/atoms'
import { Div, Flex } from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'

export default {
  title: 'organisms/QuantumColorPicker',
  component: QuantumColorPicker,
} as Meta

export const PickColorsFromBlocks: StoryFn<QuantumColorPickerProps> = () => {
  const colors = ['#BADA55', '#FFF', '#BAD', '#000', '#F03']
  const paletteColors = [
    '#f6583f',
    '#f48f3f',
    '#fbcf31',
    '#50dac5',
    '#3ab1f4',
    '#5938d9',
    '#2f4068',
    '#6e7a91',
    '#9da6b5',
    '#c3c8d4',
    '#dde2ec',
    '#edf0f6',
  ]
  const PALETTE_LENGTH = 12
  const [activeColor, setActiveColor] = useState(paletteColors[0])
  const [isLoadingPalette, setIsLoadingPalette] = useState(false)
  const [colorPalette, setColorPalette] = useState(paletteColors)

  const randomRGB = () => Math.floor(Math.random() * 255)

  const rgbToHex = (r: number, g: number, b: number) =>
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')

  const generateNewPalette = (quantity: number) => {
    const colors = Array.from(Array(quantity)).map(() => {
      const rgb = {
        r: randomRGB(),
        g: randomRGB(),
        b: randomRGB(),
      }
      const { r, g, b } = rgb
      return rgbToHex(r, g, b)
    })
    return colors
  }

  const fetchPalette = () => {
    setIsLoadingPalette(true)
    setTimeout(() => {
      setColorPalette(generateNewPalette(PALETTE_LENGTH))
      setIsLoadingPalette(false)
    }, 2000)
  }

  return (
    <Div
      width="100%"
      height="600px"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="center"
      outset={{ top: '64px' }}
    >
      <Div width="320px">
        <QuantumColorPicker
          color={activeColor}
          onChange={setActiveColor}
          convertedColorType="rgb"
          convertedColorCallback={(color: QuantumRGB) => console.log(color)}
          palette={{
            isLoading: isLoadingPalette,
            colors: colorPalette,
            title: isLoadingPalette
              ? 'Loading Color Palette...'
              : 'Color Palette',
            count: PALETTE_LENGTH,
          }}
        />
      </Div>

      <Spacer space="x6" />
      <Text type="body">Pick from a color below</Text>
      <Flex justifyContent="center" inset={{ vertical: 'x2' }} width="320px">
        {colors.map(color => {
          return (
            <Div
              whileHover={{ scale: 1.2 }}
              cursor="pointer"
              boxShadow="mediumDark"
              borderRadius="small"
              backgroundColor={color}
              width="32px"
              height="32px"
              onClick={() => setActiveColor(color)}
              outset={{ horizontal: 'x_5' }}
            />
          )
        })}
      </Flex>
      <Spacer space="x3" />
      <Button onClick={fetchPalette} title="Generate New Palette" />
    </Div>
  )
}
