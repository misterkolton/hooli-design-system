import React, { FC } from 'react'
import { Div, Flex, Spacer, Icon } from 'src/exports/atoms'
import {
  Button,
  Menu,
  ButtonProps,
  MenuItem,
  MenuSection,
} from 'src/exports/molecules'
import { AnimatePresence } from 'framer-motion'
import { SizeType } from 'src/types/global'
import { IconType, LoadingSpinner } from 'src/exports/atoms'

type MenuLocationType = 'top' | 'bottom'

export type MenuOptionType = {
  title: string
  onClick: () => void
  icon?: IconType
}

export type ButtonWithMenuProps = {
  menuLocation: MenuLocationType
  menuOptions: MenuOptionType[]
  isExpanded: boolean
  isLoading?: boolean
  loadingMessage?: string
  onClick: () => void
} & ButtonProps

export const ButtonWithMenu: FC<ButtonWithMenuProps> = ({
  menuLocation,
  menuOptions,
  isExpanded,
  isLoading,
  loadingMessage,
  onClick,
  type,
  title,
  size = 'small',
  outlined,
}) => {
  const variants = {
    expanded: {
      transform: menuLocation === 'top' ? 'rotate(270deg)' : 'rotate(90deg)',
    },
    collapsed: {
      transform: menuLocation === 'top' ? 'rotate(90deg)' : 'rotate(270deg)',
    },
  }

  const menuVariants = {
    expanded: {
      opacity: 1,
    },
    collapsed: {
      opacity: 0,
    },
  }

  const mapPositionToButtonSize = (size: SizeType) => {
    switch (size) {
      case 'xSmall':
        return '48px'
      case 'small':
        return '56px'
      case 'medium':
        return '64px'
      case 'large':
        return '72px'
      case 'xLarge':
        return '88px'
      default:
        return '56px'
    }
  }

  return (
    <AnimatePresence>
      <Flex position="relative" justifyContent="center">
        <Button
          onClick={onClick}
          type={type}
          size={size}
          outlined={outlined}
          disabled={isLoading}
        >
          <Flex alignItems="center" width="100%">
            {isLoading ? loadingMessage : title}
            <Spacer space="x1_5" orientation="horizontal" />
            {isLoading ? (
              <LoadingSpinner
                size={
                  size === 'xSmall' || size === 'small' ? 'small' : 'medium'
                }
                hasNoColor
              />
            ) : (
              <Flex
                alignItems="center"
                justifyContent="center"
                variants={variants}
                initial={isExpanded ? 'expanded' : 'collapsed'}
                animate={isExpanded ? 'expanded' : 'collapsed'}
              >
                <Icon
                  name="chevron"
                  orientation="left"
                  size={size === 'xSmall' || size === 'small' ? 14 : 16}
                  primaryColor={
                    outlined
                      ? 'primaryBrand'
                      : type === 'shadow'
                      ? 'primaryHeadingText'
                      : 'inverseBodyText'
                  }
                />
              </Flex>
            )}
          </Flex>
        </Button>

        {isExpanded && (
          <Div
            position="absolute"
            inset="x1"
            bottom={
              menuLocation === 'top' ? mapPositionToButtonSize(size) : undefined
            }
            top={
              menuLocation === 'bottom'
                ? mapPositionToButtonSize(size)
                : undefined
            }
            variants={menuVariants}
            initial="collapsed"
            animate={isExpanded ? 'expanded' : 'collapsed'}
            exit="collapsed"
            minWidth="max-content"
            style={{ whiteSpace: 'nowrap' }}
          >
            <Menu>
              <Div inset={{ top: 'x1', bottom: 'x1' }}>
                <MenuSection divider={false}>
                  {menuOptions.map((option, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        option.onClick()
                        onClick()
                      }}
                      title={option.title}
                      icon={option.icon}
                    />
                  ))}
                </MenuSection>
              </Div>
            </Menu>
          </Div>
        )}
      </Flex>
    </AnimatePresence>
  )
}
