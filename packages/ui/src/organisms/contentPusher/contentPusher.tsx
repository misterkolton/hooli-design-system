import React, { FC, useEffect, useState } from 'react'
import { Flex } from 'src/exports/atoms'
import { springTransition } from 'src/animations/transitions'
import { usePrevious } from 'src/hooks/usePrevious'

type VerticalZone = {
  component: React.ReactNode
  height: number | string
}

type HorizontalZone = {
  component: React.ReactNode
  width: number | string
}

export type ZoneType = {
  top?: VerticalZone
  bottom?: VerticalZone
  left?: HorizontalZone
  right?: HorizontalZone
}

export type ContentPusherProps = {
  zones: ZoneType
  zoneToOpen: keyof ZoneType
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children?: React.ReactNode
}

export const ContentPusher: FC<ContentPusherProps> = ({
  zones,
  zoneToOpen,
  isOpen,
  setIsOpen,
  children,
}) => {
  const isVerticalZoneType = (
    valueToCheck: any,
  ): valueToCheck is VerticalZone => {
    if (typeof valueToCheck === 'undefined') {
      return false
    }
    return (valueToCheck as VerticalZone).height !== undefined
  }
  const [zoneControl, setZoneControl] = useState<keyof ZoneType>(zoneToOpen)
  const previousZone = usePrevious(zoneToOpen)

  useEffect(() => {
    if (previousZone === undefined) {
      return
    }
    if (previousZone !== zoneToOpen) {
      setIsOpen(false)
    }
    // wait till closed to swap out zone component
    setTimeout(() => {
      setZoneControl(zoneToOpen)
    }, springTransition.duration * 1000)
  }, [zoneToOpen]) // eslint-disable-line

  const openZone = zones[zoneControl]
  return (
    <Flex width="100%" height="100%" position="relative" overflow="hidden">
      <Flex
        animate={
          isOpen
            ? isVerticalZoneType(openZone)
              ? zoneControl === 'top'
                ? { y: openZone.height, x: 0 }
                : {
                    y:
                      typeof openZone.height === 'string'
                        ? `-${openZone.height}`
                        : -openZone.height,
                    x: 0,
                  }
              : zoneControl === 'left'
              ? { x: openZone?.width, y: 0 }
              : {
                  x:
                    typeof openZone?.width === 'string'
                      ? `-${openZone?.width && openZone.width}`
                      : openZone?.width && -openZone.width,
                  y: 0,
                }
            : isVerticalZoneType(openZone)
            ? { y: 0, x: 0 }
            : { x: 0, y: 0 }
        }
        transition={springTransition}
        width="100%"
        height="100%"
        position="absolute"
        zIndex={2}
        top={0}
        left={0}
        backgroundColor="white"
      >
        {children}
      </Flex>
      <Flex
        width="100%"
        height="100%"
        justifyContent={
          zoneControl === 'left'
            ? 'flex-start'
            : zoneControl === 'right'
            ? 'flex-end'
            : 'center'
        }
        alignItems={
          zoneControl === 'top'
            ? 'flex-start'
            : zoneControl === 'bottom'
            ? 'flex-end'
            : 'center'
        }
      >
        <Flex
          position="absolute"
          zIndex={1}
          height={
            isVerticalZoneType(openZone)
              ? typeof openZone.height === 'string'
                ? openZone.height
                : `${openZone.height}px`
              : '100%'
          }
          width={
            isVerticalZoneType(openZone)
              ? '100%'
              : typeof openZone?.width === 'string'
              ? openZone.width
              : `${openZone?.width}px`
          }
        >
          {openZone?.component}
        </Flex>
      </Flex>
    </Flex>
  )
}
