import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const View: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      onClick={onClick && (() => onClick())}
      viewBox=" 0 0 24 24"
    >
      <path
        d="M 12 18 C 6.48 18 2 12 2 12 C 2 12 6.48 6 12 6 C 17.52 6 22 12 22 12 C 22 12 17.52 18 12 18 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 12 14.5 C 13.381 14.5 14.5 13.381 14.5 12 C 14.5 10.619 13.381 9.5 12 9.5 C 10.619 9.5 9.5 10.619 9.5 12 C 9.5 13.381 10.619 14.5 12 14.5 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
