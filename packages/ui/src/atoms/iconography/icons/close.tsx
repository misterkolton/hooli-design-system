import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Close: FC<SVGProps> = ({
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
        strokeWidth="2.5"
        stroke={getIconColor(primaryColor, entity)}
        d="M2 2L22 22"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2.5"
        stroke={getIconColor(primaryColor, entity)}
        d="M22 2L2 22"
      ></path>
    </svg>
  )
}
