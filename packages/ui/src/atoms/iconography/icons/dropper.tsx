import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Dropper: FC<SVGProps> = ({
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
        d="M16.9697 1.96973C18.3671 0.572265 20.6329 0.572265 22.0303 1.96973C23.4278 3.36719 23.4278 5.63292 22.0303 7.03039L20.0607 9.00006L21.0303 9.96973C21.3232 10.2626 21.3232 10.7375 21.0303 11.0304C20.7374 11.3233 20.2626 11.3233 19.9697 11.0304L19 10.0607L7.11612 21.9446C6.60039 22.4603 5.90092 22.7501 5.17157 22.7501H2C1.58579 22.7501 1.25 22.4143 1.25 22.0001V18.8285C1.25 18.0991 1.53973 17.3997 2.05546 16.8839L13.9393 5.00006L12.9697 4.03039C12.6768 3.73749 12.6768 3.26262 12.9697 2.96973C13.2626 2.67683 13.7374 2.67683 14.0303 2.96973L15 3.9394L16.9697 1.96973ZM15 6.06072L3.11612 17.9446C2.8817 18.179 2.75 18.497 2.75 18.8285V21.2501H5.17157C5.50309 21.2501 5.82104 21.1184 6.05546 20.8839L17.9393 9.00006L15 6.06072ZM19 7.9394L16.0607 5.00006L18.0303 3.03039C18.842 2.21871 20.158 2.21871 20.9697 3.03039C21.7813 3.84206 21.7813 5.15805 20.9697 5.96973L19 7.9394Z"
        fill={getIconColor(primaryColor, entity)}
        fillRule="evenodd"
      />
    </svg>
  )
}
