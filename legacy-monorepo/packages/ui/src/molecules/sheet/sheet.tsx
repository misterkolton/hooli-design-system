import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react'
import styles from './styles'
import { Div, Flex } from '../../exports/atoms'
import { useDeviceSize } from '../../hooks/useDeviceSize'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  PanInfo,
  useTransform,
  animate,
} from 'framer-motion'
import { Overlay } from '../overlay/overlay'
import { CloseButton } from '../../exports/molecules'
import fastDeepEqual from 'fast-deep-equal'
import { useEntities } from 'src/hooks/useEntities'
import { softSpringTransition } from 'src/animations/transitions'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'
import {
  HOCSpacingKeys,
  LiteralUnion,
  SpacingDirection,
} from 'src/helpers/hoc-types/entityValueTypes'

type SnapToStateType = string | number | undefined

export type SheetProps = {
  isOpen: boolean
  setIsOpen?: (isOpen: boolean) => void
  draggable?: boolean
  backgroundColor?: string
  layer?: number
  backgroundElement?: React.ReactNode
  backgroundElementBackgroundColor?: BackgroundColor
  snapPointPercentages?: number[]
  initialSnapPoint?: number | string // DEPRECATED! Use snapTo instead, will support for now to prevent breaking changes but snapTo will override
  outsideClickBypassId?: string
  zIndex?: number
  bgElementSelector?: string
  hasOverlay?: boolean
  snapTo?: string | number // Allows to control sheet open value (percentage or snap point key) also use for initial open state
  setSnapTo?: React.Dispatch<React.SetStateAction<SnapToStateType>> // Allows to control sheet open value (percentage or snap point key) also use for initial open state
  width?: string
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  children?: React.ReactNode
}

type SnapPointType = {
  percentage: number
  name: string | null
}

export const Sheet = ({
  isOpen,
  children,
  draggable,
  backgroundColor,
  layer,
  setIsOpen,
  backgroundElement,
  backgroundElementBackgroundColor,
  snapPointPercentages,
  initialSnapPoint,
  outsideClickBypassId,
  zIndex,
  bgElementSelector,
  hasOverlay = true,
  snapTo,
  setSnapTo,
  width,
  inset = '48px 32px 32px 32px',
  outset,
}: SheetProps) => {
  // TODO's
  /**
   * 1. Hook up child scrolling when scrolling is enabled
   * 2. background component is off when the sheet exceeds the window and stops at the top
   */
  const [snapPoints, setSnapPoints] = useState<SnapPointType[]>([])
  const [, setIsScrollingEnabled] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const [sheetHeight, setSheetHeight] = useState<number>(
    targetRef.current?.offsetHeight || 0,
  )
  const { device } = useDeviceSize()
  const isMobile = device === 'small' || device === 'xSmall' ? true : false
  const { sheet } = useEntities()
  const { height: windowHeight } = useWindowSize()
  const isSheetLargerThanWindow = windowHeight - sheetHeight <= 0

  const desktopVariants = {
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
    hidden: {
      scale: 0.1,
      opacity: 0,
      y: 0,
    },
  }
  const overlayVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: isMobile ? 0.3 : 0,
      },
    },
  }

  /**
   * Takes the current position of the sheet and determines if the sheet is larger than the
   * window size. If it is larger than we reset the position to be the difference of the windowHeight
   * and sheetHeight (sheet consumes full screen but stops at top), otherwise the sheet can be expanded
   * to it's full height
   * @params position - a number represented the current position of the sheet
   * @return the new position of the sheet
   */
  const getMaxOpenPoint = useCallback(
    (position: number) => {
      const diff = windowHeight - sheetHeight
      if (diff >= 0) {
        return position
      }
      if (position < Math.abs(diff)) {
        return Math.abs(diff)
      } else {
        return position
      }
    },
    [sheetHeight, windowHeight],
  )

  const getPositionFromPercentile = useCallback(
    (percentile: number) => {
      if (percentile > 100) {
        percentile = 100
      }
      const percentileToPixel = sheetHeight * (percentile / 100)
      const newPoint = sheetHeight - percentileToPixel
      return getMaxOpenPoint(newPoint)
    },
    [sheetHeight, getMaxOpenPoint],
  )

  const maxOpenPoint =
    windowHeight - sheetHeight < 0 ? Math.abs(windowHeight - sheetHeight) : 0

  const getInitialSnapPoint = (snapPoint?: string | number) => {
    return typeof snapPoint === 'string'
      ? initialSnapPointMatch !== undefined
        ? getPositionFromPercentile(initialSnapPointMatch.percentage)
        : maxOpenPoint
      : typeof snapPoint === 'number'
      ? snapPointPercentages
        ? getPositionFromPercentile(snapPointPercentages[snapPoint])
        : maxOpenPoint
      : maxOpenPoint
  }

  const initialSnapPointMatch = snapPoints.find(
    snapPoint => (snapPoint.name === snapTo ? snapTo : initialSnapPoint), // TODO remove ternary when initialSnapPoint gets removed
  )

  const initialY = snapTo
    ? getInitialSnapPoint(snapTo)
    : getInitialSnapPoint(initialSnapPoint) // TODO remove ternary when initialSnapPoint gets removed

  // Motion value for y positioning of the sheet
  const y = useMotionValue(isOpen ? maxOpenPoint : windowHeight)

  // Ranges for the background to specify when the animation start/stop while user is dragging.
  const backgroundInput = [initialY, sheetHeight]
  const backgroundYOutput = [0, sheetHeight]

  // Syncs up the background y position with the drag/spring motion values
  const backgroundY = useTransform(y, backgroundInput, backgroundYOutput)

  // Syncs up the background opacity values with the drag/spring motion values
  const backgroundOpacity = useTransform(y, backgroundInput, [1, 0])

  // Finds the closest snap point
  const getClosest = (values: number[], targetValue: number) => {
    return values.reduce((previous, current) => {
      return Math.abs(previous - targetValue) < Math.abs(current - targetValue)
        ? previous
        : current
    })
  }
  const isHtmlElement = (element: Element): element is HTMLElement => {
    return element instanceof HTMLElement
  }

  useLayoutEffect(() => {
    if (targetRef.current && sheetHeight !== targetRef.current?.offsetHeight) {
      setSheetHeight(targetRef.current.offsetHeight)
    }
    if (!targetRef.current) {
      return
    }
    const sheetRef = targetRef.current
    const newSnapPoints: SnapPointType[] = Array.from(
      sheetRef.getElementsByClassName('snapPoint'),
    )
      .filter(isHtmlElement)
      .map(snapPoint => {
        return {
          percentage: (snapPoint.offsetTop / sheetRef.offsetHeight) * 100,
          name: snapPoint.getAttribute('data-name'),
        }
      })
    if (!fastDeepEqual(newSnapPoints, snapPoints)) {
      setSnapPoints(newSnapPoints)
    }
  }, [sheetHeight, snapPoints, backgroundElement, children])

  useEffect(() => {
    if (isMobile) {
      y.set(0)
    }
  }, [y, isMobile])

  const handleDrag = useCallback(
    (_: MouseEvent, { delta }: PanInfo) => {
      y.set(Math.max(y.get() + delta.y, maxOpenPoint))
    },
    [y, maxOpenPoint],
  )

  const handleSetSnapTo = useCallback(
    (snapToPoint: number, sheetHeight: number) => {
      const pixelPoint = sheetHeight - snapToPoint
      const percentagePoint = (pixelPoint / sheetHeight) * 100
      const matchedSnapPointKey = snapPoints.find(
        snapPoint => snapPoint.percentage === percentagePoint,
      )
      // If there is a snapPoint key, will return the key name otherwise percentage
      const snapTo = matchedSnapPointKey?.name ?? percentagePoint

      setSnapTo?.(snapTo)
    },
    [setSnapTo, snapPoints],
  )

  const handleDragEnd = useCallback(
    (_, { velocity }: PanInfo) => {
      if (velocity.y > 500) {
        setIsOpen?.(false)
      } else {
        const defaultSnapPoints = snapPointPercentages
          ? [0, ...snapPointPercentages, 100]
          : [0, 100]

        const snapTo = snapPoints
          ? getClosest(
              [
                ...defaultSnapPoints,
                ...snapPoints.map(point => point.percentage),
              ].map(pointPercentile =>
                getPositionFromPercentile(pointPercentile),
              ),
              y.get(),
            )
          : y.get() / sheetHeight > 0.4
          ? sheetHeight
          : maxOpenPoint

        handleSetSnapTo(snapTo, sheetHeight)

        animate(y, snapTo, {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.2,
        })

        if (snapTo >= sheetHeight) {
          setIsOpen?.(false)
        }

        const diff = windowHeight - sheetHeight
        if (diff < 0 && snapTo <= Math.abs(diff)) {
          setIsScrollingEnabled(true)
        } else {
          setIsScrollingEnabled(false)
        }
      }
    },
    [
      windowHeight,
      sheetHeight,
      getPositionFromPercentile,
      setIsOpen,
      snapPointPercentages,
      snapPoints,
      y,
      maxOpenPoint,
      handleSetSnapTo,
    ],
  )

  const handleSnapTo = useCallback(
    (snapPoint: number | string) => {
      if (typeof snapPoint === 'string') {
        const snapPointMatch = snapPoints.find(snap => snap.name === snapPoint)
        snapPoint = snapPointMatch?.percentage ?? -1
      }

      if (snapPoint >= 0) {
        animate(y, getPositionFromPercentile(snapPoint), {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.2,
        })
      }
    },
    [getPositionFromPercentile, y, snapPoints],
  )

  useEffect(() => {
    if (snapTo) handleSnapTo(snapTo)
  }, [snapTo]) //eslint-disable-line

  const withoutOverlayStyle = {
    position: 'fixed' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: !isMobile ? '768px' : undefined,
  }

  const withOverlayStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed' as const,
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Div
          style={{
            zIndex: zIndex ?? 4,
            ...(isMobile
              ? {}
              : hasOverlay
              ? { ...withOverlayStyle }
              : { ...withoutOverlayStyle }),
          }}
        >
          {hasOverlay && (
            <Overlay
              motionKey="sheetOverlay"
              variants={overlayVariants}
              animate={isOpen ? 'visible' : 'hidden'}
              initial={isMobile ? 'visible' : 'hidden'}
              exit={'hidden'}
              zIndex={zIndex ?? 4}
              bgElementSelector={bgElementSelector}
            />
          )}
          <Div
            id="sheetWrapper"
            width={{
              xSmall: width ?? '100%',
              medium: width ?? 'calc(100% - 32px)',
            }}
            maxWidth={backgroundElement ? '1026px' : '768px'}
            minWidth="320px"
            variants={desktopVariants}
            outsideClick={() => setIsOpen?.(false)}
            clickElementBypass={outsideClickBypassId}
            css={styles.sheetWrapper(isMobile, layer ?? zIndex ?? 4)}
            display="flex"
            flexDirection={{
              xSmall: 'column',
              medium: 'row',
            }}
            outset={outset}
          >
            {!isMobile && !!setIsOpen && (
              <CloseButton onClose={() => setIsOpen(false)} />
            )}
            {backgroundElement && (
              <Div
                display="flex"
                justifyContent="center"
                order={isMobile ? 1 : 2}
                width={{ xSmall: '100%', medium: '50%' }}
                height={isMobile ? `100vh` : 'unset'}
                zIndex={1}
                position={isMobile ? 'absolute' : 'relative'}
                bottom={isMobile ? '0' : undefined}
                backgroundColor={
                  backgroundElementBackgroundColor && isMobile
                    ? backgroundElementBackgroundColor
                    : 'transparent'
                }
              >
                <Div
                  overflow={'hidden'}
                  borderRadius={{
                    top: {
                      small: 'default',
                      medium: 'none',
                    },
                    right: {
                      medium: 'default',
                    },
                  }}
                  inset={inset}
                  height={{
                    xSmall: `calc(100vh - (${
                      sheetHeight - initialY
                    }px) + 48px)`,
                    medium: 'unset',
                  }}
                  maxHeight={{
                    medium: `${sheetHeight}px`,
                  }}
                  position="relative"
                  zIndex={2}
                  width="100%"
                  style={{
                    y: isMobile ? backgroundY : maxOpenPoint,
                    opacity: isMobile ? backgroundOpacity : 1,
                  }}
                >
                  {backgroundElement}
                </Div>
              </Div>
            )}
            {isMobile ? (
              <motion.div
                ref={targetRef}
                key="sheet"
                css={styles.sheet(
                  sheet,
                  !!backgroundElement,
                  isMobile,
                  backgroundColor,
                )}
                transition={softSpringTransition}
                drag={draggable && 'y'}
                dragConstraints={{ top: 0, bottom: sheetHeight }}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                dragPropagation
                style={{ y }}
                initial={{ y: windowHeight }}
                animate={{
                  y: initialY,
                  transition: { type: 'tween' },
                }}
                exit={{ y: sheetHeight }}
                dragElastic={0.01}
              >
                <Div
                  css={styles.dragBar}
                  position="absolute"
                  top="16px"
                  left="50%"
                  width="50px"
                  height="4px"
                  borderRadius="large"
                  backgroundColor={{ swatch: 'grayScale', shade: '_1000' }}
                />
                <Div
                  height={
                    isSheetLargerThanWindow ? `${windowHeight}px` : 'unset'
                  }
                  overflowY={isSheetLargerThanWindow ? 'hidden' : undefined}
                  width="100%"
                >
                  <Div
                    height={
                      isSheetLargerThanWindow
                        ? `${windowHeight - maxOpenPoint}px`
                        : 'unset'
                    }
                    overflowY={isSheetLargerThanWindow ? 'auto' : undefined}
                    css={styles.childWrapper}
                    width="100%"
                    inset={inset}
                  >
                    {children}
                  </Div>
                </Div>
              </motion.div>
            ) : (
              <div
                ref={targetRef}
                css={styles.sheet(
                  sheet,
                  !!backgroundElement,
                  isMobile,
                  backgroundColor,
                )}
              >
                <Flex flexDirection="column" width="100%" inset={inset}>
                  {children}
                </Flex>
              </div>
            )}
          </Div>
        </Div>
      )}
    </AnimatePresence>
  )
}
