import React, { useState } from 'react'
import { Div, Text } from 'src/exports/atoms'
import { Tooltip } from 'src/molecules/tooltip/tooltip'
import { IconType, IconColors, Flex, orientation } from 'src/exports/atoms'
import { IconLink } from 'src/exports/molecules'
import { Shadows } from 'src/helpers/hoc-types/entityValueTypes'

export type PillProps = {
  title?: string
  items: PillItemsType[]
  flexDirection?: 'row' | 'row-reverse'
  boxShadow?: Shadows
  children?: React.ReactNode
}

export type PillItemsType = {
  title: string
  icon: IconType
  iconOrientation?: orientation
  onClick: () => void
  isActive?: boolean
  activeColor?: IconColors
}

export const Pill = ({
  title,
  items,
  flexDirection = 'row',
  boxShadow,
  children,
}: PillProps) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1)

  const tooltipVariants = {
    hoverOn: {
      opacity: 1,
    },
    hoverOff: {
      opacity: 0,
    },
  }

  const height = '44px'
  return (
    <>
      <Flex
        height={height}
        borderRadius="circle"
        backgroundColor="foreground"
        justifyContent="center"
        alignItems="center"
        inset={{ horizontal: 'x1' }}
        flexDirection={flexDirection}
        boxShadow={boxShadow}
      >
        {children}
        <Flex flexDirection="row">
          {items.map((item, index) => (
            <Div
              onHoverStart={() => {
                setHoverIndex(index + 1)
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              key={item.title}
              position="relative"
              onHoverEnd={() => {
                setHoverIndex(-1)
              }}
            >
              {hoverIndex === index + 1 && (
                <Flex
                  variants={tooltipVariants}
                  animate={hoverIndex ? 'hoverOn' : 'hoverOff'}
                  initial={'hoverOff'}
                  transition={{ ease: 'easeIn', duration: 0.2 }}
                  top={`-${height}`}
                  position="absolute"
                >
                  <Tooltip
                    direction="bottom"
                    title={item.title}
                    background="dark"
                  />
                </Flex>
              )}
              <Div inset="x1">
                <IconLink
                  icon={item.icon}
                  iconOrientation={
                    item.iconOrientation ? item.iconOrientation : 'left'
                  }
                  size="small"
                  fill="default"
                  activeColor={item.activeColor ?? 'success'}
                  hasBackgroundColor={false}
                  onClick={() => {
                    item.onClick()
                  }}
                  isActive={item.isActive}
                />
              </Div>
            </Div>
          ))}
        </Flex>
      </Flex>
      {title && <Text type="body">{title}</Text>}
    </>
  )
}
