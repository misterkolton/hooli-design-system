import React from 'react'

import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VStack, Text, Spacer, Flex, Div } from 'src/exports/atoms'
import { Button, Input, Transition } from 'src/exports/molecules'
import {
  UpsaleDialogProps,
  UpsaleDialog,
} from 'src/portfolios/soc/upsaleDialog/upsaleDialog'
import { ComparisonIncludesList } from 'src/exports/organisms'

export default {
  title: 'SOC/UpsaleDialog',
  component: UpsaleDialog,
  argTypes: {
    didReturnError: {
      control: {
        type: 'boolean',
      },
    },
    withUpsaleContent: {
      control: 'boolean',
      name: 'With Upsale Content',
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
  UpsaleDialogProps & { didReturnError: boolean; withUpsaleContent: boolean }
> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
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
      featureCaption: 'Popular',
      optionId: '789797',
      isSelected: false,
    },
    {
      title: '$37.00/Month',
      subtitle: 'Send one free card per day',
      featureCaption: 'Top Seller',
      optionId: '324132',
      isSelected: false,
    },
  ]

  return (
    <>
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          title="Join the PostCard Program"
          fullWidth
        />
      </Flex>
      <UpsaleDialog
        {...args}
        maxWidth="calc(100% - 150px)"
        optionFormLocation="right"
        setIsDialogOpen={() => setIsOpen(!isOpen)}
        defaultNumOptionsShown={numOptions}
        isOpen={isOpen}
        extraLink={{
          onClick: () => setNumOptions(options.length),
          title: 'View More Options >',
        }}
        selectableOptions={options}
        selectedOption={selectedOption}
        acceptSelectedAction={{
          title: 'Submit',
          onClick: () => console.log('Accept Selected'),
        }}
        submitAction={{
          title: 'Checkout',
          type: 'secondary',
          isFullWidth: true,
          onClick: () => console.log('checking out'),
        }}
        removeSelectedOption={() => setSelectedOption('')}
        upsaleContent={
          args.withUpsaleContent ? (
            <ComparisonIncludesList
              isMinified={false}
              items={[{ title: 'New Feature!', isIncluded: true }]}
            />
          ) : undefined
        }
        successComponent={
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
          <Text
            type="caption"
            weight="bold"
            content="Create Your Account"
            color="primaryHeading"
            style={{ textDecoration: 'underline' }}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={setEmail}
            isFullWidth
          />
          <Input
            type="text"
            placeholder="@username"
            value={username}
            onChange={setUsername}
            isFullWidth
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            isFullWidth
          />
          <Spacer space="x1" />
          <Text
            type="caption"
            weight="semiBold"
            content="Attach your credit card to checkout"
            color="primaryHeading"
            style={{ textDecoration: 'underline' }}
          />
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
            title="Purchase"
            fullWidth
            disabled={
              !email ||
              !username ||
              !password ||
              !ccInput ||
              !monthInput ||
              !cvcInput
            }
          />
        </VStack>
      </UpsaleDialog>
    </>
  )
}

export const UpsaleDialogWithUpsaleContent = Template.bind({})
UpsaleDialogWithUpsaleContent.args = {
  title: 'Simple, transparent pricing',
  description: 'No contracts. No Surprise Fees',
  withUpsaleContent: true,
}

export const UpsaleDialogWithoutUpsaleContent = Template.bind({})
UpsaleDialogWithoutUpsaleContent.args = {
  title: 'Simple, transparent pricing',
  description: 'No contracts. No Surprise Fees',
  withUpsaleContent: false,
}
