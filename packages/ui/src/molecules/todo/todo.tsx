import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'

export type TodoPropTypes = {
  todo: string
}
export const Todo: FC<TodoPropTypes> = ({ todo }) => {
  return (
    <Div
      width="100%"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Div
        borderRadius="circle"
        width="12px"
        height="12px"
        backgroundColor={{ swatch: 'secondaryBrand', shade: 'base' }}
        outset={{ right: 'x1' }}
      ></Div>
      <Text isItalic={true} type="caption" color="primaryBody" content={todo} />
    </Div>
  )
}
