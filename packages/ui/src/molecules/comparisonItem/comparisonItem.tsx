import React, { FC } from 'react'
import { AnimatedCheckMark, Flex, Icon, ListItem, Text } from 'src'
import { entities } from 'src/theme/theming/entities'

type ColorType = keyof typeof entities.animatedCheckmark.colors

export type ComparisonItemProps = {
  title: string
  description?: string | string[]
  isIncluded: boolean
  checkMarkColor?: ColorType
  maxWidth?: string
  isMinified?: boolean
}

export const ComparisonItem: FC<ComparisonItemProps> = ({
  title,
  description,
  isIncluded,
  checkMarkColor = 'success',
  maxWidth,
  isMinified,
}) => (
  <Flex width="100%" maxWidth={maxWidth} justifyContent="flex-start">
    <Flex
      justifyContent="flex-start"
      flexWrap={'wrap'}
      width={isMinified ? 'unset' : 'calc(100% - 100px)'}
      order={isMinified ? 2 : 1}
    >
      <Text
        type="body"
        color={isIncluded ? 'primaryHeading' : 'primaryBody'}
        content={title}
        weight={isIncluded ? 'bold' : 'semiBold'}
        lineHeight={1.58}
        style={{ width: '100%', letterSpacing: '.235px' }}
      />
      {typeof description === 'string' ? (
        <Text
          inset="x_25"
          type="caption"
          color="primaryBody"
          content={description}
          lineHeight={1.58}
          style={{ width: '100%' }}
        />
      ) : (
        description?.map(bullet => (
          <ListItem orientation="horizontal">
            <Text isInline={true} type="caption">
              {bullet}
            </Text>
          </ListItem>
        ))
      )}
    </Flex>

    <Flex
      outset={isMinified ? { right: 'x1' } : { left: 'auto' }}
      order={isMinified ? 1 : 2}
      alignItems={isMinified ? 'flex-start' : 'center'}
    >
      {isIncluded ? (
        <AnimatedCheckMark filled color={checkMarkColor} />
      ) : (
        <Icon name="closeCircle" size="small" primaryColor={'gray'} />
      )}
    </Flex>
  </Flex>
)
