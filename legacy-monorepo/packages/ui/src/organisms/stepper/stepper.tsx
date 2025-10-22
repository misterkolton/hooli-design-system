import React, { FC, useState } from 'react'
import { Flex, Text, Spacer, VStack } from 'src/exports/atoms'
import { Progress, Button, ButtonType } from 'src/exports/molecules'
import { HStack } from 'src/exports/atoms'

export type StepperProps = {
  canContinue: boolean
  setCanContinue: (canContinue: boolean) => void
  activeItemIndex: number
  setActiveItemIndex: (index: number) => void
  onStepsComplete: () => void
  completionMessage: string | React.ReactNode
  isSkippable?: boolean
  skipButton?: {
    type: ButtonType
    title: string
  }
}

export const Stepper: FC<StepperProps> = ({
  canContinue,
  setCanContinue,
  activeItemIndex,
  setActiveItemIndex,
  onStepsComplete,
  completionMessage,
  children,
  isSkippable = false,
  skipButton,
}) => {
  const stepperChildren: React.ReactNode[] = React.Children.toArray(children)

  const percentage = Math.round(
    (activeItemIndex / stepperChildren.length) * 100,
  )

  const orderedChildren = stepperChildren.sort(
    (a: React.ReactElement, b: React.ReactElement) => {
      return a.props.order && b.props.order
        ? a.props.order > b.props.order
          ? 1
          : -1
        : 1
    },
  )

  const handleStepChange = (direction: 1 | -1) => {
    setActiveItemIndex(activeItemIndex + direction)
  }

  const handleIsComplete = (direction: 1 | -1) => {
    if (direction === 1) {
      if (activeItemIndex + 1 === stepperChildren.length) {
        setIsComplete(true)
      }
      if (isComplete) {
        onStepsComplete()
      } else {
        setCanContinue(false)
      }
    } else {
      if (isComplete) {
        setIsComplete(false)
      }
    }
  }

  const handleSkip = () => {
    if (activeItemIndex + 1 === stepperChildren.length) {
      setIsComplete(true)
      return
    }
    handleStepChange(1)
  }

  const handleContinue = () => {
    const direction = 1
    handleStepChange(direction)
    handleIsComplete(direction)
    setCanContinue(false)
  }

  const handleBack = () => {
    if (isComplete) {
      setIsComplete(false)
    }
    handleStepChange(-1)
  }
  const [isComplete, setIsComplete] = useState(false)
  return (
    <Flex height="100%" width="100%" position="relative" flexDirection="column">
      <Flex width="100%" height="100%" flexDirection="column" overflowY="auto">
        {isComplete ? (
          <Flex
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            {typeof completionMessage === 'string' ? (
              <Text type={{ xSmall: 'body', medium: 'largeBody' }}>
                {completionMessage}
              </Text>
            ) : (
              <>{completionMessage}</>
            )}
          </Flex>
        ) : (
          orderedChildren[activeItemIndex]
        )}
      </Flex>
      <Spacer orientation="vertical" space="x1" />
      <Flex flexDirection="column">
        <Spacer orientation="vertical" space="x2" />
        <VStack gap="x4">
          <Flex width="100%" justifyContent="flex-end">
            <HStack gap="x2" justify="flex-end">
              {activeItemIndex !== 0 && (
                <>
                  <Button
                    size="small"
                    type="primary"
                    outlined
                    onClick={() => {
                      handleBack()
                    }}
                  >
                    Go Back
                  </Button>
                </>
              )}
              {isSkippable && !isComplete && (
                <Button
                  size="small"
                  type={skipButton?.type ?? 'primary'}
                  outlined
                  onClick={() => handleSkip()}
                  disabled={canContinue}
                >
                  {skipButton?.title ?? 'Skip'}
                </Button>
              )}
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  handleContinue()
                }}
                disabled={isComplete ? false : !canContinue}
              >
                {isComplete ? 'Finish' : 'Continue'}
              </Button>
            </HStack>
          </Flex>
          <Flex
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            height="x4"
          >
            <Flex width="100%">
              <Progress
                percentage={isComplete ? 100 : percentage}
                hasLabel={false}
              />
            </Flex>
            {!isComplete && (
              <>
                <Spacer space="x4" orientation="horizontal" />
                <Flex>
                  <Text type="caption" whiteSpace="nowrap">
                    Step {activeItemIndex + 1} of {stepperChildren.length}
                  </Text>
                </Flex>
              </>
            )}
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  )
}
