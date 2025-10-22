import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FullBleed: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick && (() => onClick())}
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={getIconColor(primaryColor, entity)}
        fill-rule="evenodd"
        d="M0.25 6C0.25 4.48122 1.48122 3.25 3 3.25H9C10.2267 3.25 11.3158 3.83901 12 4.74964C12.6842 3.83901 13.7733 3.25 15 3.25H21C22.5188 3.25 23.75 4.48122 23.75 6V16C23.75 17.5188 22.5188 18.75 21 18.75H15C13.7574 18.75 12.75 19.7574 12.75 21H11.25C11.25 19.7574 10.2426 18.75 9 18.75H3C1.48122 18.75 0.25 17.5188 0.25 16V6ZM11.25 17.9997C10.6233 17.529 9.8442 17.25 9 17.25H3C2.30964 17.25 1.75 16.6904 1.75 16V6C1.75 5.30964 2.30964 4.75 3 4.75H9C10.2426 4.75 11.25 5.75736 11.25 7V17.9997ZM12.75 17.9997C13.3767 17.529 14.1558 17.25 15 17.25H21C21.6904 17.25 22.25 16.6904 22.25 16V6C22.25 5.30964 21.6904 4.75 21 4.75H15C13.7574 4.75 12.75 5.75736 12.75 7V17.9997Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}
