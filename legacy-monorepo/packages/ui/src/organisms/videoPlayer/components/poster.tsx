import React, { FC } from 'react'
import styles from '../styles'
import { PlayButton } from '../components/playButton'
import { Div } from 'src/atoms/div/div'
import {
  BorderRadius,
  LiteralUnion,
  HOCBorderRadiusKeys,
} from 'src/helpers/hoc-types/entityValueTypes'

type PosterProps = {
  poster: string
  hasShadow: boolean
  playButton: boolean
  duration?: string
  onClick?: () => void
  borderRadius?: BorderRadius | LiteralUnion<HOCBorderRadiusKeys>
}

export const Poster: FC<PosterProps> = ({
  poster,
  playButton,
  hasShadow,
  onClick,
  borderRadius,
}) => {
  return (
    <Div width="100%" height="100%">
      <Div
        onClick={onClick}
        css={styles.poster(poster)}
        borderRadius={borderRadius ? borderRadius : 'default'}
        boxShadow={hasShadow ? 'mediumDark' : undefined}
      />
      {playButton && onClick && (
        <PlayButton buttonSize={65} onClick={onClick} />
      )}
    </Div>
  )
}
