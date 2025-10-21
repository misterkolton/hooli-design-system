import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const LayerUp: FC<SVGProps> = ({
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
        d="M 22 11 L 12 17 L 2 11 L 12 5 Z M 19.5 12.5 L 22 14 L 12 20 L 2 14 L 4.5 12.5"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 12.357 9.65 L 12.357 19.65 M 9.357 12.983 L 12.357 9.65 L 15.357 12.983"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
