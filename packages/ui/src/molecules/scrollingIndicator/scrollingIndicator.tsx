import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import styles from './styles'

export type ScrollingIndicatorProps = {
  size?: string
  backgroundColor?: string
}
export const ScrollingIndicator: FC<ScrollingIndicatorProps> = ({
  size,
  backgroundColor,
}) => {
  return (
    <Div css={styles.scrollingIndicatorContainer}>
      <Div css={styles.circleIndicatorContainer(size, backgroundColor)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          style={{
            height: `calc(${size ?? '50px'} / 1.5)`,
            width: 17,
            position: 'relative',
            top: 2,
          }}
          enableBackground="new 0 0 17 46"
          version="1.1"
          viewBox="0 0 17 46"
          xmlSpace="preserve"
        >
          <defs>
            <linearGradient id="grad2" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#d9d9d9"></stop>
              <stop offset="33%" stopColor="#d9d9d9" stopOpacity="0.7"></stop>
              <stop offset="50%" stopColor="#fff"></stop>
              <stop offset="66%" stopColor="#d9d9d9" stopOpacity="0.7"></stop>
              <stop offset="100%" stopColor="#d9d9d9"></stop>
            </linearGradient>
          </defs>
          <g>
            <animateTransform
              attributeName="gradientTransform"
              attributeType="XML"
              dur="2s"
              from="0 -1"
              repeatCount="indefinite"
              restart="whenNotActive"
              to="0 1"
              type="translate"
              xlinkHref="#grad2"
            ></animateTransform>
            <path
              d="M8.5 2C4.9 2 2 4.9 2 8.4v9.1C2 21.1 4.9 24 8.5 24s6.5-2.9 6.5-6.4V8.4C15 4.9 12.1 2 8.5 2z"
              style={{ fill: 'none' }}
            ></path>
            <path
              d="M8.5 0C3.8 0 0 3.8 0 8.4v9.1C0 22.2 3.8 26 8.5 26s8.5-3.8 8.5-8.4V8.4C17 3.8 13.2 0 8.5 0zM15 17.6c0 3.5-2.9 6.4-6.5 6.4S2 21.1 2 17.6V8.4C2 4.9 4.9 2 8.5 2S15 4.9 15 8.4v9.2zM8.5 5.1c-.5 0-1 .5-1 1V9c0 .5.5 1 1 1s1-.5 1-1V6.1c0-.5-.5-1-1-1zm4.6 27L8 36.6l-5.1-4.5c-.2-.2-.6-.2-.8.1-.2.2-.1.6.1.8l5.5 4.8c.1.1.2.1.3.1l.3-.1 5.5-4.8c.2-.2.3-.6"
              style={{ fill: `url(#grad2)` }}
            ></path>
          </g>
        </svg>
      </Div>
    </Div>
  )
}
