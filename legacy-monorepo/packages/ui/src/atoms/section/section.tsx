import React from 'react'
import styles from './styles'
import { useEntities } from 'src/hooks/useEntities'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { motion } from 'framer-motion'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'

export type SectionProps = {
  children?: React.ReactNode
  outsideClick?: () => void
  clickElementBypass?: string
} & HOCBaseProps &
  HOCMotionProps

export const Section = React.forwardRef(
  (props: SectionProps, ref: React.RefObject<HTMLElement>) => {
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
      <motion.section
        {...props}
        ref={ref}
        animate={process.env.NODE_ENV === 'test' ? undefined : props.animate}
        onClick={() => props.onClick?.()}
        css={styles.sectionStyles(generatedDivStyles)}
        className={`${props.className ? props.className : ''}`}
      >
        {props.children}
      </motion.section>
    )
  },
)
