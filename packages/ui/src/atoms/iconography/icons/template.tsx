import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Template: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    onClick={onClick && (() => onClick())}
    xmlns="http://www.w3.org/2000/svg"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox=" 0 0 24 24"
  >
    <rect
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      transform="rotate(-90 2 22)"
      rx="2"
      height="20"
      width="20"
      y="22"
      x="2"
    ></rect>
    <path
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M12 13L12 2L20 2C21.1046 2 22 2.89543 22 4L22 13L12 13Z"
    ></path>
    <path
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M15 22L15 13L22 13L22 20C22 21.1046 21.1046 22 20 22L15 22Z"
    ></path>
    <rect
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      transform="rotate(-90 9 22)"
      height="6"
      width="9"
      y="22"
      x="9"
    ></rect>
    <path
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M4 22C2.89543 22 2 21.1046 2 20L2 13L9 13L9 22L4 22Z"
    ></path>
    <rect
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      transform="rotate(-90 2 13)"
      height="10"
      width="5"
      y="13"
      x="2"
    ></rect>
  </svg>
)
