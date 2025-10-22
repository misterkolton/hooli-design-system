import React, { FC } from 'react'
import styles from '../styles'
import { Icon } from 'src/atoms/iconography/components/icon'
import { useEntities } from 'src/hooks/useEntities'
import { Div } from 'src/atoms/div/div'
import { SizeType } from 'src/types/global'

type PlayButtonProps = {
  buttonSize: number
  iconSize?: SizeType
  onClick: () => void
}

export const PlayButton: FC<PlayButtonProps> = ({
  buttonSize,
  iconSize,
  onClick,
}) => {
  const { icons } = useEntities()
  return (
    <Div
      borderRadius="circle"
      onClick={onClick}
      css={styles.playButton(buttonSize, icons)}
    >
      <Div borderRadius="circle">
        <Icon
          name="play"
          size={iconSize ? iconSize : 'medium'}
          primaryColor="primaryBrand"
        />
      </Div>
    </Div>
  )
}
