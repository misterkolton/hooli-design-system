import React, { useState } from 'react'
import { Drawer, DrawerProps, Button, Tooltip } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VStack, Div, Flex, Text } from 'src/exports/atoms'
import useResizeObserver from 'use-resize-observer'
import { SettingInput } from 'src/exports/organisms'
export default {
  title: 'molecules/Drawer',
  component: Drawer,
  args: {
    openValue: 300,
    isTabHidden: false,
    location: 'left',
    backgroundColor: 'blurredGlass', // Default value
    inset: 'x0', // Default value
  },
  argTypes: {
    location: {
      control: {
        // type: 'select',
        options: ['left', 'right', 'top', 'bottom'],
      },
    },
    tabMode: {
      control: {
        // type: 'select',
        options: ['light', 'dark'],
      },
    },
    backgroundColor: {
      control: {
        // type: ['select'],
        options: ['blurredGlass', '#909090', '#F8F8F8'], // Allow 'blurredGlass' or any custom string
      },
    },
    inset: {
      control: {
        // type: 'select',
        options: [
          'x0',
          'x_25',
          'x_5',
          'x_75',
          'x1',
          'x1_5',
          'x2',
          'x2_5',
          'x3',
          'x4',
          'x5',
          'x6',
          'x7',
          'x8',
          'x9', // HOCSpacingKeys
          'top',
          'bottom',
          'left',
          'right',
          'responsive', // Example SpacingDirection values
        ],
      },
    },
  },
} as Meta
const Template: StoryFn<DrawerProps> = args => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const speckledStyle = {
    backgroundImage: `
    radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
    backgroundSize: '10px 10px, 20px 20px',
    backgroundColor: '#fdf6f6', // light background color
    height: '100vh', // or any other size you need
  }
  return (
    <Div
      style={{ ...speckledStyle }} // Use 'background' for gradients
      width="100%"
      height="100vh"
      position="absolute"
      top="0px"
      left="0px"
    >
      <Drawer {...args} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Div
          inset={args.inset}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Flex inset={{ vertical: 'x4', horizontal: 'x1' }}>
            <Tooltip
              background="dark"
              title=""
              direction="bottom"
              whiteSpace="normal"
            >
              <Text
                type={'body'}
                weight="bold"
                content="Your drawer content goes here"
                color="inverseHeading"
              />
            </Tooltip>
          </Flex>
          <SettingInput
            onRemove={() => setActiveColor(null)}
            settingsType="color"
            value={activeColor}
            inactiveTitle="Add..."
            onClick={() => setActiveColor('#F26666')}
          />

          <Flex inset={{ top: 'x4', horizontal: 'x3' }}>
            <Tooltip
              background="dark"
              title=""
              direction="bottom"
              whiteSpace="normal"
            >
              <Text
                type={'body'}
                weight="bold"
                content="BackgroundColor:"
                color="inverseHeading"
              />
              <Text
                color="inverseHeading"
                type={'caption'}
                content='You can either pass any string color value for background, or "blurredGlass"'
              />
            </Tooltip>
          </Flex>
        </Div>
      </Drawer>
      {!isOpen && (
        <Flex
          justifyContent="center"
          rowGap="x2"
          alignItems="center"
          height="100%"
          flexDirection="column"
        >
          <Drawer
            {...args}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        </Flex>
      )}
    </Div>
  )
}
export const Left = Template.bind({})
Left.args = { inset: 'x0' }
export const Right = Template.bind({})
Right.args = {
  location: 'right',
}
export const Top = Template.bind({})
Top.args = {
  location: 'top',
}
export const Bottom = Template.bind({})
Bottom.args = {
  location: 'bottom',
}
export const TabHidden = Template.bind({})
TabHidden.args = {
  isTabHidden: true,
}
export const ClosedValue: StoryFn<DrawerProps> = args => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Div width="100%" height="100vh" position="absolute" top="0px" left="0px">
      <Drawer
        {...args}
        location="bottom"
        openValue={320}
        closedValue={64}
        inset="x0"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Div
          position="absolute"
          top="0px"
          backgroundColor={{ swatch: 'grayScale', shade: '_100' }}
          height="64px"
          width="100%"
          borderRadius={{ topLeft: 'default', topRight: 'default' }}
        ></Div>
      </Drawer>
    </Div>
  )
}
export const DynamicHeight: StoryFn<DrawerProps> = args => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, height } = useResizeObserver<HTMLDivElement>()
  return (
    <Div width="100%" height="100vh" position="absolute" top="0px" left="0px">
      <Drawer
        {...args}
        location="top"
        openValue={(height && height + 16) || 0}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Div ref={ref}>
          <VStack gap="x9">
            <div>what</div>
            <div>if</div>
            <div>you</div>
            <div>don't</div>
            <div>know</div>
            <div>the</div>
            <div>height</div>
          </VStack>
        </Div>
      </Drawer>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    </Div>
  )
}
