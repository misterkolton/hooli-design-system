import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import { Bar } from 'src/atoms/bar/bar'
import styles from './styles'

type DragBarProps = {
  x?: MotionValue
  onDragEnd: () => void
  dragConstraints?: { left: number; right: number }
}

export const DragBar = React.forwardRef(
  (
    { onDragEnd, dragConstraints, x }: DragBarProps,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    return (
      <motion.div
        style={{ x, translateY: '-50%' }}
        drag={'x'}
        dragConstraints={ref || dragConstraints}
        onDragEnd={onDragEnd}
        css={styles.tapBox}
      >
        <Bar height="120px" width="3px" />
      </motion.div>
    )
  },
)
