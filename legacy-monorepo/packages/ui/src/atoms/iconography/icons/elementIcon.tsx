import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const ElementIcon: FC<SVGProps> = ({
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
      fill="none"
      viewBox=" 0 0 24 24"
    >
      <path
        fill={getIconColor(primaryColor, entity)}
        fillRule="evenodd"
        d="M12 2.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM5.25 8a6.75 6.75 0 1113.346 1.44A6.75 6.75 0 1112 20.535 6.75 6.75 0 115.404 9.44 6.772 6.772 0 015.25 8zm.638 2.868a5.25 5.25 0 106.212 3.881 6.698 6.698 0 01-.826-.038 6.754 6.754 0 01-5.386-3.843zm7.708 3.692a6.77 6.77 0 01-.695 4.72 5.25 5.25 0 105.211-8.412 6.763 6.763 0 01-4.516 3.692z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
