import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Bag: FC<SVGProps> = ({ primaryColor, onClick, size, entity }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      onClick={onClick && (() => onClick())}
      viewBox="0 0 24 24"
    >
      <path
        d="M 6 8.318 C 6.415 8.318 6.75 8.623 6.75 9 C 6.75 10.13 7.758 11.045 9 11.045 C 10.243 11.045 11.25 10.13 11.25 9 C 11.25 8.623 11.586 8.318 12 8.318 C 12.415 8.318 12.75 8.623 12.75 9 C 12.75 10.883 11.071 12.409 9 12.409 C 6.929 12.409 5.25 10.883 5.25 9 C 5.25 8.623 5.586 8.318 6 8.318 Z"
        fill={getIconColor(primaryColor, entity)}
      ></path>
      <path
        d="M 12.75 5.591 L 14.354 5.591 C 15.534 5.591 16.514 6.42 16.598 7.491 L 17.019 12.848 C 17.174 14.821 15.455 16.5 13.278 16.5 L 4.722 16.5 C 2.546 16.5 0.827 14.821 0.982 12.848 L 1.403 7.491 C 1.487 6.42 2.467 5.591 3.647 5.591 L 5.25 5.591 L 5.25 4.909 C 5.25 3.026 6.929 1.5 9 1.5 C 11.071 1.5 12.75 3.026 12.75 4.909 Z M 6.75 5.591 L 11.25 5.591 L 11.25 4.909 C 11.25 3.779 10.243 2.864 9 2.864 C 7.758 2.864 6.75 3.779 6.75 4.909 Z M 3.647 6.954 C 3.254 6.954 2.927 7.231 2.899 7.588 L 2.478 12.945 C 2.385 14.129 3.416 15.136 4.722 15.136 L 13.278 15.136 C 14.584 15.136 15.616 14.129 15.523 12.945 L 15.102 7.588 C 15.074 7.231 14.747 6.954 14.354 6.954 Z"
        fill={getIconColor(primaryColor, entity)}
      ></path>
    </svg>
  )
}
