import React, { useRef } from 'react'
import styles from './styles'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { motion } from 'framer-motion'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'

export type FlexProps = {
  children?: React.ReactNode
  outsideClick?: () => void
} & HOCBaseProps &
  HOCMotionProps

export const Flex = (props: FlexProps) => {
  const entities = useEntities()
  const {
    display = 'flex',
    onClick,
    onMouseEvent,
    outsideClick,
    className,
    children,
    ...rest
  } = props
  const generatedDivStyles = generateStyles({ ...props, display }, entities)
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(ref, () => {
    outsideClick?.()
  })

  return (
    <motion.main
      {...rest}
      ref={ref}
      onClick={onMouseEvent ? e => onMouseEvent?.(e) : () => onClick?.()}
      css={styles.flexStyles(generatedDivStyles)}
      className={`${className ? className : ''}`}
    >
      {children}
    </motion.main>
  )
}
