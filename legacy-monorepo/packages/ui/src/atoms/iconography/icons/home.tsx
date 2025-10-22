import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Home: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
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
      d="M 17.79 22.75 L 6.21 22.75 C 3.47 22.75 1.25 20.52 1.25 17.78 L 1.25 10.37 C 1.25 9.01 2.09 7.3 3.17 6.46 L 8.56 2.26 C 10.18 1 12.77 0.94 14.45 2.12 L 20.63 6.45 C 21.82 7.28 22.75 9.06 22.75 10.51 L 22.75 17.79 C 22.75 20.52 20.53 22.75 17.79 22.75 Z M 9.48 3.44 L 4.09 7.64 C 3.38 8.2 2.75 9.47 2.75 10.37 L 2.75 17.78 C 2.75 19.693 4.297 21.244 6.21 21.25 L 17.79 21.25 C 19.7 21.25 21.25 19.7 21.25 17.79 L 21.25 10.51 C 21.25 9.55 20.56 8.22 19.77 7.68 L 13.59 3.35 C 12.45 2.55 10.57 2.59 9.48 3.44 Z"
      fill={getIconColor(primaryColor, entity)}
    />
    <path
      d="M 12 18.75 C 11.59 18.75 11.25 18.41 11.25 18 L 11.25 15 C 11.25 14.59 11.59 14.25 12 14.25 C 12.41 14.25 12.75 14.59 12.75 15 L 12.75 18 C 12.75 18.41 12.41 18.75 12 18.75 Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
