import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Copy: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
  <svg
    viewBox=" 0 0 24 24"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    onClick={onClick && (() => onClick())}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M8 6V3C8 2.45 8.45 2 9 2H20C20.55 2 21 2.45 21 3V17C21 17.55 20.55 18 20 18H16V7C16 6.45 15.55 6 15 6H8Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M15 22H4C3.45 22 3 21.55 3 21V7C3 6.45 3.45 6 4 6H15C15.55 6 16 6.45 16 7V21C16 21.55 15.55 22 15 22Z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
)
