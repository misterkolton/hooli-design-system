import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const LowercaseText: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox="0 0 32 32"
    onClick={onClick && (() => onClick())}
  >
    <path
      fill={getIconColor(primaryColor, entity)}
      fillRule="evenodd"
      d="M9 14v-3a1 1 0 0 1 2 0v3h2a1 1 0 0 1 0 2h-2v2.833C11.539 20.36 12.203 21 13 21c.822 0 1.504-.682 2.052-2.317.885 1.372 1.204 2.238.96 2.597C15.245 22.399 14.241 23 13 23c-1.838 0-3.157-1.318-3.948-3.682L9 19.163V16H8a1 1 0 0 1 0-2h1zm8 0v-3a1 1 0 0 1 2 0v3h2a1 1 0 0 1 0 2h-2v2.833C19.539 20.36 20.203 21 21 21c.822 0 1.504-.682 2.052-2.317l1.896.634C24.157 21.682 22.838 23 21 23s-3.157-1.318-3.948-3.682L17 19.163V16h-1a1 1 0 0 1 0-2h1z"
    ></path>
  </svg>
)
