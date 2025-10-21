import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Invisible: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <>
      <svg
        width={getIconSize(size, entity)}
        height={getIconSize(size, entity)}
        onClick={onClick && (() => onClick())}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-reactroot=""
      >
        <path
          stroke={getIconColor(primaryColor, entity)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 18c-5.52 0-10-6-10-6s4.48-6 10-6 10 6 10 6-4.48 6-10 6z"
        />
        <path
          stroke={getIconColor(primaryColor, entity)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12 14.5c1.3807 0 2.5-1.1193 2.5-2.5S13.3807 9.5 12 9.5 9.5 10.6193 9.5 12s1.1193 2.5 2.5 2.5zM2 2l20 20"
        />
      </svg>
    </>
  )
}
