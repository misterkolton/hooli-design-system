import React, { FC } from 'react'
import styles from './styles'
import { HStack, VStack, Text, Div, Icon } from 'src/exports/atoms'
import { SelectableCard } from '../selectableList/components/selectableCard'

export type RadioOptionCardProps = {
  title: string
  subtitle?: string
  isSelected: boolean
  onSelect?: (optionId?: string) => void
  isFeatured?: boolean
  optionId: string
  infoAction?: () => void
}

export const RadioOptionCard: FC<RadioOptionCardProps> = ({
  title,
  subtitle,
  isFeatured,
  optionId,
  onSelect,
  isSelected,
  infoAction,
}) => {
  return (
    <>
      <SelectableCard
        isActive={isSelected}
        onClick={() => onSelect?.(optionId)}
        shouldShowActiveIcons={false}
      >
        <HStack gap="x2" justify="flex-start">
          {!!infoAction && (
            <Div
              position="absolute"
              top="x_25"
              right="x_5"
              onClick={infoAction}
            >
              <Icon
                name="information"
                size="small"
                primaryColor="primaryBodyText"
              />
            </Div>
          )}
          <VStack gap="x_5">
            <Text
              type={{ xSmall: 'body', medium: 'largeBody' }}
              color="primaryHeading"
              weight="semiBold"
              content={title}
              style={{ lineHeight: 'initial' }}
            />
            <Text
              type={{ xSmall: 'caption', small: 'body' }}
              color="primaryBody"
              weight="regular"
              content={subtitle}
              style={{ lineHeight: 'initial' }}
            ></Text>
          </VStack>
        </HStack>
        {isFeatured && (
          <Div
            backgroundColor={{ swatch: 'success', shade: 'base' }}
            overflow="hidden"
            css={styles.ribbon}
            position="absolute"
            width="150px"
            inset="0.25rem"
          >
            <Div outset={{ left: '2px' }}>
              <Text
                type="caption"
                content="Most"
                whiteSpace="normal"
                weight="bold"
                alignment="center"
                color="inverseBody"
              />
              <Text
                type="caption"
                content="Popular"
                whiteSpace="normal"
                weight="bold"
                alignment="center"
                color="inverseBody"
              />
            </Div>
          </Div>
        )}
      </SelectableCard>
    </>
  )
}
