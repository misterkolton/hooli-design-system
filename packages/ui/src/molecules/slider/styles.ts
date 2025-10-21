import { css } from '@emotion/react'
import { SliderEntity } from 'src/theme/theming/entities'

export default {
  sliderProgress: (isDisabled: boolean) => css`
    opacity: ${isDisabled ? 0.5 : 1};
    height: 100%;
    width: 100%;
  `,
  sliderBar: (sliderEntity: SliderEntity) => css`
    width: 100%;
    height: 6px;
    border-radius: ${sliderEntity.borderRadius};
    background: ${sliderEntity.backgroundColor};
    overflow: hidden;
  `,
  sliderHandle: (
    isDisabled: boolean,
    sliderEntity: SliderEntity,
    handleHeight: number,
  ) => css`
    width: ${`${handleHeight}px`};
    height: ${`${handleHeight}px`};
    background: ${sliderEntity.handleColor};
    border-radius: ${sliderEntity.handleRadius};
    box-shadow: ${sliderEntity.handleShadow};
    position: absolute;
    left: 0px;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  `,
}
