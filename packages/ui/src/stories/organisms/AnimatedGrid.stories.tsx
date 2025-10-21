import React from 'react'
import {
  AnimatedGrid,
  AnimateGridProps,
  AnimatedGridImageType,
} from 'src/exports/organisms'
import { Div, Flex, Text, Spacer, VStack } from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/AnimatedGrid',
  component: AnimatedGrid,
  args: {
    gap: 24,
    columnSize: 260,
    rowSize: 260,
    maxWidth: 1100,
  },
  argTypes: {
    gap: {
      control: {
        type: 'number',
      },
    },
    columnSize: {
      control: {
        type: 'number',
      },
    },
    rowSize: {
      control: {
        type: 'number',
      },
    },
    maxWidth: {
      control: {
        type: 'number',
      },
    },
    rotation: {
      control: {
        type: 'object',
      },
      defaultValue: {
        degrees: 24,
        offset: 120,
      },
    },
  },
} as Meta

export const Primary: StoryFn<AnimateGridProps> = args => (
  <>
    <Flex
      height="100vh"
      width="100%"
      flexDirection="row"
      overflow="hidden"
      justifyContent="space-between"
    >
      <Flex
        width="30vw"
        minWidth="320px"
        inset="x6"
        flexDirection="column"
        outset={{ right: 'x2' }}
      >
        <VStack gap="x3">
          <Text type="largeBody">OUR STORY</Text>
          <Text type="title">Belly Foodeaux</Text>
          <Div width="fit-content">
            <VStack gap="x2">
              <Text type="subtitle">A Hungry Still Company</Text>
              <Div
                backgroundColor={{ swatch: 'primaryBrand', shade: 'base' }}
                height="x1"
                width="100%"
              />
            </VStack>
          </Div>
          <Text type="body">
            We believe the gifts you give deserve to be delicious enough to be
            remembered forever. Celebrate the people in your life by sending an
            eating experience that inspires moments that matter most.
          </Text>
          <Spacer orientation="vertical" space="x2" />
          <span>
            <Button onClick={() => {}} outlined>
              About us
            </Button>
          </span>
        </VStack>
      </Flex>
      <Flex width="80vw">
        <AnimatedGrid
          {...args}
          gridImages={gridImages}
          rotation={{ degrees: 0, offset: 0 }}
        >
          {[...Array(24)].map((_, i) => (
            <Flex
              key={i}
              height="100%"
              width="100%"
              justifyContent="center"
              alignItems="center"
              borderRadius="inherit"
              backgroundColor={{ swatch: 'primaryBrand', shade: 'base' }}
            >
              <Text type="largeBody" color="inverseHeading">
                {i + 1}
              </Text>
            </Flex>
          ))}
        </AnimatedGrid>
      </Flex>
    </Flex>
    <Spacer orientation="vertical" space="x8" />
    <Div width="100%" height="100vh" inset="x3">
      <VStack gap="x5">
        <Text type="body">
          Spicy jalapeno bacon ipsum dolor amet hamburger ullamco non, pancetta
          drumstick sausage ut beef ribs pork chop buffalo. Laboris turkey
          prosciutto cupim pork loin pork chop ball tip. Kevin tenderloin swine
          pastrami bacon hamburger irure picanha ham pork belly corned beef duis
          turducken. Laboris beef ribs turducken quis strip steak tail.
        </Text>
        <Text type="body">
          Pork loin nostrud sunt swine strip steak laborum ipsum laboris chislic
          anim exercitation. Ipsum occaecat tail laborum, burgdoggen eu swine
          corned beef landjaeger brisket enim pork loin alcatra quis buffalo.
          Short ribs tail alcatra pancetta, meatloaf corned beef flank
          drumstick. Pig bacon shankle ea t-bone. Id andouille veniam
          consectetur minim duis.
        </Text>
        <Text type="body">
          Shoulder tri-tip consectetur sausage, porchetta minim alcatra. Nulla
          et chislic, chuck filet mignon chicken cow sunt burgdoggen. T-bone
          chicken brisket meatball mollit. Corned beef ex officia t-bone non
          excepteur ball tip burgdoggen ad aliquip chislic. Pork loin spare ribs
          tongue, picanha veniam ribeye nostrud voluptate adipisicing occaecat
          ea cillum frankfurter doner. Picanha est boudin, adipisicing shank
          quis in excepteur ball tip.
        </Text>
        <Text type="body">
          Spare ribs magna turkey kielbasa meatloaf frankfurter, meatball
          biltong esse t-bone in dolore quis sausage. Pig lorem chislic
          consectetur minim sunt enim exercitation deserunt pork loin ex
          kielbasa picanha excepteur short loin. Dolore fugiat nostrud swine,
          shankle deserunt do ball tip shank meatball minim picanha ribeye. Sint
          aute ullamco, frankfurter brisket in tail ex eiusmod enim kielbasa
          picanha excepteur. Adipisicing short loin magna in velit fatback shank
          kielbasa sunt fugiat consequat ipsum. Chislic ad dolore ullamco, esse
          kevin enim sint aliqua.
        </Text>
      </VStack>
    </Div>
  </>
)

const gridImages: AnimatedGridImageType[] = [
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607501629974-d50127ad7066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1605468275444-5989178e0a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1607974347625-36a0bcb6a260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
    colSpan: 1,
    rowSpan: 1,
  },
]
