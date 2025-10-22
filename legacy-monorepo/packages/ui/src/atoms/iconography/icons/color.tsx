import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Color: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    onClick={onClick && (() => onClick())}
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M17.94 13.89C16.71 14.59 14.41 15.88 12.01 13.84C9.08 11.37 7.29 13.05 6.09 13.78C5.5 17.4 8.15 21 12 21C15.81 21 18.45 17.47 17.94 13.89Z"
    ></path>{' '}
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1"
      stroke={getIconColor(primaryColor, entity)}
      fill="none"
      d="M17.2399 11.75L12.8199 3.51C12.4599 2.83 11.5299 2.83 11.1699 3.51L6.74995 11.75C6.39995 12.41 6.17995 13.09 6.06995 13.78C7.27995 13.05 9.06995 11.37 11.9899 13.84C14.3899 15.88 16.6999 14.59 17.9199 13.89C17.8399 13.17 17.6099 12.45 17.2399 11.75Z"
    ></path>
  </svg>
)
