import React, { FC } from 'react'
import { Text, TextColor } from 'src/atoms/typography/text'
import { SizeType } from 'src/types/global'
import { Div, Flex, Icon, IconType } from 'src/exports/atoms'
import { HOCSwatchColorKeys } from 'src/helpers/hoc-types/entityValueTypes'
import { convertTextColorToIconColor } from 'src/helpers/style-functions/convertTextColorToIconColor'
import { useEntities } from 'src/hooks/useEntities'

export type FeatureBadgeProps = {
  title: string
  backgroundColor?: HOCSwatchColorKeys
  icon?: IconType
  color?: TextColor
  size?: SizeType
  onClick?: () => void
}

export const FeatureBadge: FC<FeatureBadgeProps> = ({
  title,
  backgroundColor = 'success',
  color = 'inverseBody',
  size,
  icon,
  onClick,
}) => {
  const { hocs } = useEntities()
  return (
    <Flex
      backgroundColor={hocs.colors.swatches[backgroundColor].base}
      inset={icon ? { left: 'x1', vertical: 'x1', right: 'x2' } : 'x2'}
      borderRadius="medium"
      display="inline-flex"
      justifyContent="flex-start"
      alignItems="center"
      onClick={onClick}
      cursor={onClick ? 'pointer' : 'initial'}
      minWidth="max-content"
    >
      {icon && (
        <Div
          alignItems="center"
          style={{ lineHeight: 0 }}
          inset={{ right: 'x1' }}
        >
          <Icon
            name={icon}
            primaryColor={convertTextColorToIconColor(color)}
            size={size ?? 'small'}
          ></Icon>
        </Div>
      )}
      <Text
        style={{ lineHeight: 0, letterSpacing: 0.5 }}
        type="caption"
        color={color}
        weight="bold"
      >
        {title}
      </Text>
    </Flex>
  )
}
