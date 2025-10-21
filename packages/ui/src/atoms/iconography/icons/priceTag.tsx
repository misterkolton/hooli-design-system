import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const PriceTag: FC<SVGProps> = ({
  primaryColor,
  size,
  onClick,
  entity,
}) => {
  return (
    <svg
      onClick={onClick && (() => onClick())}
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox=" 0 0 24 24"
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
        d="M9.64504 21.575C9.86504 21.785 10.145 21.895 10.425 21.895C10.715 21.895 10.995 21.795 11.205 21.575L21.585 11.205C21.795 10.995 21.905 10.725 21.905 10.435V3.70498C21.905 2.82498 21.185 2.10498 20.305 2.10498H13.785C13.355 2.10498 12.955 2.26498 12.655 2.56498L2.42504 12.805C1.99504 13.225 1.99504 13.925 2.42504 14.355L9.64504 21.575ZM10.425 20.655L3.34504 13.575L13.495 3.41498C13.575 3.34498 13.665 3.30498 13.775 3.30498H20.295C20.515 3.30498 20.695 3.48498 20.695 3.70498L20.725 10.355L10.425 20.655ZM14.0751 9.92505C14.5851 10.435 15.2451 10.685 15.9151 10.685C16.5851 10.685 17.2551 10.435 17.7551 9.92505C18.7651 8.90505 18.7651 7.25505 17.7551 6.24505C16.7351 5.23505 15.0851 5.23505 14.0751 6.24505C13.0651 7.26505 13.0651 8.91505 14.0751 9.92505ZM14.9251 7.09505C15.1951 6.82505 15.5551 6.68505 15.9151 6.68505C16.2751 6.68505 16.6351 6.82505 16.9051 7.09505C17.4551 7.64505 17.4551 8.52505 16.9051 9.07505C16.3651 9.62505 15.4751 9.62505 14.9251 9.07505C14.3751 8.52505 14.3751 7.64505 14.9251 7.09505Z"
        fill={getIconColor(primaryColor, entity)}
      />
    </svg>
  )
}
