import { css } from '@emotion/react'
import { Entities } from 'src/theme/theming/entities'
import { TextColor } from '../typography/text'

export default {
  anchorStyles: (
    generatedStyles: {},
    theme: Entities,
    color?: TextColor,
    decorated?: boolean,
  ) => css`
    ${generatedStyles};
    ${decorated
      ? css`
          text-decoration: underline;
          text-decoration-color: ${color};
          span {
            color: ${color};
          }
          :visited {
            color: ${theme.hocs.colors.swatches.primaryBrand.base};
            > span {
              color: ${theme.hocs.colors.swatches.primaryBrand.base};
            }
          }
        `
      : css`
          text-decoration: none;
          span {
            color: ${color};
          }
        `}
    white-space: nowrap;
    font-family: inherit;
    cursor: pointer;
  `,
}
