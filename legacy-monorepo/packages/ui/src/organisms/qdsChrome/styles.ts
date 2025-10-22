import { css } from '@emotion/react'

export default {
  chromeContainer: (innerHeight: number) => css`
    position: fixed;
    width: 100%;
    height: ${innerHeight}px;
    overflow: hidden;
    box-shadow: 0 3px 6px 0 #ccc;
    z-index: 0;
  `,
  revealingContent: css`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  `,
  content: (mobile: boolean) => css`
    height: 100%;
    position: absolute;
    z-index: 3;
    min-width: ${mobile ? '320px' : '576px'};
    overflow: hidden;
    width: 100%;
  `,
  contextWrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  innerContent: (mobile: boolean) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    z-index: 3;
    padding-bottom: ${mobile && '70px'};
  `,
  overlay: (innerWidth: number) => css`
    width: 100%;
    height: ${innerWidth > 576 ? '100%' : 'calc(100% - 46px)'};
    position: absolute;
    bottom: 0;
    z-index: 4;
  `,
  dragConstraints: (menuSize: number) => css`
    width: ${menuSize}px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    background: transparent;
    position: absolute;
    bottom: 0;
    z-index: 1;
  `,
}
