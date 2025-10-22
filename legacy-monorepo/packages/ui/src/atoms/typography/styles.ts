import { css } from '@emotion/react'
import { TextEntity } from 'src/theme/theming/entities'
import { TextColor, AlignmentType, WhiteSpaceType } from './text'
import { WeightType } from './text'

export default {
  heroTitle: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color
      ? textEntity.colors[color]
      : textEntity.types.heroTitle.color};
    font-size: ${textEntity.types.heroTitle.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.heroTitle.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.heroTitle.lineHeight};
    font-family: ${textEntity.types.heroTitle.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,
  title: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color ? textEntity.colors[color] : textEntity.types.title.color};
    font-size: ${textEntity.types.title.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.title.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.title.lineHeight};
    font-family: ${textEntity.types.title.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,
  subtitle: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color
      ? textEntity.colors[color]
      : textEntity.types.subtitle.color};
    font-size: ${textEntity.types.subtitle.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.subtitle.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.subtitle.lineHeight};
    font-family: ${textEntity.types.subtitle.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,

  largeBody: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color
      ? textEntity.colors[color]
      : textEntity.types.largeBody.color};
    font-size: ${textEntity.types.largeBody.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.largeBody.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.largeBody.lineHeight};
    font-family: ${textEntity.types.largeBody.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,
  body: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color ? textEntity.colors[color] : textEntity.types.body.color};
    font-size: ${textEntity.types.body.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.body.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.body.lineHeight};
    font-family: ${textEntity.types.body.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,
  caption: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color ? textEntity.colors[color] : textEntity.types.caption.color};
    font-size: ${textEntity.types.caption.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.caption.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.caption.lineHeight};
    font-family: ${textEntity.types.caption.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,

  footnote: (
    textEntity: TextEntity,
    color?: TextColor,
    weight?: WeightType,
    alignment?: AlignmentType,
    italic?: boolean,
    strikeThrough?: boolean,
    lineHeight?: number,
    whiteSpace?: WhiteSpaceType,
    isInline?: boolean,
  ) => css`
    color: ${color
      ? textEntity.colors[color]
      : textEntity.types.footnote.color};
    font-size: ${textEntity.types.footnote.size};
    font-weight: ${weight
      ? textEntity.weights[weight]
      : textEntity.types.footnote.fontWeight};
    line-height: ${lineHeight ?? textEntity.types.footnote.lineHeight};
    font-family: ${textEntity.types.footnote.fontFamily};
    margin: 0;
    text-align: ${alignment === 'left'
      ? 'left'
      : alignment === 'center'
      ? 'center'
      : 'right'};
    font-style: ${italic ? 'italic' : 'normal'};
    text-decoration: ${strikeThrough && 'line-through'};
    white-space: ${whiteSpace ? whiteSpace : 'normal'};
    display: ${isInline ? 'inline' : 'block'};
  `,
}
