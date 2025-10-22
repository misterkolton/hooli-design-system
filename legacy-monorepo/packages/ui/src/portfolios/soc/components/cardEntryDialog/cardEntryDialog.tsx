import React, { FC } from 'react'
import { Button, Dialog } from 'src/exports/molecules'
import { HStack, Text, VStack, Spacer, Div } from 'src/exports/atoms'
import { useDeviceSize } from 'src/hooks/useDeviceSize'
import { ThemeMode } from 'src/types/global'

type ActionType = {
  title: string
  onClick: () => void
  type?: ThemeMode
  outlined?: boolean
}

export type CardEntryDialogProps = {
  title: string
  description: string
  primaryAction: ActionType
  secondaryAction: ActionType
  isOpen: boolean
  onClose: () => void
}

export const CardEntryDialog: FC<CardEntryDialogProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  isOpen,
  onClose,
}) => {
  const { device } = useDeviceSize()
  return (
    <Div>
      <Dialog onClose={onClose} isOpen={isOpen} maxWidth={{ medium: '800px' }}>
        <VStack gap="x2">
          <Text
            color="primaryHeading"
            content={title}
            type={device === 'xSmall' ? 'subtitle' : 'title'}
            weight="bold"
            alignment="center"
          />
          <Text
            color="primaryBody"
            content={description}
            type={device === 'xSmall' ? 'caption' : 'body'}
            weight="regular"
            alignment="center"
          />
          <Spacer space="x2" />
          <HStack
            gap={device === 'xSmall' ? { bottom: 'x2' } : 'x3'}
            justify="center"
            shouldWrap
            childWidth={device === 'xSmall' ? '100%' : 'initial'}
          >
            <Button
              title={secondaryAction.title}
              onClick={secondaryAction.onClick}
              type={secondaryAction?.type ?? 'shadow'}
              outlined={secondaryAction?.outlined ?? true}
              fullWidth={device === 'xSmall'}
            />
            <Button
              title={primaryAction.title}
              onClick={primaryAction.onClick}
              type={primaryAction?.type ?? 'secondary'}
              outlined={primaryAction?.outlined ?? false}
              fullWidth={device === 'xSmall'}
            />
          </HStack>
        </VStack>
      </Dialog>
    </Div>
  )
}
