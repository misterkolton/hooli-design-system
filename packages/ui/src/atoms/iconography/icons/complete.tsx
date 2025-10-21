import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Complete: FC<SVGProps> = ({
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
    fill="none"
  >
    <path
      fill={getIconColor(primaryColor, entity)}
      d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12c0-.637-.058-1.26-.169-1.864a.75.75 0 111.475-.271c.128.692.194 1.406.194 2.135 0 6.49-5.26 11.75-11.75 11.75S.25 18.49.25 12 5.51.25 12 .25c2.363 0 4.566.699 6.41 1.9a.75.75 0 11-.82 1.257A10.199 10.199 0 0012 1.75zm9.53 3.72a.75.75 0 010 1.06l-9 9a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06L12 13.94l8.47-8.47a.75.75 0 011.06 0z"
    ></path>
  </svg>
)
