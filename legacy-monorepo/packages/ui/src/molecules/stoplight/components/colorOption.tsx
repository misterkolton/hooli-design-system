import React, { FC } from 'react'
import { Flex, Div } from 'src/exports/atoms'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'
import { SizeType } from 'src/types/global'
import Color from 'color'
import { useEntities } from 'src/hooks/useEntities'

export type ColorOptionProps = {
  hexColor: string
  size?: SizeType
  onClick: () => void
}

export const getSize = (size: SizeType): HOCSpacingKeys => {
  switch (size) {
    case 'xSmall':
      return 'x3'
    case 'small':
      return 'x4'
    case 'medium':
      return 'x5'
    case 'large':
      return 'x6'
    case 'xLarge':
      return 'x7'
    default:
      return 'x5'
  }
}
export const ColorOption: FC<ColorOptionProps> = ({
  hexColor,
  size = 'medium',
  onClick,
}) => {
  const { colorOption } = useEntities()
  const shade = Color(hexColor).luminosity()
  const shadow = colorOption.defaults.circleFill

  return (
    <Flex
      borderRadius="circle"
      width={getSize(size)}
      height={getSize(size)}
      justifyContent="center"
      alignItems="center"
      onClick={() => onClick()}
    >
      <Div
        borderRadius="circle"
        backgroundColor={hexColor}
        height="33%"
        width="33%"
        boxShadow={shade > 0.9 ? shadow : undefined}
      />
    </Flex>
  )
}
