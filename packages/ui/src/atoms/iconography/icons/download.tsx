import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Download: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    onClick={onClick && (() => onClick())}
    xmlns="http://www.w3.org/2000/svg"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    fill="none"
  >
    <path
      fill={getIconColor(primaryColor, entity)}
      fillRule="evenodd"
      d="M12 3.25a.75.75 0 01.75.75v8.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4a.75.75 0 01.75-.75zm-11 10a.75.75 0 01.75.75v4c0 .69.56 1.25 1.25 1.25h18c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 011.5 0v4A2.75 2.75 0 0121 20.75H3A2.75 2.75 0 01.25 18v-4a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    ></path>
  </svg>
)
