import React, { useMemo, useCallback } from 'react'
import { useEntities } from 'src/hooks/useEntities'
import { entities } from '../../theme/theming/entities'
import styles from './styles'
import {
  SpacingDirection,
  HOCSpacingKeys,
  Responsive,
} from 'src/helpers/hoc-types/entityValueTypes'
import { Div } from '../div/div'
import { LiteralUnion } from 'src/helpers/hoc-types/entityValueTypes'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { makeTextResponsive } from 'src/helpers/hoc-functions/makeTextResponsive'

export type TextProps = {
  type: TextType | Responsive<TextType>
  color?: TextColor
  content?: string | number
  children?: React.ReactNode
  alignment?: AlignmentType
  isItalic?: boolean
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  isStrikeThrough?: boolean
  weight?: WeightType
  lineHeight?: number
  whiteSpace?: WhiteSpaceType
  isInline?: boolean
  style?: React.CSSProperties
}
export type WhiteSpaceType = 'normal' | 'nowrap' | 'pre'
export type WeightType = keyof typeof entities.text.weights
export type TextType = keyof typeof entities.text.types
export type TextColor = keyof typeof entities.text.colors

export type AlignmentType = 'left' | 'center' | 'right'

export const Text = ({ ...props }: TextProps) => {
  const {
    type,
    color,
    children,
    content,
    alignment = 'left',
    isItalic,
    isStrikeThrough,
    outset,
    inset,
    weight,
    lineHeight,
    whiteSpace,
    isInline,
    style,
    ...rest
  } = props
  const { text } = useEntities()
  const { width } = useWindowSize()

  const getText = useCallback(
    (type: TextType) => {
      switch (type) {
        case 'heroTitle':
          return (
            <h1
              style={style}
              css={styles.heroTitle(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </h1>
          )
        case 'title':
          return (
            <h2
              style={style}
              css={styles.title(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </h2>
          )
        case 'subtitle':
          return (
            <h3
              style={style}
              css={styles.subtitle(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </h3>
          )
        case 'largeBody':
          return (
            <p
              style={style}
              css={styles.largeBody(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </p>
          )
        case 'body':
          return (
            <p
              style={style}
              css={styles.body(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </p>
          )
        case 'caption':
          return (
            <p
              style={style}
              css={styles.caption(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </p>
          )
        case 'footnote':
          return (
            <p
              style={style}
              css={styles.footnote(
                text,
                color,
                weight,
                alignment,
                isItalic,
                isStrikeThrough,
                lineHeight,
                whiteSpace,
                isInline,
              )}
              {...rest}
            >
              {children || content}
            </p>
          )
        default:
          return
      }
    },
    [
      color,
      weight,
      alignment,
      isItalic,
      isStrikeThrough,
      lineHeight,
      content,
      text,
      children,
      whiteSpace,
      isInline,
      style,
      rest,
    ],
  )

  const renderText = useMemo(
    () => makeTextResponsive(type, getText, width),
    [width, getText, type],
  )

  return (
    <>
      {inset || outset ? (
        <Div inset={inset} outset={outset}>
          {renderText}
        </Div>
      ) : (
        renderText
      )}
    </>
  )
}
