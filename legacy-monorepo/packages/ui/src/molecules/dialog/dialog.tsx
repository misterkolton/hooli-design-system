import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Div, Flex } from 'src/exports/atoms'
import { Overlay, CloseButton } from 'src/exports/molecules'
import { useEntities } from 'src/hooks/useEntities'

import styles from './styles'
import {
  Responsive,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'
import { Height, Width, BorderRadius } from 'src/helpers/hoc-types/hocBaseUnion'

export type PinnedType = 'top' | 'center' | 'bottom'

export type DialogProps = {
  zIndex?: number
  isOpen: boolean
  onClose?: () => void
  maxWidth?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  maxHeight?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  bgElementSelector?: string
  isFullScreen?: boolean
  closeButtonId?: string
  insetOverride?: HOCSpacingKeys | string
  outsetOverride?: HOCSpacingKeys | string
  height?: Height
  width?: Width
  shouldScroll?: boolean
  borderRadius?: BorderRadius
  pinned?: PinnedType
  backgroundVariant?: 'solid' | 'blur'
  footer?: React.ReactNode
}
type DialogComponentProps = DialogProps & { children: React.ReactNode }

export const Dialog = React.forwardRef(
  (
    props: DialogComponentProps,
    ref:
      | React.RefObject<HTMLDivElement>
      | React.MutableRefObject<HTMLDivElement>,
  ) => {
    const { dialog } = useEntities()

    const dialogVariants = {
      open: {
        scale: 1,
        opacity: 1,
      },
      closed: {
        scale: 0.1,
        opacity: 0,
      },
    }
    const overlayVariants = {
      open: {
        opacity: 1,
      },
      closed: {
        opacity: 0,
      },
    }
    const {
      zIndex = 1000,
      isOpen,
      onClose,
      maxWidth = '552px',
      maxHeight,
      bgElementSelector,
      isFullScreen,
      closeButtonId,
      insetOverride,
      outsetOverride,
      height,
      width,
      children,
      shouldScroll = false,
      borderRadius = 'default',
      pinned = 'center',
      backgroundVariant = 'solid',
      footer,
      ...rest
    } = props

    const pinnedRadius =
      pinned === 'bottom'
        ? { top: borderRadius, bottom: 'none' }
        : pinned === 'top'
        ? { bottom: borderRadius, top: 'none' }
        : borderRadius
    return (
      <AnimatePresence>
        {isOpen && (
          <Overlay
            variants={overlayVariants}
            animate={isOpen ? 'open' : 'closed'}
            initial={'closed'}
            zIndex={zIndex}
            exit={'closed'}
            bgElementSelector={bgElementSelector}
            pinned={pinned}
            backgroundVariant={backgroundVariant}
            shouldScroll={shouldScroll}
            {...rest}
          >
            <Div
              ref={ref}
              outsideClick={onClose}
              variants={dialogVariants}
              css={styles.dialogContainer}
              backgroundColor={dialog.backgroundColor}
              borderRadius={pinnedRadius}
              boxShadow={dialog.boxShadow}
              inset={insetOverride ?? dialog.defaultInset}
              outset={outsetOverride ?? undefined}
              position={'absolute'}
              bottom={pinned === 'bottom' ? 0 : undefined}
              maxWidth={maxWidth}
              maxHeight={
                maxHeight
                  ? maxHeight
                  : isFullScreen || pinned === 'center'
                  ? 'calc(100vh - 24px )'
                  : undefined
              }
              width={(isFullScreen ? '100%' : undefined) ?? width}
              height={
                height
                  ? height
                  : isFullScreen
                  ? 'calc(100vh - 24px )'
                  : undefined
              }
            >
              {shouldScroll ? (
                <Div
                  height={{
                    xSmall: 'calc(100vh - 96px)',
                    medium: 'calc(100vh - 32px)',
                  }}
                  overflowY="auto"
                >
                  {children}
                  {onClose && (
                    <CloseButton id={closeButtonId} onClose={onClose} />
                  )}
                </Div>
              ) : (
                <>
                  {children}
                  {onClose && (
                    <CloseButton id={closeButtonId} onClose={onClose} />
                  )}
                </>
              )}
              {footer && (
                <Flex width="100%" position="sticky" bottom={0}>
                  {footer}
                </Flex>
              )}
            </Div>
          </Overlay>
        )}
      </AnimatePresence>
    )
  },
)
