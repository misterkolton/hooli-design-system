import React, { FC } from 'react'
import styles from './styles'
import { LinkColumnType } from 'src/organisms/staticNavigation/staticNavigation'
import { Flex, VStack, Text, Anchor, TextColor } from 'src/exports/atoms'

export type LinkColumnProps = {
  linkColumn: LinkColumnType
  linkTitleColor?: TextColor
  subLinkColor?: TextColor
}

export const LinkColumn: FC<LinkColumnProps> = ({
  linkColumn,
  linkTitleColor,
  subLinkColor,
}) => {
  return (
    <div css={styles.linkColumnContainer}>
      <VStack gap="x2">
        <Text type="body" weight="semiBold" color={linkTitleColor}>
          {linkColumn.title}
        </Text>
        <Flex justifyContent="space-between" width="100%">
          <VStack gap="x1_5">
            {linkColumn.links.map((subLink, index) => {
              return typeof subLink.title === 'string' ? (
                <Anchor
                  key={index}
                  color={subLinkColor}
                  cursor={'pointer'}
                  title={subLink.title}
                  href={subLink.href}
                  target={subLink.target}
                  size="small"
                  onClick={subLink.onClick}
                />
              ) : (
                <Anchor
                  key={index}
                  cursor={'pointer'}
                  href={subLink.href}
                  target={subLink.target}
                  size="small"
                  onClick={subLink.onClick}
                >
                  {subLink.title}
                </Anchor>
              )
            })}
          </VStack>
        </Flex>
      </VStack>
    </div>
  )
}
