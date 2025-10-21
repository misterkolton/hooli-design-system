import React, { FC } from 'react'
import {
  IconType,
  IconColors,
  orientation,
} from 'src/atoms/iconography/types/index'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Text, TextColor } from 'src/atoms/typography/text'
import { computeTextTypeFromIconLinkSize } from 'src/helpers/style-functions/computeTextTypeFromSize'
import { SizeType, OnMouseEvent } from 'src/types/global'
import { useEntities } from 'src/hooks/useEntities'
import { Flex } from '../../atoms/flex/flex'
import { Div } from 'src/atoms/div/div'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'

export type IconLinkProps = {
  title?: string
  onClick?: () => void
  onMouseEvent?: OnMouseEvent
  minimize?: boolean
  icon: IconType
  iconOrientation?: orientation
  fill?: IconColors
  fontColor?: TextColor
  isActive?: boolean
  activeColor?: IconColors
  size?: SizeType
  isStacked?: boolean
  hasBackgroundColor?: boolean
  gap?: HOCSpacingKeys
  isDisabled?: boolean
}

export const IconLink: FC<IconLinkProps> = ({
  onClick,
  onMouseEvent,
  title,
  minimize,
  icon,
  iconOrientation,
  fill = 'primaryBodyText',
  isActive = false,
  activeColor = 'primaryBrand',
  fontColor = 'primaryBody',
  size = 'medium',
  isStacked = false,
  hasBackgroundColor = false,
  gap,
  isDisabled,
}) => {
  const variants = {
    open: { opacity: 1, transition: { delay: 0.03 } },
    closed: { opacity: 0 },
  }
  const { icons } = useEntities()

  return (
    <Flex
      flexDirection={isStacked ? 'column' : 'row'}
      alignItems={'center'}
      onClick={() => {
        if (!isDisabled) {
          onClick?.()
        }
      }}
      onMouseEvent={onMouseEvent}
      width="100%"
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'medium'}
        backgroundColor={hasBackgroundColor ? icons.colors.background : 'none'}
        inset={isStacked || hasBackgroundColor ? 'x1_5' : 'x0'}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
      >
        <Icon
          size={size}
          name={icon}
          primaryColor={isActive ? activeColor : fill}
          orientation={iconOrientation && iconOrientation}
        />
      </Flex>
      {!minimize && title && (
        <Div
          variants={variants}
          animate={minimize ? 'closed' : 'open'}
          initial={'closed'}
          transition={{ duration: 0.1 }}
          inset={
            !isStacked
              ? {
                  left: hasBackgroundColor ? gap ?? 'x1' : gap ?? 'x_5',
                }
              : { top: gap ?? 'x_0' }
          }
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
        >
          <Text
            weight={isActive ? 'semiBold' : 'regular'}
            color={fontColor}
            content={title}
            type={computeTextTypeFromIconLinkSize(size)}
          />
        </Div>
      )}
    </Flex>
  )
}
