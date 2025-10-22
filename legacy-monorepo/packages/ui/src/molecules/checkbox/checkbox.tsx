import React, { FC } from 'react'
import styles from './styles'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Text } from 'src/atoms/typography/text'
import { useEntities } from 'src/hooks/useEntities'

export type CheckboxProps = {
  onChange: (isChecked: boolean) => void
  isChecked: boolean
  type?: CheckboxType
  label?: string
  id?: string
  inputDisplay?: string
}
export type CheckboxType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'dark'

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange,
  type = 'primary',
  label,
  id = 'cb',
  inputDisplay,
}) => {
  const tickVariants = {
    unchecked: {
      pathLength: 0,
    },
    checked: {
      pathLength: 1,
      transition: {
        delay: 0.15,
        duration: 0.3,
        ease: [0.65, 0, 0.45, 1],
      },
    },
  }
  const pathLength = useMotionValue(1)
  const opacity = useTransform(pathLength, [0.15, 0.25], [0, 1])
  const { inputs } = useEntities()
  return (
    <div css={styles.checkboxContainer(inputs, type)}>
      <input
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
        type="checkbox"
        id={id}
        style={inputDisplay ? { display: inputDisplay } : undefined}
      />
      <label htmlFor={id}>
        <div css={styles.box(inputs)}>
          <span css={styles.boxInner}>
            <motion.svg
              width={'24px'}
              height={'24px'}
              viewBox="0 0 26 26"
              animate={isChecked ? 'checked' : 'unchecked'}
              initial={isChecked ? 'checked' : 'unchecked'}
            >
              <motion.path
                d="M 0 0 L 4 4 L 12 -6 "
                transform="translate(7, 14)"
                fill="none"
                stroke={inputs.checkbox.checkmarkColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                variants={tickVariants}
                style={{ pathLength, opacity }}
              />
            </motion.svg>
          </span>
        </div>
        <span>{label && <Text type="caption" content={label} />}</span>
      </label>
    </div>
  )
}
