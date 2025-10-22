import { css } from '@emotion/react'

export default {
  expandedButtonContainer: css`
    margin-bottom: 65px;
    @media (min-height: 600px) {
      margin-bottom: initial;
    }
  `,
  awardCardContainer: css`
    &:hover {
      > div:first-of-type {
        transform: scale(1.06);
        transition: transform 0.2s ease-in-out;
      }
    }
  `,
  incremental: css`
    white-space: nowrap;
  `,
}
