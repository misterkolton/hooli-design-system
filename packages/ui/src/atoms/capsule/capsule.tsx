import React, { FC } from 'react'
import { Text, TextColor } from 'src/atoms/typography/text'
import { Div } from 'src/atoms/div/div'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'
import { Shadows } from 'src/helpers/hoc-types/entityValueTypes'

export type CapsuleProps = {
  title: string
  backgroundColor?: BackgroundColor
  fontColor?: TextColor
  boxShadow?: Shadows
}

export const Capsule: FC<CapsuleProps> = ({
  title,
  backgroundColor,
  fontColor,
  boxShadow,
}) => {
  return (
    <Div
      inset={{ horizontal: 'x2' }}
      borderRadius="circle"
      backgroundColor={backgroundColor ?? { swatch: 'success', shade: 'base' }}
      display="inline-block"
      boxShadow={boxShadow}
    >
      <Text
        type="footnote"
        content={title}
        color={fontColor ?? 'primaryBody'}
        weight="bold"
        style={{ letterSpacing: '.2px' }}
      />
    </Div>
  )
}
