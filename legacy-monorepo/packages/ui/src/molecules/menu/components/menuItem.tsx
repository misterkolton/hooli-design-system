import React, { FC } from 'react'
import { Icon } from 'src/atoms/iconography/components/icon'
import { IconType, orientation } from 'src/atoms/iconography/types/index'
import { Text } from 'src/atoms/typography/text'
import { ListItem } from 'src/atoms/listItem/listItem'
import { Badge } from 'src/atoms/badge/badge'
import { Flex } from 'src/atoms/flex/flex'

export type MenuItemProps = {
  title: string
  icon?: IconType
  onClick: () => void
  badge?: string
  iconOrientation?: orientation
}

export const MenuItem: FC<MenuItemProps> = ({
  title,
  icon,
  onClick,
  badge,
  iconOrientation,
}) => {
  return (
    <ListItem orientation={'vertical'}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        cursor={'pointer'}
        onClick={onClick}
      >
        <Text type="body">{title}</Text>
        {icon && (
          <Icon
            size="small"
            name={icon}
            primaryColor="primaryBodyText"
            orientation={iconOrientation ? iconOrientation : undefined}
          />
        )}
        {badge && <Badge item={badge} />}
      </Flex>
    </ListItem>
  )
}
