import { css } from '@emotion/react'

export default {
  asideStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    font-size: inherit;
  `,
}
