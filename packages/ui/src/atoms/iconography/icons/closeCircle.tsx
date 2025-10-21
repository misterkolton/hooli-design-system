import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const CloseCircle: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getIconSize(size, entity)}
      height={getIconSize(size, entity)}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick && (() => onClick())}
    >
      <path
        fill={getIconColor(primaryColor, entity)}
        fill-rule="evenodd"
        d="M12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM0.25 12C0.25 5.51065 5.51065 0.25 12 0.25C18.4893 0.25 23.75 5.51065 23.75 12C23.75 18.4893 18.4893 23.75 12 23.75C5.51065 23.75 0.25 18.4893 0.25 12ZM7.46967 7.46967C7.76256 7.17678 8.23744 7.17678 8.53033 7.46967L12 10.9393L15.4697 7.46967C15.7626 7.17678 16.2374 7.17678 16.5303 7.46967C16.8232 7.76256 16.8232 8.23744 16.5303 8.53033L13.0607 12L16.5303 15.4697C16.8232 15.7626 16.8232 16.2374 16.5303 16.5303C16.2374 16.8232 15.7626 16.8232 15.4697 16.5303L12 13.0607L8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303C7.17678 16.2374 7.17678 15.7626 7.46967 15.4697L10.9393 12L7.46967 8.53033C7.17678 8.23744 7.17678 7.76256 7.46967 7.46967Z"
        clip-rule="evenodd"
      />
    </svg>
  )
}
