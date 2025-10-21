import React, { FC } from 'react'
import styles from './styles'
import { Text, TextColor } from 'src/atoms/typography/text'
import { Div } from '../div/div'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'
import { Icon } from '../iconography/components/icon'
import { IconType } from '../iconography/types'
import { SizeType } from 'src/types/global'
import { convertTextColorToIconColor } from 'src/helpers/style-functions/convertTextColorToIconColor'

export type BadgeProps = {
  item: string
  backgroundColor?: BackgroundColor
  icon?: IconType
  size?: SizeType
  color?: TextColor
}
export const Badge: FC<BadgeProps> = ({
  item,
  backgroundColor,
  icon,
  size = 'small',
  color = 'inverseBody',
}) => {
  const parseItem = (item: string) => {
    const toInt = parseInt(item)
    if (isNaN(toInt)) {
      return item
    } else {
      if (toInt > 10) {
        return '10+'
      } else {
        return toInt.toString()
      }
    }
  }

  return (
    <Div
      css={styles.badge(parseItem(item))}
      backgroundColor={
        backgroundColor ?? { swatch: 'primaryBrand', shade: 'base' }
      }
      inset={isNaN(parseInt(item)) ? { horizontal: 'x_5' } : 'x0'}
      borderRadius="small"
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
            size={size}
          ></Icon>
        </Div>
      )}
      <Text type="footnote" color={color} weight={'semiBold'}>
        {parseItem(item)}
      </Text>
    </Div>
  )
}
