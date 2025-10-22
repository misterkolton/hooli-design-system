import React, { FC, useState } from 'react'
import { Div } from 'src/atoms/div/div'
import { useEntities } from 'src/hooks/useEntities'
import { springTransition } from 'src/animations/transitions'
import Color from 'color'

export type ToggleProps = {
  callBack: (isActive: boolean) => void
  defaultValue?: boolean
}

export const Toggle: FC<ToggleProps> = ({ callBack, defaultValue }) => {
  const [isToggled, setIsToggled] = useState(defaultValue || false)
  const { toggle } = useEntities()
  const handleToggle = () => {
    setIsToggled(!isToggled)
    callBack(!isToggled)
  }

  const onColor = Color(toggle.isActiveColor).rgb().toString()
  const offColor = Color(toggle.isNotActiveColor).rgb().toString()

  const variants = {
    on: {
      backgroundColor: onColor,
    },
    off: {
      backgroundColor: offColor,
    },
  }

  return (
    <Div
      inset="x_5"
      onClick={handleToggle}
      justifyContent={isToggled ? 'flex-end' : 'flex-start'}
      width="52px"
      height="30px"
      borderRadius="50px"
      display="flex"
      alignItems="center"
      cursor="pointer"
      variants={variants}
      initial={isToggled ? 'on' : 'off'}
      animate={isToggled ? 'on' : 'off'}
    >
      <Div
        animate
        layout
        width="24px"
        height="24px"
        backgroundColor="foreground"
        borderRadius="circle"
        transition={springTransition}
      ></Div>
    </Div>
  )
}
