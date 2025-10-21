import React from 'react'
import styles from './styles'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { motion } from 'framer-motion'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'

export type SpanProps = {
  children?: React.ReactNode
} & HOCBaseProps &
  HOCMotionProps

export const Span = (props: SpanProps) => {
  const entities = useEntities()
  const generatedDivStyles = generateStyles(props, entities)
  return (
    <motion.span
      {...props}
      onClick={
        props.onMouseEvent
          ? e => props.onMouseEvent?.(e)
          : () => props.onClick?.()
      }
      css={styles.spanStyles(generatedDivStyles)}
      className={`${props.className ? props.className : ''}`}
    >
      {props.children}
    </motion.span>
  )
}
