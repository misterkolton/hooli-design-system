import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const ViewPanels: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      onClick={onClick && (() => onClick())}
      viewBox=" 0 0 24 24"
    >
      <path
        d="M 8 6 L 8 3 C 8 2.45 8.45 2 9 2 L 20 2 C 20.55 2 21 2.45 21 3 L 21 17 C 21 17.55 20.55 18 20 18 L 16 18 L 16 7 C 16 6.45 15.55 6 15 6 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 15 22 L 4 22 C 3.45 22 3 21.55 3 21 L 3 7 C 3 6.45 3.45 6 4 6 L 15 6 C 15.55 6 16 6.45 16 7 L 16 21 C 16 21.55 15.55 22 15 22 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
