import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Coaching: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill={getIconColor(primaryColor, entity)}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick && (() => onClick())}
    >
      <path
        d="M4 3.2001C4 2.3176 4.7175 1.6001 5.6 1.6001H14.4C15.2825 1.6001 16 2.3176 16 3.2001V10.4001C16 11.2826 15.2825 12.0001 14.4 12.0001H8.42C8.125 11.3626 7.6725 10.8126 7.11 10.4001H9.6V9.6001C9.6 9.1576 9.9575 8.8001 10.4 8.8001H12C12.4425 8.8001 12.8 9.1576 12.8 9.6001V10.4001H14.4V3.2001H5.6V4.4276C5.13 4.1551 4.5825 4.0001 4 4.0001V3.2001ZM4 9.6001C2.675 9.6001 1.6 8.5251 1.6 7.2001C1.6 5.8751 2.675 4.8001 4 4.8001C5.325 4.8001 6.4 5.8751 6.4 7.2001C6.4 8.5251 5.325 9.6001 4 9.6001ZM3.3325 10.4001H4.665C6.5075 10.4001 8 11.8926 8 13.7326C8 14.1001 7.7025 14.4001 7.3325 14.4001H0.6675C0.2975 14.4001 0 14.1026 0 13.7326C0 11.8926 1.4925 10.4001 3.3325 10.4001Z"
        fill={getIconColor(primaryColor, entity)}
      />
    </svg>
  )
}
