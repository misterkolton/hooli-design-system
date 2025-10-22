import React, { useRef } from 'react'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { motion } from 'framer-motion'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'
import styles from './styles'

export type FlexItemPropTypes = {
  children?: React.ReactNode
  outsideClick?: () => void
} & HOCBaseProps &
  HOCMotionProps

export const FlexItem = (props: FlexItemPropTypes) => {
  const entities = useEntities()
  const generatedDivStyles = generateStyles(props, entities)
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, () => {
    props.outsideClick && props.outsideClick()
  })

  return (
    <motion.section
      {...props}
      ref={ref}
      onClick={
        props.onMouseEvent
          ? e => props.onMouseEvent?.(e)
          : () => props.onClick?.()
      }
      css={styles.flexItemStyles(generatedDivStyles)}
      className={`${props.className ? props.className : ''}`}
    >
      {props.children}
    </motion.section>
  )
}
