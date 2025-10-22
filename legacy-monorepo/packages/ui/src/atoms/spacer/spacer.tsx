import React, { FC } from 'react'
import { Div } from '../div/div'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'

type SpaceOrientation = 'horizontal' | 'vertical'

export type SpacerProps = {
  space: HOCSpacingKeys
  orientation?: SpaceOrientation
}

export const Spacer: FC<SpacerProps> = ({
  space,
  orientation = 'vertical',
}) => {
  return (
    <Div
      minHeight={orientation === 'vertical' ? space : '100%'}
      minWidth={orientation === 'vertical' ? '100%' : space}
    />
  )
}
