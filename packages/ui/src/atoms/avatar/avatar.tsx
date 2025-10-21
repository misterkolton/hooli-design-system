import React, { FC } from 'react'
import { Text } from 'src/atoms/typography/text'
import styles from './styles'
import { SizeType } from 'src/types/global'
import { AnimatedCheckMark } from '../animatedCheckMark/animatedCheckMark'
import { Div } from '../div/div'
import { useEntities } from 'src/hooks/useEntities'
import { computeTextTypeFromSize } from 'src/helpers/style-functions/computeTextTypeFromSize'

export type AvatarProps = {
  avatarImage?: string
  initials?: string
  size: SizeType
  isActive?: boolean
  isSelected?: boolean
}

export const Avatar: FC<AvatarProps> = ({
  avatarImage,
  size,
  isActive,
  initials,
  isSelected,
}) => {
  const { avatar } = useEntities()
  const sizeMap = avatar.sizes

  return (
    <Div css={styles.avatarContainer(size, sizeMap, avatar, avatarImage)}>
      {!avatarImage && (
        <Text type={computeTextTypeFromSize(size)} color="primaryBody">
          {initials}
        </Text>
      )}
      {isSelected ? (
        <Div css={styles.checkmarkContainer(size, sizeMap)}>
          <AnimatedCheckMark
            sizeMap={{
              xSmall: avatar.sizes.xSmall.bubbleSize,
              small: avatar.sizes.small.bubbleSize,
              medium: avatar.sizes.medium.bubbleSize,
              large: avatar.sizes.large.bubbleSize,
              xLarge: avatar.sizes.xLarge.bubbleSize,
            }}
            filled={true}
            size={size}
          />
        </Div>
      ) : (
        isActive && (
          <span
            css={styles.activeBubble(avatar, size, sizeMap, isActive)}
          ></span>
        )
      )}
    </Div>
  )
}
