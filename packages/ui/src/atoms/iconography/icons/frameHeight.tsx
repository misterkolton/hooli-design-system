import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FrameHeight: FC<SVGProps> = ({
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
      <rect
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        transform="matrix(1 0 0 -1 2 20)"
        rx="2"
        height="16"
        width="20"
      ></rect>
      <path
        strokeLinejoin="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M12 9V15"
      ></path>
      <path
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M11 9H12H13L12 8L11 9Z"
      ></path>
      <path
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M13 15L12 15L11 15L12 16L13 15Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M5 10L5 8C5 7.44772 5.44772 7 6 7H8"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19 14L19 16C19 16.5523 18.5526 17 18.0003 17C17.4553 17 16.7416 17 16 17"
      ></path>
    </svg>
  )
}
