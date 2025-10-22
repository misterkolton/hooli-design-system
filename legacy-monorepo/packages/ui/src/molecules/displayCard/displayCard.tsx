import React from 'react'
import { Flex, Text, Card } from 'src/exports/atoms'

export type DisplayCardProps = {
  title: string
  description: string
  children?: React.ReactNode
}

export const DisplayCard = ({
  title,
  description,
  children,
}: DisplayCardProps) => {
  return (
    <Card backgroundColor="background" minWidth="280px">
      <Flex width="100%" borderRadius="default" flexDirection="column">
        <Text
          type="caption"
          weight="bold"
          color="primaryHeading"
          content={title}
          alignment="center"
        />
        <Text
          type="footnote"
          color="primaryBody"
          content={description}
          lineHeight={1.4}
          inset={{ top: 'x_25' }}
          alignment="center"
        />
        <Flex
          width={'196px'}
          height={'275px'}
          style={{ margin: '1.75rem auto' }}
        >
          {children}
        </Flex>
      </Flex>
    </Card>
  )
}
