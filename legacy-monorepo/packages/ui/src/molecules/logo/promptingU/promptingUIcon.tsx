import React, { FC } from 'react'
import { LogoProps } from '../logo'

export const PromptingUIcon: FC<Omit<LogoProps, 'brand'>> = ({ color }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 72 72"
    >
      <g>
        <path
          fill={color === 'white' ? '#FFFFFF' : '#000000'}
          d="M36,0C16.1,0,0,16.1,0,36c0,19.9,16.1,36,36,36s36-16.1,36-36C72,16.1,55.9,0,36,0z M36,68.1
		C18.3,68.1,3.9,53.7,3.9,36C3.9,18.3,18.3,3.9,36,3.9S68.1,18.3,68.1,36C68.1,53.7,53.7,68.1,36,68.1z"
        />
        <path
          fill={color === 'white' ? '#FFFFFF' : '#000000'}
          d="M36,10c-14.3,0-26,11.6-26,26c0,14.3,11.6,26,26,26s26-11.6,26-26C62,21.7,50.3,10,36,10z M49.2,38
		c0,0-15.7,9.4-18.9,11.1c-3.2,1.8-3-1.6-3-1.6l0.2-23.7c0-2.8,2.6-0.9,2.6-0.9l20,11.8C52.9,36.2,49.2,38,49.2,38z"
        />
      </g>
    </svg>
  )
}
