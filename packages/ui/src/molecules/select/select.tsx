import React, { useState, useRef } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { Span } from 'src/atoms/span/span'
import { Icon } from 'src/atoms/iconography/components/icon'
import { AnimatePresence } from 'framer-motion'
import { List, AlignmentOptions, Div, HStack } from 'src/exports/atoms'
import { Separator } from 'src/exports/molecules'
import { Option } from './components/option'
import { IconColors, IconType } from 'src/atoms/iconography/types'
import { Text } from 'src/atoms/typography/text'
import { OptionContent } from './components/optionContent'
import styles from './styles'
import { useEntities } from 'src/hooks/useEntities'

type OptionWithTextLabelType = {
  value: string
  label: string
  hasSeparator?: boolean
}
type OptionWithGraphicLabelType = {
  value: string
  label:
    | {
        icon: IconType
        url?: undefined
      }
    | {
        icon?: undefined
        url: string
      }
}
type OptionWithGrapihicTextLabelType = {
  value: string
  label:
    | {
        icon: IconType
        url?: undefined
        text: string
      }
    | {
        icon?: undefined
        url: string
        text: string
      }
}

type OptionWithReacNodeLabelType = {
  value: string
  label: React.ReactNode
  hasSeparator?: boolean
}

type OptionsTextType = {
  type: 'text'
  options: OptionWithTextLabelType[]
}
type OptionsGraphicTextType = {
  type: 'graphicText'
  options: OptionWithGrapihicTextLabelType[]
}
type OptionsGraphicType = {
  type: 'graphic'
  options: OptionWithGraphicLabelType[]
}

type OptionsReactNodeType = {
  type: 'reactNode'
  options: OptionWithReacNodeLabelType[]
}

export type SelectFocusType = IconColors

export type SelectProps = {
  alignment?: AlignmentOptions
  onChange: (selectedOptionIndex: number) => void
  selectedOptionIndex?: number
  dropDownMaxHeight?: string
  shouldAlignDropDownToLeft?: boolean
  isDropDownAbove?: boolean
  selectHeight?: string
  selectWidth?: string
  focusColor?: SelectFocusType
  message?: {
    type: 'success' | 'danger' | 'warning'
    content: string
    icon?: IconType
    onClick?: () => void
  }
  frontLabel?: string
  scrollBarWidth?: 'thin' | 'auto'
} & (
  | OptionsTextType
  | OptionsGraphicTextType
  | OptionsGraphicType
  | OptionsReactNodeType
)

const chevronVariants = {
  open: {
    transform: 'rotate(90deg)',
  },
  closed: {
    transform: 'rotate(270deg)',
  },
}
const dropDownVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}
const selectBodyVariants = {
  open: {
    y: -2,
  },
  closed: {
    y: 0,
  },
}
export const Select = (props: SelectProps) => {
  const {
    alignment,
    onChange,
    selectedOptionIndex,
    dropDownMaxHeight,
    shouldAlignDropDownToLeft,
    selectHeight,
    selectWidth,
    isDropDownAbove = false,
    focusColor = 'primaryBrand',
    message,
    frontLabel,
    scrollBarWidth = 'auto',
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [currentSelection, setCurrentSelection] = useState(selectedOptionIndex)

  const listRef = useRef<HTMLUListElement>(null)
  const ref = useRef<HTMLHeadingElement>(null)
  useOutsideClick(ref, () => {
    setIsOpen(false)
  })
  const handleOptionSelection = (id: number) => {
    setIsOpen(false)
    setCurrentSelection(id)
    onChange(id)
  }
  const { inputs, hocs } = useEntities()

  const applyCurrentSelection = () => {
    if (
      currentSelection !== undefined &&
      currentSelection !== selectedOptionIndex
    ) {
      onChange(currentSelection)
    }
  }

  const focusCurrentSelection = (newSelection: number) => {
    if (listRef.current) {
      listRef.current.children[newSelection].scrollIntoView({
        behavior: 'auto',
        block: 'center',
      })
    }
  }

  const openOrCloseAndFocus = (shouldOpen: boolean) => {
    setIsOpen(shouldOpen)
    if (shouldOpen) {
      if (selectedOptionIndex !== undefined) {
        setTimeout(() => {
          focusCurrentSelection(selectedOptionIndex)
        }, 100)
      }
    }
  }

  const selectAndFocus = (newSelection: number) => {
    setCurrentSelection(newSelection)
    focusCurrentSelection(newSelection)
  }

  const handleArrows = (direction: 1 | -1) => {
    if (!isOpen) {
      openOrCloseAndFocus(true)
    } else if (
      currentSelection !== undefined &&
      (direction === 1
        ? props.options.length > currentSelection + 1
        : 0 < currentSelection)
    ) {
      selectAndFocus(currentSelection + direction)
    } else {
      const newDirection = direction === 1 ? 0 : props.options.length - 1
      selectAndFocus(newDirection)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      openOrCloseAndFocus(!isOpen)
      applyCurrentSelection()
    } else if (e.code === 'ArrowDown') {
      handleArrows(1)
    } else if (e.code === 'ArrowUp') {
      handleArrows(-1)
    } else if (isOpen) {
      if (e.code === 'Enter') {
        setIsOpen(false)
        applyCurrentSelection()
      } else if (e.code === 'Escape') {
        setIsOpen(false)
        // Do not apply current selection
        setCurrentSelection(selectedOptionIndex)
      } else if (e.code === 'Tab') {
        setIsOpen(false)
        applyCurrentSelection()
      } else {
        const index = props.options.findIndex(
          (
            s:
              | OptionWithTextLabelType
              | OptionWithGrapihicTextLabelType
              | OptionWithGraphicLabelType,
          ) => new RegExp(e.key, 'i').test(s.label[0]),
        )
        if (index > -1) {
          selectAndFocus(index)
        }
      }
    }
  }

  return (
    <div css={styles.selectContainer} ref={ref} onKeyDown={onKeyDown}>
      <Div
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        variants={selectBodyVariants}
        initial={isOpen ? 'open' : 'closed'}
        animate={isOpen ? 'open' : 'closed'}
        whileHover={{ y: -2 }}
        css={styles.selectBody(hocs, focusColor, selectHeight, selectWidth)}
        onClick={() => {
          openOrCloseAndFocus(!isOpen)
          if (currentSelection !== selectedOptionIndex) {
            isOpen
              ? applyCurrentSelection()
              : setCurrentSelection(selectedOptionIndex)
          }
        }}
        borderRadius="default"
        backgroundColor={isHover || isOpen ? 'foreground' : 'background'}
        boxShadow={isHover || isOpen ? inputs.select.boxShadow : 'none'}
        tabIndex={0}
        style={{
          border: message
            ? `${inputs.text.borderWidth} solid ${
                hocs.colors.swatches[message.type].base
              }`
            : '',
        }}
      >
        {frontLabel && (
          <Text
            type="caption"
            outset={{ horizontal: 'x1' }}
            content={frontLabel}
          />
        )}
        <div css={styles.activeOption(alignment)}>
          {selectedOptionIndex !== undefined &&
          props.options[selectedOptionIndex] !== undefined ? (
            <div>
              {props.type === 'text' ? (
                <OptionContent
                  type={props.type}
                  label={props.options[selectedOptionIndex].label}
                  shouldBoldText={!!frontLabel}
                />
              ) : props.type === 'graphicText' ? (
                <OptionContent
                  type={props.type}
                  label={props.options[selectedOptionIndex].label}
                  shouldBoldText={!!frontLabel}
                />
              ) : props.type === 'reactNode' ? (
                <OptionContent
                  type={props.type}
                  label={props.options[selectedOptionIndex].label}
                  shouldBoldText={!!frontLabel}
                />
              ) : (
                <OptionContent
                  type={props.type}
                  label={props.options[selectedOptionIndex].label}
                  shouldBoldText={!!frontLabel}
                />
              )}
            </div>
          ) : (
            <Text content={'Select'} type="caption" />
          )}
        </div>
        <Div inset={{ left: 'x0' }}>
          <Span
            display="flex"
            justifyContent="center"
            alignItems="center"
            variants={chevronVariants}
            initial={isOpen ? 'open' : 'closed'}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Icon
              size="xSmall"
              name="chevron"
              primaryColor="default"
              orientation={'left'}
            />
          </Span>
        </Div>
      </Div>
      {message && (
        <HStack gap="x_5" justify="flex-start">
          <Text
            inset={{ left: 'x1', top: 'x_5' }}
            content={message.content}
            type="footnote"
            color={message.type}
          ></Text>
          {message.icon && (
            <Span
              inset={{ top: 'x_25' }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={message.onClick}
              cursor="pointer"
            >
              <Icon
                name={message.icon}
                primaryColor={message.type}
                size="xSmall"
              ></Icon>
            </Span>
          )}
        </HStack>
      )}
      <AnimatePresence>
        {isOpen && (
          <Div
            exit={'closed'}
            initial={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            variants={dropDownVariants}
            css={styles.selectDropdownContents(
              dropDownMaxHeight,
              shouldAlignDropDownToLeft,
            )}
            backgroundColor={inputs.select.dropDownBackgroundColor}
            borderRadius={inputs.select.borderRadius}
            boxShadow={inputs.select.dropDownShadow}
            top={!isDropDownAbove ? '50px' : undefined}
            bottom={isDropDownAbove ? '50px' : undefined}
            zIndex={50000}
            tabIndex={-1}
            style={{ scrollbarWidth: scrollBarWidth }}
          >
            <List
              orientation="vertical"
              alignment={alignment || 'center'}
              inset="x1"
              ref={listRef}
            >
              {props.type === 'reactNode' &&
                props.options.map((option, index) => (
                  <>
                    <Option
                      id={index}
                      isSelected={currentSelection === index ? true : false}
                      alignment={alignment}
                      onClick={id => handleOptionSelection(id)}
                      key={index}
                      type={props.type}
                      label={option.label}
                    />
                    {option.hasSeparator && (
                      <Separator orientation="horizontal" />
                    )}
                  </>
                ))}
              {props.type === 'text' &&
                props.options.map((option, index) => {
                  return (
                    <>
                      <Option
                        id={index}
                        isSelected={currentSelection === index ? true : false}
                        alignment={alignment}
                        onClick={id => handleOptionSelection(id)}
                        key={index}
                        type={props.type}
                        label={option.label}
                      />
                      {option.hasSeparator && (
                        <Separator orientation="horizontal" />
                      )}
                    </>
                  )
                })}
              {props.type === 'graphicText' &&
                props.options.map((option, index) => {
                  return (
                    <Option
                      id={index}
                      isSelected={selectedOptionIndex === index ? true : false}
                      alignment={alignment}
                      onClick={id => handleOptionSelection(id)}
                      key={index}
                      type={props.type}
                      label={option.label}
                    />
                  )
                })}
              {props.type === 'graphic' &&
                props.options.map((option, index) => {
                  return (
                    <Option
                      id={index}
                      isSelected={selectedOptionIndex === index ? true : false}
                      alignment={alignment}
                      onClick={id => handleOptionSelection(id)}
                      key={index}
                      type={props.type}
                      label={option.label}
                    />
                  )
                })}
            </List>
          </Div>
        )}
      </AnimatePresence>
    </div>
  )
}
