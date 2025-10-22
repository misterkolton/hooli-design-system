import { css } from '@emotion/react'

export default {
  divStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    font-size: inherit;
  `,
}
