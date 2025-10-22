import { css } from '@emotion/react'
import { entities } from 'src/theme/theming/entities'

const { mediaQueries } = entities

export default {
  closeButtonContainer: (top?: string, right?: string) => css`
    top: ${top ?? '-23px'};
    right: ${right ?? '-23px'};
    transform: translate(0px, 0px);
    transition: transform 0.25s ease;
    z-index: 10;
    border-radius: 20px;
    :hover {
      transform: translate(-2px, 2px);
      transition: transform 0.25s ease;
    }
    @media screen and (max-width: ${`${mediaQueries.rawValues.small}px`}) {
      border-radius: 11px;
      top: ${top ?? '7px'};
      right: ${right ?? '7px'};
    }
  `,
}
