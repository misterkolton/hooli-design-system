import React, { FC } from 'react'
import {
  Text,
  VStack,
  Spacer,
  Div,
  HStack,
  Icon,
  AnchorProps,
  Anchor,
  Flex,
} from 'src/exports/atoms'
import { Button, ButtonType } from 'src/exports/molecules'
import { ConfigurationCard } from 'src/exports/organisms'

export type SubmitOptionType = {
  title: string
  type?: ButtonType
  onClick: (optionId?: string) => void
  isFullWidth?: boolean
  isDisabled?: boolean
}

export type UpsaleOptionType = {
  title: string
  secondaryTitle?: string
  subtitle?: string
  optionId: string
  featureCaption?: string
}

export type UpsaleOptionsType = {
  selectableOptions: UpsaleOptionType[]
  selectedOption: string
  handleSelectedOption: (optionId: string) => void
  removeSelectedOption?: () => void
  children: React.ReactNode
  activeSelectedOption?: UpsaleOptionType
}

type UpsaleOptionsProps = {
  showCheckoutView: boolean
  extraLink?: AnchorProps
  defaultNumOptionsShown?: number
  handleShouldShowCheckoutView: (value: boolean) => void
  submitAction?: SubmitOptionType
} & UpsaleOptionsType

export const UpsaleOptions: FC<UpsaleOptionsProps> = ({
  selectableOptions,
  selectedOption,
  handleSelectedOption,
  removeSelectedOption,
  showCheckoutView,
  handleShouldShowCheckoutView,
  children,
  activeSelectedOption,
  extraLink,
  defaultNumOptionsShown = selectableOptions.length,
  submitAction,
}) => {
  const shouldShowCheckoutScreen = selectedOption && showCheckoutView

  return (
    <Div height="100%" position="relative" width="100%">
      <Div>
        {shouldShowCheckoutScreen && removeSelectedOption && (
          // Back Button
          <Div
            outset={{ top: 'x4' }}
            position="relative"
            bottom="25px"
            right="7px"
            height="20px"
            cursor="pointer"
            onClick={() => {
              removeSelectedOption()
              handleShouldShowCheckoutView(false)
            }}
          >
            {/* TODO: fix TextWithIcon component height inside of flex containers */}
            <HStack gap="x_25" justify="start" alignItems="center">
              <Icon
                name="leftChevron"
                size="small"
                primaryColor="primaryBodyText"
              />
              <Text
                type={'caption'}
                weight="semiBold"
                color="primaryBody"
                content="Back"
                alignment="center"
                style={{ position: 'relative', bottom: 4 }}
              />
            </HStack>
            <Spacer space="x2" />
          </Div>
        )}
        <VStack gap="x2">
          {shouldShowCheckoutScreen && activeSelectedOption ? (
            <Div>
              <ConfigurationCard
                description={activeSelectedOption.subtitle}
                configurationId={activeSelectedOption.optionId}
                type="upsale"
                {...activeSelectedOption}
                isSelected
              />
              {children}
            </Div>
          ) : (
            <VStack gap="x2">
              {selectableOptions
                .filter((_, index) => index < defaultNumOptionsShown)
                .map((option, index) => {
                  return (
                    <ConfigurationCard
                      {...option}
                      key={index}
                      type="upsale"
                      description={option.subtitle}
                      configurationId={option.optionId}
                      onSelect={() => handleSelectedOption(option.optionId)}
                      isSelected={selectedOption === option.optionId}
                    />
                  )
                })}
            </VStack>
          )}
          {extraLink && (
            <Anchor
              title={extraLink.title}
              onClick={extraLink.onClick}
              href={extraLink.href}
              size="small"
              color="primaryBody"
              outset="0 auto"
            />
          )}
          {submitAction && (
            <Flex width="100%" justifyContent="center" alignItems="center">
              <Button
                title={submitAction.title}
                type={submitAction.type}
                onClick={submitAction.onClick}
                fullWidth={submitAction.isFullWidth}
                disabled={submitAction.isDisabled}
                size="large"
              />
            </Flex>
          )}
        </VStack>
      </Div>
    </Div>
  )
}
