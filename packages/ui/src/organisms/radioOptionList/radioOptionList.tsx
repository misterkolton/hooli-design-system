import React, { FC, useState } from 'react'
import { RadioOptionCardProps, RadioOptionCard } from '../radioCard/radioCard'
import { VStack, AnchorProps, Anchor } from 'src/exports/atoms'
import { ButtonType, Button } from 'src/exports/molecules'
import { SelectableList } from '../selectableList/selectableList'

export type OptionSubmitType = {
  title: string
  type?: ButtonType
  onClick: (optionId: string) => void
}

export type RadioOptionListProps = {
  options: RadioOptionCardProps[]
  submitAction: OptionSubmitType
  defaultNumOptionsShown?: number
  globalInfoActionOverride?: (optionId?: string) => void
  extraLink?: AnchorProps
}

export const RadioOptionList: FC<RadioOptionListProps> = ({
  options,
  submitAction,
  defaultNumOptionsShown = options.length,
  globalInfoActionOverride,
  extraLink,
}) => {
  const [selectedIndexes, setSelectedIndex] = useState<[number]>([-1])

  const handleOnSelect = (
    index: number,
    optionId?: string,
    onSelect?: (optionId?: string) => void,
  ) => {
    setSelectedIndex([index])
    onSelect?.(optionId)
  }

  const [firstSelected] = selectedIndexes

  return (
    <VStack gap="x2">
      <SelectableList
        limit={1}
        selectedIndexes={selectedIndexes}
        setSelectedIndexes={
          setSelectedIndex as (selectedIndexes: number[]) => void // This assertion is because SelectableList expects an array of numbers(s), but we are locking down a fixed array (1 item) for this use case
        }
      >
        {options
          .filter((_, index) => index < defaultNumOptionsShown)
          .map((option, index) => {
            const isSelected = selectedIndexes.some(
              selectedIndex => selectedIndex === index,
            )
            return (
              <RadioOptionCard
                title={option.title}
                subtitle={option.subtitle}
                isFeatured={option.isFeatured}
                onSelect={optionId =>
                  handleOnSelect(index, optionId, option.onSelect)
                }
                isSelected={isSelected}
                key={index}
                optionId={option.optionId}
                infoAction={
                  globalInfoActionOverride
                    ? () => globalInfoActionOverride(option.optionId)
                    : option.infoAction
                }
              />
            )
          })}
      </SelectableList>
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
      <Button
        onClick={() => submitAction.onClick(options[firstSelected].optionId)}
        disabled={selectedIndexes[0] === -1 || selectedIndexes.length <= 0}
        type={submitAction.type}
        size="large"
        title={submitAction.title}
        fullWidth
      />
    </VStack>
  )
}
