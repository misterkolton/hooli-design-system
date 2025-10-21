import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { OrderCard, OrderCardProps } from 'src/exports/socPortfolio'

export default {
  title: 'SOC/OrderCard',
  component: OrderCard,
  args: {
    price: '2.99',
    title: 'Greeting Card',
  },
} as Meta

const Template: StoryFn<OrderCardProps> = args => <OrderCard {...args} />

export const PortraitThumbnail = Template.bind({})
PortraitThumbnail.args = {
  thumbnail: {
    image:
      'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    orientation: 'portrait',
  },
}

export const LandscapeThumbnail = Template.bind({})
LandscapeThumbnail.args = {
  thumbnail: {
    image:
      'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    orientation: 'landscape',
  },
}

export const WithDiscount = Template.bind({})
WithDiscount.args = {
  ...PortraitThumbnail.args,
  discountPrice: '1.99',
}
