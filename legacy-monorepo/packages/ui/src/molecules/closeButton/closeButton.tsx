import React, { FC } from 'react'
import styles from './styles'
import { Icon, Span, IconColors } from 'src/exports/atoms'
import { SizeType } from 'src/types/global'
import {
  ColorSelection,
  LiteralUnion,
  Responsive,
  HOCColorKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

export type CloseButtonProps = {
  onClose: () => void
  backgroundColor?:
    | ColorSelection
    | LiteralUnion<HOCColorKeys>
    | Responsive<HOCColorKeys>
  fill?: IconColors
  top?: string
  right?: string
  size?: SizeType
  id?: string
}

export const CloseButton: FC<CloseButtonProps> = ({
  onClose,
  backgroundColor,
  fill,
  top,
  right,
  size,
  id,
}) => {
  return (
    <Span
      id={id ? `${id.toLowerCase()}-close-button` : undefined}
      onClick={onClose}
      css={styles.closeButtonContainer(top, right)}
      display="flex"
      justifyContent="center"
      alignItems="center"
      inset={{ xSmall: 'x2', small: 'x3' }}
      boxShadow={'mediumLight'}
      backgroundColor={backgroundColor ?? '#424242e0'}
      position="absolute"
      cursor="pointer"
    >
      <Icon
        name={'close'}
        primaryColor={fill ?? 'inverseHeadingText'}
        size={size ?? 16}
      ></Icon>
    </Span>
  )
}
