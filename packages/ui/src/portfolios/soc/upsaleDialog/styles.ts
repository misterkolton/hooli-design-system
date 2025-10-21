import { css } from '@emotion/react'

export default {
  featureListContainer: () => css`
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    scrollbar-width: none;
  `,
}
