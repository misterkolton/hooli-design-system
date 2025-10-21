import { css } from '@emotion/react'

export default {
  scrollableContainer: (hasScrollBar?: boolean) => css`
    ::-webkit-scrollbar {
      display: ${hasScrollBar ? 'auto' : 'none'};
    }
  `,
}
