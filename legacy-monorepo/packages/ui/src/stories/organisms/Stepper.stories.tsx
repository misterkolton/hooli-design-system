import React, { useState } from 'react'
import { Div, Flex, Text, VStack, Spacer } from 'src/exports/atoms'
import { Stepper, StepperProps } from 'src/exports/organisms'
import { Checkbox } from 'src/exports/molecules'
import { Step } from '../../organisms/stepper/components/step'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/Stepper',
  component: Stepper,
  args: {
    skipButton: {
      title: 'Do It Later',
      type: 'secondary',
    },
  },
} as Meta

export const Primary: StoryFn<StepperProps> = args => {
  const [canContinue, setCanContinue] = useState(false)
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const CompletionMessage = () => (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text type="title">Thank you!</Text>
      <Text type="body">
        You've completed all the steps. Click 'Finish' to exit.
      </Text>
    </Flex>
  )

  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
      inset="x2"
    >
      <Div
        height="500px"
        width="750px"
        borderRadius="default"
        backgroundColor="foreground"
        boxShadow="mediumLight"
        inset="x4"
      >
        <Stepper
          {...args}
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          canContinue={canContinue}
          setCanContinue={setCanContinue}
          onStepsComplete={() =>
            alert("And that's A Better Way™ to finish this flow!")
          }
          completionMessage={<CompletionMessage />}
          isSkippable={activeItemIndex === 1 || activeItemIndex === 3}
        >
          <Step order={3}>
            <Flex height="100%" width="100%" flexDirection="column">
              <Text type="body">
                I'm the first step. Read the important information below and
                check the box below to be able to continue.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="Agree to the terms and conditions"
            />
          </Step>
          <Step order={2}>
            <Flex height="100%" width="100%">
              <Text type="body">
                I'm the second step. You need to read this stuff as well, and
                then check the box.
              </Text>
            </Flex>
            <Checkbox
              isChecked={canContinue}
              onChange={() => setCanContinue(!canContinue)}
              label="Agree to more terms and conditions"
            />
          </Step>

          <Step order={1}>
            <Flex width="100%" flexDirection="column">
              <Flex flexDirection="column">
                <VStack gap="x2">
                  <Text type="body">
                    I'm the third step, and this page has a lot of info. That's
                    why the box can scroll when necessary. Hopefully you can
                    appreciate the signifcance of all of this incredibly
                    pertinent information.
                  </Text>
                  <Text type="body">
                    It's vital that you don't simply scroll past all this to get
                    to the checkbox. You don't have any idea what kind of things
                    you're agreeing to unless you carefully look through all
                    this text.
                  </Text>
                  <Text type="body">
                    Frankly, it's likely that user agreements are intentionally
                    made to be painfully long so that you're unaware of what
                    troubling things contained within. The legalese used is also
                    difficult to comprehend, further compounding the problem for
                    users like yourself.
                  </Text>
                  <Text type="body">
                    Don't mind me, though. Feel free to hit the checkbox below
                    if you feel you have a reasonable understanding of what
                    you're agreeing to. Have a great day!
                  </Text>
                  <Spacer orientation="vertical" space="x2" />
                </VStack>
              </Flex>
            </Flex>
            <Flex width="100%" height="fit-content" justifyContent="center">
              <Checkbox
                isChecked={canContinue}
                onChange={() => setCanContinue(!canContinue)}
                label="Agree to the final terms and conditions"
              />
            </Flex>
          </Step>
        </Stepper>
      </Div>
    </Flex>
  )
}
