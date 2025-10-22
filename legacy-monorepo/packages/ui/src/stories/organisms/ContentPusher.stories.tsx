import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex, VStack, HStack, Text } from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'
import {
  ZoneType,
  ContentPusher,
  ContentPusherProps,
} from 'src/exports/organisms'

export default {
  title: 'organisms/ContentPusher',
  component: ContentPusher,
} as Meta

export const StoryName: StoryFn<ContentPusherProps> = args => {
  const [isOpen, setIsOpen] = useState(true)
  const [zoneToOpen, setZoneToOpen] = useState<keyof ZoneType>('left')
  return (
    <Flex width="80vw" height="100vh" maxWidth="2100px">
      <ContentPusher
        {...args}
        isOpen={isOpen}
        zoneToOpen={zoneToOpen}
        setIsOpen={setIsOpen}
        zones={{
          left: {
            component: <div>Left Side HEllo</div>,
            width: 300,
          },
          right: {
            component: <div>Right side Hello</div>,
            width: 700,
          },
          top: {
            component: <div>Top side Hello</div>,
            height: 240,
          },
          bottom: {
            component: <div>Bottom side hello</div>,
            height: 320,
          },
        }}
      >
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text type="subtitle" content="This is your main content" />
        </Flex>
      </ContentPusher>
      <VStack gap="x1">
        <div>
          <Button onClick={() => setIsOpen(!isOpen)}>Open Zone</Button>
        </div>
        <HStack justify="center" gap="x1">
          <div>
            <Button
              onClick={() => setZoneToOpen('left')}
              outlined={zoneToOpen === 'left'}
            >
              Left Zone
            </Button>
          </div>
          <div>
            <Button
              onClick={() => setZoneToOpen('right')}
              outlined={zoneToOpen === 'right'}
            >
              Right Zone
            </Button>
          </div>
          <div>
            <Button
              onClick={() => setZoneToOpen('top')}
              outlined={zoneToOpen === 'top'}
            >
              Top Zone
            </Button>
          </div>
          <div>
            <Button
              onClick={() => setZoneToOpen('bottom')}
              outlined={zoneToOpen === 'bottom'}
            >
              Bottom Zone
            </Button>
          </div>
        </HStack>
      </VStack>
    </Flex>
  )
}
