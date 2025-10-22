import React, { FC } from 'react'
import { motion, Variants } from 'framer-motion'
import { css } from '@emotion/react'
import { useEntities } from 'src/hooks/useEntities'
import { Div } from '../div/div'
import { SizeType } from 'src/types/global'

export type LoadingSpinnerProps = {
  size: SizeType
  hasNoColor?: boolean
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size,
  hasNoColor = false,
}) => {
  const { loadingSpinner, hocs } = useEntities()
  const circleVariants: Variants = {
    isLoading: {
      strokeDashoffset: [187, 187 / 4, 187],
      rotate: [0, 135, 450],
      stroke: hasNoColor
        ? [
            hocs.textColors.inverseHeading,
            hocs.textColors.inverseHeading,
            hocs.textColors.inverseHeading,
            hocs.textColors.inverseHeading,
            hocs.textColors.inverseHeading,
          ]
        : [
            loadingSpinner.colors.primary,
            loadingSpinner.colors.secondary,
            loadingSpinner.colors.success,
            loadingSpinner.colors.warning,
            loadingSpinner.colors.danger,
          ],
      transition: {
        duration: 1.4,
        repeat: Infinity,
      },
    },
  }
  const rotateVariants: Variants = {
    isLoading: {
      rotate: [0, 270],
      transition: {
        duration: 1.4,
        repeat: Infinity,
      },
    },
  }

  return (
    <Div
      animate={'isLoading'}
      variants={rotateVariants}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <motion.svg
        width={`${loadingSpinner.size[size]}px`}
        height={`${loadingSpinner.size[size]}px`}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          strokeDasharray={187}
          variants={circleVariants}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
          // Workaround for framer-motion calculating wrong transform-origin on first mount,
          // in certain conditions.
          style={{ originX: '33px', originY: '33px' }}
        />
      </motion.svg>
    </Div>
  )
}
