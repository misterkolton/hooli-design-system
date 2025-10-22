import { css } from '@emotion/react'
import { CheckboxType } from './checkbox'
import { InputsEntity } from 'src/theme/theming/entities'

export default {
  app: css`
    font-family: sans-serif;
    text-align: center;
  `,
  checkboxContainer: (inputsEntity: InputsEntity, type: CheckboxType) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    input[type='checkbox'] {
      opacity: 0;
    }
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    input[type='checkbox']:checked + label {
      > div {
        border: ${inputsEntity.checkbox.border} solid
          ${inputsEntity.colors[type]};
        transition: box-shadow 0.3s 0.05s, border 0.3s 0.14s;
        span {
          background: ${inputsEntity.colors[type]};
          transform: scale(1.1);
          transition: all 0.3s;
        }
      }
    }
  `,
  box: (inputsEntity: InputsEntity) => css`
    display: inline-block;
    width: 24px;
    height: 24px;
    border: ${inputsEntity.checkbox.border} solid
      ${inputsEntity.checkbox.unCheckedBackgroundColor};
    border-radius: ${inputsEntity.checkbox.borderRadius};
    margin-right: 8px;
    overflow: visible;
    &:hover {
      background: ${inputsEntity.checkbox.unCheckedBackgroundColor};
    }
  `,
  boxInner: css`
    width: 100%;
    height: 100%;
    transform: scale(0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    background-color: transparent;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  `,
}
