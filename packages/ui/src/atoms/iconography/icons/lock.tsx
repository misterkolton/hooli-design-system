import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Lock: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
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
      d="M 18 10.75 C 17.59 10.75 17.25 10.41 17.25 10 L 17.25 8 C 17.25 4.85 16.36 2.75 12 2.75 C 7.64 2.75 6.75 4.85 6.75 8 L 6.75 10 C 6.75 10.41 6.41 10.75 6 10.75 C 5.59 10.75 5.25 10.41 5.25 10 L 5.25 8 C 5.25 5.1 5.95 1.25 12 1.25 C 18.05 1.25 18.75 5.1 18.75 8 L 18.75 10 C 18.75 10.41 18.41 10.75 18 10.75 Z M 12 19.25 C 10.21 19.25 8.75 17.79 8.75 16 C 8.75 14.21 10.21 12.75 12 12.75 C 13.79 12.75 15.25 14.21 15.25 16 C 15.25 17.79 13.79 19.25 12 19.25 Z M 12 14.25 C 11.04 14.25 10.25 15.04 10.25 16 C 10.25 16.96 11.04 17.75 12 17.75 C 12.96 17.75 13.75 16.96 13.75 16 C 13.75 15.04 12.96 14.25 12 14.25 Z"
      fill={getIconColor(primaryColor, entity)}
    />
    <path
      d="M 17 22.75 L 7 22.75 C 2.59 22.75 1.25 21.41 1.25 17 L 1.25 15 C 1.25 10.59 2.59 9.25 7 9.25 L 17 9.25 C 21.41 9.25 22.75 10.59 22.75 15 L 22.75 17 C 22.75 21.41 21.41 22.75 17 22.75 Z M 7 10.75 C 3.42 10.75 2.75 11.43 2.75 15 L 2.75 17 C 2.75 20.57 3.42 21.25 7 21.25 L 17 21.25 C 20.58 21.25 21.25 20.57 21.25 17 L 21.25 15 C 21.25 11.43 20.58 10.75 17 10.75 Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
