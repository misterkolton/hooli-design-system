import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const CreditCard: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    viewBox=" 0 0 24 24"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    onClick={onClick && (() => onClick())}
  >
    <rect
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill="none"
      rx="0"
      ry="0"
    />

    <path
      d="M 0.25 6 C 0.25 4.481 1.481 3.25 3 3.25 L 21 3.25 C 22.519 3.25 23.75 4.481 23.75 6 L 23.75 18 C 23.75 19.519 22.519 20.75 21 20.75 L 3 20.75 C 1.481 20.75 0.25 19.519 0.25 18 Z M 3 4.75 C 2.31 4.75 1.75 5.31 1.75 6 L 1.75 7.25 L 22.25 7.25 L 22.25 6 C 22.25 5.31 21.69 4.75 21 4.75 Z M 22.25 8.75 L 1.75 8.75 L 1.75 18 C 1.75 18.69 2.31 19.25 3 19.25 L 21 19.25 C 21.69 19.25 22.25 18.69 22.25 18 Z M 4.25 16 C 4.25 15.586 4.586 15.25 5 15.25 L 11 15.25 C 11.414 15.25 11.75 15.586 11.75 16 C 11.75 16.414 11.414 16.75 11 16.75 L 5 16.75 C 4.586 16.75 4.25 16.414 4.25 16 Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
