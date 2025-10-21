import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Rotate: FC<SVGProps> = ({
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
        d="M 16 9 L 21 9 L 21 4"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 3.22 10 C 3.826 7.383 5.562 5.17 7.96 3.96 C 9.17 3.35 10.55 3 12 3 C 15.92 3 18.5 5.44 21 9 M 8 15 L 3 15 L 3 20"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 20.78 14 C 20.174 16.617 18.438 18.83 16.04 20.04 C 14.83 20.65 13.45 21 12 21 C 8.08 21 5.5 18.56 3 15"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
