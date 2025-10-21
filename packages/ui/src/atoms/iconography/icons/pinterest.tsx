import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Pinterest: FC<SVGProps> = ({
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
      d="M8.83001 18L9.73001 15.13C9.73001 15.13 10.07 14.23 10.44 13.14C9.64001 12.01 9.47001 10.5 10.07 9.72C10.4 9.3 11.03 8.99 11.31 9.19C11.62 9.4 10.99 11.5 10.44 13.14C10.74 13.57 11.13 13.94 11.6 14.2C12.89 14.9 14.47 14.52 15.49 13.75C17.24 12.45 17.01 10.22 16.97 9.91C16.72 7.82 15.02 6.75 14.8 6.61C14.18 6.22 13.29 6 12.32 6C10.74 6 8.96001 6.59 7.91001 8.04C6.78001 9.59 6.99001 11.41 7.07001 11.93"
    ></path>{' '}
  </svg>
)
