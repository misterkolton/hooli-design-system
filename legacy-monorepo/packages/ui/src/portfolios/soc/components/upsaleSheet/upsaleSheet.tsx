import React, { FC } from 'react'
import { Sheet, CloseButton, SnapPoint } from 'src/exports/molecules'
import {
  RadioOptionList,
  OptionSubmitType,
} from '../../../../organisms/radioOptionList/radioOptionList'
import { Text, VStack, Spacer, Div, Flex, Span } from 'src/exports/atoms'
import { RadioOptionCardProps } from '../../../../organisms/radioCard/radioCard'
import { SelectedOption } from './components/selectedOption'
import { useWindowSize } from 'src/hooks/useWindowSize'
import useResizeObserver from 'use-resize-observer'
import {
  HOCSpacingKeys,
  LiteralUnion,
  SpacingDirection,
} from 'src/helpers/hoc-types/entityValueTypes'

type ExpandedOptionChild = {
  expandedChild?: React.ReactNode
}

type OptionType = ExpandedOptionChild & RadioOptionCardProps

type ExtraLinkType = {
  title: string
  onClick?: () => void
  href?: string
}

export type UpsaleSheetProps = {
  title: string
  description: string
  options: OptionType[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  backgroundElement: React.ReactNode
  submitAction: OptionSubmitType
  extraLink: ExtraLinkType
  selectedOptionTitle: string
  selectedOptionDescription: string
  defaultNumOptionsShown?: number
  selectedOption: string
  removeSelectedOption?: () => void
  successComponent?: React.ReactNode
  zIndex?: number
  width?: string
  inset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
  outset?: SpacingDirection | LiteralUnion<HOCSpacingKeys>
}

export const UpsaleSheet: FC<UpsaleSheetProps> = ({
  title,
  description,
  options,
  isOpen,
  setIsOpen,
  backgroundElement,
  submitAction,
  extraLink,
  selectedOptionTitle,
  selectedOptionDescription,
  children,
  defaultNumOptionsShown,
  selectedOption,
  removeSelectedOption,
  successComponent,
  zIndex = 103, // SOC Nav is 102
  width,
  inset,
  outset,
}) => {
  const [expandedOption, setExpandedOption] = React.useState('')
  const { ref, height: childrenWrapperHeight } =
    useResizeObserver<HTMLDivElement>()

  const findOption = (optionToFind: string) => {
    return options.find(option => option.optionId === optionToFind)
  }
  const activeSelectedOption = findOption(selectedOption)
  const activeExpandedOption = findOption(expandedOption)

  const { height } = useWindowSize()
  return (
    <Sheet
      isOpen={isOpen}
      backgroundElement={backgroundElement}
      setIsOpen={() => setIsOpen(true)}
      draggable
      initialSnapPoint="description"
      zIndex={zIndex}
      width={width}
      inset={inset}
      outset={outset}
    >
      {successComponent ? (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          minHeight={'641px'}
          width={'100%'}
        >
          {successComponent}
        </Flex>
      ) : (
        <Div position="static" width="100%">
          {selectedOption && activeSelectedOption ? (
            <SelectedOption
              title={selectedOptionTitle}
              description={selectedOptionDescription}
              option={activeSelectedOption}
              removeSelectedOption={removeSelectedOption}
            >
              {children}
            </SelectedOption>
          ) : expandedOption && activeExpandedOption?.expandedChild ? (
            <Div
              width="100%"
              height="100%"
              borderRadius={{ bottomLeft: 'default', topLeft: 'default' }}
              overflowY="auto"
              overflowX="hidden"
              backgroundColor="foreground"
            >
              <Span
                top="6px"
                right="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                inset="x1"
                position="absolute"
              >
                <Text
                  type="footnote"
                  content="Close"
                  weight="semiBold"
                  style={{ color: 'black' }}
                />
              </Span>
              <CloseButton
                onClose={() => setExpandedOption('')}
                top="8px"
                right="52px"
                size="xSmall"
                backgroundColor={{ swatch: 'danger', shade: 'base' }}
              />
              {activeExpandedOption.expandedChild}
            </Div>
          ) : (
            <Div ref={ref}>
              <VStack gap="x2">
                <Text
                  type={{ xSmall: 'subtitle', small: 'title' }}
                  weight="bold"
                  color="primaryHeading"
                  content={title}
                  alignment="center"
                />
                <Spacer space="x2" />
                <Text
                  type={{ xSmall: 'caption', small: 'body' }}
                  color="primaryBody"
                  content={description}
                  alignment="center"
                />
                {childrenWrapperHeight && childrenWrapperHeight >= height && (
                  <SnapPoint name="description" />
                )}
                <Spacer space="x2" />
                <RadioOptionList
                  options={options}
                  submitAction={submitAction}
                  defaultNumOptionsShown={defaultNumOptionsShown}
                  globalInfoActionOverride={(optionId: string) =>
                    setExpandedOption(optionId)
                  }
                  extraLink={{
                    title: extraLink.title,
                    onClick: extraLink.onClick,
                    href:
                      extraLink.href && !extraLink.onClick
                        ? extraLink.href
                        : undefined,
                  }}
                />
              </VStack>
            </Div>
          )}
        </Div>
      )}
    </Sheet>
  )
}
