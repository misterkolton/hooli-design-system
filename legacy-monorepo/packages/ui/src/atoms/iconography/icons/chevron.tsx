import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import { motion } from 'framer-motion'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Chevron: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
  orientation,
}) => (
  <motion.svg
    onClick={onClick && (() => onClick())}
    xmlns="http://www.w3.org/2000/svg"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox=" 0 0 24 24"
    style={{
      transform:
        orientation === 'up'
          ? 'rotate(90deg)'
          : orientation === 'down'
          ? 'rotate(270deg)'
          : orientation === 'right'
          ? 'rotate(180deg)'
          : 'rotate(0deg)',
    }}
  >
    <rect
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill="none"
      rx="0"
      ry="0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.005 18.6012C15.155 18.6012 15.315 18.5412 15.425 18.4212C15.655 18.1912 15.655 17.8112 15.425 17.5712L9.85503 12.0012L15.425 6.42118C15.655 6.19118 15.655 5.81118 15.425 5.57118C15.195 5.34118 14.815 5.34118 14.575 5.57118L8.57503 11.5712C8.34503 11.8012 8.34503 12.1812 8.57503 12.4212L14.575 18.4212C14.695 18.5412 14.855 18.6012 15.005 18.6012Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </motion.svg>
)
