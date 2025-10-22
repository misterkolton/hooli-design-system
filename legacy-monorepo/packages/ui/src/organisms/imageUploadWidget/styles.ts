import { css } from '@emotion/react'

export default {
  stickersContainer: css`
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
  `,
}
