import React from 'react'
import { Div } from 'src/atoms/div/div'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'

export type CardProps = {
  onClick?: () => void
  outsideClick?: () => void
  className?: string
  children?: React.ReactNode
} & HOCBaseProps &
  HOCMotionProps

export const Card = (props: CardProps) => {
  const { card } = useEntities()
  return (
    <Div
      {...props}
      inset={props.inset ? props.inset : card.defaultInset}
      onClick={props.onClick && (() => props?.onClick?.())}
      boxShadow={props.boxShadow ?? card.boxShadow}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={props.borderRadius ? props.borderRadius : card.borderRadius}
      position={props.position ?? 'relative'}
    >
      {props.children}
    </Div>
  )
}
