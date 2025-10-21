import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FullBleedLandscape: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick && (() => onClick())}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M2 20V4C4.47 4.99 8.03 5.63 12 5.63C15.97 5.63 19.53 4.99 22 4V20C19.53 19.01 15.97 18.37 12 18.37C8.03 18.37 4.47 19.01 2 20Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M5 12H19"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M7 14L5 12L7 10"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M17 14L19 12L17 10"
      ></path>
    </svg>
  )
}
