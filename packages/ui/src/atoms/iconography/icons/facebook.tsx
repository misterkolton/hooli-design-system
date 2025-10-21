import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Facebook: FC<SVGProps> = ({
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
      d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2H19.33C20.81 2 22 3.19 22 4.66V19.33C22 20.81 20.81 22 19.34 22Z"
    ></path>{' '}
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M12 18V8.34999C12 6.29999 13.64 5.65999 15.28 6.15999"
    ></path>{' '}
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      d="M9.5 11H14.5"
    ></path>{' '}
  </svg>
)
