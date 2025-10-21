import { css } from '@emotion/react'

export default {
  grid: (
    gap: number,
    columnSize: number,
    rowSize: number,
    maxWidth?: number,
    height?: string,
    overflow?: string,
    isDense?: boolean,
  ) => css`
    display: grid;
    max-width: ${maxWidth && maxWidth}px;
    width: 100%;
    grid-gap: ${gap}px;
    grid-template-columns: repeat(auto-fit, minmax(${columnSize}px, 1fr));
    grid-auto-rows: minmax(${rowSize}px, auto);
    grid-auto-flow: ${isDense ? 'dense' : 'row'};
    height: ${height && height};
    overflow: ${overflow && overflow};
  `,
  gridItem: (
    gridRowSpan?: number,
    gridColSpan?: number,
    gridRowStart?: number,
    gridColStart?: number,
    aspectRatio?: string,
  ) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    grid-column-end: span ${gridColSpan ? gridColSpan : 1};
    grid-row-end: span ${gridRowSpan ? gridRowSpan : 1};
    grid-column-start: ${gridColStart ? gridColStart : 'auto'};
    grid-row-start: ${gridRowStart ? gridRowStart : 'auto'};
    aspect-ratio: ${aspectRatio ? aspectRatio : 'auto'};
  `,
}
