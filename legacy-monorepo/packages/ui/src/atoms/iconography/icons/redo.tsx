import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Redo: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
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
      d="M4.88 22C3.73 20.56 3 18.74 3 16.73C3 11.93 7.29 8 12.52 8H21"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M15 2L21 8L15 14"
    ></path>
  </svg>
)
