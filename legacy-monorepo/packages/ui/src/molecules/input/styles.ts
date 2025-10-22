import { css } from '@emotion/react'
import { InputsEntity } from 'src/theme/theming/entities'

export default {
  inputContainer: (
    active: boolean,
    inputEntity: InputsEntity,
    isLabelPlaceholder: boolean,
    height: number,
    width: number,
    isPhoneInput?: boolean,
    icon?: boolean,
    isFullWidth?: boolean,
    isDisabled?: boolean,
  ) => css`
    font-family: ${inputEntity.fontFamily};
    display: flex;
    align-items: center;
    height: ${`${height}px`};
    border-radius: ${inputEntity.text.borderRadius};
    background: ${inputEntity.backgroundColor};
    padding: ${icon ? '0px 8px 0px 0px' : '0px 8px'};
    width: ${isFullWidth ? '100%' : `${width}px`};
    opacity: ${isDisabled && 0.5};
    cursor: ${isDisabled && 'not-allowed'};
    label {
      position: absolute;
      font-size: ${inputEntity.text.labelFontSize};
      top: ${isLabelPlaceholder ? (active ? '-24px' : '10px') : '-24px'};
      right: ${isLabelPlaceholder ? (active ? 0 : '-8px') : 0};
      color: ${isLabelPlaceholder
        ? active
          ? `${inputEntity.colors.blue}`
          : 'transparent'
        : `${inputEntity.colors.blue}`};
      width: 100%;
      z-index: -1;
      transition: ${isLabelPlaceholder && 'all 0.3s ease-out'};
    }
    input {
      font-family: inherit;
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      width: ${icon ? 'calc(100% - 2px)' : '100%'};
      height: ${`${height}px`};
      border-radius: ${inputEntity.text.borderRadius};
      display: inline-block;
      border: 0;
      outline: none;
      font-size: ${inputEntity.text.textFontSize};
      padding: ${isPhoneInput ? `0px 8px 0px 73px` : '0px 8px'};
      color: ${inputEntity.fontColor};
    }
    input::placeholder {
      color: #6f8394;
      transition: color 0.3s ease-in;
      font-family: inherit;
    }
    input:invalid {
      box-shadow: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
    }

    &:focus-within {
      input::placeholder {
        color: transparent;
        transition: color 0.3s;
      }
      span {
        transform: scale(1.1);
        transition: transform 0.3s;
      }
      label {
        top: -24px;
        right: 0;
        z-index: 3;
        color: ${inputEntity.colors.blue};
        transition: all 0.3s;
      }
    }
  `,
  numberInputButtons: (isDisabled?: boolean) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 100%;
    opacity: ${isDisabled && 0.5};
    svg {
      opacity: ${isDisabled && 0.5};
    }
  `,
  outerglow: (
    inputEntity: InputsEntity,
    width: number,
    height?: number,
    isFullWidth?: boolean,
  ) => css`
    width: ${isFullWidth ? 'calc(100% + 2px)' : `${width + 2}px`};
    height: ${height && `${height + 2}px`};
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: -1;
    border-radius: calc(${`${inputEntity.text.borderRadius}`} + 1px);
    padding: 4px;
    border: ${inputEntity.text.borderWidth} solid transparent;
  `,
  iconContainer: css`
    height: 100%;
    padding-left: 16px;
  `,
  inputWrapper: css`
    font-family: inherit;
    position: relative;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
  `,
}
