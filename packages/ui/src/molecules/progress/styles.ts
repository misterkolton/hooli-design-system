import { css } from '@emotion/react'

export default {
  progressContainer: css`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  progress: (percentage: string | number) => css`
    height: 8px;
    position: relative;
    width: 100%;
    margin-right: 8px;
    > div {
      background: ${percentage === 100
        ? '#4cd964'
        : 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc)'};
      width: ${percentage}%;
      height: 100%;
      position: relative;
      border-radius: inherit;
    }
  `,
}
