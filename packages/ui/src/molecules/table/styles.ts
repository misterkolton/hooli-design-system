import { css } from '@emotion/react'

export default {
  table: (rowCount: number) => css`
    display: grid;
    grid-template-rows: repeat(${rowCount});
  `,
  tableRow: (columns: number, breakPoint: number) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: ${breakPoint}px) {
      grid-template-columns: repeat(${columns}, 1fr);
    }
  `,
  rowItem: (alignment: string) => css`
    display: grid;
    justify-items: ${alignment === 'left'
      ? 'start'
      : alignment === 'right'
      ? 'end'
      : 'center'};
    align-items: center;
    padding: ${alignment === 'left'
      ? '0 0 0 8px'
      : alignment === 'right'
      ? '0 8px 0 0'
      : 'initial'};
    width: 100%;
    height: 100%;
  `,
}
