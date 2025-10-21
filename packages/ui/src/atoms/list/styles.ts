import { css } from '@emotion/react'
import { ListOrientation, AlignmentOptions, ListStyleType } from './list'

export default {
  listContainer: (
    orientation: ListOrientation,
    alignment: AlignmentOptions,
    listStyle: ListStyleType,
    generatedStyles: {},
  ) => css`
    list-style-type: ${listStyle};
    margin: 0;
    display: flex;
    flex-direction: ${orientation === 'vertical' ? 'column' : 'row'};
    justify-content: ${orientation === 'horizontal' && alignment === 'left'
      ? 'flex-start'
      : alignment === 'center'
      ? 'center'
      : 'flex-end'};
    align-items: ${orientation === 'vertical' && alignment === 'left'
      ? 'flex-start'
      : alignment === 'center'
      ? 'center'
      : 'flex-end'};
    padding: 0;
    ${generatedStyles};
    font-size: inherit;
  `,
}
