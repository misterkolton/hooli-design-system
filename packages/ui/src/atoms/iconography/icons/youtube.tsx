import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const YouTube: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick && (() => onClick())}
  >
    {' '}
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M19.57 20H4.43C3.09 20 2 18.87 2 17.46V6.53C2 5.13 3.09 4 4.43 4H19.58C20.91 4 22 5.13 22 6.53V17.46C22 18.87 20.91 20 19.57 20Z"
    ></path>{' '}
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M9 8V16L16 11.56L9 8Z"
    ></path>{' '}
  </svg>
)
