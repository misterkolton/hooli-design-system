import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import {
  SelectableList,
  SelectableListProps,
  SelectableCard,
  UserCard,
} from 'src/exports/organisms'

const users = [
  { firstName: 'Nick', lastName: 'Weaver', location: 'Salt Lake City' },
  { firstName: 'Jeff', lastName: 'Bold', location: 'Salt Lake City' },
  { firstName: 'Shawn', lastName: 'Dykes', location: 'Salt Lake City' },
  { firstName: 'Jason', lastName: 'Shartz', location: 'Salt Lake City' },
  { firstName: 'Billy', lastName: 'Randall', location: 'Salt Lake City' },
  { firstName: 'Mike', lastName: 'Wull', location: 'Salt Lake City' },
]

export default {
  title: 'organisms/SelectableList',
  component: SelectableList,
  args: {
    users,
  },
} as Meta

const Template: StoryFn<SelectableListProps> = args => {
  const [selectedIndexes, setSelectedIndexes] = React.useState<number[]>([])

  return (
    <SelectableList
      {...args}
      selectedIndexes={selectedIndexes}
      setSelectedIndexes={setSelectedIndexes}
      orientation="horizontal"
    >
      {users.map((user, index) => {
        return (
          <SelectableCard
            isActive={selectedIndexes.some(
              selectedIndex => selectedIndex === index,
            )}
          >
            <UserCard
              firstName={user.firstName}
              lastName={user.lastName}
              caption={user.location}
              size="small"
            />
          </SelectableCard>
        )
      })}
    </SelectableList>
  )
}

export const SingleSelection = Template.bind({})
SingleSelection.args = {
  limit: 1,
}

export const MultiSelection = Template.bind({})
MultiSelection.args = {
  limit: 3,
}
