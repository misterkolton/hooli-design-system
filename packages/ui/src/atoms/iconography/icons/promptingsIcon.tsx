import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const PromptingsIcon: FC<SVGProps> = ({
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
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M12.416 4.283c-2.512.949-3.08 3.579-3.722 5.696-.92.079-1.72.295-2.745.747l-.021.025c.7-.101 1.866-.05 2.475.207-.387 1.422-.709 2.933-1.551 4.142-.955 1.475-3.41 1.634-4.567.267-1.124-1.263-.318-3.462 1.345-4.01-1.848.515-2.875 2.799-1.812 4.302 1.125 1.656 4.03 1.986 5.691.813 1.598-1.228 1.852-3.228 2.28-4.952.039-.158.075-.316.112-.474 2.515-.099 5.527.087 7.264-1.94 2.63-3.061-1.049-6.518-4.75-4.823Zm2.8 4.744c-1.512.747-3.352.742-5.049.925.276-1.073.61-2.142 1.152-3.105.757-1.35 2.86-2.229 4.388-1.46 1.585.863.945 2.933-.491 3.64Z"
          fill={getIconColor(primaryColor, entity)}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
