import { css } from '@emotion/react'
export default {
  circleMenuContainer: css`
    cursor: pointer;
    > div > svg {
      transform: scale(1.5);
    }
  `,
  trigger: css`
    display: none;
  `,
}
