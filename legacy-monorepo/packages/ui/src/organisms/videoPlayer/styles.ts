import { css } from '@emotion/react'
import { IconsEntity } from 'src/theme/theming/entities'

export default {
  mediaFrame: (
    width: string,
    height?: string,
    maxHeight?: string,
    minWidth?: string,
  ) => css`
    width: ${width};
    height: ${height || 'auto'};
    max-height: ${maxHeight || '395px'};
    min-width: ${minWidth};
  `,
  poster: (image: string) => css`
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    padding-bottom: 65%;
    background-image: ${`url(${image})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  `,
  videoPlayer: (isPlaying: boolean) => css`
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    padding-bottom: ${isPlaying ? '65%' : 0};
    position: relative;
    overflow: ${isPlaying ? 'hidden' : 'initial'};
    transition: all 0.5s cubic-bezier(0, 0.99, 0.67, 1);
    > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: inherit;
    }
  `,
  playButton: (size: number, iconEntity: IconsEntity) => css`
    width: ${size}px;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(234, 234, 234, 0.77);
    box-shadow: 0 4px 7px rgba(169, 172, 175, 0.58);
    cursor: pointer;
    padding: 4px;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: white;
      transition: all 0.5s cubic-bezier(0, 0.99, 0.67, 1);
    }
    &:hover {
      > div {
        transform: scale(1.28);
        transition: all 0.5s cubic-bezier(0, 0.99, 0.67, 1);
        background: ${iconEntity.colors.primaryBrand};
        > svg > path {
          stroke: ${iconEntity.colors.inverseBodyText};
          fill: ${iconEntity.colors.inverseBodyText};
        }
      }
    }
  `,
}
