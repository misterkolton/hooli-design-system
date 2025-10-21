import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Dialog, DialogProps, Checkbox, Button } from 'src/exports/molecules'
import { Flex, Div, Text, VStack, Spacer } from 'src/exports/atoms'
import { Stepper } from 'src/exports/organisms'

export default {
  title: 'molecules/Dialog',
  component: Dialog,
  argTypes: {
    backgroundVariant: {
      control: {
        type: 'select',
        options: ['blur', 'solid'],
      },
    },
    shouldScroll: {
      control: {
        type: 'boolean',
      },
    },
    pinned: {
      control: {
        type: 'select',
        options: ['top', 'center', 'bottom'],
      },
    },
    isFullScreen: {
      control: {
        type: 'boolean',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
    insetOverride: {
      control: {
        type: 'text',
      },
    },
    outsetOverride: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    isOpen: true,
    isFullScreen: false,
    backgroundVariant: 'solid',
    shouldScroll: true,
    pinned: 'center',
    height: '400px',
  },
} as Meta

export const Primary: StoryFn<DialogProps> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
      Dialog content goes here
    </Dialog>
  )
}

const dialogFooter = (
  <Flex width="100%" justifyContent="space-evenly" columnGap="x2">
    <Button title="Continue" fullWidth type="shadow" />
    <Button title="Back" fullWidth backgroundColorOverride="#282828" />
  </Flex>
)

export const WithStepper: StoryFn<DialogProps> = args => {
  const [canContinue, setCanContinue] = useState(false)
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  return (
    <Dialog {...args} maxWidth="70%">
      <Div height={args.height}>
        <Stepper
          {...args}
          completionMessage="All steps completed"
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          canContinue={canContinue}
          setCanContinue={setCanContinue}
          onStepsComplete={() => alert('Flow completed successfully!')}
        >
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex height="100%" width="100%" flexDirection="column">
              <Text type="body">
                Step 1: Please review the information and check the box to
                proceed.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="I have reviewed the information"
            />
          </Flex>
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex height="100%" width="100%">
              <Text type="body">
                Step 2: Review the additional details and check the box to
                proceed.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="I have reviewed the additional details"
            />
          </Flex>
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex width="100%" flexDirection="column">
              <Flex flexDirection="column">
                <VStack gap="x2">
                  <Text type="body">
                    Step 3: Please read the following information carefully.
                    Scroll if necessary.
                  </Text>
                  <Text type="body">
                    Ensure you understand all the terms and conditions before
                    proceeding.
                  </Text>
                  <Text type="body">
                    This agreement contains important legal information that you
                    should fully comprehend.
                  </Text>
                  <Text type="body">
                    By checking the box below, you acknowledge that you have
                    read and understood the agreement.
                  </Text>
                  <Spacer orientation="vertical" space="x2" />
                </VStack>
              </Flex>
            </Flex>
            <Flex width="100%" height="fit-content">
              <Checkbox
                isChecked={canContinue}
                onChange={() => setCanContinue(!canContinue)}
                label="I agree to the terms and conditions"
              />
            </Flex>
          </Flex>
        </Stepper>
      </Div>
    </Dialog>
  )
}

export const WithFooter: StoryFn<DialogProps> = args => {
  const [canContinue, setCanContinue] = useState(false)
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  return (
    <Dialog
      {...args}
      maxWidth="70%"
      footer={dialogFooter}
      shouldScroll
      insetOverride="x2"
    >
      <Div height={args.height}>
        <Stepper
          {...args}
          completionMessage="All steps completed"
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          canContinue={canContinue}
          setCanContinue={setCanContinue}
          onStepsComplete={() => alert('Flow completed successfully!')}
        >
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex height="100%" width="100%" flexDirection="column">
              <Text type="body">
                Step 1: Please review the information and check the box to
                proceed.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="I have reviewed the information"
            />
          </Flex>
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex height="100%" width="100%">
              <Text type="body">
                Step 2: Review the additional details and check the box to
                proceed.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="I have reviewed the additional details"
            />
          </Flex>
          <Flex flexDirection="column" height="100%" width="100%">
            <Flex width="100%" flexDirection="column">
              <Flex flexDirection="column">
                <VStack gap="x2">
                  <Text type="body">
                    Step 3: Please read the following information carefully.
                    Scroll if necessary.
                  </Text>
                  <Text type="body">
                    Ensure you understand all the terms and conditions before
                    proceeding.
                  </Text>
                  <Text type="body">
                    This agreement contains important legal information that you
                    should fully comprehend.
                  </Text>
                  <Text type="body">
                    By checking the box below, you acknowledge that you have
                    read and understood the agreement.
                  </Text>
                  <Spacer orientation="vertical" space="x2" />
                </VStack>
              </Flex>
            </Flex>
            <Flex width="100%" height="fit-content">
              <Checkbox
                isChecked={canContinue}
                onChange={() => setCanContinue(!canContinue)}
                label="I agree to the terms and conditions"
              />
            </Flex>
          </Flex>
        </Stepper>
      </Div>
    </Dialog>
  )
}
