import React, { FC } from 'react'
import { Flex, Div, Text, TextColor, Capsule } from 'src/exports/atoms'
import {
  HOCSwatchColorKeys,
  Shadows,
} from 'src/helpers/hoc-types/entityValueTypes'

export type ReleaseNoteCapsuleColor = Extract<
  HOCSwatchColorKeys,
  | 'primaryBrand'
  | 'secondaryBrand'
  | 'warning'
  | 'danger'
  | 'success'
  | 'accent'
  | 'blueScale'
>

export type CapsuleType = 'new' | 'fix' | 'note'

export type ReleaseNoteProps = {
  capsule: {
    title: CapsuleType
    backgroundColor?: ReleaseNoteCapsuleColor
    fontColor?: TextColor
    boxShadow?: Shadows
  }
  note: { title: string; color?: TextColor }
}

export const ReleaseNote: FC<ReleaseNoteProps> = ({ capsule, note }) => {
  const getCapsuleSwatch = (type: CapsuleType): ReleaseNoteCapsuleColor => {
    switch (type) {
      case 'new':
        return 'success'
      case 'fix':
        return 'secondaryBrand'
      case 'note':
        return 'danger'
    }
  }

  return (
    <Flex width="100%">
      <Div>
        <Capsule
          title={capsule.title.toUpperCase()}
          backgroundColor={{
            swatch: capsule.backgroundColor ?? getCapsuleSwatch(capsule.title),
            shade: capsule.title === 'note' ? '_100' : 'base',
          }}
          boxShadow={capsule.boxShadow}
          fontColor={capsule.fontColor ?? 'inverseBody'}
        />
      </Div>
      <Div outset={{ left: 'x_5' }} left="x2" position="relative">
        <Text
          type="body"
          content={note.title}
          color={note.color ?? 'primaryBody'}
        />
      </Div>
    </Flex>
  )
}
