import React, { useState } from 'react'
import { Div } from 'src/atoms/div/div'
import { IconLink } from '../iconLink/iconLink'
import { Item, UserInfo } from 'src/organisms/qdsChrome/qdsChrome'
import { Span } from 'src/atoms/span/span'
import { Icon } from 'src/atoms/iconography/components/icon'
import { IconType } from 'src/atoms/iconography/types'
import { Flex } from 'src/atoms/flex/flex'
import { FlexItem } from 'src/atoms/flex/flexItem'
import { Tooltip } from '../tooltip/tooltip'
import { motion } from 'framer-motion'
import styles from './styles'
import { Avatar } from 'src/exports/atoms'
import { useEntities } from 'src/hooks/useEntities'

type NavigationProps = {
  navLinks: Item[]
  logo: IconType
  user: UserInfo
  setIsExpanded: (isExpanded: boolean) => void
  setMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
  isExpanded: boolean
}

export const Navigation: React.FC<NavigationProps> = ({
  navLinks,
  logo,
  user,
  setMenuOpen,
  isMenuOpen,
  isExpanded,
  setIsExpanded,
}) => {
  const { navigation } = useEntities()
  const [hoverIndex, setHoverIndex] = useState(-1)

  const tooltipVariants = {
    hoverOn: {
      opacity: 1,
    },
    hoverOff: {
      opacity: 0,
    },
  }

  return (
    <aside css={styles.sideNav(navigation)}>
      <Div css={styles.sideNavContent}>
        <Div height="100%">
          <Div css={styles.logoContainer} inset={{ vertical: 'x3' }}>
            <Span>
              <Icon name={logo} size="medium" primaryColor="default" />
            </Span>
            <Flex
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
              outset={{ top: 'x2' }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded && (
                <Span
                  position="absolute"
                  left="2px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    name="chevron"
                    primaryColor="default"
                    size="xSmall"
                    orientation="left"
                  />
                </Span>
              )}
              <Icon name="hamburger" primaryColor="default" size="small" />{' '}
            </Flex>
          </Div>
          <Div css={styles.contentContainer}>
            <Flex flexDirection={'column'} alignItems={'center'} width="100%">
              {navLinks.map((item, index) => {
                return (
                  <FlexItem
                    key={index}
                    inset={{ vertical: 'x2' }}
                    alignItems={'center'}
                    justifyContent={'center'}
                    css={styles.linkContainer}
                  >
                    <motion.div
                      onHoverStart={() => setHoverIndex(index + 1)}
                      onHoverEnd={() => setHoverIndex(-1)}
                      css={styles.link}
                    >
                      <IconLink
                        icon={item.icon}
                        iconOrientation={
                          item.iconOrientation ? item.iconOrientation : 'left'
                        }
                        fill="default"
                        onClick={() => {
                          item.onClick()
                        }}
                        isActive={item.isActive}
                      ></IconLink>
                    </motion.div>
                    {hoverIndex === index + 1 && (
                      <motion.div
                        variants={tooltipVariants}
                        animate={hoverIndex ? 'hoverOn' : 'hoverOff'}
                        initial={'hoverOff'}
                        transition={{ ease: 'easeIn', duration: 0.2 }}
                        css={styles.tooltipContainer}
                      >
                        <Tooltip
                          direction="left"
                          title={item.title}
                          background="light"
                        />
                      </motion.div>
                    )}
                  </FlexItem>
                )
              })}
            </Flex>
          </Div>
        </Div>
        <Div css={styles.switchContainer}>
          <Div
            id="accountMenuClickEvent"
            onClick={() => setMenuOpen(!isMenuOpen)}
            css={styles.userContainer}
            backgroundColor={{ swatch: 'grayScale', shade: '_1000' }}
          >
            <Avatar
              size={'xSmall'}
              avatarImage={user.profileImage}
              isActive={true}
            />
          </Div>
        </Div>
      </Div>
    </aside>
  )
}
