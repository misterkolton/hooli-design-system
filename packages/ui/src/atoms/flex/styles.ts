import { css } from '@emotion/react'

export default {
  flexStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    font-size: inherit;
  `,
  flexItemStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    display: flex;
    width: 100%;
  `,
}
