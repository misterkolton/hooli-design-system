import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Shadows: FC<SVGProps> = ({
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
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M21.8 10H12"
      ></path>
      <path
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M21.8 14H12"
      ></path>
      <path
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19.99 6H12"
      ></path>
      <path
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19.99 18H12"
      ></path>
    </svg>
  )
}
