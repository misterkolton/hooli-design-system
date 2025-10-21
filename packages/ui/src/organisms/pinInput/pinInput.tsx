import React, { FC, useState } from 'react'
import { PinBox } from './components/pinBox'
import styles from './styles'
import { Flex } from 'src/exports/atoms'
import { Text } from 'src/atoms/typography/text'
import { useEntities } from 'src/hooks/useEntities'

export type PinInputProps = {
  length: 4 | 5 | 6
  onChange: (value: string) => void
  onComplete?: (value: string) => void
  hasFocus?: boolean
  isSecret?: boolean
  message?: {
    type: 'success' | 'danger' | 'warning'
    content: string
  }
}

export const PinInput: FC<PinInputProps> = ({
  length,
  onChange,
  hasFocus,
  onComplete,
  isSecret,
  message,
}) => {
  const [focusedIndex, setFocusedIndex] = React.useState(
    hasFocus ? 0 : undefined,
  )

  const [values, setValues] = useState(Array<string>(length).fill(''))
  const { inputs } = useEntities()

  const handleOnChange = (newValue: string, index: number) => {
    const value = newValue.substring(0, length - index)
    if (value.length > 0) {
      setFocusedIndex(Math.min(index + value.length, length - 1))
    }
    // This value will be spread.
    // If empty, we'll add the empty string, if not, we'll add each character as a separate value.
    const addedValues = value.length > 0 ? value : ['']
    const updatedValues = [
      ...values.slice(0, index),
      ...addedValues,
      ...values.slice(index + 1, values.length - (addedValues.length - 1)),
    ]
    const pin = updatedValues.join('')
    onChange(pin)
    if (pin.length === length && onComplete) {
      onComplete(pin)
    }
    setValues(updatedValues)
  }

  const onBackspace = (index: number) => {
    if (index > 0) {
      setFocusedIndex(index - 1)
    }
  }

  return (
    <div css={styles.pinForm(inputs)}>
      <div css={styles.pinBoxContainer}>
        {values.map((value, index) => {
          return (
            <PinBox
              value={value}
              onChange={value => handleOnChange(value, index)}
              onBackspace={() => onBackspace(index)}
              onFocus={() => setFocusedIndex(index)}
              key={index}
              isSecret={isSecret}
              isFocused={focusedIndex === index}
              totalLength={length}
              autoComplete={index === 0 ? 'one-time-code' : undefined}
            />
          )
        })}
      </div>
      {message && (
        <Flex width="100%">
          <Text
            inset={{ left: 'x1', top: 'x_5' }}
            content={message.content}
            type="caption"
            color={message.type}
          ></Text>
        </Flex>
      )}
    </div>
  )
}
