import { css } from '@emotion/react'

export default {
  scrollingIndicatorContainer: css`
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
  `,
  circleIndicatorContainer: (size?: string, backgroundColor?: string) => css`
    height: ${size || '50px'};
    width: ${size || '50px'};
    background-color: ${backgroundColor || '#0000007d'};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}
