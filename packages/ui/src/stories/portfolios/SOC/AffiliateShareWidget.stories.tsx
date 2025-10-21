import React from 'react'
import {
  AffiliateShareWidget,
  AffiliateShareWidgetProps,
} from 'src/exports/socPortfolio'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src'

export default {
  title: 'SOC/AffiliateShareWidget',
  component: AffiliateShareWidget,
} as Meta

export const AffiliateShareWidgetStory: StoryFn<
  AffiliateShareWidgetProps
> = args => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center" inset="x2">
      <AffiliateShareWidget
        {...args}
        title="Share the Unlimited Card Program"
        shareLink="https://socgreetingcard.com/122485"
      />
    </Flex>
  )
}
