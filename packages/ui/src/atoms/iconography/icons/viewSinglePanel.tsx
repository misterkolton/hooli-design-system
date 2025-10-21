import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const ViewSinglePanel: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    fill={getIconColor(primaryColor, entity)}
    viewBox=" 0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => onClick?.()}
  >
    <path
      d="M 15.75 21.5 L 5.75 21.5 C 2.1 21.5 0 19.4 0 15.75 L 0 10.75 C 0 7.1 2.1 5 5.75 5 L 15.75 5 C 19.4 5 21.5 7.1 21.5 10.75 L 21.5 15.75 C 21.5 19.4 19.4 21.5 15.75 21.5 Z M 5.75 6.5 C 2.89 6.5 1.5 7.89 1.5 10.75 L 1.5 15.75 C 1.5 18.61 2.89 20 5.75 20 L 15.75 20 C 18.61 20 20 18.61 20 15.75 L 20 10.75 C 20 7.89 18.61 6.5 15.75 6.5 Z M 16.75 4 L 4.75 4 C 4.34 4 4 3.66 4 3.25 C 4 2.84 4.34 2.5 4.75 2.5 L 16.75 2.5 C 17.16 2.5 17.5 2.84 17.5 3.25 C 17.5 3.66 17.16 4 16.75 4 Z M 13.75 1.5 L 7.75 1.5 C 7.34 1.5 7 1.16 7 0.75 C 7 0.34 7.34 0 7.75 0 L 13.75 0 C 14.16 0 14.5 0.34 14.5 0.75 C 14.5 1.16 14.16 1.5 13.75 1.5 Z"
      transform="translate(1.25 1.25) rotate(90 10.75 10.75)"
      fill={getIconColor(primaryColor, entity)}
    ></path>
  </svg>
)
