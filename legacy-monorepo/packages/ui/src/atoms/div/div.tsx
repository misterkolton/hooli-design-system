import React from 'react'
import styles from './styles'
import { useEntities } from 'src/hooks/useEntities'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { motion } from 'framer-motion'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'

export type DivProps = {
  children?: React.ReactNode
  outsideClick?: () => void
  clickElementBypass?: string
  tabIndex?: number
} & HOCBaseProps &
  HOCMotionProps

export const Div = React.forwardRef(
  (
    props: DivProps,
    ref:
      | React.RefObject<HTMLDivElement>
      | React.MutableRefObject<HTMLDivElement>,
  ) => {
    const { ...rest } = props
    const entities = useEntities()
    const generatedDivStyles = generateStyles(props, entities)

    useOutsideClick(
      ref,
      () => {
        props.outsideClick && props.outsideClick()
      },
      props.clickElementBypass,
    )

    return (
      <motion.div
        {...props}
        key={props.motionKey}
        ref={ref}
        animate={process.env.NODE_ENV === 'test' ? undefined : props.animate}
        onClick={
          props.onMouseEvent
            ? e => props.onMouseEvent?.(e)
            : () => props.onClick?.()
        }
        css={styles.divStyles(generatedDivStyles)}
        className={`${props.className ? props.className : ''}`}
        {...rest}
      >
        {props.children}
      </motion.div>
    )
  },
)
