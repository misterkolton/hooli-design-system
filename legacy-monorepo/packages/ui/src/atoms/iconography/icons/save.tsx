import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Save: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    onClick={onClick && (() => onClick())}
  >
    <path
      d="M 17 22.75 L 7 22.75 C 2.59 22.75 1.25 21.41 1.25 17 L 1.25 7 C 1.25 2.59 2.59 1.25 7 1.25 L 8.5 1.25 C 10.25 1.25 10.8 1.82 11.5 2.75 L 13 4.75 C 13.33 5.19 13.38 5.25 14 5.25 L 17 5.25 C 21.41 5.25 22.75 6.59 22.75 11 L 22.75 17 C 22.75 21.41 21.41 22.75 17 22.75 Z M 7 2.75 C 3.43 2.75 2.75 3.43 2.75 7 L 2.75 17 C 2.75 20.57 3.43 21.25 7 21.25 L 17 21.25 C 20.57 21.25 21.25 20.57 21.25 17 L 21.25 11 C 21.25 7.43 20.57 6.75 17 6.75 L 14 6.75 C 12.72 6.75 12.3 6.31 11.8 5.65 L 10.3 3.65 C 9.78 2.96 9.63 2.75 8.5 2.75 Z"
      fill={getIconColor(primaryColor, entity)}
    ></path>
  </svg>
)
