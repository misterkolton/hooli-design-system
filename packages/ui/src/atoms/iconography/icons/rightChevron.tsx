import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const RightChevron: FC<SVGProps> = ({
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
    viewBox=" 0 0 24 24"
  >
    <rect
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill="none"
      rx="0"
      ry="0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99503 18.6012C8.84503 18.6012 8.68503 18.5412 8.57503 18.4212C8.34503 18.1912 8.34503 17.8112 8.57503 17.5712L14.145 12.0012L8.57503 6.42118C8.34503 6.19118 8.34503 5.81118 8.57503 5.57118C8.80503 5.34118 9.18503 5.34118 9.42503 5.57118L15.425 11.5712C15.655 11.8012 15.655 12.1812 15.425 12.4212L9.42503 18.4212C9.30503 18.5412 9.14503 18.6012 8.99503 18.6012Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
