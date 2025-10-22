import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const User: FC<SVGProps> = ({ primaryColor, size, onClick, entity }) => {
  return (
    <svg
      onClick={onClick && (() => onClick())}
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox=" 0 0 24 24"
    >
      <rect
        width={getIconSize(size, entity)}
        height={getIconSize(size, entity)}
        fill="none"
        rx="0"
        ry="0"
      />
      <path
        d="M 12 12.75 C 8.83 12.75 6.25 10.17 6.25 7 C 6.25 3.83 8.83 1.25 12 1.25 C 15.17 1.25 17.75 3.83 17.75 7 C 17.75 10.17 15.17 12.75 12 12.75 Z M 12 2.75 C 9.655 2.755 7.755 4.655 7.75 7 C 7.755 9.345 9.655 11.245 12 11.25 C 14.345 11.245 16.245 9.345 16.25 7 C 16.245 4.655 14.345 2.755 12 2.75 Z M 20.59 22.75 C 20.18 22.75 19.84 22.41 19.84 22 C 19.84 18.55 16.32 15.75 12 15.75 C 7.68 15.75 4.16 18.55 4.16 22 C 4.16 22.41 3.82 22.75 3.41 22.75 C 3 22.75 2.66 22.41 2.66 22 C 2.66 17.73 6.85 14.25 12 14.25 C 17.15 14.25 21.34 17.73 21.34 22 C 21.34 22.41 21 22.75 20.59 22.75 Z"
        fill={getIconColor(primaryColor, entity)}
      />
    </svg>
  )
}
