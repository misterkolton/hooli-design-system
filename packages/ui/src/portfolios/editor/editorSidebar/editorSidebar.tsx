import React, { FC } from 'react'
import { InnerContents, InnerContentsProps } from './components/innerContents'
import { Sidebar, SidebarProps } from 'src/exports/molecules'

export type EditorSidebarProps = {} & InnerContentsProps & SidebarProps

export const EditorSidebar: FC<EditorSidebarProps> = ({
  logo,
  mainMenuAction,
  options,
  zIndex,
  position,
  width,
}) => {
  return (
    <Sidebar zIndex={zIndex} position={position} width={width}>
      <InnerContents
        options={options}
        logo={logo}
        mainMenuAction={mainMenuAction}
      />
    </Sidebar>
  )
}
