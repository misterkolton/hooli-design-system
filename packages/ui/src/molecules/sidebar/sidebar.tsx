import React from 'react'
import { Aside, Flex } from 'src/exports/atoms'

export type SidebarPosition = 'left' | 'right'
export type SidebarProps = {
  outsideClickEvent?: () => void
  width?: string
  position?: SidebarPosition
  zIndex?: number
  height?: string
  children?: React.ReactNode
}

export const Sidebar = ({
  children,
  width,
  position = 'left',
  zIndex,
  height,
}: SidebarProps) => {
  return (
    <Aside
      zIndex={zIndex}
      width={width ?? '60px'}
      height={height ?? '100vh'}
      backgroundColor="foreground"
      boxShadow="mediumLight"
      position="fixed"
      display="flex"
      top="0px"
      left={position === 'left' ? '0px' : undefined}
      right={position === 'right' ? '0px' : undefined}
    >
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Aside>
  )
}
