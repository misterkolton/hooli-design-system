import React, { FC } from 'react'
import { LogoProps } from '../logo'

export const StreamVAIcon: FC<Omit<LogoProps, 'brand'>> = ({ color }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 72 71.5"
    >
      <path
        fill={color === 'white' ? '#FFFFFF' : '#000000'}
        d="M31.7,71.2c1.4,0.2,2.9,0.3,4.3,0.3c10.7,0,20.2-4.6,26.8-12l-4.3-12.7H38.4L31.7,71.2z M56.2,38.8l-4.6-15.3l-2.9-10.6H48
        l-2.9,10.6l-3.9,13.3l-0.6,2.1H56.2z M2.7,22.2C1,26.4,0,31,0,35.8c0,12.6,6.5,23.6,16.4,30L2.7,22.2z M42.5,0.6
        C40.4,0.2,38.2,0,36,0C25.6,0,16.3,4.4,9.7,11.4l11.6,40.5l3.1,11.3H25l0.5-2h-0.1l1.8-6.5l0.8-2.8l0.8-2.6L42.5,0.6z M69.4,49.1
        C71.1,45,72,40.5,72,35.8C72,23.1,65.4,12,55.4,5.7L69.4,49.1z"
      />
    </svg>
  )
}
