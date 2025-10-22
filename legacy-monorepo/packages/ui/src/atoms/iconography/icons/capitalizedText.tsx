import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const CapitalizedText: FC<SVGProps> = ({
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
      d="M18.031 16v-2a1 1 0 0 1 1-1h.005a1 1 0 0 1 1 1v2h2.008a1 1 0 1 1 0 2h-2.008v1.833C20.576 21.36 21.243 22 22.041 22c.825 0 1.508-.682 2.058-2.317l1.901.634C25.206 22.682 23.885 24 22.041 24c-1.843 0-3.164-1.318-3.958-3.682l-.052-.155V18h-1.005a1 1 0 1 1 0-2h1.005zm-6.015 6V9h-4.01v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9c0-.182.049-.353.134-.5A1 1 0 0 1 7 7h12.036a1 1 0 0 1 .867 1.5.995.995 0 0 1 .133.5v1a1 1 0 0 1-1 1h-.005a1 1 0 0 1-1-1V9h-4.01v13h2.008a1 1 0 1 1 0 2h-6.021a1 1 0 0 1 0-2h2.008z"
    ></path>
  </svg>
)
