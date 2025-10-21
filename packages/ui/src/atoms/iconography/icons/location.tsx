import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Location: FC<SVGProps> = ({
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
      d="M 12 14.17 C 9.87 14.17 8.13 12.44 8.13 10.3 C 8.13 8.16 9.87 6.44 12 6.44 C 14.13 6.44 15.87 8.17 15.87 10.31 C 15.87 12.45 14.13 14.17 12 14.17 Z M 12 7.94 C 10.7 7.94 9.63 9 9.63 10.31 C 9.63 11.62 10.69 12.68 12 12.68 C 13.31 12.68 14.37 11.62 14.37 10.31 C 14.37 9 13.3 7.94 12 7.94 Z"
      fill={getIconColor(primaryColor, entity)}
    />
    <path
      d="M 12 22.76 C 10.459 22.757 8.98 22.159 7.87 21.09 C 4.92 18.25 1.66 13.72 2.89 8.33 C 4 3.44 8.27 1.25 12 1.25 L 12.01 1.25 C 15.74 1.25 20.01 3.44 21.12 8.34 C 22.34 13.73 19.08 18.25 16.13 21.09 C 15.02 22.159 13.541 22.757 12 22.76 Z M 12 2.75 C 9.09 2.75 5.35 4.3 4.36 8.66 C 3.28 13.37 6.24 17.43 8.92 20 C 10.638 21.67 13.372 21.67 15.09 20 C 17.76 17.43 20.72 13.37 19.66 8.66 C 18.66 4.3 14.91 2.75 12 2.75 Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
