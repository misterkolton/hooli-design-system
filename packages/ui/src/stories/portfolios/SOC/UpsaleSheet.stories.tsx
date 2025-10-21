import React from 'react'
import { UpsaleSheet, UpsaleSheetProps } from 'src/exports/socPortfolio'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VStack, Text, Spacer, Flex, Div } from 'src/exports/atoms'
import { Button, Input, Transition } from 'src/exports/molecules'
import { PricingTile } from 'src/exports/organisms'

export default {
  title: 'SOC/UpsaleSheet',
  component: UpsaleSheet,
  argTypes: {
    didReturnError: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

type MockResponse = {
  isLoading: boolean
  title: string
  subtitle: string
  loadedStatus?: 'error' | 'success'
}

const Template: StoryFn<
  UpsaleSheetProps & { didReturnError: boolean }
> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [ccInput, setCCInput] = React.useState('')
  const [monthInput, setMonthInput] = React.useState('')
  const [cvcInput, setcvcInput] = React.useState('')
  const [numOptions, setNumOptions] = React.useState(1)
  const [selectedOption, setSelectedOption] = React.useState('')
  const [mockTransactionResponse, setMockTransactionResponse] = React.useState<
    MockResponse | undefined
  >(undefined)

  const callMockAPI = () => {
    setMockTransactionResponse({
      isLoading: true,
      title: 'Making your selection',
      subtitle: 'Thank you for your selection!',
    })
    setTimeout(() => {
      const { didReturnError } = args
      setMockTransactionResponse({
        isLoading: false,
        title: didReturnError
          ? 'An error occurred'
          : 'Your selection was made successfully',
        subtitle: didReturnError
          ? 'Try again.'
          : 'Thank you for your order of ...',
        loadedStatus: didReturnError ? 'error' : 'success',
      })
    }, 3000)
  }

  const options = [
    {
      title: '$97.00/Month',
      subtitle: 'For unlimited single card sends',
      isFeatured: true,
      optionId: '789797',
      isSelected: false,
      expandedChild: (
        <PricingTile
          {...args}
          features={[
            'Unlimited projects',
            'Private share links',
            'Offline editing',
            'Desktop app',
            'Local file access',
            'Custom fonts',
          ]}
          title="Pro"
          billingInterval="Monthly"
          price="$20"
          priceSubtext="Editor/month"
          hasShadow={false}
        >
          For teams that want to manage users and work with developers.
        </PricingTile>
      ),
    },
    {
      title: '$37.00/Month',
      subtitle: 'Send one free card per day',
      isFeatured: false,
      optionId: '324132',
      isSelected: false,
    },
  ]
  return (
    <UpsaleSheet
      {...args}
      setIsOpen={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      defaultNumOptionsShown={numOptions}
      extraLink={{
        onClick: () => setNumOptions(options.length),
        title: 'View More Options >',
      }}
      options={options}
      selectedOption={selectedOption}
      submitAction={{
        title: 'select',
        type: 'secondary',
        onClick: (optionId: string) => setSelectedOption(optionId),
      }}
      removeSelectedOption={() => setSelectedOption('')}
      successComponent={
        typeof mockTransactionResponse !== undefined &&
        mockTransactionResponse ? (
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            flexDirection={'column'}
            height={'100%'}
          >
            <Div outset={{ top: 'auto' }} width={'100%'}>
              <Transition
                title={mockTransactionResponse.title}
                isLoading={mockTransactionResponse.isLoading}
                subtitle={mockTransactionResponse.subtitle}
                loadedStatus={mockTransactionResponse.loadedStatus}
              ></Transition>
            </Div>
            <Div outset={{ top: 'auto' }} width={'100%'}>
              <Button
                fullWidth
                title={'Continue to account'}
                onClick={() => setMockTransactionResponse(undefined)}
              ></Button>
            </Div>
          </Flex>
        ) : undefined
      }
    >
      <VStack gap="x2">
        <Spacer space="x1" />
        <Text type="footnote" content="Attach your credit card to checkout" />
        <Input
          type="text"
          placeholder="Credit Card Number"
          value={ccInput}
          onChange={setCCInput}
          isFullWidth
        />
        <Input
          type="text"
          placeholder="MM/YY"
          value={monthInput}
          onChange={setMonthInput}
          isFullWidth
        />
        <Input
          type="text"
          placeholder="CVC"
          value={cvcInput}
          onChange={setcvcInput}
          isFullWidth
        />
        <Spacer space="x2" />
        <Button
          onClick={() => callMockAPI()}
          type="success"
          title="Add Card"
          fullWidth
        />
      </VStack>
    </UpsaleSheet>
  )
}

export const SOCUpsaleSheet = Template.bind({})
SOCUpsaleSheet.args = {
  title: 'We have the right option for you',
  description: '',
  submitAction: {
    title: 'Subscribe Now',
    type: 'secondary',
    onClick: (optionId: string) => alert(optionId),
  },
  selectedOptionTitle: 'Great choice',
  selectedOptionDescription: 'We are so happy with you choice',
  backgroundElement: (
    <div>Render your existing FeaturedCardGrid component here</div>
  ),
}
