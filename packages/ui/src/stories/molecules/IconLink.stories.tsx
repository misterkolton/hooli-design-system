import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { IconLink, IconLinkProps } from 'src/exports/molecules'
import { spacingControls } from '../../../.storybook/controls'
import { Div, Flex } from 'src'
export default {
  title: 'molecules/IconLink',
  component: IconLink,
  args: {
    icon: 'catalog',
    size: 'small',
    title: 'Title',
    isActive: false,
    isStacked: false,
    hasBackgroundColor: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
    gap: {
      ...spacingControls,
    },
  },
} as Meta

const Template: StoryFn<IconLinkProps> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Div>
        <IconLink {...args} />
      </Div>
    </Flex>
  )
}

export const IconLinkWithoutText = Template.bind({})

export const IconLinkWithText = Template.bind({})
IconLinkWithText.args = {
  title: 'Text Here',
}

export const xSmall = Template.bind({})
xSmall.args = {
  title: 'Text Here',
  size: 'xSmall',
}

export const small = Template.bind({})
small.args = {
  title: 'Text Here',
  size: 'small',
}

export const medium = Template.bind({})
medium.args = {
  title: 'Text Here',
  size: 'medium',
}

export const large = Template.bind({})
large.args = {
  title: 'Text Here',
  size: 'large',
}

export const xLarge = Template.bind({})
xLarge.args = {
  title: 'Text Here',
  size: 'xLarge',
}

export const StackedIconLink = Template.bind({})
StackedIconLink.args = {
  title: 'Text Here',
  size: 'medium',
  isStacked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}
