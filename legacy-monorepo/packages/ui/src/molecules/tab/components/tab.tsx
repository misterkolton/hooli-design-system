import React from 'react'
import { Div } from 'src/atoms/div/div'

type TabContentProps = {
  tabKey: string | number
  title: string
  children?: React.ReactNode
}

export const Tab = ({ children }: TabContentProps) => {
  return <Div width="100%">{children}</Div>
}
