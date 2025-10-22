import React, { FC } from 'react'
import { RadioOptionCardProps, RadioOptionCard } from 'src/exports/organisms'
import { VStack, Text, Spacer, Div } from 'src/exports/atoms'
import { IconLink } from 'src/exports/molecules'

export type SelectedOptionProps = {
  title: string
  description: string
  option: RadioOptionCardProps
  removeSelectedOption?: () => void
}

export const SelectedOption: FC<SelectedOptionProps> = ({
  title,
  description,
  option,
  children,
  removeSelectedOption,
}) => {
  return (
    <Div width="100%">
      {removeSelectedOption && (
        <Div position="absolute" top="x3" left="x3">
          <IconLink
            icon="chevron"
            iconOrientation="left"
            title="Back"
            size="small"
            onClick={removeSelectedOption}
          />
        </Div>
      )}
      <VStack gap="x1">
        <Text
          style={{ lineHeight: 'initial' }}
          type="title"
          color="primaryHeading"
          content={title}
          alignment="center"
        />
        <Text
          type="body"
          color="primaryBody"
          content={description}
          alignment="center"
        />
        <Spacer space="x1" />
        <RadioOptionCard
          title={option.title}
          subtitle={option.subtitle}
          isFeatured={option.isFeatured}
          isSelected={true}
          optionId={option.optionId}
        />
        {children}
      </VStack>
    </Div>
  )
}
