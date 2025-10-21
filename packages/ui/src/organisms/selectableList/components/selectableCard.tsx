import React, { FC } from 'react'
import { Card } from 'src/exports/atoms'
import { Div, Flex, Icon } from 'src/exports/atoms'

type SelectableCardProps = {
  isActive: boolean
  onClick?: () => void
  shouldShowActiveIcons?: boolean
}
export const SelectableCard: FC<SelectableCardProps> = ({
  isActive,
  children,
  onClick,
  shouldShowActiveIcons = true,
}) => {
  return (
    <Div cursor="pointer" onClick={() => onClick?.()}>
      <Card
        overflow="hidden"
        boxShadow="mediumLight"
        borderRadius="default"
        width="100%"
        inset="x2"
        borderWidth={'default'}
        borderColor={
          isActive ? { swatch: 'success', shade: 'base' } : 'transparent'
        }
        borderStyle={isActive ? 'solid' : 'none'} // TODO - Fix this, causes jump when active but w/o the featured ribbon in RadioCard looks weird
      >
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          {children}
          {shouldShowActiveIcons && (
            <Div
              backgroundColor={
                isActive
                  ? { swatch: 'success', shade: 'base' }
                  : { swatch: 'grayScale', shade: '_900' }
              }
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="24px"
              height="24px"
              borderRadius="small"
            >
              <Icon
                size="xSmall"
                name={isActive ? 'check' : 'add'}
                primaryColor="inverseBodyText"
              />
            </Div>
          )}
        </Flex>
      </Card>
    </Div>
  )
}
