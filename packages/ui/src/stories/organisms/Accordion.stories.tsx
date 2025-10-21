import React, { FC } from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Accordion, AccordionProps, AwardCard } from 'src/exports/organisms'
import { Div, VStack, HStack, Text } from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'

// AccordionLabel
type AccordionLabelProps = {
  image: string
  label: string
}
const AccordionLabel: FC<AccordionLabelProps> = ({ image, label }) => {
  return (
    <Div
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text weight="bold" type="caption" content={label} />
      <Div
        width="34px"
        height="34px"
        borderRadius="small"
        backgroundImage={image}
        backgroundSize="cover"
        backgroundPosition="center"
        outset={{ right: 'x2' }}
      ></Div>
    </Div>
  )
}

// Example data
const accordionSections = [
  {
    key: 1,
    heading: (
      <AccordionLabel
        label={'Manager Awards'}
        image="https://www.sendoutcards.com/static/soc-website/images/selfie-queen-card.png"
      />
    ),
    body: (
      <HStack justify="flex-start" gap={'x2_5'} inset={'x2'}>
        <AwardCard
          image="https://www.sendoutcards.com/static/soc-website/images/selfie-queen-card.png"
          title={'Award 1'}
          progress={100}
        />
        <AwardCard
          image="https://picsum.photos/id/1033/200/300"
          title={'Award 2'}
          progress={100}
        />
        <AwardCard
          image="https://picsum.photos/id/43/200/300"
          title={'Award 3'}
          progress={39}
        />
        <AwardCard
          image="https://picsum.photos/id/74/200/300"
          title={'Award 4'}
          progress={39}
        />
        <AwardCard
          image="https://picsum.photos/id/85/200/300"
          title={'Award 5'}
          progress={39}
        />
      </HStack>
    ),
  },
  {
    key: 2,
    heading: (
      <AccordionLabel
        label={'Senior Manager Awards'}
        image={
          'https://www.sendoutcards.com/thumbnail/7AiseP0M3QdZwdTKp8u5OiEAAa8=/fit-in/700x0/system_images/2019/12/4/2049102d-1ace-40a4-8a60-c05991d45f02.png'
        }
      />
    ),
    body: (
      <AwardCard
        image="https://www.sendoutcards.com/thumbnail/7AiseP0M3QdZwdTKp8u5OiEAAa8=/fit-in/700x0/system_images/2019/12/4/2049102d-1ace-40a4-8a60-c05991d45f02.png"
        title={'Award 2'}
        progress={29}
      />
    ),
  },
  {
    key: 3,
    heading: (
      <AccordionLabel
        label={'Cool Awards'}
        image={'https://picsum.photos/id/2/200/300'}
      />
    ),
    body: (
      <AwardCard
        image="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        title={'Award 3'}
        progress={12}
      />
    ),
  },
]

export default {
  title: 'organisms/Accordion',
  component: Accordion,
  args: {
    sections: accordionSections,
    background: 'background',
  },
  argTypes: {
    sections: {
      control: { disable: true },
    },

    hasArrows: {
      control: { type: 'boolean' },
    },
    background: {
      control: {
        type: 'select',
        options: ['background', 'foreground'],
      },
    },
  },
} as Meta

const Template: StoryFn<AccordionProps> = args => (
  <Div outset="x2_5" justifyContent="center">
    <Accordion {...args} />
  </Div>
)

export const Exclusive = Template.bind({})
Exclusive.args = {
  isExclusive: true,
}

export const NonExclusive = Template.bind({})
NonExclusive.args = {
  isExclusive: false,
}

export const NoArrows = Template.bind({})
NoArrows.args = {
  hasArrows: false,
}

export const InverseColors: StoryFn<AccordionProps> = args => (
  <Div inset="x3">
    <Accordion {...args}></Accordion>
  </Div>
)

export const StateOverride: StoryFn<AccordionProps> = args => {
  const [activeKeys, setActiveKeys] = React.useState<(number | string)[]>([-1])

  return (
    <Div inset="x3">
      <VStack gap="x3">
        <HStack justify="center" gap="x2">
          <Button hover onClick={() => setActiveKeys([-1])}>
            Close All
          </Button>
          <Button
            hover
            onClick={() =>
              setActiveKeys(activeKeys.filter(index => index !== 3))
            }
          >
            Close 3
          </Button>
          {/** NOTE: When overriding the state you need to be careful not to add duplicates or it will render multiple AccordionBody's
           * See Example below: checking for duplicates first, then appending if not found, otherwise returning copy of original state
           */}
          <Button
            hover
            onClick={() =>
              setActiveKeys(
                activeKeys.some(i => i === 1)
                  ? [...activeKeys]
                  : [...activeKeys, 1],
              )
            }
          >
            Open 1
          </Button>
        </HStack>

        <Accordion
          {...args}
          stateOverride={{
            activeIndexes: activeKeys,
            setActiveIndexes: setActiveKeys,
          }}
        ></Accordion>
      </VStack>
    </Div>
  )
}
StateOverride.args = {
  defaultActiveKeys: [2],
}
