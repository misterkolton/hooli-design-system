import { css } from '@emotion/react'
import { SheetEntity, entities } from 'src/theme/theming/entities'

const { mediaQueries } = entities

export default {
  sheetWrapper: (mobile: boolean, layer?: number) => css`
    position: ${mobile ? 'absolute' : 'relative'};
    bottom: 0;
    left: 0;
    z-index: ${layer};
  `,
  sheet: (
    sheetEntity: SheetEntity,
    hasBackgroundElement: boolean,
    isMobile: boolean,
    backgroundColor?: string,
  ) => css`
    width: 100%;
    display: flex;
    background-color: ${backgroundColor || 'white'};
    place-items: start center;
    place-content: start center;
    flex-direction: column;
    border-radius: ${`${sheetEntity.mobileBorderRadius} ${sheetEntity.mobileBorderRadius} 0 0`};
    box-shadow: ${sheetEntity.boxShadow};
    position: ${isMobile ? 'absolute' : 'relative'};

    bottom: ${isMobile && 0};
    z-index: 3;
    order: 2;
    @media screen and (min-width: ${`${mediaQueries.rawValues.small}px`}) {
      border-radius: ${hasBackgroundElement
        ? `${sheetEntity.desktopBorderRadius} ${sheetEntity.desktopBorderRadius} 0 0 `
        : `${sheetEntity.desktopBorderRadius}`};
    }
    @media screen and (min-width: ${`${mediaQueries.rawValues.medium}px`}) {
      width: ${hasBackgroundElement ? '50%' : '100%'};
      order: 1;
      border-radius: ${hasBackgroundElement
        ? `${sheetEntity.desktopBorderRadius} 0 0 ${sheetEntity.desktopBorderRadius}`
        : `${sheetEntity.desktopBorderRadius}`};
    }
  `,
  dragBar: css`
    transform: translateX(-50%);
  `,
  childWrapper: css`
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  `,
}
