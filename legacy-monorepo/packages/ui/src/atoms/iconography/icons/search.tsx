import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Search: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
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
      d="M10 18C11.8411 18 13.537 17.3781 14.889 16.3328L20.2631 21.7069C20.6536 22.0974 21.2868 22.0974 21.6773 21.7069L21.7069 21.6773C22.0974 21.2868 22.0974 20.6536 21.7069 20.2631L16.3328 14.889C17.3781 13.537 18 11.8411 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM16.7995 9.99947C16.7995 13.755 13.755 16.7995 9.99947 16.7995C6.24393 16.7995 3.19947 13.755 3.19947 9.99947C3.19947 6.24393 6.24393 3.19947 9.99947 3.19947C13.755 3.19947 16.7995 6.24393 16.7995 9.99947Z"
      fill={getIconColor(primaryColor, entity)}
    />
  </svg>
)
