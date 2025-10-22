import { css } from '@emotion/react'
import { ListOrientation } from '../list/list'
import { Entities } from 'src/theme/theming/entities'

export default {
  listItem: (
    generatedStyles: {},
    orientation: ListOrientation,
    entities: Entities,
  ) => css`
    list-style: inherit;
    padding: ${orientation === 'vertical'
      ? entities.spacing.x2
      : `0px ${entities.spacing.x1}`};
    width: 100%;
    transition: ease-in-out 0.35s;
    font-size: inherit;
    ${generatedStyles};
  `,
}
