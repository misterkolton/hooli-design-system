import React from 'react'
import { StaticNavigation, StaticNavigationProps } from 'src/exports/organisms'
import { StoryFn, Meta } from '@storybook/react/types-6-0'
import { DropDownMenu } from 'src/exports/molecules'
import { HStack, Icon, Flex, Div, Text } from 'src/exports/atoms'
import { useDeviceSize } from 'src/hooks/useDeviceSize'

export default {
  title: 'organisms/StaticNavigation',
  component: StaticNavigation,
  args: {
    isFrosted: false,
    logo: {
      brand: 'soc',
      color: 'black',
      href: 'https://app.sendoutcards.com',
      width: '200px',
      shouldShowParentBrand: true,
      secondaryLogo: {
        width: '80px',
      },
    },
    menuDropdownLinks: {
      linkColumn: {
        title: 'My Account',
        links: [
          { title: 'Dashboard', href: '#' },
          { title: 'Notifications', href: '#' },
          { title: <Div>I am a Node Link</Div>, href: '#' },
          {
            title: 'Logout',
            icon: 'tenDoor',
            href: '#',
            iconLinkWithText: true,
          },
        ],
      },
    },
    links: [
      {
        title: 'shop',
        featuredLinkColumn: [
          {
            title: 'Featured Link 1',
            href: 'https://www.google.com',
            onClick: () => console.log('Featured Link 1'),
            target: '_blank',
          },
          {
            title: 'Featured Link 2',
            href: 'href',
            onClick: () => console.log('Featured Link 2'),
          },
        ],
        linkColumns: [
          {
            title: 'Shop Categories',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'Festive', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Shop Fitness',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Shop Environment',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
        ],
      },
      {
        title: 'our streams',
        featuredLinkColumn: [
          {
            title: 'Our Streams',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Stream Categories'),
          },
          {
            title: 'Best Sellers',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Best Sellers'),
          },
          {
            title: 'Custom',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Custom'),
          },
          {
            title: 'Shop All',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Shop All'),
          },
        ],
        linkColumns: [
          {
            title: 'Stream Categories',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'Festive', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Stream Fitness',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Stream Environment',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
        ],
      },
      { title: 'Static', href: 'https://cataas.com/cat/gif' },
      {
        title: 'about us',
        featuredLinkColumn: [
          {
            title: 'About Us',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('About Us'),
          },
          {
            title: 'Best Sellers',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Best Sellers'),
          },
          {
            title: 'Custom',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Custom'),
          },
          {
            title: 'Shop All',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Shop All'),
          },
        ],
        linkColumns: [
          {
            title: 'About Us Categories',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              {
                title: 'Test this Link',
                href: 'https://cataas.com/cat/gif',
                target: '_blank',
              },
              { title: 'Festive', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'About Us Fitness',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'About Us Environment',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
        ],
      },
      {
        title: 'discounts',
        featuredLinkColumn: [
          {
            title: 'Discounts',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Discounts'),
          },
          {
            title: 'Best Sellers',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Best Sellers'),
          },
          {
            title: 'Custom',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Custom'),
          },
          {
            title: 'Shop All',
            href: 'https://cataas.com/cat/gif',
            onClick: () => console.log('Shop All'),
          },
        ],
        linkColumns: [
          {
            title: 'Discount Categories',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'Festive', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Discount Fitness',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
          {
            title: 'Discount Environment',
            linkTitleColor: 'secondaryBrand',
            subLinkColor: 'primaryBody',
            links: [
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
              { title: 'New Arrivals', href: 'https://cataas.com/cat/gif' },
            ],
          },
        ],
      },
    ],
    mobileDropdownLinks: {
      title: 'My Account',
      links: [
        { title: 'Login', href: '#' },
        { title: 'Join Now', href: '#' },
      ],
    },
  },
} as Meta

export const StoryName: StoryFn<StaticNavigationProps> = args => (
  <Div width="100vw">
    <StaticNavigation {...args} accountSection={<AccountSection />} />
    <Div
      outset={{ top: '60px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    />
  </Div>
)
export const customLogo: StoryFn<StaticNavigationProps> = args => (
  <Div width="100vw">
    <StaticNavigation
      links={args.links}
      logo={
        <Icon
          name={'promptingsIcon'}
          size={40}
          primaryColor="primaryBodyText"
        />
      }
      accountSection={<AccountSection />}
    />
    <Div
      outset={{ top: '60px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    />
  </Div>
)

const AccountSection = () => {
  const { device } = useDeviceSize()
  const isMobile = ['xSmall', 'small', 'medium'].includes(device)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const mobileDropdownLinks = {
    title: 'My Account',
    links: [
      { title: 'Login', href: '#' },
      { title: 'Join Now', href: '#' },
    ],
  }
  return isMobile ? (
    <Flex
      position="relative"
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen)
      }}
    >
      <Icon name="user" size="xSmall" primaryColor="primaryBrand" />
      <Icon
        name={'chevron'}
        orientation={isDropdownOpen ? 'up' : 'down'}
        size={'small'}
        primaryColor={'primaryBodyText'}
      />
      <DropDownMenu
        right={-24}
        top={48}
        isOpen={isDropdownOpen}
        linkColumn={mobileDropdownLinks}
      />
    </Flex>
  ) : (
    <HStack gap="x2" justify="center">
      <Text type="body" color={'primaryBody'}>
        Login
      </Text>
      <Text type="body" color={'primaryBrand'}>
        Join
      </Text>
    </HStack>
  )
}
