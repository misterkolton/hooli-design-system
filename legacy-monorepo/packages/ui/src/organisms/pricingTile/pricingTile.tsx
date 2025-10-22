import React, { useState } from 'react'
import {
  Flex,
  Text,
  Icon,
  IconColors,
  Spacer,
  VStack,
  TextColor,
  Anchor,
  List,
  ListItem,
  Div,
  AnimatedCheckMark,
} from 'src/exports/atoms'
import { Button, ButtonType } from 'src/exports/molecules'
import { useEntities } from 'src/hooks/useEntities'
import { AnimatePresence } from 'framer-motion'

type PricingTileColorType = Exclude<TextColor, 'anchorBlue'>

type ActionType = {
  text: string
  onClick: () => void
  shouldTextMatchBackground?: boolean
  isDisabled?: boolean
}

type FeaturedItemStyleType = {
  backgroundColor: PricingTileColorType
  accentColor: PricingTileColorType
  textColor: 'gray' | 'white'
}

type FeatureWithSubFeatures = {
  feature: string
  subFeatures: string[]
  isNotIncluded?: boolean
}

type Features = FeatureWithSubFeatures | string

type Disclaimer = {
  linkTitle?: string
  termsTitle: string
  termsDescription: string
}

export type PricingTileProps = {
  title: string
  price?: string
  priceSubtext?: string
  features: Features[]
  primaryAction?: ActionType
  secondaryAction?: ActionType
  isFeatured?: boolean
  featuredItemStyles?: FeaturedItemStyleType
  accentColor?: PricingTileColorType
  backgroundColor?: PricingTileColorType
  textColor?: 'gray' | 'white'
  description?: string
  billingInterval?: string
  hasShadow?: boolean
  disclaimer?: Disclaimer
  isSelected?: boolean
  isFullLength?: boolean
  children?: React.ReactNode
}

export const PricingTile = ({
  title,
  price,
  features,
  accentColor = 'primaryBrand',
  backgroundColor = 'inverseBody',
  isFeatured = false,
  featuredItemStyles = {
    backgroundColor: 'primaryBrand',
    accentColor: 'inverseBody',
    textColor: 'white',
  },
  textColor = 'gray',
  description,
  priceSubtext,
  billingInterval,
  primaryAction,
  secondaryAction,
  children,
  hasShadow = true,
  disclaimer,
  isSelected = false,
  isFullLength = false,
}: PricingTileProps) => {
  const { hocs } = useEntities()

  const getIconColorFromAccentColor = (
    accentColor: PricingTileColorType,
  ): IconColors => {
    switch (accentColor) {
      case 'primaryBody':
        return 'primaryBodyText'
      case 'primaryHeading':
        return 'primaryHeadingText'
      case 'inverseBody':
        return 'inverseBodyText'
      case 'inverseHeading':
        return 'inverseHeadingText'
      default:
        return accentColor
    }
  }

  const getButtonTypeFromAccentColor = (
    accentColor: PricingTileColorType,
  ): ButtonType => {
    switch (accentColor) {
      case 'primaryBrand':
      case 'primaryBody':
      case 'primaryHeading':
        return 'primary'
      case 'secondaryBrand':
        return 'secondary'
      case 'inverseBody':
      case 'inverseHeading':
        return 'shadow'
      default:
        return accentColor
    }
  }

  const isFeatureWithSubFeaturesType = (
    valueToCheck: any,
  ): valueToCheck is FeatureWithSubFeatures => {
    const value = valueToCheck as FeatureWithSubFeatures
    return value.feature !== undefined && value.subFeatures !== undefined
  }

  const featureTextColor = isFeatured
    ? featuredItemStyles.textColor === 'white'
      ? 'inverseBody'
      : 'primaryBody'
    : textColor === 'white'
    ? 'inverseBody'
    : 'primaryBody'

  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false)

  return (
    <Flex
      id="pricingTileContainerQDS"
      inset="x5"
      backgroundColor={
        isFeatured
          ? hocs.textColors[featuredItemStyles.backgroundColor]
          : hocs.textColors[backgroundColor]
      }
      width="100%"
      position="relative"
      height={isFullLength ? 'auto' : 'fit-content'}
      borderStyle={'solid'}
      borderColor={
        isSelected ? { swatch: 'success', shade: 'base' } : 'transparent'
      }
      borderWidth={'default'}
      borderRadius="default"
      boxShadow={hasShadow ? 'mediumLight' : ''}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      minWidth={{ xSmall: '100%', small: '400px' }}
      outset={{
        horizontal: { xSmall: 'x2', small: 'x0' },
        vertical: { xSmall: 'x1', small: 'x0' },
      }}
    >
      <VStack gap="x4">
        <VStack gap="x2">
          <Flex
            justifyContent={billingInterval ? 'space-between' : 'flex-start'}
            width="100%"
            alignContent="flex-start"
          >
            {isSelected && (
              <Div right="x1" position="absolute" top="x1">
                <AnimatedCheckMark color="accent" />
              </Div>
            )}
            <VStack gap="x2">
              <Text
                type={{ xSmall: 'subtitle', medium: 'title' }}
                color={
                  isFeatured ? featuredItemStyles.accentColor : accentColor
                }
                weight="bold"
                content={title}
              />
              <Text lineHeight={1.5} type="caption" color={featureTextColor}>
                {description ?? children}
              </Text>
              <Flex width="100%" alignItems="center">
                {price && (
                  <Text
                    type={{ xSmall: 'subtitle', medium: 'title' }}
                    color={featureTextColor}
                    weight="bold"
                    content={price}
                  />
                )}
                {priceSubtext && (
                  <>
                    <Spacer space="x2" orientation="horizontal" />
                    <Flex opacity={0.75}>
                      <Text
                        type={{ xSmall: 'footnote', medium: 'caption' }}
                        color={featureTextColor}
                      >
                        {priceSubtext}
                      </Text>
                    </Flex>
                  </>
                )}
              </Flex>
            </VStack>
            {billingInterval && (
              <Flex height="100%">
                <Spacer orientation="horizontal" space="x2" />
                <Flex
                  borderRadius="circle"
                  alignItems="center"
                  height="fit-content"
                  backgroundColor={
                    (backgroundColor !== 'inverseBody' &&
                      backgroundColor !== 'inverseHeading') ||
                    isFeatured
                      ? '#FFFFFF44'
                      : undefined
                  }
                  boxShadow={!isFeatured ? 'light' : undefined}
                  inset={{ vertical: 'x_5', horizontal: 'x2' }}
                >
                  <Text
                    type={{ xSmall: 'caption', medium: 'body' }}
                    color={featureTextColor}
                  >
                    {billingInterval}
                  </Text>
                </Flex>
              </Flex>
            )}
          </Flex>
        </VStack>
        <Flex width="100%">
          <VStack gap={'x2'}>
            {features.map((feature, index) => (
              <Flex flexDirection={'row'} key={index}>
                <Flex alignItems="start" flexDirection={'row'}>
                  <Div position={'relative'} inset={{ top: 'x_5' }}>
                    <Icon
                      name={
                        isFeatureWithSubFeaturesType(feature) &&
                        feature?.isNotIncluded
                          ? 'closeCircle'
                          : 'check'
                      }
                      size="xSmall"
                      primaryColor={getIconColorFromAccentColor(
                        isFeatured
                          ? featuredItemStyles.accentColor
                          : accentColor,
                      )}
                    />
                  </Div>
                  <Spacer orientation="horizontal" space="x2_5" />
                </Flex>
                {isFeatureWithSubFeaturesType(feature) ? (
                  <>
                    <Div
                      display="inline-block"
                      flexDirection={'row'}
                      flexWrap={'wrap'}
                    >
                      <Text
                        type={{ xSmall: 'caption', medium: 'body' }}
                        color={featureTextColor}
                        weight="bold"
                      >
                        {feature.feature}
                      </Text>
                      <List
                        orientation="vertical"
                        alignment="left"
                        width="100%"
                        outset={{ left: 'x2' }}
                        listStyle="circle"
                      >
                        {feature.subFeatures.map((subFeature, index) => {
                          return (
                            <ListItem
                              orientation="vertical"
                              key={index}
                              inset={{
                                right: 'x4',
                                left: 'x0',
                                top: '0',
                                bottom: '0',
                              }}
                            >
                              <Text color={featureTextColor} type="body">
                                {subFeature}
                              </Text>
                            </ListItem>
                          )
                        })}
                      </List>
                    </Div>
                  </>
                ) : (
                  <Text
                    type={{ xSmall: 'caption', medium: 'body' }}
                    color={featureTextColor}
                    weight="bold"
                  >
                    {feature}
                  </Text>
                )}
              </Flex>
            ))}
          </VStack>
        </Flex>
        {primaryAction && (
          <Flex width="100%">
            <Button
              fullWidth
              title={primaryAction.text}
              size="medium"
              onClick={primaryAction.onClick}
              disabled={primaryAction.isDisabled}
              type={getButtonTypeFromAccentColor(
                isFeatured ? featuredItemStyles.accentColor : accentColor,
              )}
              textColorOverride={
                primaryAction.shouldTextMatchBackground && isFeatured
                  ? featuredItemStyles.backgroundColor
                  : primaryAction.shouldTextMatchBackground
                  ? backgroundColor
                  : undefined
              }
            />
          </Flex>
        )}
        {secondaryAction && (
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Anchor
              title={secondaryAction.text}
              onClick={
                secondaryAction.isDisabled ? undefined : secondaryAction.onClick
              }
              color={
                secondaryAction.shouldTextMatchBackground && isFeatured
                  ? featuredItemStyles.backgroundColor
                  : secondaryAction.shouldTextMatchBackground
                  ? backgroundColor
                  : undefined
              }
              isDecorated={true}
              target={'_blank'}
            />
          </Flex>
        )}

        {disclaimer && (
          <Div onClick={() => setDisclaimerOpen(true)}>
            <Anchor isDecorated size={'xSmall'}>
              {disclaimer.linkTitle ?? '**View Disclaimer'}
            </Anchor>
          </Div>
        )}
        <AnimatePresence>
          {isDisclaimerOpen && disclaimer && (
            <Div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              display={'flex'}
              inset="x5"
              backgroundColor="foreground"
              borderRadius="default"
              flexDirection="column"
              justifyContent="flex-start"
              position={'absolute'}
              top={'0px'}
              left={'0px'}
              width={'100%'}
              height={'100%'}
              transition={{ duration: 0.25 }}
            >
              <Text
                type={'title'}
                weight={'bold'}
                content={disclaimer.termsTitle}
              />
              <Text type={'body'} content={disclaimer.termsDescription} />
              <Div outset={{ top: 'auto' }} width={'100%'}>
                <Button
                  type={'secondary'}
                  onClick={() => setDisclaimerOpen(false)}
                  fullWidth
                >
                  Back
                </Button>
              </Div>
            </Div>
          )}
        </AnimatePresence>
      </VStack>
    </Flex>
  )
}
