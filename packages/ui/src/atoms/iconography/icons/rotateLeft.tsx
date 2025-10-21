import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const RotateLeft: FC<SVGProps> = ({
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
        d="M14 12H4V22H14V12Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19 13C19.6 12.2 20 11.1 20 10C20 7.2 17.8 5 15 5H11"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M13.5 2L10.5 5L13.5 8"
      ></path>
    </svg>
  )
}
