import React from 'react'
import { Pill, PillProps, PillItemsType } from 'src/exports/organisms'
import { Div } from 'src/exports/atoms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'organisms/Pill',
  component: Pill,
} as Meta

const pillContents: PillItemsType[] = [
  {
    title: 'Layers',
    icon: 'catalog',
    onClick: () => console.log('Click'),
    isActive: true,
    activeColor: 'danger',
  },
  { title: 'Swap', icon: 'loading', onClick: () => {} },
  { title: 'Delete', icon: 'close', onClick: () => {} },
  {
    title: 'Done',
    icon: 'chevron',
    iconOrientation: 'right',
    onClick: () => {},
  },
  {
    title: 'Done1',
    icon: 'chevron',
    iconOrientation: 'right',
    onClick: () => {},
  },
  {
    title: 'Also Done',
    icon: 'chevron',
    iconOrientation: 'right',
    onClick: () => {},
  },
]

export const Primary: StoryFn<PillProps> = args => {
  return (
    <>
      <Div
        backgroundColor="background"
        width="min-content"
        inset="x4"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Pill
          {...args}
          title="Pill Menu"
          items={pillContents}
          boxShadow="light"
        />
      </Div>
    </>
  )
}
