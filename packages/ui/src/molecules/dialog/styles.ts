import { css } from '@emotion/react'

export default {
  dialogContainer: css`
    min-width: 308px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  `,
  closeIconWrapper: css`
    top: -8px;
    right: -8px;
    transform: translate(0px, 0px);
    transition: transform 0.25s ease;
    :hover {
      transform: translate(-2px, 2px);
      transition: transform 0.25s ease;
    }
  `,
}
