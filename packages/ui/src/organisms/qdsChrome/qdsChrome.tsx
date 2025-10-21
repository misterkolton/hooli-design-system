import React, { FC, useRef, useState, useEffect } from 'react'
import { NavigationPill } from 'src/organisms/navigationPill/navigationPill'
import { Navigation } from 'src/molecules/navigation/navigation'
import { Content } from './components/content'
import { RevealingContent } from './components/revealingContent'
import { useMotionValue, motion } from 'framer-motion'
import { useCurrentDevice as getCurrentDevice } from 'src/hooks/useCurrentDevice'
import { IconType, orientation } from 'src/atoms/iconography/types'
import { AccountMenu, AccountMenuItem } from '../accountMenu/accountMenu'
import { Text } from 'src/atoms/typography/text'
import { useEvent } from 'src/hooks/useEvent'
import { Anchor } from 'src/atoms/anchor/anchor'
import { List } from 'src/atoms/list/list'
import { Flex } from 'src/atoms/flex/flex'
import { FlexItem } from 'src/atoms/flex/flexItem'
import { DragBar } from 'src/molecules/dragBar/dragBar'
import {
  SubNavigation,
  SubNavigationType,
} from '../subNavigation/subNavigation'
import styles from './styles'
import { useInnerHeight } from 'src/hooks/useInnerHeight'
import { Sheet, IconLink } from 'src/exports/molecules'
import { ListItem } from 'src/exports/atoms'

export type UserInfo = {
  firstName: string
  lastName: string
  profileImage: string
  onClick?: () => void
}

export type Item = {
  title: string
  icon: IconType
  iconOrientation?: orientation
  onClick: () => void
  isActive: boolean
}

export type QDSChromeProps = {
  logo: IconType
  navSections: NavItemType[]
  accountSections: AccountMenuItem[][]
  user: UserInfo
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void
  openMenuSize?: number
  isOnAccountRoute: boolean
  accountRouteOnClick: () => void
  quickLinks: QuickLinksType
  isFullScreen?: boolean
}
export type NavItemType = {
  title: string
  icon: IconType
  onClick: () => void
  isActive: boolean
  subNavigation: SubNavigationType[]
}
export type QuickLinksType = Item[]
export const QDSChrome: FC<QDSChromeProps> = ({
  children,
  logo,
  navSections,
  accountSections,
  user,
  isExpanded,
  setIsExpanded,
  openMenuSize,
  isOnAccountRoute,
  accountRouteOnClick,
  quickLinks,
  isFullScreen,
}) => {
  // TODO Refactor getCurrentDevice hook to work with useDeviceSize, caused state issues with this component - Will need to deprecate getCurrentDevice after fixing
  const currentWidth = window.innerWidth
  const [shouldSnapToMobile, setSnapToMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [deviceSize, setDeviceSize] = useState(getCurrentDevice(currentWidth))
  const [isSheetOpen, setSheetOpen] = useState(false)
  const handleX = useMotionValue(0)
  const innerHeight = useInnerHeight()
  const constraintsRef = useRef(null)
  const handleDragEnd = () => {
    setSnapToMobile(!shouldSnapToMobile)
  }
  const menuSize = openMenuSize ? openMenuSize : 250
  const isMobile = deviceSize === 'xSmall' ? true : false
  const getDevice = React.useCallback(() => {
    const currentDevice = getCurrentDevice(window.innerWidth)
    setDeviceSize(currentDevice)

    if (!isMobile) {
      setSnapToMobile(false)
    } else {
      handleX.set(0)
      setIsMenuOpen(false)
    }
  }, [handleX, isMobile])
  useEvent('resize', getDevice)
  useEffect(() => {
    if (window.innerWidth < 876 && isExpanded) {
      setIsExpanded(false)
    }
  }, [isExpanded, setIsExpanded])

  return (
    <main css={styles.chromeContainer(innerHeight)}>
      {isFullScreen ? (
        <></>
      ) : isMobile ? (
        <NavigationPill
          isSheetOpen={isSheetOpen}
          setSheetIsOpen={setSheetOpen}
          accountRouteOnClick={accountRouteOnClick}
          circleSize={70}
          height={90}
          quickLinks={quickLinks}
          links={navSections}
          user={user}
          setIsExpanded={setSnapToMobile}
        />
      ) : (
        <Navigation
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
          setMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          user={user}
          logo={logo}
          navLinks={navSections}
        />
      )}
      {!isFullScreen && isMobile && (
        <DragBar
          x={handleX}
          onDragEnd={() => handleDragEnd()}
          ref={constraintsRef}
        />
      )}
      <Content
        logo={logo}
        isMobile={isMobile}
        x={handleX}
        menuSize={menuSize}
        isOpen={
          isFullScreen ? false : isMobile ? shouldSnapToMobile : isExpanded
        }
        onDragEnd={handleDragEnd}
        isFullScreen={isFullScreen}
      >
        {children}
      </Content>
      {!isFullScreen && (
        <RevealingContent
          isMobile={isMobile}
          zone={'left'}
          height={'100%'}
          width={`${menuSize}px`}
        >
          <Flex
            width={'100%'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            inset="x2"
          >
            {isOnAccountRoute ? (
              <FlexItem flexDirection="column">
                <Text
                  content="My Account"
                  inset={{
                    top: 'x1',
                    right: 'x0',
                    bottom: 'x5',
                    left: 'x_5',
                  }}
                  type="largeBody"
                  color={isMobile ? 'inverseBody' : 'primaryHeading'}
                />
                {accountSections.map((section, index) => {
                  return (
                    <List key={index} orientation="vertical" alignment="left">
                      {section.map((link, index) => {
                        return (
                          <Anchor
                            inset="x_5"
                            cursor="pointer"
                            key={index}
                            onClick={link.onClick}
                            title={link.title}
                            color={isMobile ? 'inverseBody' : 'primaryHeading'}
                          />
                        )
                      })}
                    </List>
                  )
                })}
              </FlexItem>
            ) : (
              navSections.map((section, index) => {
                return (
                  section.isActive && (
                    <FlexItem key={index} flexDirection="column">
                      <Text
                        inset={{
                          top: 'x1',
                          right: 'x0',
                          bottom: 'x5',
                          left: 'x_5',
                        }}
                        type="largeBody"
                        color={isMobile ? 'inverseBody' : 'primaryHeading'}
                      >
                        {section.title}
                      </Text>
                      <SubNavigation
                        setIsMobileExpanded={setSnapToMobile}
                        isMobile={isMobile}
                        sections={section.subNavigation}
                      />
                    </FlexItem>
                  )
                )
              })
            )}
          </Flex>
        </RevealingContent>
      )}
      <motion.div
        css={styles.dragConstraints(menuSize)}
        ref={constraintsRef}
      ></motion.div>
      <AccountMenu
        user={user}
        setIsOpen={() => setIsMenuOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
        navOpen={false}
        sections={accountSections}
      />
      <Sheet
        isOpen={isSheetOpen}
        setIsOpen={setSheetOpen}
        draggable={true}
        layer={3}
        outsideClickBypassId="circleMenu"
      >
        <List
          width="100%"
          orientation="vertical"
          alignment="left"
          inset={{ bottom: 'x8' }}
        >
          <Text type="footnote" content="Quick Actions" />
          {quickLinks.map((link, index) => {
            return (
              <ListItem key={index} orientation="vertical" inset="x1">
                <IconLink
                  onClick={() => {
                    link.onClick()
                    setIsExpanded(false)
                    setSheetOpen(false)
                  }}
                  icon={link.icon}
                  iconOrientation={
                    link.iconOrientation ? link.iconOrientation : 'left'
                  }
                  isActive={link.isActive}
                  fill="default"
                  title={link.title}
                ></IconLink>
              </ListItem>
            )
          })}
        </List>
      </Sheet>
    </main>
  )
}
