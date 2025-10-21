import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './styles'
import { IconColors, IconType } from 'src/atoms/iconography/types'
import { Span } from 'src/atoms/span/span'
import { Text } from 'src/atoms/typography/text'
import { Flex } from 'src/atoms/flex/flex'
import { LoadingSpinner } from 'src/atoms/loadingSpinner/loadingSpinner'
import { useEntities } from 'src/hooks/useEntities'
import { Div } from 'src/atoms/div/div'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { HStack, Icon } from 'src/exports/atoms'
import { useLongPress } from 'src/hooks/useLongPress'
import { Tooltip } from '../tooltip/tooltip'

export type InputFocusType = IconColors

export type InputProps = {
  label?: string
  placeholder?: string
  labelPlaceholder?: string
  name?: string
  type: 'text' | 'email' | 'password' | 'search' | 'date' | 'number' | 'time'
  focusColor?: InputFocusType
  icon?: IconType
  id?: string
  message?: {
    type: 'success' | 'danger' | 'warning'
    content: string
    icon?: IconType
    onClick?: () => void
  }
  isLoading?: boolean
  onChange: (value: string) => void
  value: string
  defaultValue?: number
  min?: number
  max?: number
  isDisabled?: boolean
  isFullWidth?: boolean
  isTypingDisabled?: boolean
  width?: number
  height?: number
  isPhoneInput?: boolean
  hasSecurePassword?: boolean
  maxLength?: number
  isMaxLengthHit?: boolean
  autoComplete?: string
  onMaxLengthCap?: (isCapped: boolean) => void
  onBlur?: (e?: React.FocusEvent) => void
}
export const Input: FC<InputProps> = ({
  label,
  placeholder,
  labelPlaceholder,
  name,
  type,
  focusColor = 'primaryBrand',
  icon,
  message,
  isLoading,
  onChange,
  value = '300',
  defaultValue,
  min = 0,
  max = 100,
  isDisabled,
  isFullWidth = false,
  isTypingDisabled = false,
  width = 200,
  height = 50,
  isPhoneInput = false,
  hasSecurePassword = false,
  maxLength,
  isMaxLengthHit,
  autoComplete,
  onMaxLengthCap,
  id,
  onBlur,
}) => {
  const [longPressTime, setLongPressTime] = useState(0)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isOutsideRange, setIsOutsideRange] = useState(false)
  const [isIncrementHold, setIsIncrementHold] = useState(false)
  const [isDecrementHold, setIsDecrementHold] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const { inputs, hocs } = useEntities()
  const isActive = value ? true : false
  const hasIcon = icon ? true : false
  const isLabelPlaceholder = labelPlaceholder ? true : false
  const color = message?.type ? message?.type : focusColor
  const inputWrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isMinInputWidth = width >= 150

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleOnChange = useCallback(
    (value: string, direction: number, step: number) => {
      const checkMax = (value: number) => {
        return value > max
      }

      const checkMin = (value: number) => {
        return value < min
      }

      const handleDirection = (
        value: number,
        direction: number,
        step: number,
      ) => {
        if (direction > 0) {
          return (value += step)
        }
        if (direction < 0) {
          return (value -= step)
        }
        return value
      }

      const checkMaxLength = (value: string) => {
        const valueLength = value.length

        if (maxLength) {
          if (valueLength < maxLength) {
            onMaxLengthCap?.(false)
          }
          if (valueLength === maxLength) {
            onMaxLengthCap?.(true)
          }
          if (valueLength > maxLength) {
            return
          }
        }
        return onChange(value)
      }

      if (type === 'number') {
        const newValue = handleDirection(parseInt(value), direction, step)
        setIsOutsideRange(false)

        if (checkMin(newValue)) {
          setIsOutsideRange(true)

          return onChange(min.toString())
        }
        if (checkMax(newValue)) {
          setIsOutsideRange(true)
          return onChange(max.toString())
        }
        return onChange(newValue.toString())
      } else {
        if (maxLength) {
          return checkMaxLength(value)
        }
        return onChange(value)
      }
    },
    [max, maxLength, min, onChange, type, onMaxLengthCap],
  )

  const handleArrowKeys = (event: KeyboardEvent) => {
    if (isFocused && !isDisabled && isTypingDisabled) {
      if (event.key === 'ArrowUp') {
        handleOnChange(value, 1, 1)
      }
      if (event.key === 'ArrowDown') {
        handleOnChange(value, -1, 1)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleArrowKeys)
    return () => {
      document.removeEventListener('keydown', handleArrowKeys)
    }
  })

  useEffect(() => {
    if (type === 'number' && (value === '' || value === 'NaN')) {
      onChange(min.toString() ?? '0')
    }
    if (isFocused) {
      inputRef?.current?.focus()
    }
  }, [value, onChange, min, type, isFocused])

  useOutsideClick(inputWrapperRef, () => {
    setIsFocused(false)
  })

  const onIncrementHold = () => {
    setIsIncrementHold(true)
    setIsFocused(true)
  }

  const onIncrementClick = () => {
    handleOnChange(value, 1, 1)
    setIsFocused(true)
  }

  const onDecrementHold = () => {
    setIsDecrementHold(true)
    setIsFocused(true)
  }

  const onDecrementClick = () => {
    handleOnChange(value, -1, 1)
    setIsFocused(true)
  }

  const onIncrementEnd = () => {
    setIsIncrementHold(false)
  }

  const onDecrementEnd = () => {
    setIsDecrementHold(false)
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  }
  const incrementEvent = useLongPress(
    onIncrementHold,
    onIncrementEnd,
    onIncrementClick,
    defaultOptions,
  )

  const decrementEvent = useLongPress(
    onDecrementHold,
    onDecrementEnd,
    onDecrementClick,
    defaultOptions,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if ((isIncrementHold || isDecrementHold) && !isDisabled) {
        if (isDecrementHold) {
          setLongPressTime(longPressTime + 1)
          if (longPressTime > 10) {
            handleOnChange(value, -1, 10)
          } else {
            handleOnChange(value, -1, 1)
          }
        }
        if (isIncrementHold) {
          setLongPressTime(longPressTime + 1)
          if (longPressTime > 10) {
            handleOnChange(value, 1, 10)
          } else {
            handleOnChange(value, 1, 1)
          }
        }
      } else {
        clearInterval(interval)
        setLongPressTime(0)
      }
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [
    isIncrementHold,
    isDecrementHold,
    value,
    longPressTime,
    isDisabled,
    handleOnChange,
  ])

  return (
    <Flex flexDirection="column" position="relative">
      <div
        css={styles.inputContainer(
          isActive,
          inputs,
          isLabelPlaceholder,
          height,
          width,
          isPhoneInput,
          hasIcon,
          isFullWidth,
          isDisabled,
        )}
        ref={inputWrapperRef}
        onFocus={() => {
          setIsFocused(true)
        }}
        style={{
          backgroundColor: message
            ? `${hocs.colors.swatches[message.type]._1000}`
            : '',
        }}
      >
        {icon && (
          <Span
            css={styles.iconContainer}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon
              name={icon}
              primaryColor={isFocused ? color : 'primaryBodyText'}
              size="small"
            ></Icon>
          </Span>
        )}
        <Flex
          width={isFullWidth ? '100%' : `${width}px`}
          height="100%"
          css={styles.inputWrapper}
        >
          <input
            type={
              type === 'password'
                ? isPasswordVisible
                  ? 'text'
                  : 'password'
                : type
            }
            name={name}
            value={value}
            defaultValue={defaultValue}
            min={min}
            max={max}
            ref={inputRef}
            width={'100%'}
            id={id}
            style={{
              cursor: isTypingDisabled ? 'default' : 'auto',
              textShadow: isTypingDisabled
                ? `0 0 0 ${inputs.fontColor}`
                : 'none',
              color: isTypingDisabled ? 'transparent' : 'default',
            }}
            disabled={isDisabled}
            placeholder={placeholder || labelPlaceholder}
            onChange={e => {
              if (!isTypingDisabled) {
                handleOnChange(e.target.value, 0, 1)
              }
            }}
            onBlur={handleOnBlur}
            autoComplete={autoComplete}
          />
          {type === 'number' && (
            <Div css={styles.numberInputButtons(isDisabled)} zIndex={1}>
              <Div
                id={id ? `${id.toLowerCase()}-up` : undefined}
                {...incrementEvent}
                display="flex"
                alignItems="center"
                cursor={isDisabled ? 'not-allowed' : 'pointer'}
              >
                <Icon
                  name="chevron"
                  orientation="up"
                  primaryColor={'primaryBodyText'}
                  size={'xSmall'}
                />
              </Div>
              <Div
                id={id ? `${id.toLowerCase()}-down` : undefined}
                {...decrementEvent}
                display="flex"
                alignItems="center"
                cursor={isDisabled ? 'not-allowed' : 'pointer'}
              >
                <Icon
                  name="chevron"
                  primaryColor={'primaryBodyText'}
                  size={'xSmall'}
                  orientation="down"
                />
              </Div>
            </Div>
          )}
          <label htmlFor={name}>{label || labelPlaceholder}</label>
        </Flex>
        {isLoading && <LoadingSpinner size="medium" />}
        {maxLength && !(type === 'number') && !isMaxLengthHit && (
          <Flex
            inset={{ right: 'x1' }}
            justifyContent="flex-end"
            width={isFullWidth ? '100%' : `${width}px`}
            position="absolute"
            bottom={'-24px'}
            style={{ whiteSpace: 'nowrap' }}
          >
            <Text
              inset={{ top: 'x_5' }}
              type="footnote"
              color={value.length >= maxLength ? 'danger' : 'primaryBody'}
            >
              {value.length}/{maxLength}
            </Text>
          </Flex>
        )}
        {!hasSecurePassword && type === 'password' && (
          <Div
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            position="relative"
            cursor="pointer"
            display="flex"
            alignItems="center"
            inset={{ right: 'x1' }}
          >
            {isPasswordVisible ? (
              <Icon name="visible" size="small" primaryColor="default" />
            ) : (
              <Icon name="invisible" size="small" primaryColor="default" />
            )}
          </Div>
        )}
        {isFocused && (
          <Div
            id="outerglow"
            css={styles.outerglow(inputs, width, height, isFullWidth)}
            style={{
              border: `${inputs.text.borderWidth} solid ${hocs.colors.swatches[focusColor].base}`,
              transition: 'border 0.3s',
            }}
          ></Div>
        )}
        {message && (
          <Div
            id="outerglow"
            css={styles.outerglow(inputs, width, height, isFullWidth)}
            style={{
              border: `${inputs.text.borderWidth} solid ${
                hocs.colors.swatches[message.type].base
              }`,
              transition: 'border 0.3s',
            }}
          ></Div>
        )}
      </div>
      {message && (
        <HStack gap="x_5" justify="flex-start">
          <Text
            inset={{ left: 'x1', top: 'x_5' }}
            content={message.content}
            type="footnote"
            color={message.type}
          ></Text>
          {message.icon && (
            <Span
              inset={{ top: 'x_25' }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={message.onClick}
              cursor="pointer"
            >
              <Icon
                name={message.icon}
                primaryColor={message.type}
                size="xSmall"
              ></Icon>
            </Span>
          )}
        </HStack>
      )}
      {isOutsideRange && isMinInputWidth ? (
        <Flex
          width="100%"
          position="absolute"
          bottom={'-38px'}
          style={{ whiteSpace: 'nowrap' }}
        >
          <Text
            inset={{ left: 'x_5', top: 'x1' }}
            type="footnote"
            color="warning"
            lineHeight={1.2}
          >
            Value must be between {min} and {max}
          </Text>
        </Flex>
      ) : (
        isOutsideRange &&
        !isMinInputWidth && (
          <Flex
            inset={{ top: 'x1' }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            cursor="pointer"
          >
            <Icon name="information" size="xSmall" primaryColor="danger" />
          </Flex>
        )
      )}
      {isHovering && (
        <Flex position="absolute" top="-50px" right="-55px">
          <Tooltip
            title={`Value must be between ${min} and ${max}`}
            direction="bottom"
            background="dark"
          />
        </Flex>
      )}
    </Flex>
  )
}

export default Input
