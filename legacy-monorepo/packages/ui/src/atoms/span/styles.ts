import { css } from '@emotion/react'

export default {
  spanStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    font-size: inherit
  `,
}
