import { css } from '@emotion/react'
import { FilterType } from './filters'

export default {
  imageContainer: (isActive: boolean, width: string, height: string) => css`
    p {
      position: relative;
      z-index: 100;
      font-weight: ${isActive ? 500 : 400};
      color: ${isActive ? '#FF05A7' : '#3c3c3c'};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
  `,
  imageCss: (isActive: boolean) => css`
    width: 100%;
    height: 100%;
    transition: all 0.1s ease;
    position: relative;
    transform: ${isActive ? `scale(1)` : `scale(.88)`};
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    cursor: pointer;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border-radius: inherit;
    }
  `,
  image: (image: string) => css`
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
    background-image: url(${image});
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    &::before {
      content: '';
      background: inherit;
      width: 100%;
      height: 100%;
      display: block;
      z-index: 1;
      position: absolute;
      top: 16px;
      transform: scale(0.9);
      filter: blur(10px);
      opacity: 0.88;
      border-radius: inherit;
    }
    &::after {
      content: '';
      background: inherit;
      width: 100%;
      height: 100%;
      display: block;
      z-index: 2;
      position: absolute;
      border-radius: inherit;
    }
  `,
  filter: (filter: FilterType) => css`
    filter: ${filter.filter};
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    &:before {
      content: '';
      border-radius: inherit;
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      mix-blend-mode: ${filter.mixBlendMode || 'initial'};
      opacity: ${filter.opacity || 'initial'};
      background: ${filter.background || 'initial'};
    }
  `,
}
