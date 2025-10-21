import { css } from '@emotion/react'
import { ButtonsEntity, Entities, TextEntity } from 'src/theme/theming/entities'
import { computeButtonSizeProperties } from 'src/helpers/style-functions/computeButtonSizeProperties'
import { SizeType } from 'src/types/global'
import { ButtonType, ButtonStyle } from './button'
import Color from 'color'
import { WeightType } from 'src/exports/atoms'

export default {
  buttonStyles: (
    type: ButtonType,
    buttonStyle: ButtonStyle,
    entities: Entities,
    size: SizeType,
    hover?: boolean,
    outlined?: boolean,
    fullWidth?: boolean,
    backgroundColorOverride?: string,
    boxShadow?: boolean,
  ) => {
    const padding = outlined
      ? computeButtonSizeProperties(size, entities.buttons.sizes).outlinedInset
          .vertical
      : type === 'smoke'
      ? size === 'xSmall'
        ? '4.25px'
        : size === 'small'
        ? '6.5px'
        : size === 'medium'
        ? '3.75px'
        : size === 'large'
        ? '9px'
        : '20.25px'
      : undefined

    const boxShadowStyle = boxShadow
      ? outlined
        ? 'none'
        : backgroundColorOverride
        ? entities.buttons.boxShadow(
            'xLight',
            Color(backgroundColorOverride).rgb().alpha(0.5).toString(),
          )
        : type === 'shadow'
        ? entities.buttons.boxShadow(
            'light',
            Color(buttonStyle.fontColor).rgb().alpha(0.5).toString(),
          )
        : entities.buttons.boxShadow(
            'xLight',
            Color(buttonStyle.backgroundColor).rgb().alpha(0.5).toString(),
          )
      : 'none'

    return css`
      background: ${outlined
        ? 'transparent'
        : backgroundColorOverride
        ? backgroundColorOverride
        : buttonStyle.backgroundColor};
      color: ${buttonStyle.fontColor};
      border: ${outlined
        ? backgroundColorOverride
          ? `${entities.buttons.borderSize} solid ${backgroundColorOverride}`
          : type === 'shadow'
          ? `${entities.buttons.borderSize} solid ${buttonStyle.fontColor}`
          : `${entities.buttons.borderSize} solid ${buttonStyle.backgroundColor}`
        : type === 'smoke'
        ? `${entities.buttons.borderSize} solid ${entities.hocs.colors.swatches.grayScale._1000}`
        : 'none'};
      box-shadow: ${boxShadowStyle};
      width: ${fullWidth && '100%'};
      padding: ${!outlined &&
      computeButtonSizeProperties(size, entities.buttons.sizes).inset};
      padding-top: ${padding};
      padding-bottom: ${padding};
      padding-left: ${outlined
        ? computeButtonSizeProperties(size, entities.buttons.sizes)
            .outlinedInset.vertical
        : type === 'smoke'
        ? '16px'
        : undefined};
      padding-right: ${outlined
        ? computeButtonSizeProperties(size, entities.buttons.sizes)
            .outlinedInset.vertical
        : type === 'smoke'
        ? '24px'
        : undefined};
      display: flex;
      justify-content: center;
      font-size: inherit;
      line-height: 1.2;
      border-radius: ${computeButtonSizeProperties(size, entities.buttons.sizes)
        .borderRadius};
      cursor: pointer;
      outline: none;
      :disabled {
        opacity: 0.35;
        cursor: not-allowed;
        :hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
      :hover {
        transform: ${hover && 'translateY(3px)'};
        box-shadow: ${hover && 'none'};
        transition: ${hover && 'transform 0.2s, box-shadow 0.2s ease-out'};
      }
    `
  },
  buttonTitle: (
    type: ButtonType,
    buttonEntity: ButtonsEntity,
    size: SizeType,
    textEntity: TextEntity,
    fontWeight?: WeightType,
  ) => css`
    font-family: inherit;
    font-size: ${computeButtonSizeProperties(size, buttonEntity.sizes)
      .fontSize};
    white-space: nowrap;
    font-weight: ${fontWeight
      ? textEntity.weights[fontWeight]
      : type === 'smoke'
      ? textEntity.weights.bold
      : textEntity.weights.regular};
  `,
}
