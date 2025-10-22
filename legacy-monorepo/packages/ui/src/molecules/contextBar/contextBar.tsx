import React from 'react'
import { Div } from 'src/atoms/div/div'

type ContextBarProps = {
  children?: React.ReactNode
}

export const ContextBar = ({ children }: ContextBarProps) => {
  return (
    <Div
      width="100%"
      height="48px"
      borderWidth="thin"
      borderStyle="solid"
      borderColor={{ swatch: 'grayScale', shade: '_1000' }}
      backgroundColor="foreground"
      inset={{ horizontal: 'x1' }}
      zIndex={8}
    >
      {children}
    </Div>
  )
}
