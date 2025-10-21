import { css } from '@emotion/react'

export default {
  subNavContainer: (isMobile: boolean) => css`
    width: 100%;
    height: calc(100vh - 128px);
    margin-bottom: 32px;
    overflow-y: auto;
    padding-bottom: ${isMobile && '60px'};
  `,
  accordionContainer: css``,
}
