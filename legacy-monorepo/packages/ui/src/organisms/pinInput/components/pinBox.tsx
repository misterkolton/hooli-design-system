import React from 'react'
import styles from '../styles'
import { useEntities } from 'src/hooks/useEntities'

type PinBoxProps = {
  value: string
  onChange: (value: string) => void
  onBackspace: () => void
  onFocus?: () => void
  isSecret?: boolean
  isFocused?: boolean
  // This is used so that we allow pasting values bigger than the box.
  totalLength?: number
  autoComplete?: string
}

export const PinBox: React.FC<PinBoxProps> = props => {
  const {
    value,
    onChange,
    onBackspace,
    isSecret,
    isFocused,
    totalLength = 1,
    autoComplete,
  } = props

  const ref = React.useRef<HTMLInputElement>(null)
  const { inputs } = useEntities()
  const onKeyDown = (e: any) => {
    if (e.keyCode === 8 && (!value || !value.length)) {
      onBackspace()
    }
  }
  const handleOnChange = (e: any) => {
    const inputValue = validate(e.target.value)
    if (value === inputValue) return
    onChange(inputValue)
  }
  const onFocus = (e: any) => {
    e.target.select()
    props.onFocus?.()
  }

  React.useLayoutEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus()
    }
  }, [isFocused])

  return (
    <input
      ref={ref}
      name="one-time-code"
      type={isSecret ? 'password' : 'text'}
      inputMode="numeric"
      autoComplete={autoComplete}
      maxLength={totalLength}
      css={styles.pinBox(inputs)}
      onChange={handleOnChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      autoFocus={isFocused}
      value={value}
      pattern={'[0-9]*'}
    ></input>
  )
}

const validate = (value: string) => {
  const validateChar = (value: string) => {
    const numCode = value.charCodeAt(0)
    const isInteger =
      numCode >= '0'.charCodeAt(0) && numCode <= '9'.charCodeAt(0)
    return isInteger ? [value] : []
  }
  return [...value].flatMap(c => validateChar(c)).join('')
}
