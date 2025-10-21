import React from 'react'
import { SubscriptionUpsaleDialog } from 'src/exports/socPortfolio'
import { UpsaleDialogProps } from 'src/portfolios/soc/upsaleDialog/upsaleDialog'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { VStack, Text, Spacer, Flex, Div } from 'src/exports/atoms'
import { Button, Input, Transition } from 'src/exports/molecules'
import { useWindowSize } from 'src/hooks/useWindowSize'

export default {
  title: 'SOC/SubscriptionUpsaleDialog',
  component: SubscriptionUpsaleDialog,
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
  UpsaleDialogProps & { didReturnError: boolean }
> = args => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [ccInput, setCCInput] = React.useState('')
  const [monthInput, setMonthInput] = React.useState('')
  const [cvcInput, setcvcInput] = React.useState('')
  const [selectedOption, setSelectedOption] = React.useState('122')
  const [mockTransactionResponse, setMockTransactionResponse] = React.useState<
    MockResponse | undefined
  >(undefined)

  const options = [
    {
      title: '$20/10 Card Challenge',
      subtitle: '10 Heartfelt Prompting Cards - stamps included',
      isFeatured: true,
      optionId: '122',
      isSelected: true,
    },
    {
      title: '$97.00/Month',
      subtitle: 'For unlimited single card sends',
      isFeatured: false,
      optionId: '789797',
      isSelected: false,
    },
    {
      title: '$37.00/Month',
      subtitle: 'Send one free card per day',
      isFeatured: false,
      optionId: '324132',
      isSelected: false,
    },
  ]
  const device = useWindowSize().width
  const isMobile = device <= 910
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
        />
      </Flex>
      <SubscriptionUpsaleDialog
        {...args}
        insetOverride="x0"
        maxWidth="calc(100% - 150px)"
        maxHeight="calc(100% - 150px)"
        optionFormLocation="right"
        setIsDialogOpen={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        selectableOptions={options}
        selectedOption={selectedOption}
        handleSelectedOption={(optionId: string) => setSelectedOption(optionId)}
        upsaleContentTitle="Subscription Includes"
        removeSelectedOption={() => setSelectedOption('')}
        upsaleBanner={
          <Div backgroundColor={'blue'} inset="x6" color="white">
            Promptings PP Package!
          </Div>
        }
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
              <Div width={'100%'}>
                <Transition
                  title={mockTransactionResponse.title}
                  isLoading={mockTransactionResponse.isLoading}
                  subtitle={mockTransactionResponse.subtitle}
                  loadedStatus={mockTransactionResponse.loadedStatus}
                ></Transition>
              </Div>
              <Div outset={{ top: 'x2', horizontal: 'auto' }} width={'30%'}>
                <Button
                  fullWidth
                  title={'Continue to account'}
                  onClick={() => setMockTransactionResponse(undefined)}
                  size="medium"
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
          <Flex
            justifyContent="center"
            position={isMobile ? 'fixed' : 'relative'}
            bottom={isMobile ? '0' : 'unset'}
            height="100px"
            alignItems="center"
            width="100%"
            backgroundColor={isMobile ? 'foreground' : undefined}
            boxShadow={isMobile ? 'mediumDark' : undefined}
            zIndex={103}
            left="0"
          >
            <Button
              type={'success'}
              size="medium"
              title={'Submit & Join'}
              disabled={!cvcInput}
              onClick={() => console.log('Thank you for joining!')}
            />
          </Flex>
        </VStack>
      </SubscriptionUpsaleDialog>
    </>
  )
}

export const SubscriptionUpsaleDialogComponent = Template.bind({})
SubscriptionUpsaleDialogComponent.args = {
  title: 'Simple Transparent Pricing',
  description: 'No Contracts. No Surprise Fees.',
  checkoutTitle: 'Great choice!',
  checkoutDescription:
    'You are going to love the Photo Postcard Program! Let’s create your account and get your subscription information complete so you can start sending.',
}
