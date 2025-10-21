import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { MotionValue, useTransform } from 'framer-motion'
import { springTransition } from '../../../animations/transitions'
import { ContextBar } from 'src/molecules/contextBar/contextBar'
import { Section } from 'src/exports/atoms'
import { Icon } from 'src/atoms/iconography/components/icon'
import { IconType } from 'src/atoms/iconography/types'
import { Span } from 'src/atoms/span/span'
import { useWindowSize } from 'src/hooks/useWindowSize'
import styles from '../styles'

type ContentProps = {
  y?: MotionValue
  x: MotionValue
  isMobile: boolean
  isOpen: boolean
  onDragEnd: () => void
  menuSize: number
  children: React.ReactNode
  logo: IconType
  isFullScreen?: boolean
}

export const Content: FC<ContentProps> = ({
  children,
  x,
  isMobile,
  isOpen,
  onDragEnd,
  menuSize,
  logo,
  isFullScreen,
}) => {
  const innerWidth = useWindowSize().width
  // transform inputs
  const xInput = [0, menuSize]
  // scale outputs
  const mobileScaleOutput = [1, 0.75]
  const desktopScaleOutput = [1, 1]
  // radius outputs
  const borderRadiusOutput = [0, 24]
  const desktopBorderRadiusOutput = [0, 0]

  // offset x for when menu scales down it also shifts right, this
  const xOffsetOutput = [0, -(innerWidth * 0.25) / 2]
  const xOffset = useTransform(x, xInput, xOffsetOutput)
  const reverseOffset = useTransform(x, xInput, [0, 0])

  // Allow scale/reverse scale to transform at exact timing that x is moving
  const scale = useTransform(x, xInput, mobileScaleOutput)
  const reverseScale = useTransform(x, xInput, desktopScaleOutput)
  // Allow radius to be applied/removed at exact timing that x is moving
  const borderRadius = useTransform(x, xInput, borderRadiusOutput)
  const noRadius = useTransform(x, xInput, desktopBorderRadiusOutput)

  const variants = {
    open: {
      x: menuSize + 50,
      width: `calc(100% - ${menuSize + 50}px)`,
      transition: {
        springTransition,
        delayChildren: 0.5,
      },
    },
    closed: {
      x: 50,
      width: 'calc(100% - 50px)',
      transition: {
        springTransition,
      },
    },
    mobileOpen: {
      width: '100%',
      x: menuSize,
      transition: {
        springTransition,
        delayChildren: 0.5,
      },
    },
    mobileClosed: {
      width: 'calc(100% - 0px)', // Hacky but must keep, when variants change the window would get caught and set an abitrary number to the width at 100%
      x: 0,
      transition: {
        springTransition,
      },
    },
  }

  return (
    <Section
      variants={variants}
      initial={
        isFullScreen
          ? 'mobileClosed'
          : isMobile
          ? isOpen
            ? 'mobileOpen'
            : 'mobileClosed'
          : isOpen
          ? 'open'
          : 'closed'
      }
      animate={
        isFullScreen
          ? 'mobileClosed'
          : isMobile
          ? isOpen
            ? 'mobileOpen'
            : 'mobileClosed'
          : isOpen
          ? 'open'
          : 'closed'
      }
      style={{
        x: isMobile ? x : 0,
        translateX: isMobile ? xOffset : reverseOffset,
        scale: isMobile ? scale : reverseScale,
        borderBottomLeftRadius: isMobile ? borderRadius : noRadius,
        borderTopLeftRadius: isMobile ? borderRadius : noRadius,
      }}
      drag={isMobile && isOpen && 'x'}
      dragConstraints={{ left: 0, right: menuSize }}
      onDragEnd={onDragEnd}
      boxShadow={isOpen ? 'mediumLight' : undefined}
      backgroundColor="background"
      css={styles.content(isMobile)}
    >
      {!isFullScreen && isMobile && (
        <ContextBar>
          <div css={styles.contextWrapper}>
            <Span
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => onDragEnd()}
            >
              <Icon
                name={isOpen ? 'close' : 'hamburger'}
                size="small"
                primaryColor="default"
              />
            </Span>
            <Icon name={logo} primaryColor="primaryBrand" size="medium" />
            <Span
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <Icon name="information" primaryColor="default" size="small" />
            </Span>
          </div>
        </ContextBar>
      )}
      {isOpen && innerWidth < 876 && (
        <Section
          css={styles.overlay(innerWidth)}
          backgroundColor={innerWidth > 576 ? 'overlay' : 'transparent'}
        />
      )}
      <Div css={styles.innerContent(isMobile)}>{children}</Div>
    </Section>
  )
}
