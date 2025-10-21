import { css } from '@emotion/react'
import { InputsEntity } from 'src/theme/theming/entities'

export default {
  pinForm: (inputEntity: InputsEntity) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input[type='tel']::-webkit-inner-spin-button,
    input[type='tel']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    font-family: ${inputEntity.fontFamily};
  `,
  pinBoxContainer: css`
    width: 100%;
    display: flex;
  `,
  pinBox: (inputEntity: InputsEntity) => css`
    font-size: inherit;
    font-family: inherit;
    height: 50px;
    width: 40px;
    text-align: center;
    margin: 0px 8px;
    background: ${inputEntity.backgroundColor};
    border-radius: ${inputEntity.text.borderRadius};
    appearance: none;
    outline: none;
    border: none;
    &:focus {
      border: ${inputEntity.text.borderWidth} solid
        ${inputEntity.text.defaultFocusColor};
    }
  `,
}
