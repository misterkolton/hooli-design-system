import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Text, TextProps, Div, TextType } from 'src/exports/atoms'

type BreakPoints = {
  xSmallBreakPoint: TextType
  smallBreakPoint: TextType
  mediumBreakPoint: TextType
  largeBreakPoint: TextType
  xLargeBreakPoint: TextType
}

const textTypeControlOptions = [
  'heroTitle',
  'title',
  'footnote',
  'caption',
  'subtitle',
  'body',
  'largeBody',
] as TextType[]

const breakpoints = {
  xSmallBreakPoint: {
    control: {
      type: 'select',
      options: textTypeControlOptions,
    },
  },
  smallBreakPoint: {
    control: {
      type: 'select',
      options: textTypeControlOptions,
    },
  },
  mediumBreakPoint: {
    control: {
      type: 'select',
      options: textTypeControlOptions,
    },
  },
  largeBreakPoint: {
    control: {
      type: 'select',
      options: textTypeControlOptions,
    },
  },
  xLargeBreakPoint: {
    control: {
      type: 'select',
      options: textTypeControlOptions,
    },
  },
}

export default {
  title: 'atoms/Text',
  component: Text,
  args: {
    color: 'primary',
    xSmallBreakPoint: 'footnote',
    smallBreakPoint: 'caption',
    mediumBreakPoint: 'subtitle',
    largeBreakPoint: 'title',
    xLargeBreakPoint: 'heroTitle',
  },
  argTypes: {
    ...breakpoints,
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      },
    },
  },
} as Meta

export const AllTextTypes: StoryFn<TextProps> = args => (
  <Div>
    <Text {...args} type={'heroTitle'}>
      This is a hero title
    </Text>
    <Text {...args} type="title">
      This is a title
    </Text>
    <Text {...args} type="subtitle">
      This is a subtitle
    </Text>
    <Text {...args} type="largeBody">
      This is a large body
    </Text>
    <Text {...args} type="body">
      This is body
    </Text>
    <Text {...args} type="caption">
      This is a caption
    </Text>
    <Text {...args} type="footnote">
      This is a footnote
    </Text>
  </Div>
)

const Template: StoryFn<TextProps> = args => (
  <Div>
    <Text {...args}></Text>
  </Div>
)

export const HeroTitle = Template.bind({})
HeroTitle.args = {
  content: 'This is a Hero Title',
  type: 'heroTitle',
}

export const Title = Template.bind({})
Title.args = {
  content: 'This is a Title',
  type: 'title',
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  content: 'This is a Subtitle',
  type: 'subtitle',
}

export const LargeBody = Template.bind({})
LargeBody.args = {
  content: 'This is a Large Body',
  type: 'largeBody',
}

export const Body = Template.bind({})
Body.args = {
  content: 'This is a body',
  type: 'body',
}

export const Caption = Template.bind({})
Caption.args = {
  content: 'This is a caption',
  type: 'caption',
}

export const Footnote = Template.bind({})
Footnote.args = {
  content: 'This is a footnote',
  type: 'footnote',
}

export const Responsive: StoryFn<TextProps & BreakPoints> = args => {
  return (
    <Div>
      <Text
        type={{
          xSmall: args.xSmallBreakPoint,
          small: args.smallBreakPoint,
          medium: args.mediumBreakPoint,
          large: args.largeBreakPoint,
          xLarge: args.xLargeBreakPoint,
        }}
      >
        {args.content}
      </Text>
    </Div>
  )
}
Responsive.args = {
  content: 'This is a responsive text',
  xSmallBreakPoint: 'footnote',
  smallBreakPoint: 'caption',
  mediumBreakPoint: 'subtitle',
  largeBreakPoint: 'title',
  xLargeBreakPoint: 'heroTitle',
}

export const TextWithOverridingStyles = Template.bind({})
TextWithOverridingStyles.args = {
  content: 'This is text with overriden styles',
  type: 'largeBody',
  style: {
    background: 'linear-gradient(45deg, #FFCF14 0%, #EE8FFF 52%,  #38DEFF 90%)',
    display: 'inline-block',
    letterSpacing: '1.2px',
    margin: '0 auto',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
}
