import React from 'react'
import { Tabs, TabProps, Tab } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Accordion } from 'src/exports/organisms'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/Tab',
  component: Tabs,
  args: {
    activeColor: 'primaryBrand',
    gap: 'x2',
    justify: 'flex-start',
  },
  argTypes: {
    activeColor: {
      control: {
        type: 'select',
        options: [
          'primaryBrand',
          'secondaryBrand',
          'accent',
          'success',
          'warning',
          'danger',
          'anchorBlue',
        ],
      },
    },
    gap: {
      control: {
        type: 'select',
        options: [
          'x0',
          'x_25',
          'x_5',
          'x_75',
          'x1',
          'x1_5',
          'x2',
          'x2_5',
          'x3',
          'x4',
          'x5',
          'x6',
          'x7',
          'x8',
          'x9',
        ],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: ['flex-start', 'flex-end', 'center'],
      },
    },
  },
} as Meta

export const StoryName: StoryFn<TabProps> = args => {
  return (
    <Div width="300px">
      <Accordion
        isExclusive={true}
        sections={[
          {
            heading: 'Setting',
            body: (
              <Tabs {...args} defaultActiveKey={'two'} height="400px">
                <Tab tabKey={'one'} title="Tab 1">
                  <Div
                    height="1200px"
                    width="100%"
                    backgroundColor="background"
                  >
                    Lots of content, lots of content, lots content, lots of
                    content
                  </Div>
                </Tab>
                <Tab tabKey={'two'} title="Tab 2">
                  Not much content
                </Tab>
              </Tabs>
            ),
            key: 'setting',
          },
        ]}
      ></Accordion>
    </Div>
  )
}
