import React, { FC, useState } from 'react'
import { Text, Flex, Anchor } from 'src/exports/atoms'
import { Button, Scrollable } from 'src/exports/molecules'
import { Dialog, DialogProps } from 'src/molecules/dialog/dialog'

export type ConfirmDialogProps = {
  requireScroll?: boolean
  accept: {
    title: string
    onClick: () => void
    id?: string
    isDisabled?: boolean
  }
  decline?: {
    title: string
    onClick: () => void
    id?: string
    isDisabled?: boolean
  }
  title: string
  description: string
  zIndex?: number
  isOpen: boolean
  primaryAction?: 'accept' | 'decline'
  onClose?: () => void
  hasStackedActions?: boolean
  additionalLink?: {
    title: string
    onClick: () => void
  }
} & DialogProps

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  additionalLink,
  accept,
  decline,
  title,
  description,
  zIndex = 1000,
  isOpen,
  primaryAction,
  onClose,
  requireScroll,
  maxWidth = '552px',
  hasStackedActions = false,
  maxHeight,
  ...rest
}) => {
  const isPrimaryAccept = primaryAction === 'accept' ? true : false
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = (progress: number) => {
    if (progress === 1) {
      setHasScrolled(true)
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      zIndex={zIndex}
      onClose={onClose}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      {...rest}
    >
      <Flex flexDirection="column">
        <Text
          weight="semiBold"
          color={'primaryHeading'}
          type="largeBody"
          content={title}
          inset={{ bottom: 'x2' }}
        ></Text>
        <Scrollable
          maxHeight={216}
          onChange={(progress: number) => handleScroll(progress)}
        >
          <Text content={description} type="caption" color="primaryBody" />
        </Scrollable>
      </Flex>
      <Flex>
        {additionalLink && (
          <Flex
            flexDirection={{
              xSmall: additionalLink ? 'column-reverse' : 'row',
              small: 'row',
            }}
            justifyContent={{
              xSmall: 'center',
              small: additionalLink ? 'space-between' : 'flex-end',
            }}
            outset={{ top: 'x3' }}
            alignItems={'center'}
          >
            <Anchor
              outset={{ top: { xSmall: 'x2', small: 'x0' } }}
              onClick={additionalLink.onClick}
              size="xSmall"
              title={additionalLink.title}
              color="anchorBlue"
              cursor="pointer"
              isDecorated
            />
          </Flex>
        )}
        <Flex
          width="100%"
          justifyContent={
            hasStackedActions
              ? 'center'
              : isPrimaryAccept
              ? 'flex-start'
              : 'flex-end'
          }
          outset={hasStackedActions ? { vertical: 'x2' } : { horizontal: 'x2' }}
          flexDirection={
            hasStackedActions
              ? isPrimaryAccept
                ? 'column-reverse'
                : 'column'
              : isPrimaryAccept
              ? 'row-reverse'
              : 'row'
          }
        >
          <Flex
            outset={
              hasStackedActions ? { vertical: 'x2' } : { horizontal: 'x2' }
            }
          >
            <Button
              fullWidth={hasStackedActions}
              id={accept.id}
              type={isPrimaryAccept ? 'primary' : 'shadow'}
              outlined={isPrimaryAccept}
              onClick={accept.onClick}
              size="small"
              title={accept.title}
              hover={!isPrimaryAccept}
              disabled={
                accept.isDisabled ||
                (requireScroll
                  ? isPrimaryAccept
                    ? hasScrolled
                      ? false
                      : true
                    : false
                  : false)
              }
            />
          </Flex>
          {decline && (
            <Button
              fullWidth={hasStackedActions}
              id={decline.id}
              type={isPrimaryAccept ? 'shadow' : 'primary'}
              outlined={isPrimaryAccept ? false : true}
              onClick={decline.onClick}
              size="small"
              title={decline.title}
              hover={isPrimaryAccept}
              disabled={
                decline.isDisabled ||
                (requireScroll
                  ? isPrimaryAccept
                    ? false
                    : hasScrolled
                    ? false
                    : true
                  : false)
              }
            />
          )}
        </Flex>
      </Flex>
    </Dialog>
  )
}
