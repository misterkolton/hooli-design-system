import React, { FC } from 'react'
import {
  VStack,
  Text,
  Capsule,
  Flex,
  Div,
  Card,
  Anchor,
} from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'
import { useEntities } from 'src/hooks/useEntities'
import { SizeType, ThemeMode } from 'src/types/global'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'

export type PromotionWidgetProps = {
  title: string
  description: string
  capsuleTitle: string
  backgroundColor?: BackgroundColor
  primaryAction?: {
    onClick: () => void
    title: string
  }
  secondaryAction?: {
    href: string
    title: string
  }
  minWidth?: string
  width?: string
  type: ThemeMode
  buttonSize?: SizeType
}

export const PromotionWidget: FC<PromotionWidgetProps> = ({
  title,
  capsuleTitle,
  description,
  primaryAction,
  secondaryAction,
  minWidth = '320px',
  width = '100%',
  type,
  children,
  backgroundColor = 'background',
}) => {
  const { widget } = useEntities()
  const widgetProperties = widget[type]
  return (
    <Card
      display="flex"
      justifyItems="start"
      borderRadius="default"
      backgroundColor={backgroundColor}
      inset="x4"
      width={width}
      minWidth={minWidth}
    >
      <VStack gap="x3">
        <Flex>
          <Capsule
            title={capsuleTitle}
            backgroundColor={widgetProperties.backgroundColor}
            fontColor={widgetProperties.fontColor}
            boxShadow={type === 'shadow' ? 'mediumLight' : undefined}
          />
        </Flex>
        <Div width="100%">
          <Text weight="bold" type={{ xSmall: 'subtitle', medium: 'title' }}>
            {title}
          </Text>
        </Div>
        <Div width="100%" flexWrap="wrap">
          <Text type="caption">{description}</Text>
        </Div>
        <Flex justifyContent="flex-start">
          {primaryAction && (
            <Button type="success" onClick={() => primaryAction.onClick()}>
              {primaryAction.title}
            </Button>
          )}
          {secondaryAction && (
            <Flex alignItems="center" inset={{ left: 'x3' }}>
              <Anchor
                href={secondaryAction.href}
                title={secondaryAction.title}
                size={'small'}
                color={'primaryBody'}
              />
            </Flex>
          )}

          {children}
        </Flex>
      </VStack>
    </Card>
  )
}
