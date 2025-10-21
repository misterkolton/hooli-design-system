import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const SOCLogo: FC<SVGProps> = ({
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
    viewBox=" 0 0 28 28"
  >
    <path
      d="M 4.76 7.118 C 13.595 2.857 26.137 -1.241 27.761 0.351 C 29.329 1.888 22.681 23.451 22.681 23.451 C 20.753 28.548 21.569 24.326 21.827 23.122 C 24.251 11.708 28.928 3.469 26.347 1.844 C 23.766 0.22 11.967 4.756 4.729 7.544 C 2.68 8.621 1.855 8.667 4.76 7.118 Z M 25.126 3.783 C 20.978 9.288 15.71 16.645 11.237 18.226 C 8.648 19.147 6.556 16.586 4.538 12.817 C 4.442 12.665 3.378 11.649 4.418 13.562 C 10.249 22.969 11.994 19.297 14.058 17.675 C 18.962 14.1 22.924 9.382 25.601 3.929 C 25.869 3.392 25.126 3.783 25.126 3.783 Z M 19.053 25.104 C 6.102 20.414 4.295 25.373 1.083 21.702 C 0.435 21.018 0.159 20.061 0.343 19.136 C 0.542 17.911 -0.003 18.687 0.023 19.136 C -0.103 20.388 0.344 21.63 1.239 22.513 C 4.887 25.208 3.341 22.519 20.359 25.998 C 21.179 26.082 19.053 25.104 19.053 25.104 Z"
      fill={getIconColor(primaryColor, entity)}
    ></path>
  </svg>
)
