import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { QDSChrome, QDSChromeProps } from 'src/exports/organisms'

// Example data
const quickLinks = [
  {
    title: 'Link1',
    icon: 'award',
    onClick: () => console.log('hello'),
    isActive: false,
  },
  {
    title: 'Link2',
    icon: 'filterBy',
    onClick: () => console.log('hello'),
    isActive: false,
  },
  {
    title: 'Link2',
    icon: 'star',
    onClick: () => console.log('hello'),
    isActive: false,
  },
]
const navSections = [
  {
    title: 'Card Catalog',
    icon: 'catalog',
    onClick: () => console.log('Catalog'),

    isActive: false,
    subNavigation: [
      {
        title: 'Catalog Sub Nav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
    ],
  },
  {
    title: 'Relationships',
    icon: 'multipleUsers2x',
    onClick: () => console.log('Relationships'),

    isActive: true,
    subNavigation: [
      {
        title: 'Relationship Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
      {
        title: 'Relationship Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
      {
        title: 'Relationship Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
      {
        title: 'Relationship Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
    ],
  },
  {
    title: 'Campaigns',
    icon: 'campaigns',
    onClick: () => console.log('Campaigns'),
    isActive: false,
    subNavigation: [
      {
        title: 'Campaigns Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
    ],
  },
  {
    title: 'Gift Store',
    icon: 'gift',
    onClick: () => console.log('GiftStore'),
    isActive: false,
    subNavigation: [
      {
        title: 'Gift Store Subnav1',
        isActive: true,
        links: [
          {
            title: 'Create your own Card',
            isActive: false,
            onClick: () => console.log('Create your own card'),
          },
          {
            title: 'Show Catalog Cards',
            isActive: false,
            onClick: () => console.log('Show Catalog'),
          },
          {
            title: 'Show Photo Drop Cards',
            isActive: false,
            onClick: () => console.log('Show Photo Drop'),
          },
        ],
        icon: 'award',
      },
    ],
  },
]
const accountSections = [
  [
    {
      title: 'Notifications',
      badge: '1',
      onClick: () => console.log('Notifications'),
    },
  ],
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
      icon: 'tenDoor',
    },
  ],
]
const user = {
  profileImage: 'https://i.pravatar.cc/300',
  firstName: 'Nick',
  lastName: 'Weaver',
  onClick: () => console.log('User Account Page'),
}
export default {
  title: 'organisms/QDSChrome',
  component: QDSChrome,
  args: {
    user,
  },
  argTypes: {
    navSections: {
      control: { disable: true },
    },
    quickLinks: {
      control: { disable: true },
    },
    accountSections: {
      control: { disable: true },
    },
    user: {
      control: { disable: true },
    },
  },
} as Meta

const Template: StoryFn<QDSChromeProps> = args => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <QDSChrome {...args} isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
      Application Renders Here
    </QDSChrome>
  )
}

export const SOCChromeExample = Template.bind({})
SOCChromeExample.args = {
  navSections,
  accountSections,
  quickLinks,
  logo: 'socLogo',
}
