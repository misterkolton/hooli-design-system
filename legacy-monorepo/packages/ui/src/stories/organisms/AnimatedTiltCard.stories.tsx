import React from 'react'
import {
  AnimatedTiltCard,
  AnimatedTiltCardProps,
  DimensionScale,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'organisms/AnimatedTiltCard',
  component: AnimatedTiltCard,
  argTypes: {
    glare: {
      control: {
        type: 'select',
        options: ['standard', 'satin', 'pearl'],
      },
      defaultValue: 'standard',
    },
    thumbnail: {
      control: {
        type: 'select',
        options: [
          'https://www.sendoutcards.com/thumbnail/fjPUivEjBhCXzBQKs7VHWzC_0CY=/fit-in/700x0/system_images/2023/4/14/8e72a145-dd2f-4934-b301-b529dc49bca7.png',
          'https://www.sendoutcards.com/thumbnail/Eenjd8BRiq2tzRyD7HV57_o6dS8=/fit-in/700x0/system_images/2024/6/3/67fe3854-c998-4cd5-9a10-dfcb26c58f1b.png',
          'https://www.sendoutcards.com/thumbnail/kAVj0gE9MhMNZR-d1n1x9B312q4=/fit-in/700x0/system_images/2022/2/10/7aa49c9a-577c-41fa-836d-10f9a6b0197b.png',
          'https://www.sendoutcards.com/thumbnail/CShEUvuq1S_xfDfVjqIzu4FcJWY=/fit-in/700x0/system_images/2019/12/4/d2eaa1e5-3a91-4926-8832-3b324ced4573.png',
        ],
      },
      defaultValue:
        'https://www.sendoutcards.com/thumbnail/fjPUivEjBhCXzBQKs7VHWzC_0CY=/fit-in/700x0/system_images/2023/4/14/8e72a145-dd2f-4934-b301-b529dc49bca7.png',
    },
    dimensionScale: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
  },
} as Meta

const Template: StoryFn<
  AnimatedTiltCardProps & {
    glare: string
    thumbnail: string
    dimensionScale: DimensionScale
  }
> = ({ glare, thumbnail, dimensionScale, ...args }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    width="100vw"
  >
    <AnimatedTiltCard
      {...args}
      dimensionScale={dimensionScale}
      selectableOptions={{
        title: 'Option 1',
        thumbnail,
        glare: glare as 'standard' | 'satin' | 'pearl',
      }}
    />
  </Flex>
)

export const Interactive = Template.bind({})
Interactive.args = {
  glare: 'pearl',
  thumbnail:
    'https://www.sendoutcards.com/thumbnail/fjPUivEjBhCXzBQKs7VHWzC_0CY=/fit-in/700x0/system_images/2023/4/14/8e72a145-dd2f-4934-b301-b529dc49bca7.png',
  dimensionScale: 'medium',
}
