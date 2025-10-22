import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import styles from './styles'

export type DragBoxProps = {
  x: MotionValue
  onDragEnd: () => void
}
export const DragBox = React.forwardRef(
  ({ onDragEnd, x }: DragBoxProps, ref: React.RefObject<HTMLDivElement>) => {
    return (
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={ref}
        onDragEnd={onDragEnd}
        css={styles.dragBox}
      ></motion.div>
    )
  },
)
