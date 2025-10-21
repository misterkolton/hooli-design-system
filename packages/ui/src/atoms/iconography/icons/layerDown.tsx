import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const LayerDown: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      onClick={onClick && (() => onClick())}
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox=" 0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 11 L 12 17 L 2 11 L 12 5 Z M 22 14 L 19.5 12.5 M 22 14 L 12 20 L 2 14 L 4.5 12.5"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 3 0 L 3 8 M 0 2.667 L 3 0 L 6 2.667"
        transform="translate(9.357 5.65) rotate(180 3 4)"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
