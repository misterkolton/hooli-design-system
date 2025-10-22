import React from 'react'
import styles from './styles'
import { generateStyles } from 'src/helpers/hoc-functions/generateStyles'
import { HOCBaseProps } from 'src/helpers/hoc-types/hocBasePropTypes'
import { HOCMotionProps } from 'src/helpers/hoc-types/hocMotionTypes'
import { useEntities } from 'src/hooks/useEntities'
import { Text, TextColor } from 'src/atoms/typography/text'
import { SizeType } from 'src/types/global'
import { computeTextTypeFromSize } from 'src/helpers/style-functions/computeTextTypeFromSize'
import { motion } from 'framer-motion'

export type AnchorProps = {
  href?: string
  children?: React.ReactNode
  title?: string
  size?: SizeType
  color?: TextColor
  isDecorated?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  shouldDownload?: boolean
} & HOCBaseProps &
  HOCMotionProps

export const Anchor = (props: AnchorProps) => {
  const entities = useEntities()
  const {
    color = 'primaryBody',
    size = 'small',
    isDecorated,
    display = 'inline-block',
    shouldDownload,
    ...rest
  } = props
  const generatedDivStyles = generateStyles({ display, ...rest }, entities)

  return (
    <motion.a
      rel="noopener noreferrer"
      target={rest.target}
      {...rest}
      href={rest.href}
      onClick={
        rest.onMouseEvent ? e => rest.onMouseEvent?.(e) : () => rest.onClick?.()
      }
      download={shouldDownload}
      css={styles.anchorStyles(
        generatedDivStyles,
        entities,
        color,
        isDecorated,
      )}
    >
      <Text type={computeTextTypeFromSize(size)} color={color}>
        {rest.title || rest.children}
      </Text>
    </motion.a>
  )
}
