import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Undo: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
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
      strokeWidth="1.5"
      stroke={getIconColor(primaryColor, entity)}
      d="M19.12 22C20.27 20.56 21 18.74 21 16.73C21 11.93 16.71 8 11.48 8H3"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      stroke={getIconColor(primaryColor, entity)}
      d="M9 2L3 8L9 14"
    ></path>
  </svg>
)
