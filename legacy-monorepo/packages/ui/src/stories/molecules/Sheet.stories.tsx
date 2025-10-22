import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  Button,
  Image,
  Sheet,
  SheetProps,
  SnapPoint,
} from 'src/exports/molecules'
import { Div, Flex, HStack, Text, VStack } from 'src/exports/atoms'

export default {
  title: 'molecules/Sheet',
  component: Sheet,
  args: {
    draggable: true,
    hasOverlay: true,
  },
} as Meta

const Template: StoryFn<SheetProps> = args => {
  const [isSheetOpen, setSheetIsOpen] = React.useState(true)
  return (
    <>
      <Button onClick={() => setSheetIsOpen(true)}>Open Sheet</Button>
      <Sheet setIsOpen={setSheetIsOpen} {...args} isOpen={isSheetOpen}>
        <Div width="100%" height="416px">
          Sheet Inner Contents
        </Div>
      </Sheet>
    </>
  )
}
export const BasicSheet = Template.bind({})

export const WithBackgroundComponent = Template.bind({})
WithBackgroundComponent.args = {
  backgroundElement: (
    <Flex
      backgroundColor="blue"
      height="900px"
      justifyContent="center"
      alignItems="center"
    >
      I am a react component!
    </Flex>
  ),
}

export const WithSnapPointPercentages = Template.bind({})
WithSnapPointPercentages.args = {
  snapPointPercentages: [25, 50, 75],
  initialSnapPoint: 1,
}

export const WithSnapPointComponents: StoryFn<SheetProps> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
      <Sheet {...args} setIsOpen={setIsOpen} isOpen={isOpen}>
        <Div
          borderWidth="default"
          borderStyle="solid"
          borderColor="blue"
          width="100%"
          inset="120px 0px"
        >
          I have a snap point below
        </Div>
        <SnapPoint />
        <Div
          borderWidth="default"
          borderStyle="solid"
          borderColor="blue"
          width="100%"
          inset="120px 0px"
        >
          I have a snap point below
        </Div>
        <SnapPoint />
        <Div
          borderWidth="default"
          borderStyle="solid"
          borderColor="blue"
          width="100%"
          inset="120px 0px"
        >
          I do not have a snap point
        </Div>
      </Sheet>
    </>
  )
}

export const UsingSnapToPercentage: StoryFn<SheetProps> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [snapTo, setSnapTo] = React.useState<undefined | number>(undefined)

  const handleSnapToRandomPercentage = () => {
    const random = Math.floor(Math.random() * 100)
    if (random > 50) {
      return random
    }
    return random + 20
  }

  return (
    <Div
      width={'100vw'}
      height="calc(100vh - 32px)"
      backgroundColor={{ swatch: 'blueScale', shade: '_700' }}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        outset={{ vertical: 'x8' }}
        type="heroTitle"
        content={snapTo ? `${snapTo}%` : '100%'}
      ></Text>
      <Button onClick={() => setSnapTo(handleSnapToRandomPercentage)}>
        Snap to Random %
      </Button>
      <Sheet
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasOverlay={false}
        snapTo={snapTo}
        setSnapTo={setSnapTo}
      >
        <Flex height={'420px'} width="100%" justifyContent="center"></Flex>
      </Sheet>
    </Div>
  )
}

export const UsingSnapToKeys: StoryFn<SheetProps> = args => {
  // This is not required just streamlining for story
  const snapPointKeys = ['text-content', 'blue-div', 'grid']

  const [isOpen, setIsOpen] = React.useState(true)
  const [snapTo, setSnapTo] = React.useState<string>()

  return (
    <Div
      width={'100vw'}
      height="calc(100vh - 32px)"
      backgroundColor={{ swatch: 'blueScale', shade: '_700' }}
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="center"
    >
      <Text
        outset={{ top: 'x8', bottom: 'x4' }}
        type="heroTitle"
        content={snapTo ? snapTo : 'No Key Selected'}
      ></Text>
      <HStack gap="x4" justify="center">
        {snapPointKeys.map(keyName => (
          <Button title={keyName} onClick={() => setSnapTo(keyName)} />
        ))}
      </HStack>

      <Sheet
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasOverlay={false}
        snapTo={snapTo}
        setSnapTo={setSnapTo}
      >
        <VStack gap="x4">
          <Text content="Some content here for your liking" type="title" />
          <SnapPoint name={snapPointKeys[0]} />
          <Div
            width={'100%'}
            height="240px"
            backgroundColor={{ swatch: 'success', shade: '_700' }}
            borderRadius="default"
          ></Div>
          <SnapPoint name={snapPointKeys[1]} />
          <Image
            isActive
            image={{
              url: 'https://images.unsplash.com/photo-1620942330127-41f1f787d10f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            }}
            width="100%"
            height="320px"
          />
          <SnapPoint name={snapPointKeys[2]} />
          <HStack justify="center" gap="x2">
            {[0, 1, 2, 3].map(_num => (
              <Div
                height="120px"
                width="120px"
                backgroundColor={{ swatch: 'danger', shade: '_700' }}
                borderRadius="default"
              ></Div>
            ))}
          </HStack>
        </VStack>
      </Sheet>
    </Div>
  )
}
