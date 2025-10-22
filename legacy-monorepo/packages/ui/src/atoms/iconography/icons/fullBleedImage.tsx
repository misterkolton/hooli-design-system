import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FullBleedImage: FC<SVGProps> = ({
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
        d="M 13.208 15.292 L 16.458 15.292 M 14.833 13.667 L 14.833 16.917 M 15.917 12.583 L 15.917 7.708 C 15.917 7.113 15.429 6.625 14.833 6.625 L 6.167 6.625 C 5.571 6.625 5.083 7.113 5.083 7.708 L 5.083 14.208 C 5.083 14.804 5.571 15.292 6.167 15.292 L 11.583 15.292 M 15.917 12.583 L 15.917 7.708 C 15.917 7.113 15.429 6.625 14.833 6.625 L 6.167 6.625 C 5.571 6.625 5.083 7.113 5.083 7.708 L 5.083 14.208 C 5.083 14.804 5.571 15.292 6.167 15.292 L 11.583 15.292 M 15.917 12.583 L 13.208 9.333 L 9.958 13.667 L 7.25 11.5 L 5.083 13.125 L 5.083 14.208 C 5.083 14.804 5.571 15.292 6.167 15.292 L 11.583 15.292 M 15.917 12.583 L 13.208 9.333 L 9.958 13.667 L 7.25 11.5 L 5.083 13.125 L 5.083 14.208 C 5.083 14.804 5.571 15.292 6.167 15.292 L 11.583 15.292 M 7.75 9.25 C 8.026 9.25 8.25 9.026 8.25 8.75 C 8.25 8.474 8.026 8.25 7.75 8.25 C 7.474 8.25 7.25 8.474 7.25 8.75 C 7.25 9.026 7.474 9.25 7.75 9.25 Z"
        fill="transparent"
        strokeWidth="0.8"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 21 7 L 21 1 L 15 1 M 7 1 L 1 1 L 1 7 M 1 15 L 1 21 L 7 21 M 15 21 L 21 21 L 21 15"
        fill="transparent"
        stroke={getIconColor(primaryColor, entity)}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
