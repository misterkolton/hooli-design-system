import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Avatar } from 'src/atoms/avatar/avatar'
import { FlexItem } from 'src/atoms/flex/flexItem'
import { IconLink } from 'src/molecules/iconLink/iconLink'
import { CircleMenu } from '../circleMenu/circleMenu'
import { Item, UserInfo } from '../qdsChrome/qdsChrome'
import styles from './styles'

type NavigationPillType = {
  circleSize: number
  height: number
  links: Item[]
  quickLinks: Item[]
  user: UserInfo
  accountRouteOnClick: () => void
  setIsExpanded: (isExpanded: boolean) => void
  isSheetOpen: boolean
  setSheetIsOpen: (isSheetOpen: boolean) => void
}

export const NavigationPill: FC<NavigationPillType> = ({
  circleSize,
  height,
  links,
  user,
  accountRouteOnClick,
  setIsExpanded,
  isSheetOpen,
  setSheetIsOpen,
}) => {
  const itemCountFromLinks = links && links.length
  const circleLocation = links[Math.floor(itemCountFromLinks / 2)]
  return (
    <motion.div css={styles.navigationPillContainer(height)}>
      <motion.div css={styles.pillBackground}>
        <motion.div css={styles.pillCutOut(circleSize)} />
        <motion.div css={styles.pillDot(circleSize)}></motion.div>
      </motion.div>
      {links.map((link, index) => {
        return link.title !== circleLocation.title ? (
          <motion.div key={index + 1} css={styles.pillItem(circleSize)}>
            <IconLink
              icon={link.icon}
              fill="primaryBodyText"
              onClick={() => {
                link.onClick()
                setIsExpanded(false)
              }}
              isActive={link.isActive}
            />
          </motion.div>
        ) : (
          <CircleMenu
            key={index + 1}
            icon={'plus'}
            size={'large'}
            isOpen={isSheetOpen}
            setIsSheetOpen={setSheetIsOpen}
          />
        )
      })}
      <FlexItem
        onClick={accountRouteOnClick}
        height={`${circleSize}px`}
        cursor="pointer"
        justifyContent={'center'}
        alignItems={'center'}
        top={'20%'}
        position={'relative'}
      >
        <Avatar avatarImage={user.profileImage} size={'xSmall'}></Avatar>
      </FlexItem>
    </motion.div>
  )
}
