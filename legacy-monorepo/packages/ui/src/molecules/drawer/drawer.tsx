import React from 'react'
import styles from './styles'
import { useMotionValue, useTransform } from 'framer-motion'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Div } from 'src/atoms/div/div'
import { useEntities } from 'src/hooks/useEntities'
import { softSpringTransition } from 'src/animations/transitions'
import { Span } from 'src/exports/atoms'
import {
  SpacingDirection,
  HOCSpacingKeys,
  LiteralUnion,
} from 'src/helpers/hoc-types/entityValueTypes'
import { Overflow } from 'src/helpers/hoc-types/cssValueTypes'
export type DrawerLocation = 'top' | 'right' | 'bottom' | 'left'
export type DrawerProps = {
  children?: React.ReactNode
  isOpen: boolean
  onClick: () => void
  isTabHidden?: boolean
  location: DrawerLocation
  openValue: number
  offset?: number
  zIndex?: number
  showTab?: boolean
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  overflow?: Overflow
  closedValue?: number
  tabMode?: 'dark' | 'light'
  shouldHideScroll?: boolean
  backgroundColor?: LiteralUnion<'blurredGlass'>
}
export const Drawer = ({
  children,
  location,
  isOpen,
  isTabHidden = false,
  onClick,
  openValue,
  offset = 0,
  zIndex = 0,
  showTab = true,
  inset,
  overflow = 'auto',
  closedValue,
  tabMode = 'light',
  shouldHideScroll = false,
  backgroundColor = '#fff',
}: DrawerProps) => {
  const { drawer } = useEntities()
  const isHorizontal = location === 'left' || location === 'right'
  const isVertical = location === 'top' || location === 'bottom'
  const getClosedPoint = (location: DrawerLocation) => {
    if (location === 'left' || location === 'top') {
      return closedValue ? -openValue + closedValue : -openValue
    }
    return closedValue ? openValue - closedValue : openValue
  }
  const getRotationPoints = (location: DrawerLocation) => {
    switch (location) {
      case 'left':
        return [180, 360]
      case 'right':
        return [0, -180]
      case 'top':
        return [270, 450]
      case 'bottom':
        return [90, 270]
    }
  }
  const handleXY = useMotionValue(getClosedPoint(location))
  const opacity = useTransform(
    handleXY,
    [getClosedPoint(location), 0],
    isTabHidden ? [0, 1] : [1, 1],
  )
  const rotate = useTransform(
    handleXY,
    [getClosedPoint(location), 0],
    getRotationPoints(location),
  )
  const variants = {
    open: {
      x: 0,
      y: 0,
    },
    closed: (isHorizontal: boolean) => {
      if (isHorizontal) {
        return { x: getClosedPoint(location) }
      }
      return { y: getClosedPoint(location) }
    },
  }

  const backgroundStyle = {
    backgroundColor:
      backgroundColor === 'blurredGlass'
        ? 'rgba(255, 255, 255, 0.7)'
        : backgroundColor,
    backdropFilter: backgroundColor === 'blurredGlass' ? 'blur(70px)' : 'none',
  }

  return (
    <Div
      css={styles.drawerContainer(location)}
      width={isHorizontal ? `${openValue}px` : '100%'}
      height={isVertical ? `${openValue}px` : '100%'}
      flexDirection={isVertical ? 'column' : 'row'}
      variants={variants}
      custom={isHorizontal}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      transition={softSpringTransition}
      outset={{ [location]: `${offset}px` }}
      inset={inset ?? drawer.defaultInset}
      backgroundColor={backgroundColor ?? '#fff'}
      zIndex={zIndex}
      style={{
        ...backgroundStyle,
        x: isHorizontal ? handleXY : 0,
        y: isVertical ? handleXY : 0,
      }}
      boxShadow={
        location === 'bottom' ? drawer.bottomDirectionShadow : drawer.boxShadow
      }
      whileHover={{
        boxShadow:
          location === 'bottom'
            ? drawer.hoverBottomDirectionShadow
            : drawer.hoverBoxShadow,
      }}
    >
      <Div
        css={styles.childContainer(shouldHideScroll)}
        overflow={overflow}
        height="100%"
        width="100%"
        backgroundColor={backgroundColor ?? '#fff'}
      >
        {children}
      </Div>
      {showTab && (
        <Div
          backgroundColor={drawer.tab[tabMode].backgroundColor}
          css={styles.drawerTab(location, openValue)}
          borderRadius={
            location === 'left'
              ? { right: drawer.borderRadius }
              : location === 'right'
              ? { left: drawer.borderRadius }
              : location === 'top'
              ? { bottom: drawer.borderRadius }
              : { top: drawer.borderRadius }
          }
          onClick={isTabHidden && !isOpen ? undefined : () => onClick()}
          cursor={isTabHidden && !isOpen ? undefined : 'pointer'}
          zIndex={zIndex - 1}
          style={{ opacity }}
          height={isVertical ? '18px' : '58px'}
          width={isVertical ? '58px' : '18px'}
          boxShadow={
            location === 'bottom'
              ? drawer.bottomDirectionShadow
              : drawer.boxShadow
          }
          transition={{ ease: 'easeIn', duration: 0.2 }}
          whileHover={{ scale: 1.15 }}
        >
          <Span
            style={{ rotate }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon
              name="chevron"
              orientation="left"
              primaryColor={drawer.tab[tabMode]?.arrowColor ?? 'default'}
              size="small"
            />
          </Span>
        </Div>
      )}
    </Div>
  )
}
