import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Banner, BannerProps } from 'src/exports/organisms'
import { Button } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'organisms/Banner',
  component: Banner,
  args: {
    icon: 'information',
    status: 'success',
  },
} as Meta

export const DismissibleBanner: StoryFn<BannerProps> = (...args) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Flex width="100%" inset="x2">
      {!isOpen && (
        <Flex width="100%" inset="x2" justifyContent="flex-end">
          <Button
            onClick={() => setIsOpen(true)}
            title="Reset Banner"
            type="success"
          />
        </Flex>
      )}
      {isOpen && (
        <Banner
          {...args}
          bannerTitle={{
            message:
              'This banner is now dismissible by clicking the "X" on the right',
            icon: 'information',
          }}
          status="success"
          onClose={isOpen ? () => setIsOpen(false) : undefined}
        />
      )}
    </Flex>
  )
}

const Template: StoryFn<BannerProps> = args => (
  <Flex width="100%" inset="x2">
    <Banner {...args} />
  </Flex>
)

export const Success = Template.bind({})
Success.args = {
  message: 'This banner shows a success',
  status: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'This banner shows a warning',
  status: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  message: 'This banner shows danger',
  status: 'danger',
}
