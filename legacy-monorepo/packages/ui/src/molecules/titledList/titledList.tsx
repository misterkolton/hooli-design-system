import React, { FC } from 'react'
import { List, ListItem, TextType, Text } from 'src/exports/atoms'

export type TitledListProps = {
  title: string
  listItems: string[]
  listStyle?: 'ordered' | 'unordered'
  titleSize?: TitleSize
}

export type TitleSize = Extract<TextType, 'subtitle' | 'largeBody' | 'body'>

export const TitledList: FC<TitledListProps> = ({
  title,
  listItems,
  listStyle = 'unordered',
  titleSize = 'body',
}) => {
  return (
    <>
      <Text
        color="primaryHeading"
        weight="bold"
        content={title}
        type={{ xSmall: 'caption', small: 'body', medium: titleSize }}
      />
      <List inset="x0" alignment="left" listStyle="none" orientation="vertical">
        {listItems.map((item, index) => {
          index += 1
          return (
            <ListItem
              inset="x_5"
              key={`${index} ${item}`}
              display="flex"
              flexDirection="column"
              orientation="vertical"
            >
              <Text
                color="primaryBody"
                type={{
                  xSmall: 'footnote',
                  small: 'caption',
                  medium:
                    titleSize === 'subtitle'
                      ? 'largeBody'
                      : titleSize === 'largeBody'
                      ? 'body'
                      : 'caption',
                }}
              >
                {listStyle === 'unordered' ? '-' : `${index}.`} {item}
              </Text>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}
