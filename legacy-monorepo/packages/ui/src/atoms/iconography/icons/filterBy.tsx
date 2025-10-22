import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const FilterBy: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      onClick={onClick && (() => onClick())}
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      viewBox=" 0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6 21.5C13.49 21.5 13.38 21.47 13.28 21.41L10.08 19.41C9.91 19.3 9.8 19.11 9.8 18.9V10.65L2.68 3.52C2.5 3.35 2.45 3.09 2.55 2.87C2.65 2.65 2.86 2.5 3.1 2.5H20.9C21.14 2.5 21.36 2.65 21.45 2.87C21.54 3.09 21.5 3.35 21.32 3.52L14.2 10.65V20.9C14.2 21.12 14.08 21.32 13.89 21.42C13.8 21.48 13.7 21.5 13.6 21.5ZM11 18.57L13 19.82V10.4C13 10.24 13.06 10.09 13.18 9.98L19.46 3.7H4.55L10.83 9.98C10.94 10.09 11 10.24 11 10.4V18.57Z"
        fill={getIconColor(primaryColor, entity)}
      />
    </svg>
  )
}
