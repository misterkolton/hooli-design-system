import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Warning: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    onClick={onClick && (() => onClick())}
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    fill="none"
    stroke={getIconColor(primaryColor, entity)}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0718 4.24418C12.5863 3.43501 11.4136 3.43501 10.9281 4.24418L2.46046 18.3569C1.96056 19.19 2.56071 20.25 3.53232 20.25H20.4676C21.4392 20.25 22.0393 19.19 21.5394 18.3569L13.0718 4.24418ZM9.64184 3.47243C10.7099 1.69225 13.2899 1.69226 14.358 3.47244L22.8257 17.5851C23.9254 19.4181 22.6051 21.75 20.4676 21.75H3.53232C1.39476 21.75 0.0744533 19.4181 1.17422 17.5851L9.64184 3.47243ZM11.9999 8.25C12.4142 8.25 12.7499 8.58578 12.7499 9V13C12.7499 13.4142 12.4142 13.75 11.9999 13.75C11.5857 13.75 11.2499 13.4142 11.2499 13V9C11.2499 8.58578 11.5857 8.25 11.9999 8.25ZM11.9999 15.25C12.4142 15.25 12.7499 15.5858 12.7499 16V17C12.7499 17.4142 12.4142 17.75 11.9999 17.75C11.5857 17.75 11.2499 17.4142 11.2499 17V16C11.2499 15.5858 11.5857 15.25 11.9999 15.25Z"
      fill={getIconColor(primaryColor, entity)}
      fillRule="evenodd"
    />
  </svg>
)
