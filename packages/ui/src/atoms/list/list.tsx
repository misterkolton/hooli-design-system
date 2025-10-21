import React from 'react'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { useEntities } from 'src/hooks/useEntities'
import { motion } from 'framer-motion'
import styles from './styles'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'

export type ListProps = {
  orientation: ListOrientation
  alignment: AlignmentOptions
  children?: React.ReactNode
  listStyle?: ListStyleType
} & HOCBaseProps &
  HOCMotionProps

export type ListOrientation = 'vertical' | 'horizontal'
export type AlignmentOptions = 'left' | 'center' | 'right'
export type ListStyleType = 'disc' | 'none' | 'circle'

export const List = React.forwardRef(
  (props: ListProps, ref: React.RefObject<HTMLUListElement>) => {
    const { listStyle = 'none', ...rest } = props
    const entities = useEntities()
    const generatedStyles = generateStyles(rest, entities)
    return (
      <motion.ul
        {...rest}
        css={styles.listContainer(
          rest.orientation,
          rest.alignment,
          listStyle,
          generatedStyles,
        )}
        className={`
      ${rest.className ? rest.className : ''}`}
        ref={ref}
      >
        {rest.children}
      </motion.ul>
    )
  },
)
