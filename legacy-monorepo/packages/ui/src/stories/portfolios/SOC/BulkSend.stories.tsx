import React, { useState } from 'react'
import {
  BulkSend,
  BulkSendProps,
  ConfigurationOptionSection,
} from 'src/exports/socPortfolio'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/atoms/div/div'

export default {
  title: 'SOC/BulkSend',
  component: BulkSend,
  args: {
    isConfigurable: true,
    disableMessage:
      'The card you have selected is not eligible for our bulk options.',
    title: 'Bulk Send Options',
    description:
      'Turn the cards in your ourder into an at home priont option where we send the cards for you',
    quantityDescription: 'Cards',
    hasIncrement: false,
    minQuantity: 10,
    maxQuantity: 5000,
    sliderFill: 'primaryBrand',
    sliderWidth: 200,
    unitPrice: 2.99,
    salePrice: 1.99,
    sliderImage:
      'https://images.unsplash.com/photo-1634725279880-dd65d3aeb109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
    sliderOrientation: 'horizontal',
    addDialog: {
      description:
        'When you convert this order to a bulk order you will lose any variable print data that you may have entered in the editor. Not to worry this can be fixed by removing the bulk option later',

      title: 'Are you sure?',
      accept: {
        title: 'Convert to Bulk',
        onClick: () => console.log('Add Dialog Accept Action triggered'),
      },
      decline: {
        title: 'Cancel',
        onClick: () => console.log('Add Dialog Decline Action triggered'),
      },
      primaryAction: 'accept',
    },
    removeDialog: {
      description:
        'By removing the bulk option you will convert all cards in this order back to a default send',
      title: 'Are you sure?',
      accept: {
        title: 'Convert Back',
        onClick: () => console.log('Remove Dialog Accept Action triggered'),
      },
      decline: {
        title: 'Cancel',
        onClick: () => console.log('Remove Dialog Decline Action triggered'),
      },
      primaryAction: 'decline',
    },
  },
} as Meta

export const StoryName: StoryFn<BulkSendProps> = args => {
  const [qauntity, setQuantity] = useState(0)
  const [activeEnvelopeOption, setActiveEnvelopeOption] = useState('')
  const [activePaperType, setActivePaperType] = useState('')
  const [isBulkSendActive, setIsBulkSendActive] = useState(true)

  const configurationSections: ConfigurationOptionSection[] = [
    {
      title: 'Configure Envelope Option',
      description:
        'Choose if you want to address your envelopes yourself or have them pre-addressed',
      tag: 'Bulk',
      activeConfigurationId: activeEnvelopeOption,
      setActiveConfigurationId: (activeConfigurationId: string) =>
        setActiveEnvelopeOption(activeConfigurationId),
      configurationList: [
        {
          graphicType: 'blank',
          configurationId: 'blank123',
          configurationTitle: 'Blank Envelopes',
          configurationDescription: 'Address and send yourself',
          configurationPrice: 1.29,
          configurationItemPriceTitle: 'per envelope',
          // @ts-expect-error
          frontPanelImage:
            'https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
          graphicType: 'blank',
          configurationId: 'blank456',
          configurationTitle: 'Stamped Envelopes',
          configurationDescription: 'Address and send yourself',
          configurationPrice: 2.2,
          configurationItemPriceTitle: 'per envelope',
          // @ts-expect-error
          frontPanelImage:
            'https://images.unsplash.com/photo-1578531504112-0dcd95eda450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        },
        {
          graphicType: 'blank',
          configurationId: 'blank789',
          configurationTitle: 'Filled Envelopes',
          configurationDescription: 'Address and send yourself',
          configurationPrice: 3.29,
          configurationItemPriceTitle: 'per envelope',
          // @ts-expect-error
          frontPanelImage:
            'https://images.unsplash.com/photo-1605699717844-5b47d9df96b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
        },
      ],
    },
    {
      title: 'Choose Paper Type',
      description:
        'Choose if you want to address your envelopes yourself or have them pre-addressed',
      tag: 'Paper',
      activeConfigurationId: activePaperType,
      setActiveConfigurationId: (activeConfigurationId: string) =>
        setActivePaperType(activeConfigurationId),
      configurationList: [
        {
          graphicType: 'none',
          configurationId: 'information',
          configurationTitle: 'Upgrade your Paper',
          configurationDescription:
            'Choose from any of our premium paper options to vamp up your card even more',
        },
        {
          graphicType: 'blank',
          configurationId: 'paper123',
          configurationTitle: 'Pearl Paper',
          configurationDescription: 'Our Shiniest Paper',
          configurationPrice: 1.29,
          configurationItemPriceTitle: 'per sheet',
          // @ts-expect-error
          frontPanelImage:
            'https://images.unsplash.com/photo-1521459467264-802e2ef3141f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        },
        {
          graphicType: 'blank',
          configurationId: 'paper456',
          configurationTitle: 'Default',
          configurationDescription: 'Our Basic Paper',
          configurationPrice: 2.2,
          configurationItemPriceTitle: 'per sheet',
          // @ts-expect-error
          frontPanelImage:
            'https://images.unsplash.com/photo-1616410731303-6affae095a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
        },
      ],
    },
  ]

  return (
    <Div inset="x2">
      <BulkSend
        {...args}
        configurationSections={configurationSections}
        quantity={qauntity}
        setQuantity={setQuantity}
        isActive={isBulkSendActive}
        setIsActive={setIsBulkSendActive}
        salePrice={qauntity > 100 ? 1.25 : 1.99}
      />
    </Div>
  )
}
