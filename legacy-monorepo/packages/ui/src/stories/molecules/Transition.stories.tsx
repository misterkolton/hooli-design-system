import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Transition, TransitionProps } from 'src/exports/molecules'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Transition',
  component: Transition,
  argTypes: {
    didReturnError: {
      control: { disable: true },
    },
  },
} as Meta

interface TemplateProps extends TransitionProps {
  didReturnError: boolean
}
const Template: StoryFn<TemplateProps> = args => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [transitionMessage, setTransitionMessage] = React.useState({
    title: 'Sending Code To:',
    subtitle: '801-520-7262',
  })
  const didReturnError = args.didReturnError
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      if (didReturnError) {
        setTransitionMessage({
          title: 'Code Not Found',
          subtitle:
            'Looks like the code you entered does not match the token we sent to: 801-520-7262',
        })
      } else {
        setTransitionMessage({
          title: 'Your selection was made successfully',
          subtitle:
            'Thank you for purchasing a Heartfelt Prompting Card Subscription!',
        })
      }
    }, 3000)
  }, [didReturnError])
  return (
    <Div inset="32px">
      <Transition
        isLoading={isLoading}
        loadedStatus={didReturnError ? 'error' : 'success'}
        title={transitionMessage.title}
        subtitle={transitionMessage.subtitle}
      ></Transition>
    </Div>
  )
}

export const WithSuccess = Template.bind({})
WithSuccess.args = {
  didReturnError: false,
}

export const WithFailure = Template.bind({})
WithFailure.args = {
  didReturnError: true,
}
