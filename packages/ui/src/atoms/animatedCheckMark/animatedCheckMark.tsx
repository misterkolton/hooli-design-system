import React, { FC } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { css } from '@emotion/react'
import { SizeType } from 'src/types/global'
import { Div } from 'src/atoms/div/div'
import { useEntities } from 'src/hooks/useEntities'
import { entities } from 'src/theme/theming/entities'

type SizeMapType = Record<SizeType, number>
type ColorType = keyof typeof entities.animatedCheckmark.colors
type StrokeWidth = keyof typeof entities.animatedCheckmark.strokeWidth

export type AnimatedCheckMarkProps = {
  size?: SizeType
  color?: ColorType
  filled?: boolean
  sizeMap?: SizeMapType
  strokeWidth?: StrokeWidth
}

export const AnimatedCheckMark: FC<AnimatedCheckMarkProps> = ({
  size = 'small',
  color = 'success',
  filled,
  sizeMap,
  strokeWidth = 'default',
}) => {
  const strokeDashoffset = useMotionValue(0)
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.15, 0.25], [0, 1])
  const { animatedCheckmark } = useEntities()

  const getSizeValues = (sizeMap: SizeMapType, size: SizeType) => {
    switch (size) {
      case 'xSmall':
        return sizeMap.xSmall
      case 'small':
        return sizeMap.small
      case 'medium':
        return sizeMap.medium
      case 'large':
        return sizeMap.large
      case 'xLarge':
        return sizeMap.xLarge
    }
  }

  const computeSize = (size: SizeType) => {
    return getSizeValues(sizeMap || animatedCheckmark.sizeMap, size)
  }

  const circleVariants = {
    unchecked: {
      strokeDashoffset: 82,
    },
    checked: {
      strokeDashoffset: 0,
      transition: {
        duration: 0.3,
        ease: [0.65, 0, 0.45, 1],
      },
    },
  }
  const tickVariants = {
    unchecked: {
      pathLength: 0,
    },
    checked: {
      pathLength: 1,
      transition: {
        delay: filled ? 0.8 : 0.2,
        duration: 0.4,
        ease: [0.65, 0, 0.45, 1],
      },
    },
  }
  const fillVariants = {
    unchecked: {
      scale: [1, 1.1, 1.1, 1],
      boxShadow: `inset 0px 0px 0px 0px ${animatedCheckmark.colors[color]}`,
    },
    checked: {
      scale: [1, 1.1, 1.1, 1],
      boxShadow: `inset 0px 0px 0px ${filled ? computeSize(size) : 0}px ${
        animatedCheckmark.colors[color]
      }`,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: 'easeInOut',
        scale: { delay: filled ? 0.9 : 0.42, duration: 0.4 },
      },
    },
  }

  return (
    <Div
      animate={'checked'}
      initial={'unchecked'}
      style={{
        width: `${computeSize(size)}px`,
        height: `${computeSize(size)}px`,
        borderRadius: animatedCheckmark.borderRadius,
      }}
      variants={fillVariants}
    >
      <motion.svg
        css={css`
          position: absolute;
        `}
        width={`${computeSize(size)}px`}
        height={`${computeSize(size)}px`}
        viewBox="0 0 26 26"
      >
        <motion.circle
          cx="13"
          cy="13"
          r="12"
          fill="transparent"
          stroke={`${animatedCheckmark.colors[color]}`}
          strokeDasharray={82}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={`${animatedCheckmark.strokeWidth[strokeWidth]}`}
          variants={circleVariants}
          strokeMiterlimit={10}
        />
        <motion.path
          d="M 0 0 L 4 4 L 12 -6 "
          transform="translate(7, 14)"
          fill="none"
          stroke={`${
            filled
              ? animatedCheckmark.checkmarkFilledColor
              : animatedCheckmark.colors[color]
          }`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={`${animatedCheckmark.strokeWidth[strokeWidth]}`}
          variants={tickVariants}
          style={{ pathLength, opacity }}
        />
      </motion.svg>
    </Div>
  )
}
