import { css } from '@emotion/react'

export default {
  sectionStyles: (generatedStyles: {}) => css`
    ${generatedStyles}
    font-size: inherit;
  `,
}
