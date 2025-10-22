import React, { FC } from 'react'
import styles from './styles'
import { Avatar } from 'src/atoms/avatar/avatar'
import { InfoBlock } from 'src/molecules/infoBlock/infoBlock'
import { Div } from 'src/atoms/div/div'
import { Country } from 'src/types/global'

export type UserCardProps = {
  profileImage?: string
  firstName: string
  lastName: string
  heading?: string
  size: UserCardSize
  caption: string
  country?: Country
  minimize?: boolean
  active?: boolean
}

export type UserCardSize = 'large' | 'medium' | 'small'

export const UserCard: FC<UserCardProps> = ({
  profileImage,
  firstName,
  lastName,
  size,
  caption,
  country,
  minimize,
  active,
  heading,
}) => {
  const variants = {
    expand: { opacity: 1, transition: { delay: 0.03 } },
    minimize: { opacity: 0 },
  }

  return (
    <div css={styles.userCardContainer}>
      <Avatar
        isActive={active}
        size={size}
        avatarImage={profileImage}
        initials={
          firstName || lastName
            ? `${firstName && firstName[0].toUpperCase()}${
                lastName && lastName[0].toUpperCase()
              }`
            : undefined
        }
      />
      {!minimize && (
        <Div
          css={styles.userInfoContainer}
          variants={variants}
          animate={minimize ? 'minimize' : 'expand'}
          initial={'minimize'}
        >
          <InfoBlock
            size={size}
            caption={caption}
            heading={heading ? heading : `${firstName} ${lastName}`}
            country={country}
          />
        </Div>
      )}
    </div>
  )
}
