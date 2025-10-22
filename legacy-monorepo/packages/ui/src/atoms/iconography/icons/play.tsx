import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Play: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
  <svg
    viewBox=" 0 0 24 24"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    onClick={onClick && (() => onClick())}
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
      d="M7.54076 3.99049C6.87525 3.56266 6 4.0405 6 4.83167V19.1683C6 19.9595 6.87525 20.4373 7.54076 20.0095L18.6915 12.8412C19.3038 12.4475 19.3038 11.5525 18.6915 11.1588L7.54076 3.99049ZM7.96998 5.69395C7.6372 5.48047 7.2 5.71943 7.2 6.11479V17.8852C7.2 18.2806 7.6372 18.5195 7.96998 18.3061L17.144 12.4208C17.4507 12.2241 17.4507 11.7759 17.144 11.5792L7.96998 5.69395Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
