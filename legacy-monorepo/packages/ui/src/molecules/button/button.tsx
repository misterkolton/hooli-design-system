import React, { useState } from 'react'
import { TextColor, WeightType } from 'src/atoms/typography/text'
import { motion } from 'framer-motion'
import { useEntities } from 'src/hooks/useEntities'
import { SizeType, OnMouseEvent, ThemeMode } from 'src/types/global'
import { entities } from 'src/theme/theming/entities'
import { Span, Div, Flex, IconType, Icon, IconColors } from 'src/exports/atoms'
import styles from './styles'
import { Tooltip, DirectionType } from '../tooltip/tooltip'
import { LiteralUnion } from 'src/helpers/hoc-types/entityValueTypes'

export type ButtonType = ThemeMode | 'smoke'

export type ButtonProps = {
  title?: string
  type?: ButtonType
  size?: SizeType
  onClick?: (() => void) | 'submitForm'
  onMouseEvent?: OnMouseEvent
  disabled?: boolean
  hover?: boolean
  outlined?: boolean
  fullWidth?: boolean
  textColorOverride?: LiteralUnion<TextColor> | string
  backgroundColorOverride?: string
  disabledCaption?: string
  disabledDirection?: DirectionType
  id?: string
  icon?: {
    name: IconType
    fill?: LiteralUnion<IconColors>
  }
  fontWeight?: WeightType
  children?: React.ReactNode
  boxShadow?: boolean
}

export type ButtonStyle = typeof entities.buttons.primary

type ButtonMapType<T> = {
  primary: T
  secondary: T
  success: T
  warning: T
  danger: T
  shadow: T
  accent: T
  smoke: T
}
const getButtonStyle = <T extends any>(
  type: ButtonType,
  buttonMap: ButtonMapType<T>,
) => {
  switch (type) {
    case 'primary':
      return buttonMap.primary
    case 'secondary':
      return buttonMap.secondary
    case 'success':
      return buttonMap.success
    case 'warning':
      return buttonMap.warning
    case 'danger':
      return buttonMap.danger
    case 'shadow':
      return buttonMap.shadow
    case 'accent':
      return buttonMap.accent
    case 'smoke':
      return buttonMap.smoke
  }
}

export const Button = ({
  title,
  type = 'primary',
  size = 'medium',
  onClick,
  children,
  disabled,
  hover,
  outlined,
  onMouseEvent,
  fullWidth,
  textColorOverride,
  backgroundColorOverride,
  disabledCaption,
  id,
  icon,
  fontWeight,
  boxShadow = false,
}: ButtonProps) => {
  const entities = useEntities()
  const { buttons, text } = entities
  const getColor = () => {
    if (textColorOverride) {
      return textColorOverride
    }
    if (outlined && backgroundColorOverride) {
      return backgroundColorOverride
    } else {
      return type === 'shadow'
        ? 'primaryBody'
        : type === 'smoke'
        ? buttons.smoke.fontColor
        : outlined
        ? getButtonStyle<TextColor>(type, {
            primary: 'primaryBrand',
            secondary: 'secondaryBrand',
            danger: 'danger',
            success: 'success',
            warning: 'warning',
            shadow: 'inverseBody',
            accent: 'accent',
            smoke: 'primaryBody',
          })
        : 'inverseBody'
    }
  }

  const [isHovering, setIsHovering] = useState(false)
  const buttonStyle = buttons[type]

  return (
    <Div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      position="relative"
      width={fullWidth ? '100%' : undefined}
    >
      {disabled && disabledCaption && isHovering && (
        <Flex
          justifyContent="space-around"
          width="100%"
          transition={{ ease: 'easeIn', duration: 0.3 }}
          position="absolute"
          top="-8px"
        >
          <Tooltip
            repositionTooltip={!!disabledCaption}
            title={disabledCaption ?? ''}
            direction={'bottom'}
            background={'dark'}
          />
        </Flex>
      )}
      <motion.button
        id={id}
        type={typeof onClick === 'string' ? 'submit' : 'button'}
        onClick={
          onMouseEvent
            ? e => onMouseEvent(e)
            : () => typeof onClick !== 'string' && onClick?.()
        }
        css={styles.buttonStyles(
          type,
          buttonStyle,
          entities,
          size,
          hover,
          outlined,
          fullWidth,
          backgroundColorOverride,
          boxShadow,
        )}
        disabled={disabled}
      >
        <Span
          width="100%"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          css={styles.buttonTitle(type, buttons, size, text, fontWeight)}
          color={getColor()}
        >
          {icon && (
            <Flex
              alignItems="center"
              justifyContent="center"
              outset={{ right: 'x2' }}
            >
              <Icon
                primaryColor={icon.fill ?? getColor()}
                size={size === 'large' || size === 'xLarge' ? 'medium' : size}
                name={icon.name}
              />
            </Flex>
          )}
          {title || children}
        </Span>
      </motion.button>
    </Div>
  )
}
