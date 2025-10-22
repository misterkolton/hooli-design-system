import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { AccountMenu, AccountMenuProps } from 'src/exports/organisms'
import { Button } from 'src/exports/molecules'
import { Flex } from 'src/exports/atoms'

// Example data
const accountMenuSections = [
  [
    {
      title: 'Card History',
      onClick: () => console.log('Card history'),
    },
    {
      title: 'Payment Settings',
      onClick: () => console.log('Payment Settings'),
    },
    {
      title: 'Plans and Pricing',
      onClick: () => console.log('Plans and Pricing'),
    },
    {
      title: 'Drafted Cards',
      onClick: () => console.log('Drafted Cards'),
    },
    {
      title: 'Drafted Orders',
      onClick: () => console.log('Drafted Orders'),
    },
  ],
  [
    {
      title: 'Sign Out',
      onClick: () => console.log('Sign Out'),
    },
  ],
]

export default {
  title: 'organisms/AccountMenu',
  component: AccountMenu,
  args: {
    sections: accountMenuSections,
  },
} as Meta

const Template: StoryFn<AccountMenuProps> = args => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Flex
      display="inline-flex"
      flexDirection="column"
      inset="x2"
      boxShadow="card"
    >
      <Button size="small" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'} Account Menu
      </Button>
      <Flex>
        <AccountMenu {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Flex>
    </Flex>
  )
}

export const Basic = Template.bind({})

export const WithUser = Template.bind({})
WithUser.args = {
  user: {
    firstName: 'Jim',
    lastName: 'Beam',
    onClick: () => console.log('click user'),
  },
}
