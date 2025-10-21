import React from 'react'
import styles from './styles'
import {
  motion,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  Target,
} from 'framer-motion'

type FramerAnimation =
  | AnimationControls
  | TargetAndTransition
  | VariantLabels
  | boolean

export type GridProps = {
  columnSize: number
  rowSize: number
  gap: number
  maxWidth?: number
  height?: string
  overflow?: string
  isDense?: boolean
  animate?: FramerAnimation
  initial?: boolean | Target | VariantLabels
  exit?: TargetAndTransition | VariantLabels
  children?: React.ReactNode
}
export const Grid = ({
  columnSize,
  rowSize,
  gap,
  maxWidth,
  children,
  height,
  overflow,
  isDense = true,
  animate,
  exit,
  initial,
}: GridProps) => {
  return (
    <motion.section
      animate={animate}
      exit={exit}
      initial={initial}
      css={styles.grid(
        gap,
        columnSize,
        rowSize,
        maxWidth,
        height,
        overflow,
        isDense,
      )}
    >
      {children}
    </motion.section>
  )
}
