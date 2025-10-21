import React, { useState, useRef } from 'react'
import { Div, Flex, Text, HStack } from 'src/exports/atoms'
import { AnimateSharedLayout, PanInfo } from 'framer-motion'
import { HOCSpacingKeys } from 'src/helpers/hoc-types/entityValueTypes'
import { TextColor } from 'src/atoms/typography/text'
import { JustifyContent } from 'src/helpers/hoc-types/cssValueTypes'
import { useEntities } from 'src/hooks/useEntities'
import { Spacer } from 'src/exports/atoms'

export type TabProps = {
  defaultActiveKey?: number | string
  activeColor?: TextColor
  gap?: HOCSpacingKeys
  height: string
  justify?: JustifyContent
  children?: React.ReactNode
}

export const Tabs = ({
  height,
  defaultActiveKey,
  activeColor = 'primaryBrand',
  gap = 'x2',
  justify = 'flex-start',
  children,
}: TabProps) => {
  const tabChildren = React.Children.toArray(children)
  const tabKeys = tabChildren.map(
    (tabChild: React.ReactElement) => tabChild.props.tabKey,
  )
  const ref = useRef<HTMLDivElement>(null)
  const { hocs } = useEntities()
  const [activeTabKeyIndex, setActiveTabKeyIndex] = useState<number>(
    tabKeys.indexOf(defaultActiveKey) || 0,
  )
  const handleOnDragEnd = (info: PanInfo) => {
    info.offset.x < 0
      ? setActiveTabKeyIndex(
          activeTabKeyIndex === tabKeys.length - 1
            ? tabKeys.length - 1
            : activeTabKeyIndex + 1,
        )
      : setActiveTabKeyIndex(
          activeTabKeyIndex === 0 ? 0 : activeTabKeyIndex - 1,
        )
  }
  return (
    <AnimateSharedLayout>
      <Div display="flex" flexDirection="column" ref={ref}>
        <HStack gap={gap} justify={justify}>
          {tabChildren.map((child: React.ReactElement, i) => {
            const isActive = tabKeys[activeTabKeyIndex] === child.props.tabKey
            return (
              <Flex flexDirection="column" key={i}>
                <Div
                  onClick={() => setActiveTabKeyIndex(i)}
                  cursor="pointer"
                  layout
                >
                  <Text
                    type={isActive ? 'caption' : 'footnote'}
                    color={isActive ? activeColor : 'primaryBody'}
                  >
                    {child.props.title}
                  </Text>
                </Div>
                {isActive && (
                  <Div
                    height="x_25"
                    width="100%"
                    backgroundColor={hocs.textColors[activeColor]}
                    borderRadius="default"
                    layoutId="underline"
                  />
                )}
              </Flex>
            )
          })}
        </HStack>
        <Spacer space="x2" />
        <Flex
          width="100%"
          height={height}
          drag="x"
          onDragEnd={(_, info) => handleOnDragEnd(info)}
          dragConstraints={ref}
          overflow="auto"
        >
          {tabChildren[activeTabKeyIndex]}
        </Flex>
      </Div>
    </AnimateSharedLayout>
  )
}
