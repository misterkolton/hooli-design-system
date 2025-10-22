import React, { FC } from 'react'
import {
  AnimatedCheckMark,
  Div,
  Flex,
  Text,
  Icon,
  Capsule,
} from 'src/exports/atoms'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { HOCColorKeysWithSwatch } from 'src/helpers/hoc-types/entityValueTypes'

type ConfigurationCardType = 'addon' | 'info' | 'upsale'

// TODO: graphic prop should be placed in a SOC portfolio to remove specific business logic from a QDS component
export type ConfigurationCardProps = {
  graphic?: React.ReactNode
  title: string
  secondaryTitle?: string
  description?: string
  cost?: number | string
  isSelected?: boolean
  onSelect?: (configurationId: string) => void
  configurationId: string
  itemPriceTitle?: string
  layout?: 'horizontal' | 'vertical'
  type?: ConfigurationCardType
  featureCaption?: string
  backgroundColor?: HOCColorKeysWithSwatch
}

export const ConfigurationCard: FC<ConfigurationCardProps> = ({
  graphic,
  description,
  cost,
  title,
  secondaryTitle,
  onSelect,
  configurationId,
  itemPriceTitle,
  layout,
  type = 'addon',
  featureCaption,
  backgroundColor = 'background',
  isSelected,
}) => {
  const { width } = useWindowSize()
  const responsiveLayout = width < 420 ? 'vertical' : layout

  return (
    <Flex
      onClick={() => {
        onSelect?.(configurationId)
      }}
      position="relative"
      boxShadow="mediumDark"
      backgroundColor={backgroundColor}
      cursor="pointer"
      inset={{ vertical: 'x2_5', horizontal: 'x2' }}
      borderWidth="default"
      borderRadius="default"
      borderStyle="solid"
      borderColor={
        isSelected && type === 'upsale'
          ? { swatch: 'primaryBrand', shade: 'base' }
          : isSelected && type === 'addon'
          ? { swatch: 'success', shade: 'base' }
          : 'transparent'
      }
    >
      <Div right="x1" position="absolute" top="x_75">
        {isSelected && type === 'addon' ? (
          <AnimatedCheckMark />
        ) : type === 'info' ? (
          <Icon name="information" size="small" primaryColor="secondaryBrand" />
        ) : (
          type === 'upsale' &&
          featureCaption && (
            <Capsule
              backgroundColor={{ swatch: 'primaryBrand', shade: 'base' }}
              fontColor="inverseBody"
              title={featureCaption}
            />
          )
        )}
      </Div>
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        flexDirection={
          responsiveLayout || layout === 'vertical' ? 'column' : 'row'
        }
      >
        {graphic}
        <Div
          minWidth={{ small: '216px' }}
          outset={
            responsiveLayout
              ? { vertical: 'x2', horizontal: 'x2' }
              : { horizontal: 'x2', left: 'x2' }
          }
        >
          <Flex>
            <Text
              color="primaryBody"
              alignment={responsiveLayout ? 'center' : 'left'}
              weight="bold"
              type="largeBody"
              content={title}
            />
            <Text
              outset={{ left: 'x1' }}
              color="primaryBody"
              alignment={responsiveLayout ? 'center' : 'left'}
              weight="thin"
              type="largeBody"
              content={secondaryTitle}
            />
          </Flex>
          <Text
            color="primaryBody"
            alignment={responsiveLayout ? 'center' : 'left'}
            type={{ xSmall: 'footnote', medium: 'caption' }}
            content={description}
          />
        </Div>
        {cost && type !== 'info' && (
          <Flex
            flexDirection="row"
            outset={responsiveLayout ? 'x0' : { left: 'auto' }}
            inset="x_5"
            alignItems="center"
          >
            <Text
              color="primaryBody"
              lineHeight={1}
              weight="semiBold"
              inset="0"
              type="body"
              content={`${
                typeof cost === 'number' ? `$${cost.toFixed(2)}` : cost
              } `}
            />
            <Text
              color="primaryBody"
              lineHeight={1}
              inset="0"
              type="body"
              content={itemPriceTitle}
              whiteSpace="nowrap"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
