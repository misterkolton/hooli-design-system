import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const ColorPalette: FC<SVGProps> = ({
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
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M2.74 15.61C2.55 15.14 2.39 14.66 2.28 14.16C1.62 11.37 2.13 8.35999 3.76 5.98999C5.41 3.59999 8.08 2.35999 10.93 2.06999C12.75 1.87999 14.63 2.08999 16.35 2.71999C18.52 3.51999 20.5 5.04999 21.49 7.16999C22.18 8.64999 22.27 10.6 21.13 11.76C20.39 12.52 19.29 12.77 18.41 13.35C17.39 14.01 16.66 15.12 16.46 16.33C16.32 17.15 16.4 18.01 16.2 18.82C15.53 21.52 12.23 22.39 9.82 21.85C7.06 21.22 4.65 19.13 3.27 16.7C3.07 16.34 2.9 15.98 2.74 15.61Z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
      <path
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M13 7C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M6 14C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M11 19C12.1046 19 13 18.3284 13 17.5C13 16.6716 12.1046 16 11 16C9.89543 16 9 16.6716 9 17.5C9 18.3284 9.89543 19 11 19Z"
      ></path>
    </svg>
  )
}
