import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FullBleedPortrait: FC<SVGProps> = ({
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
        d="M20 22H4C4.99 19.53 5.63 15.97 5.63 12C5.63 8.03 4.99 4.47 4 2H20C19.01 4.47 18.37 8.03 18.37 12C18.37 15.97 19.01 19.53 20 22Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M12 19V5"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M14 17L12 19L10 17"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M14 7L12 5L10 7"
      ></path>
    </svg>
  )
}
