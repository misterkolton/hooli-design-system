import React, { FC } from 'react'
import { SVGProps } from '../types/index'
import {
  getIconColor,
  getIconSize,
} from 'src/helpers/style-functions/getIconProperties'

export const Quotation: FC<SVGProps> = ({
  primaryColor,
  onClick,
  size,
  entity,
}) => (
  <svg
    onClick={onClick && (() => onClick())}
    xmlns="http://www.w3.org/2000/svg"
    width={getIconSize(size, entity)}
    height={getIconSize(size, entity)}
    viewBox=" 0 0 24 24"
    fill="none"
  >
    <path
      d="M7.85994 7.39708C8.54653 7.13208 9.26874 7 10 7C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9C9.5123 9 9.03548 9.08756 8.58291 9.26184C7.06285 9.86062 5.97501 11.6256 5.99992 13.3859L6.00002 13.4C6.00002 13.5563 6.01393 13.7064 6.04389 13.8711C6.14268 14.4145 5.78228 14.9351 5.2389 15.0339C4.69553 15.1327 4.17494 14.7723 4.07615 14.2289C4.02653 13.956 4.00046 13.6883 4.00002 13.4072C3.96784 10.9306 5.45812 8.34063 7.85436 7.39925L7.85994 7.39706L7.85994 7.39708Z"
      clip-rule="evenodd"
      fill-rule="evenodd"
      fill={getIconColor(primaryColor, entity)}
    ></path>
    <path
      d="M7.5 16C8.88071 16 10 14.8807 10 13.5C10 12.1193 8.88071 11 7.5 11C6.11929 11 5 12.1193 5 13.5C5 14.8807 6.11929 16 7.5 16Z"
      fill={getIconColor(primaryColor, entity)}
    ></path>
    <path
      d="M7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12ZM4 13.5C4 11.567 5.567 10 7.5 10C9.433 10 11 11.567 11 13.5C11 15.433 9.433 17 7.5 17C5.567 17 4 15.433 4 13.5Z"
      clip-rule="evenodd"
      fill-rule="evenodd"
      fill={getIconColor(primaryColor, entity)}
    ></path>
    <path
      d="M16.8599 7.39708C17.5465 7.13208 18.2687 7 19 7C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9C18.5123 9 18.0355 9.08756 17.5829 9.26184C16.0628 9.86062 14.975 11.6256 14.9999 13.3859L15 13.4C15 13.5563 15.0139 13.7064 15.0439 13.8711C15.1427 14.4145 14.7823 14.9351 14.2389 15.0339C13.6955 15.1327 13.1749 14.7723 13.0761 14.2289C13.0265 13.956 13.0005 13.6883 13 13.4072C12.9678 10.9306 14.4581 8.34063 16.8544 7.39925L16.8599 7.39706L16.8599 7.39708Z"
      clip-rule="evenodd"
      fill-rule="evenodd"
      fill={getIconColor(primaryColor, entity)}
    ></path>
    <path
      d="M16.5 16C17.8807 16 19 14.8807 19 13.5C19 12.1193 17.8807 11 16.5 11C15.1193 11 14 12.1193 14 13.5C14 14.8807 15.1193 16 16.5 16Z"
      fill={getIconColor(primaryColor, entity)}
    ></path>
    <path
      d="M16.5 12C15.6716 12 15 12.6716 15 13.5C15 14.3284 15.6716 15 16.5 15C17.3284 15 18 14.3284 18 13.5C18 12.6716 17.3284 12 16.5 12ZM13 13.5C13 11.567 14.567 10 16.5 10C18.433 10 20 11.567 20 13.5C20 15.433 18.433 17 16.5 17C14.567 17 13 15.433 13 13.5Z"
      clip-rule="evenodd"
      fill-rule="evenodd"
      fill={getIconColor(primaryColor, entity)}
    ></path>
  </svg>
)
