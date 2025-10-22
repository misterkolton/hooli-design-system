import React, { FC, useState } from 'react'
import {
  Div,
  Flex,
  HStack,
  Text,
  VStack,
  Anchor,
  TextColor,
  IconType,
  Icon,
} from 'src/exports/atoms'
import { NavigationLink } from './components/navigationLink'
import { useDeviceSize } from 'src/hooks/useDeviceSize'
import { MobileView } from './components/mobileView'
import {
  IconLink,
  LinkColumn,
  Separator,
  Drawer,
  Logo,
  LogoProps,
  DropDownMenu,
} from 'src/exports/molecules'
import useResizeObserver from 'use-resize-observer'
import { useEntities } from 'src/hooks/useEntities'
import styles from './styles'

export type Target = '_self' | '_blank' | '_parent' | '_top' | undefined

export type Link = {
  title: React.ReactNode
  href: string
  onClick?: () => void
  icon?: IconType
  target?: Target
}

export type LinkColumnType = {
  title: string
  titleColor?: TextColor
  links: Link[]
  linkColor?: TextColor
}

export type DropdownLink = {
  title: string
  featuredLinkColumn?: Link[]
  linkColumns: LinkColumnType[]
}

export type StaticNavigationProps = {
  logo: React.ReactNode | LogoProps // Supports custom React element or Logo props
  accountSection?: React.ReactNode
  links?: (DropdownLink | Link)[]
  zIndex?: number
  openValueOverride?: number
  drawerOffset?: number
  isFrosted?: boolean
  menuDropdownLinks?: {
    linkColumn: LinkColumnType
    top?: number
    left?: number
  }
}

export const StaticNavigation: FC<StaticNavigationProps> = ({
  accountSection,
  logo,
  links,
  zIndex = 3,
  openValueOverride,
  drawerOffset = 60,
  isFrosted,
  menuDropdownLinks,
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { device: size } = useDeviceSize()
  const { ref, height } = useResizeObserver<HTMLDivElement>()
  const { hocs } = useEntities()

  const isDropdownLinkType = (
    valueToCheck: DropdownLink | Link,
  ): valueToCheck is DropdownLink => {
    const dropDownLink = valueToCheck as DropdownLink
    return (
      dropDownLink.linkColumns !== undefined && dropDownLink.title !== undefined
    )
  }

  const isMobile = ['xSmall', 'small', 'medium'].includes(size)

  return (
    <Div display="flex" flexDirection="column">
      <Flex
        css={styles.staticNavigationContainer(hocs, isFrosted)}
        width="100%"
        height="60px"
        boxShadow="mediumLight"
        alignItems="center"
        justifyContent="space-between"
        inset={{ horizontal: 'x3' }}
        zIndex={zIndex}
      >
        {links && isMobile && (
          <Div>
            <IconLink
              size={isOpen ? 'xSmall' : 'small'}
              icon={isOpen ? 'close' : 'hamburger'}
              onClick={() => setIsOpen(!isOpen)}
            />
          </Div>
        )}
        {!links && !isMobile && <div />}
        <Flex alignItems="center" flexDirection="row" columnGap="x1">
          {menuDropdownLinks && (
            <Div maxWidth="300px">
              <button
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '40px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Flex flexDirection="row">
                  <Icon
                    name="promptingsIcon"
                    primaryColor="primaryHeadingText"
                    size="xSmall"
                  />
                  <Div
                    style={{
                      transform: isMenuOpen
                        ? 'rotate(90deg)'
                        : 'rotate(-90deg)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  >
                    <Icon
                      name="chevron"
                      primaryColor="primaryHeadingText"
                      size="xSmall"
                    />
                  </Div>
                </Flex>
              </button>
              <DropDownMenu
                linkColumn={menuDropdownLinks.linkColumn}
                isOpen={isMenuOpen}
                top={menuDropdownLinks.top ?? 40}
                left={menuDropdownLinks.left}
              />
            </Div>
          )}
          {React.isValidElement(logo) ? (
            logo
          ) : (
            <Logo {...(logo as LogoProps)} />
          )}
        </Flex>
        {links && !isMobile && (
          <Flex
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            {links &&
              links.map((link, index) => (
                <Div inset={{ horizontal: size === 'large' ? 'x1' : 'x2' }}>
                  {'href' in link && typeof link.title === 'string' ? (
                    <NavigationLink
                      title={link.title}
                      isActive={selectedTab === index && isOpen}
                      href={link.href}
                      target={link.target}
                    />
                  ) : isDropdownLinkType(link) ? (
                    <Div
                      onHoverStart={() => {
                        setIsOpen(true)
                        setSelectedTab(index)
                      }}
                      key={index}
                      onClick={() =>
                        isOpen
                          ? setIsOpen(false)
                          : (setIsOpen(true), setSelectedTab(index))
                      }
                    >
                      <NavigationLink
                        title={link.title}
                        isActive={selectedTab === index && isOpen}
                      />
                    </Div>
                  ) : (
                    <Anchor
                      href={link.href}
                      onClick={link.onClick}
                      target={link.target}
                    >
                      {link.title}
                    </Anchor>
                  )}
                </Div>
              ))}
          </Flex>
        )}
        {accountSection && <Div display="flex">{accountSection}</Div>}
      </Flex>
      <Div
        position={'absolute'}
        top={`${drawerOffset}px`}
        width={'100%'}
        zIndex={zIndex - 1}
        onHoverEnd={() => setIsOpen(false)}
      >
        {!isMobile && (
          <Drawer
            isOpen={isOpen && !isMobile}
            location="top"
            onClick={() => setIsOpen(false)}
            openValue={
              openValueOverride
                ? openValueOverride
                : (height && height + 64 < 248 ? 248 : height && height + 64) ??
                  280
            }
            isTabHidden={true}
            showTab={false}
            zIndex={10}
          >
            <Div outset="x3" ref={ref}>
              {links &&
                links.map((link, index) => {
                  return (
                    selectedTab === index && (
                      <HStack
                        key={index}
                        gap="x9"
                        justify="center"
                        alignItems="flex-start"
                      >
                        {isDropdownLinkType(link) &&
                          link.featuredLinkColumn && (
                            <HStack gap="x9" justify="center">
                              <VStack gap="x2">
                                {link.featuredLinkColumn.map(featuredColumn => {
                                  return (
                                    <Anchor
                                      cursor={'pointer'}
                                      onClick={featuredColumn.onClick}
                                      href={featuredColumn.href}
                                      target={featuredColumn.target}
                                    >
                                      {typeof featuredColumn.title ===
                                      'string' ? (
                                        <Text
                                          type="body"
                                          content={featuredColumn.title}
                                          color="primaryHeading"
                                          weight="semiBold"
                                        />
                                      ) : (
                                        featuredColumn.title
                                      )}
                                    </Anchor>
                                  )
                                })}
                              </VStack>
                              <Div height="160px">
                                <Separator orientation="vertical" />
                              </Div>
                            </HStack>
                          )}
                        {isDropdownLinkType(link) &&
                          link.linkColumns.map((column, index) => {
                            return (
                              <VStack gap="x8" key={index}>
                                <Flex
                                  alignItems="center"
                                  width="100%"
                                  justifyContent="space-between"
                                >
                                  <LinkColumn
                                    linkColumn={column}
                                    linkTitleColor={
                                      column.titleColor
                                        ? column.titleColor
                                        : 'primaryBrand'
                                    }
                                    subLinkColor={
                                      column.linkColor
                                        ? column.linkColor
                                        : 'primaryBody'
                                    }
                                  />
                                </Flex>
                              </VStack>
                            )
                          })}
                      </HStack>
                    )
                  )
                })}
            </Div>
          </Drawer>
        )}
      </Div>
      {links && isMobile && (
        <Div
          height={`calc(100% - ${drawerOffset}px)`}
          position="fixed"
          left="0px"
          top={`${drawerOffset}px`}
        >
          <MobileView
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            links={links}
          />
        </Div>
      )}
    </Div>
  )
}
