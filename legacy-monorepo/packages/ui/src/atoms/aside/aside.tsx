import React from 'react'
import styles from './styles'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { motion } from 'framer-motion'

export type AsideProps = {
  children?: React.ReactNode
  outsideClick?: () => void
  clickElementBypass?: string
} & HOCBaseProps &
  HOCMotionProps

export const Aside = React.forwardRef(
  (props: AsideProps, ref: React.RefObject<HTMLElement>) => {
    const entities = useEntities()
    const generatedDivStyles = generateStyles(props, entities)

    useOutsideClick(ref, () => {
      props.outsideClick && props.outsideClick()
    })

    return (
      <motion.aside
        {...props}
        ref={ref}
        animate={process.env.NODE_ENV === 'test' ? undefined : props.animate}
        onClick={
          props.onMouseEvent
            ? e => props.onMouseEvent?.(e)
            : () => props.onClick?.()
        }
        css={styles.asideStyles(generatedDivStyles)}
        className={`${props.className ? props.className : ''}`}
      >
        {props.children}
      </motion.aside>
    )
  },
)
