import React from 'react'
import { List } from 'src/atoms/list/list'
import { Div } from 'src/atoms/div/div'

export type MenuSectionProps = {
  divider: boolean
  children?: React.ReactNode
}

export const MenuSection = ({ children, divider }: MenuSectionProps) => {
  return (
    <Div
      borderWidth={divider ? { bottom: 'thin' } : undefined}
      borderColor={
        divider ? { swatch: 'grayScale', shade: '_1000' } : undefined
      }
      borderStyle={divider ? { bottom: 'solid' } : { bottom: 'none' }}
    >
      <List orientation="vertical" alignment="left">
        {children}
      </List>
    </Div>
  )
}
