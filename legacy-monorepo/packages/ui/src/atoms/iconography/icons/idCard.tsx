import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const IDCard: FC<SVGProps> = ({
  primaryColor,
  size,
  onClick,
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
      d="M4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4ZM6 13C4.89543 13 4 13.8954 4 15V17H12V15C12 13.8954 11.1046 13 10 13H6ZM8 12C9.38071 12 10.5 10.8807 10.5 9.5C10.5 8.11929 9.38071 7 8 7C6.61929 7 5.5 8.11929 5.5 9.5C5.5 10.8807 6.61929 12 8 12ZM14.6 8C14.2686 8 14 8.26863 14 8.6C14 8.93137 14.2686 9.2 14.6 9.2H19.4C19.7314 9.2 20 8.93137 20 8.6C20 8.26863 19.7314 8 19.4 8H14.6ZM13 11.8C13 11.4686 13.2686 11.2 13.6 11.2H19.4C19.7314 11.2 20 11.4686 20 11.8C20 12.1314 19.7314 12.4 19.4 12.4H13.6C13.2686 12.4 13 12.1314 13 11.8ZM15.6 14.4C15.2686 14.4 15 14.6686 15 15C15 15.3314 15.2686 15.6 15.6 15.6H19.4C19.7314 15.6 20 15.3314 20 15C20 14.6686 19.7314 14.4 19.4 14.4H15.6Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
