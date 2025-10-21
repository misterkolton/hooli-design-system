import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const RotateRight: FC<SVGProps> = ({
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
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M10 12H20V22H10V12Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M5 13C4.4 12.2 4 11.1 4 10C4 7.2 6.2 5 9 5H13"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M10.5 2L13.5 5L10.5 8"
      ></path>
    </svg>
  )
}
