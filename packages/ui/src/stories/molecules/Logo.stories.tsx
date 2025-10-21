import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Logo, LogoProps } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'molecules/Logo',
  component: Logo,
  args: {
    type: 'fullLogo',
    brand: 'greenerStill',
    color: 'color',
  },
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    brand: {
      control: {
        type: 'select',
        options: [
          'soc',
          'greenerStill',
          'bellaCadeaux',
          'promptingU',
          'blue42',
          'streamVA',
          'streamMarketing',
          'soc',
          'promptingsAcademy',
          'promptings',
        ],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['fullLogo', 'icon'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'black', 'color'],
      },
    },
  },
} as Meta
const Template: StoryFn<LogoProps> = args => {
  return (
    <Flex
      backgroundColor={
        args.color === 'white'
          ? { swatch: 'grayScale', shade: '_500' }
          : 'foreground'
      }
      alignItems="center"
      inset="x2"
      justifyContent="center"
      height="100vh"
    >
      <Logo {...args} />
    </Flex>
  )
}
export const FullLogo = Template.bind({})
FullLogo.args = {
  brand: 'greenerStill',
  color: 'color',
  type: 'fullLogo',
  width: '90%',
}
export const LogoIcons = Template.bind({})
LogoIcons.args = {
  brand: 'greenerStill',
  color: 'color',
  type: 'icon',
  width: '80%',
}
