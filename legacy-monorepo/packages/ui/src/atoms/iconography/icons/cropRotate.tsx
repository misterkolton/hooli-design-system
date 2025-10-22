import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const CropRotate: FC<SVGProps> = ({
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
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M5.00006 8H8.00006V5"
      ></path>
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19.0001 16H16.0001V19"
      ></path>
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        fill="none"
        d="M16.0001 16H9.00006C8.45006 16 8.00006 15.55 8.00006 15V8H15.0001C15.5501 8 16.0001 8.45 16.0001 9V16Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M13.0001 3H17.0001C18.6601 3 20.0001 4.34 20.0001 6V7"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M19.41 7.00999L20 7.58999L20.59 7.00999H19.41Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M11.0001 21H7.00006C5.34006 21 4.00006 19.66 4.00006 18V17"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1"
        stroke={getIconColor(primaryColor, entity)}
        d="M4.59003 16.99L4.00003 16.41L3.41003 16.99H4.59003Z"
      ></path>
    </svg>
  )
}
