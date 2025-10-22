import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const PanelMode: FC<SVGProps> = ({
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
        d="M 8 7 L 16 7 L 16 17 L 8 17 Z M 19 7 L 20 7 C 21.105 7 22 7.895 22 9 L 22 15 C 22 16.105 21.105 17 20 17 L 19 17 Z M 2 9 C 2 8.448 2.141 7.948 2.461 7.586 C 2.781 7.224 3.281 7 4 7 L 5 7 L 5 17 L 4 17 C 3.448 17 2.948 16.776 2.586 16.414 C 2.224 16.052 2 15.552 2 15 Z"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
