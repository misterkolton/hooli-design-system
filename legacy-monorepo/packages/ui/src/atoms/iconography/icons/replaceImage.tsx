import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const ReplaceImage: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick && (() => onClick())}
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox=" 0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 8 L 2 8 L 2 22 L 22 22 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 8 2 L 16 2 M 5 5 L 19 5"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 13.778 13.667 L 16 13.667 L 16 11.444"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 8.098 14.111 C 8.367 12.948 9.139 11.965 10.204 11.427 C 10.742 11.156 11.356 11 12 11 C 13.742 11 14.889 12.084 16 13.667 M 10.222 16.333 L 8 16.333 L 8 18.556"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 15.902 15.889 C 15.633 17.052 14.861 18.035 13.796 18.573 C 13.258 18.844 12.644 19 12 19 C 10.258 19 9.111 17.916 8 16.333"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
