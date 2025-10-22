import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Drag: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
  <svg
    viewBox=" 0 0 24 24"
    fill="none"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    onClick={onClick && (() => onClick())}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M22 12H2"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M19 9L22 12L19 15"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M5 9L2 12L5 15"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M12 22V2"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M15 19L12 22L9 19"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M15 5L12 2L9 5"
    ></path>
  </svg>
)
