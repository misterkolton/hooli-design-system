import React from 'react'
import { Section, SectionProps, Text, Flex } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'atoms/Section',
  component: Section,
  args: {
    outsideClick: () => console.log('You have clicked outside'),
  },
} as Meta

export const Template: StoryFn<SectionProps> = args => (
  <Section {...args}>
    <Flex alignItems="center" flexWrap="wrap" justifyContent="flex-start">
      <Flex
        outset="x2"
        width="300px"
        height="300px"
        backgroundColor="background"
        borderRadius="default"
        boxShadow="light"
        justifyContent="center"
        alignItems="center"
      >
        <Section>
          <Text type="subtitle">Section 1</Text>
        </Section>
      </Flex>
      <Flex
        outset="x2"
        width="300px"
        height="300px"
        backgroundColor="background"
        borderRadius="default"
        boxShadow="light"
        justifyContent="center"
        alignItems="center"
      >
        <Section>
          <Text type="subtitle">Section 2</Text>
        </Section>
      </Flex>
      <Flex
        outset="x2"
        width="300px"
        height="300px"
        backgroundColor="background"
        borderRadius="default"
        boxShadow="light"
        justifyContent="center"
        alignItems="center"
      >
        <Section>
          <Text type="subtitle">Section 3</Text>
        </Section>
      </Flex>
      <Flex
        outset="x2"
        width="300px"
        height="300px"
        backgroundColor="background"
        borderRadius="default"
        boxShadow="light"
        justifyContent="center"
        alignItems="center"
      >
        <Section>
          <Text type="subtitle">Section 4</Text>
        </Section>
      </Flex>
    </Flex>
  </Section>
)
