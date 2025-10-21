import React, { FC } from 'react'
import { Loader } from '../../../exports/molecules'
import { UserCardSize } from '../userCard'
import { computeAvatarProperties } from '../../../helpers/style-functions/computeAvatarProperties'
import { useEntities } from 'src/hooks/useEntities'

export type UserCardLoaderProps = {
  size: UserCardSize
}

export const UserCardLoader: FC<UserCardLoaderProps> = ({ size }) => {
  const returnNumberFromSize = (
    size: UserCardSize,
    small: number,
    medium: number,
    large: number,
  ) => {
    switch (size) {
      case 'small':
        return small
      case 'medium':
        return medium
      case 'large':
        return large
    }
  }
  const { avatar } = useEntities()
  const circleDiameter = computeAvatarProperties(size, avatar.sizes).avatarSize
  const radius = circleDiameter / 2
  const contentHeight = returnNumberFromSize(size, 8, 10, 12)
  const contentWidth = returnNumberFromSize(size, 100, 132, 164)
  const containerWidth = circleDiameter + contentWidth + 32
  const borderRadius = returnNumberFromSize(size, 3, 4, 5)

  const computeY = (circleDiameter: number, contentHeight: number) => {
    const findYFromTop = (circleDiameter: number, contentHeight: number) => {
      return (circleDiameter - contentHeight * 3) / 2
    }

    const titleY = findYFromTop(circleDiameter, contentHeight)
    const subtitleY =
      findYFromTop(circleDiameter, contentHeight) + contentHeight * 2
    return {
      titleY,
      subtitleY,
    }
  }

  return (
    <Loader width={containerWidth} height={circleDiameter}>
      <circle cx={radius} cy={radius} r={radius} />
      <rect
        x={circleDiameter + 8}
        y={computeY(circleDiameter, contentHeight).titleY}
        rx={borderRadius}
        ry={borderRadius}
        width={contentWidth}
        height={contentHeight}
      />
      <rect
        x={circleDiameter + 8}
        y={computeY(circleDiameter, contentHeight).subtitleY}
        rx={borderRadius}
        ry={borderRadius}
        width={contentWidth + 16}
        height={contentHeight}
      />
    </Loader>
  )
}
