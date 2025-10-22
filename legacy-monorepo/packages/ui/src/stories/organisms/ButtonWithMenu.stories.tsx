import React, { useState } from 'react'
import { ButtonWithMenu, ButtonWithMenuProps } from 'src/exports/organisms'
import { Flex } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/ButtonWithMenu',
  component: ButtonWithMenu,
  args: {
    size: 'medium',
    type: 'primary',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'shadow',
          'accent',
        ],
      },
    },
  },
} as Meta

const Template: StoryFn<ButtonWithMenuProps> = args => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const menuOptions = [
    { title: 'Save Card', onClick: () => handleIsLoading() },
    { title: 'Save & Send', onClick: () => handleIsLoading() },
    {
      title: 'Super long saving action title name description',
      onClick: () => handleIsLoading(),
    },
  ]

  const handleIsLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Flex
      height="500px"
      width="400px"
      outset="x2"
      justifyContent="center"
      alignItems="center"
    >
      <ButtonWithMenu
        {...args}
        isExpanded={isExpanded}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
        title="Save"
        menuOptions={menuOptions}
        loadingMessage="Saving..."
        isLoading={isLoading}
      />
    </Flex>
  )
}

export const MenuBottom = Template.bind({})
MenuBottom.args = {
  menuLocation: 'bottom',
}
export const MenuTop = Template.bind({})
MenuTop.args = {
  menuLocation: 'top',
}
