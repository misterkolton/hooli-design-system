import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FullBleedText: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      onClick={onClick && (() => onClick())}
      viewBox=" 0 0 24 24"
    >
      <path
        d="M 21 7 L 21 1 L 15 1 M 7 1 L 1 1 L 1 7 M 1 15 L 1 21 L 7 21 M 15 21 L 21 21 L 21 15"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 14.333 4.5 L 14.333 17.5 M 8.333 8.4 L 8.333 14.9 M 11.667 4.5 L 17 4.5 M 5 8.4 L 11.667 8.4 M 11.667 17.5 L 17 17.5"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
