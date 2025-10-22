import { css } from '@emotion/react'
export default {
  navigationPillContainer: (height: number) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${height}px;
    display: flex;
    text-align: center;
    border-radius: 24px;
    z-index: 5;
    min-width: 320px;
  `,
  pillBackground: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(33.333%);
  `,

  pillCutOut: (cutOutSize: number) => css`
    position: relative;
    width: ${cutOutSize}px;
    height: ${cutOutSize}px;
    left: calc((33.3333% - ${cutOutSize}px) / 2);
    z-index: 5;
    border-radius: 50%;
    box-shadow: ${cutOutSize / 5}px ${cutOutSize / 2}px 0 #fff,
      ${-cutOutSize / 5}px ${cutOutSize / 2}px 0 #fff, 0 ${cutOutSize}px 0 #fff;

    &:before,
    &:after {
      content: ' ';
      position: absolute;
      width: 100vw;
      height: 100%;
      background-color: #fff;
      top: 30%;
      border-top: solid 2px #fff;
    }

    &:before {
      right: 100%;
      border-top-right-radius: 24px;
    }

    &:after {
      left: 100%;
      border-top-left-radius: 24px;
    }
  `,
  pillDot: (cutOutSize: number) => css`
    width: ${cutOutSize}px;
    height: ${cutOutSize}px;
    border-radius: 50%;
    background-color: rgba(50, 50, 50, 0.35);
    position: absolute;
    left: calc((33.3333% - ${cutOutSize}px) / 2);
    top: 0%;
    z-index: 4;
    transform: scale(0.85);
    box-shadow: 0px 0.5vh 1vh rgba(0, 0, 0, 0.3);
  `,
  pillItem: (height: number) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    top: 20%;
    width: 100%;
    height: ${height}px;
    > div {
      height: 100%;
    }
  `,
}
