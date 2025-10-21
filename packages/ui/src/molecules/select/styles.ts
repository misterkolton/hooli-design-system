import { css } from '@emotion/react'
import { AlignmentOptions } from 'src/exports/atoms'
import { HOCEntity } from 'src/theme/theming/entities'
import { SelectFocusType } from './select'

export default {
  selectContainer: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
  `,
  selectBody: (
    hocs: HOCEntity,
    focusColor: SelectFocusType,
    selectHeight?: string,
    selectWidth?: string,
  ) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${`${selectHeight || '50px'}`};
    width: ${`${selectWidth || 'auto'}`};
    padding: 0px 8px;
    border: none;
    outline: none;
    overflow: hidden;
    &:focus {
      border: solid 1.5px ${hocs.colors.swatches[focusColor].base}};
    }
  `,
  selectDropdownContents: (maxHeight?: string, alignToLeft?: boolean) => css`
    max-height: ${`${maxHeight}` || '226px'};
    overflow-y: auto;
    position: absolute;
    left: ${alignToLeft ? `0` : `50%`};
    transform: ${alignToLeft ? `initial` : `translateX(-50%)`};
  `,
  activeOption: (alignment?: AlignmentOptions) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${alignment === 'left'
      ? 'flex-start'
      : alignment === 'right'
      ? 'flex-end'
      : 'center'};
    .hide-on-active {
      display: none;
    }
  `,
  option: (alignment?: AlignmentOptions) => css`
    width: 100%;
    padding: 12px;
    border: none;
    display: flex;
    justify-content: ${alignment === 'left'
      ? 'flex-start'
      : alignment === 'right'
      ? 'flex-end'
      : 'center'};
    outline: none;
    align-items: center;
    cursor: pointer;
    font-size: inherit;
  `,
}
