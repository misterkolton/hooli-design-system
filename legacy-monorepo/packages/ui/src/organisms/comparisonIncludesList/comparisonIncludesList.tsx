import React, { FC } from 'react'
import { ComparisonItem, ComparisonItemProps, Div, VStack } from 'src'

export type ComparisonIncludesListProps = {
  items: ComparisonItemProps[]
  isMinified?: boolean
}

export const ComparisonIncludesList: FC<ComparisonIncludesListProps> = ({
  items,
  isMinified,
}) => (
  <Div
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    backgroundColor="background"
    inset="1.5rem"
  >
    <Div width="100%">
      <VStack
        gap="x2_5"
        alignItems={isMinified ? 'start' : 'center'}
        justifyContent={isMinified ? 'start' : 'center'}
      >
        {items
          .sort((a, b) => Number(b.isIncluded) - Number(a.isIncluded))
          .map((item, index) => (
            <ComparisonItem key={index} {...item} isMinified={isMinified} />
          ))}
      </VStack>
    </Div>
  </Div>
)
