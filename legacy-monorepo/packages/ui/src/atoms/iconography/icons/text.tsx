import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Text: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
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
      d="M16 22H8H12V2"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M2 6V2H22V6"
    ></path>
  </svg>
)
