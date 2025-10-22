import React from 'react'
import { PricingTile, PricingTileProps } from 'src/exports/organisms'
import { Flex, Spacer } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/PricingTile',
  component: PricingTile,
  args: {
    isSelected: false,
    isFullLength: false,
  },
} as Meta

const proFeatures = [
  'Unlimited projects',
  'Private share links',
  'Offline editing',
  'Desktop app',
  'Local file access',
  'Custom fonts',
]

const enterpriseFeatures = [
  'Everything in Pro "this is random text that i am adding to illustrate the wrap-ability of text"',
  'Enterprise SSO Enterprise "this is random text that i am adding to illustrate the wrap-ability of text"',
  'Dedicated support',
  'Onboarding & training',
  'Centralized billing',
  'Custom security',
  'Multi-team management',
]

const withSubFeatures = [
  {
    feature: 'Feature one',
    subFeatures: [
      ' this is the number one slot with the 97 option',
      ' two',
      ' three',
    ],
    isNotIncluded: false,
  },
  {
    feature: 'Feature Two',
    subFeatures: ['subfeature'],
    isNotIncluded: true,
  },
  'Feature two',
]

export const Primary: StoryFn<PricingTileProps> = args => (
  <Flex width="100%" justifyContent="space-between">
    <PricingTile
      title="Free"
      price="$0"
      features={withSubFeatures}
      primaryAction={{
        text: 'Try for free',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
    >
      For anyone validating Framer as a professional prototyping tool.
    </PricingTile>
    <Spacer orientation="horizontal" space="x3" />
    <PricingTile
      {...args}
      title="Pro"
      billingInterval="Monthly"
      price="$20"
      priceSubtext="Editor/month"
      features={proFeatures}
      primaryAction={{
        text: 'Subscribe',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
      secondaryAction={{
        text: 'Learn More',
        shouldTextMatchBackground: false,
        onClick: () => console.log('clicked'),
      }}
      isFeatured
    >
      For teams that want to manage users and work with developers.
    </PricingTile>
    <Spacer orientation="horizontal" space="x3" />
    <PricingTile
      title="Enterprise"
      price="Custom"
      features={enterpriseFeatures}
      accentColor="secondaryBrand"
      primaryAction={{
        text: 'Contact us',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
    >
      For organizations with 20+ users that need additional control, security,
      and support.
    </PricingTile>
  </Flex>
)
export const PrimaryWithDisclaimer: StoryFn<PricingTileProps> = args => (
  <Flex width="100%" justifyContent="space-between">
    <PricingTile
      title="Free"
      price="$0"
      features={withSubFeatures}
      primaryAction={{
        text: 'Try for free',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
      disclaimer={{
        termsTitle: 'Disclaimer: ',
        termsDescription: 'Please read the terms and conditions of this offer',
      }}
    >
      For anyone validating Framer as a professional prototyping tool.
    </PricingTile>
    <Spacer orientation="horizontal" space="x3" />
    <PricingTile
      {...args}
      title="Pro"
      billingInterval="Monthly"
      price="$20"
      priceSubtext="Editor/month"
      features={proFeatures}
      primaryAction={{
        text: 'Subscribe',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
      secondaryAction={{
        text: 'Learn More',
        shouldTextMatchBackground: false,
        onClick: () => console.log('clicked'),
      }}
      isFeatured
      disclaimer={{
        linkTitle: 'Optional custom disclaimer title',
        termsTitle: 'Disclaimer: ',
        termsDescription: 'Please read the terms and conditions of this offer',
      }}
    >
      For teams that want to manage users and work with developers.
    </PricingTile>
    <Spacer orientation="horizontal" space="x3" />
    <PricingTile
      title="Enterprise"
      price="Custom"
      features={enterpriseFeatures}
      accentColor="secondaryBrand"
      primaryAction={{
        text: 'Contact us',
        shouldTextMatchBackground: true,
        onClick: () => console.log('clicked'),
      }}
      disclaimer={{
        linkTitle: 'Optional custom disclaimer title',
        termsTitle: 'Disclaimer: ',
        termsDescription: 'Please read the terms and conditions of this offer',
      }}
    >
      For organizations with 20+ users that need additional control, security,
      and support.
    </PricingTile>
  </Flex>
)
