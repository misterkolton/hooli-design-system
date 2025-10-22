import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Filter: FC<SVGProps> = ({
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
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M12 2C9.20459 2 6.6759 3.14892 4.86068 5C3.09145 6.80419 2 9.27541 2 12C2 16.11 4.48 19.64 8.03 21.17V21.18H8.04L12.2197 18.6716L21.97 12.82C21.99 12.55 22 12.28 22 12C22 8.608 20.3083 5.60871 17.7232 3.80031C16.1014 2.6658 14.128 2 12 2Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M8.03003 21.18C8.22609 18.7806 9.26981 16.6209 10.8601 15C12.6766 13.1486 15.2061 12 18 12C19.41 12 20.75 12.29 21.97 12.82L17.5 15.5L10.5 19.6987L8.03003 21.18Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M3.1001 7.46002L8.6701 18.4"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M5.87012 4.09998L11.2401 14.64"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M9.44995 2.33002L14.67 12.57"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M13.8701 2.17999L18.9001 12.04"
      ></path>
    </svg>
  )
}
