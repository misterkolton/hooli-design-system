import { css } from '@emotion/react'
import { SeparatorOrientationType } from './separator'
import { SeparatorEntity } from 'src/theme/theming/entities'

export default {
  separatorContainer: (orientation: SeparatorOrientationType) => css`
    width: ${orientation === 'horizontal' && '100%'};
    height: ${orientation === 'vertical' && '100%'};
    display: flex;
    align-items: center;
    flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
  `,
  separator: (
    separatorEntity: SeparatorEntity,
    orientation: SeparatorOrientationType,
    dashed?: boolean,
  ) => css`
    border: none;
    border-top: ${orientation === 'horizontal'
      ? `${separatorEntity.border} ${dashed ? 'dashed' : 'solid'} ${
          separatorEntity.color
        }`
      : 'none'};

    border-left: ${orientation === 'vertical'
      ? `${separatorEntity.border} ${dashed ? 'dashed' : 'solid'} ${
          separatorEntity.color
        }`
      : 'none'};
    width: ${orientation === 'horizontal' && '100%'};
    height: ${orientation === 'vertical' && '100%'};
    margin: 0px;
  `,
  hrContainer: (orientation: SeparatorOrientationType) => css`
    width: ${orientation === 'horizontal' && '100%'};
    height: ${orientation === 'vertical' && '100%'};
    display: flex;
  `,
}
