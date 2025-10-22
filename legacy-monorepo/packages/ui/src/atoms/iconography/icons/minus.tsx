import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Minus: FC<SVGProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 13 21 13Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
