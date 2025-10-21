import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const TenDoor: FC<SVGProps> = ({
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
    <path
      d="M 4.25 3 C 4.25 1.481 5.481 0.25 7 0.25 L 17 0.25 C 18.519 0.25 19.75 1.481 19.75 3 L 19.75 18.581 C 19.75 19.75 19.012 20.791 17.909 21.177 L 11.909 23.277 C 11.079 23.568 10.16 23.444 9.436 22.945 C 8.713 22.445 8.272 21.629 8.25 20.75 L 7 20.75 C 5.481 20.75 4.25 19.519 4.25 18 Z M 8.25 19.25 L 8.25 5.919 C 8.25 4.75 8.988 3.709 10.091 3.323 L 14.587 1.75 L 7 1.75 C 6.31 1.75 5.75 2.31 5.75 3 L 5.75 18 C 5.75 18.69 6.31 19.25 7 19.25 Z M 18.25 3.819 C 18.25 3.414 18.054 3.034 17.723 2.799 C 17.393 2.565 16.969 2.505 16.587 2.639 L 10.587 4.739 C 10.086 4.915 9.75 5.388 9.75 5.919 L 9.75 20.681 C 9.75 21.542 10.6 22.145 11.413 21.861 L 17.413 19.761 C 17.914 19.585 18.25 19.112 18.25 18.581 Z M 13 11.25 C 13.414 11.25 13.75 11.586 13.75 12 L 13.75 14 C 13.75 14.414 13.414 14.75 13 14.75 C 12.586 14.75 12.25 14.414 12.25 14 L 12.25 12 C 12.25 11.586 12.586 11.25 13 11.25 Z"
      fill={getIconColor(primaryColor, entity)}
    ></path>
  </svg>
)
