import React, { FC } from 'react'
import { HexColorPicker, RgbColor, HslColor } from 'react-colorful'
import {
  Flex,
  Spacer,
  Icon,
  Div,
  Text,
  ColorThumbnail,
} from 'src/exports/atoms'
import { Input } from 'src/exports/molecules'
import Color from 'color'
import { EyeDropper, OnChangeEyedrop } from 'react-eyedrop'
import useResizeObserver from 'use-resize-observer'
import styles from './styles'

const DropperIcon = (props: { onClick: () => void; disabled: boolean }) => {
  return (
    <Flex
      backgroundColor={'background'}
      borderRadius="small"
      width="40px"
      height="40px"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={() => props.onClick()}
    >
      <Icon
        name="dropper"
        size="small"
        primaryColor={!props.disabled ? 'primaryBodyText' : 'primaryBrand'}
      />
    </Flex>
  )
}

export type QuantumRGB = RgbColor
export type QuantumHex = string
export type QuantumHSL = HslColor

export type ConvertedColorType = QuantumRGB | QuantumHex | QuantumHSL

export type QuantumColorPickerProps = {
  color: QuantumHex // TODO allow any ConvertedColorType as color prop and then convert it internally
  onChange: (color: QuantumHex) => void
  convertedColorCallback?: (color: ConvertedColorType) => void
  convertedColorType?: 'hex' | 'rgb' | 'hsl'
  showEyeDropper?: boolean
  palette?: {
    title?: string
    colors?: QuantumHex[]
    isLoading?: boolean
    count?: number
  }
}
export const QuantumColorPicker: FC<QuantumColorPickerProps> = ({
  color,
  onChange,
  convertedColorCallback,
  convertedColorType = 'hex',
  showEyeDropper = false,
  palette,
}) => {
  const { ref, width } = useResizeObserver<HTMLDivElement>()
  const formattedHexValue = (value: string) =>
    value.startsWith('#') ? value : `#${value}`
  const handleOnChange = (color: string) => {
    try {
      const convertedHex = Color(color)

      if (convertedColorType === 'hex') {
        convertedColorCallback?.(color)
      } else if (convertedColorType === 'hsl') {
        const hsl = {
          h: convertedHex.hue(),
          s: convertedHex.saturationl(),
          l: convertedHex.lightness(),
        }
        convertedColorCallback?.(hsl)
      } else {
        const rgb = {
          r: convertedHex.red(),
          g: convertedHex.green(),
          b: convertedHex.blue(),
        }
        convertedColorCallback?.(rgb)
      }
    } catch (err) {
      // Fail silently when color cannot be converted
    } finally {
      onChange(color)
    }
  }

  const paletteArray =
    palette?.colors ?? Array.from(Array(palette?.count ?? 12))

  return (
    <Div
      inset="x2"
      display="flex"
      borderRadius="default"
      boxShadow="mediumDark"
      flexDirection="column"
      width="100%"
      ref={ref}
    >
      <HexColorPicker
        style={{ width: `100%` }}
        color={formattedHexValue(color)}
        onChange={value => handleOnChange(formattedHexValue(value))}
      />
      <Spacer space="x2_5" />
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        {showEyeDropper && (
          <EyeDropper
            customComponent={DropperIcon}
            cursorActive="crosshair"
            once={true}
            onChange={(value: OnChangeEyedrop) =>
              handleOnChange(formattedHexValue(value.hex))
            }
          />
        )}
        {width && (
          <Input
            height={40}
            width={showEyeDropper ? width - 54 : width}
            value={color}
            onChange={value => handleOnChange(formattedHexValue(value))}
            type="text"
          />
        )}
      </Flex>
      {((palette && palette.colors) || palette?.isLoading) && (
        <>
          <Spacer space="x1" />
          <Text
            type="caption"
            content={palette.title ?? 'Presets'}
            color="primaryBody"
            lineHeight={1.2}
            inset={{ left: 'x1', vertical: 'x1' }}
            weight="semiBold"
          />
          <Flex
            css={styles.thumbnailContainer}
            overflowX="auto"
            width="100%"
            justifyContent="flex-start"
            flexWrap={'wrap'}
            alignItems="center"
            inset={{ bottom: '6px' }}
          >
            {paletteArray.map((paletteColor, index) => (
              <ColorThumbnail
                key={index}
                isRounded
                isLoading={palette.isLoading}
                backgroundColor={paletteColor}
                isSelected={paletteColor === color}
                onSelect={value => {
                  handleOnChange(formattedHexValue(value))
                }}
                outset={{ horizontal: 'x1', top: 'x1' }}
              />
            ))}
          </Flex>
        </>
      )}
    </Div>
  )
}
