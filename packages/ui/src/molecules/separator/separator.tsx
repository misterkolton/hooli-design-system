import React, { FC } from 'react'
import styles from './styles'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { useEntities } from 'src/hooks/useEntities'

export type SeparatorProps = {
  orientation: SeparatorOrientationType
  dashed?: boolean
  caption?: string
  shouldCaptionWrap?: boolean
}
export type SeparatorOrientationType = 'vertical' | 'horizontal'

export const Separator: FC<SeparatorProps> = ({
  orientation,
  dashed,
  caption,
  shouldCaptionWrap = true,
}) => {
  const { separator } = useEntities()
  return (
    <div css={styles.separatorContainer(orientation)}>
      <Div css={styles.hrContainer(orientation)}>
        <hr css={styles.separator(separator, orientation, dashed)}></hr>
      </Div>
      <Text
        color="primaryBody"
        type="caption"
        whiteSpace={shouldCaptionWrap ? 'normal' : 'nowrap'}
        inset={
          caption
            ? orientation === 'vertical'
              ? { vertical: 'x_25', horizontal: 'x0' }
              : { vertical: 'x0', horizontal: 'x1_5' }
            : dashed
            ? 'x_25'
            : 'x0'
        }
      >
        {caption}
      </Text>
      <Div css={styles.hrContainer(orientation)}>
        <hr css={styles.separator(separator, orientation, dashed)}></hr>
      </Div>
    </div>
  )
}
