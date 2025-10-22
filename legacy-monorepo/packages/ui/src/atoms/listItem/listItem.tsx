import React from 'react'
import { ListOrientation } from '../list/list'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { motion } from 'framer-motion'
import styles from './styles'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'

export type ListItemProps = {
  orientation: ListOrientation
  children?: React.ReactNode
  variants?: {}
  animate?: string | {}
  initial?: string
  transition?: {}
} & HOCBaseProps &
  HOCMotionProps

export const ListItem = (props: ListItemProps) => {
  const entities = useEntities()
  const generatedStyles = generateStyles(props, entities)
  return (
    <motion.li
      {...props}
      onClick={
        props.onMouseEvent
          ? e => props.onMouseEvent?.(e)
          : () => props.onClick?.()
      }
      css={styles.listItem(generatedStyles, props.orientation, entities)}
    >
      {props.children}
    </motion.li>
  )
}
