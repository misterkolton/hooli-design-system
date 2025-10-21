import { MotionProps } from 'framer-motion'

export type HOCMotionProps = {
  className?: string
  motionKey?: string | number
  id?: string
} & MotionProps
