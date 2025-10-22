import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const UppercaseText: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox="0 0 32 32"
    onClick={onClick && (() => onClick())}
  >
    <path
      fill={getIconColor(primaryColor, entity)}
      fillRule="evenodd"
      d="M22 22h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2V9h-1a1 1 0 0 1 0-2h7a1 1 0 0 1 .866 1.5A.995.995 0 0 1 27 9v1a1 1 0 0 1-2 0V9h-3v13zm-12 0V9H7v1a1 1 0 0 1-2 0V9c0-.182.049-.353.134-.5A1 1 0 0 1 6 7h10a1 1 0 0 1 .866 1.5A.995.995 0 0 1 17 9v1a1 1 0 0 1-2 0V9h-3v13h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2z"
    ></path>
  </svg>
)
