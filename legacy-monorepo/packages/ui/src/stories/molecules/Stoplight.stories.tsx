import React, { useState } from 'react'
import { Stoplight, StoplightProps } from 'src/exports/molecules'
import { Pill, PillItemsType } from 'src/exports/organisms'
import { Icon, IconType, Flex } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { ColorOption } from '../../molecules/stoplight/components/colorOption'

export default {
  title: 'molecules/Stoplight',
  component: Stoplight,
  args: {
    isExpanded: true,
    isCollapsible: false,
    onClick: () => console.log('Button Click'),
  },
  argTypes: {
    activeIndex: {
      control: {
        type: 'number',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['colors', 'icons'],
      },
    },
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as Meta

const hexColorArray: string[] = ['#A55355', '#4194C4', '#BADA55', '#60243E']
const iconArray: IconType[] = ['viewPanels', 'alignCenter', 'alignRight']

export const Vertical: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex width="fit-content">
        <Stoplight
          {...args}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClick={() => {}}
          orientation="vertical"
          type="colors"
        >
          {hexColorArray.map(hexColor => (
            <ColorOption onClick={() => {}} hexColor={hexColor} />
          ))}
        </Stoplight>
      </Flex>
    </Flex>
  )
}

export const Horizontal: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex width="fit-content">
        <Stoplight
          {...args}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClick={() => {}}
          orientation="horizontal"
          type="colors"
        >
          {hexColorArray.map(hexColor => (
            <ColorOption onClick={() => {}} hexColor={hexColor} />
          ))}
        </Stoplight>
      </Flex>
    </Flex>
  )
}

export const VerticalCollapsible: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex width="fit-content">
        <Stoplight
          {...args}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isCollapsible
          onClick={() => {}}
          orientation="vertical"
          type="colors"
        >
          {hexColorArray.map(hexColor => (
            <ColorOption onClick={() => {}} hexColor={hexColor} />
          ))}
        </Stoplight>
      </Flex>
    </Flex>
  )
}
export const HorizontalCollapsible: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex width="fit-content">
        <Stoplight
          {...args}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isCollapsible
          onClick={() => {}}
          orientation="horizontal"
          type="colors"
        >
          {hexColorArray.map(hexColor => (
            <ColorOption onClick={() => {}} hexColor={hexColor} />
          ))}
        </Stoplight>
      </Flex>
    </Flex>
  )
}

export const Icons: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex width="fit-content">
        <Stoplight
          {...args}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isCollapsible
          onClick={() => {}}
          orientation="vertical"
          type="icons"
        >
          {iconArray.map((icon, index) => (
            <Icon
              name={icon}
              size="medium"
              primaryColor={
                isExpanded && index === activeIndex ? 'primaryBrand' : 'default'
              }
            />
          ))}
        </Stoplight>
      </Flex>
    </Flex>
  )
}

const pillContents: PillItemsType[] = [
  {
    title: 'Layers',
    icon: 'catalog',
    onClick: () => console.log('Click'),
    isActive: true,
    activeColor: 'danger',
  },
  { title: 'Swap', icon: 'loading', onClick: () => {} },
  { title: 'Delete', icon: 'close', onClick: () => {} },
  {
    title: 'Done',
    icon: 'chevron',
    iconOrientation: 'right',
    onClick: () => {},
  },
]

export const InsidePill: StoryFn<StoplightProps> = args => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex
        width="300px"
        height="300px"
        justifyContent="center"
        alignItems="center"
      >
        <Pill {...args} items={pillContents} flexDirection="row-reverse">
          <Flex width="fit-content" height="100%" inset={{ vertical: 'x_75' }}>
            <Flex
              style={{
                alignSelf: 'flex-start',
              }}
            >
              <Stoplight
                {...args}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                isCollapsible
                onClick={() => {}}
                orientation="vertical"
                type="colors"
              >
                {hexColorArray.map(hexColor => (
                  <ColorOption
                    onClick={() => {}}
                    hexColor={hexColor}
                    size="small"
                  />
                ))}
              </Stoplight>
            </Flex>
          </Flex>
        </Pill>
      </Flex>
    </Flex>
  )
}
