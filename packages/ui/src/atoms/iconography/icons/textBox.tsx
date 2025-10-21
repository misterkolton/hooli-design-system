import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const TextBox: FC<SVGProps> = ({
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
        d="M22 16.4V20H2V16.4"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M2 9.1V4H22V9.1"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M12 8V16"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M8 8H16"
      ></path>
    </svg>
  )
}
