import React, { FC } from 'react'
import styles from './styles'
import { Div, Icon, Flex } from 'src/exports/atoms'
import { Select } from 'src/exports/molecules'
import { useEntities } from 'src/hooks/useEntities'
import { AnimateSharedLayout } from 'framer-motion'

export type ZoomProps = {
  items: ZoomItemsType[]
  selectedOptionIndex: number
  isDropDownAbove?: boolean
  dropDownMaxHeight?: string
  onChange: (selectedOptionIndex: number) => void
  background: 'background' | 'foreground'
}

export type ZoomItemsType = {
  value: string
  label: string
  hasSeparator?: boolean
}

export const Zoom: FC<ZoomProps> = ({
  onChange,
  items,
  dropDownMaxHeight,
  background,
  selectedOptionIndex,
  isDropDownAbove = true,
}) => {
  const { hocs } = useEntities()
  const hasHitMax = selectedOptionIndex === 0
  const hasHitMin = selectedOptionIndex === items.length - 1
  return (
    <AnimateSharedLayout>
      <Flex
        inset="x_5"
        borderRadius="circle"
        height="40px"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="light"
        backgroundColor={background}
        layout
      >
        <Flex
          css={styles.iconContainer(hocs)}
          borderRadius="circle"
          cursor={hasHitMin ? 'not-allowed' : 'pointer'}
          alignItems="center"
          onClick={
            selectedOptionIndex < items.length - 1
              ? () => onChange(selectedOptionIndex + 1)
              : undefined
          }
          opacity={hasHitMin ? 0.5 : 1}
          inset="x_75"
        >
          <Icon name="minus" size="xSmall" primaryColor="default" />
        </Flex>
        <Div
          outset={{ top: 'x1', right: 'x_25', bottom: 'x1', left: 'x_25' }}
          layout
        >
          <Select
            selectedOptionIndex={selectedOptionIndex}
            onChange={selectedOptionIndex => onChange(selectedOptionIndex)}
            alignment="center"
            options={items}
            type="text"
            isDropDownAbove={isDropDownAbove}
            dropDownMaxHeight={dropDownMaxHeight}
            selectHeight={'35px'}
          />
        </Div>
        <Flex
          css={styles.iconContainer(hocs)}
          inset="x_75"
          borderRadius="circle"
          cursor={hasHitMax ? 'not-allowed' : 'pointer'}
          alignItems="center"
          opacity={hasHitMax ? 0.5 : 1}
          onClick={
            selectedOptionIndex > 0
              ? () => onChange(selectedOptionIndex - 1)
              : undefined
          }
        >
          <Icon name="plus" size="xSmall" primaryColor="default" />
        </Flex>
      </Flex>
    </AnimateSharedLayout>
  )
}
