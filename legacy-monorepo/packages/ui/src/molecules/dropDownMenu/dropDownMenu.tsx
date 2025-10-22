import React, { FC } from 'react'

import {
  LinkColumnType,
  Link,
} from '../../organisms/staticNavigation/staticNavigation'
import { VStack, Text, Anchor } from 'src/exports/atoms'
import { IconLink } from 'src/exports/molecules'
import { Card } from 'src/exports/atoms'
import { AnimatePresence } from 'framer-motion'

export type DropDownMenuProps = {
  linkColumn: LinkColumnType
  isOpen: boolean
  top: number
  right?: number
  left?: number
}

export const DropDownMenu: FC<DropDownMenuProps> = ({
  linkColumn,
  isOpen,
  top,
  right,
  left,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Card
          inset={{ top: 'x2', horizontal: 'x2', bottom: 'x4' }}
          backgroundColor={'foreground'}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          position="absolute"
          top={`${top}px`}
          right={right ? `${right}px` : undefined}
          left={left ? `${left}px` : undefined}
          minWidth={'216px'}
        >
          <VStack gap="x2">
            <Text
              type="body"
              alignment="left"
              color="primaryHeading"
              content={linkColumn.title}
              weight="semiBold"
              lineHeight={1.2}
            />
            {linkColumn.links.map((link: Link) => {
              return typeof link.title === 'string' ? (
                link.icon ? (
                  <IconLink
                    icon={link.icon}
                    title={link.title}
                    size={'small'}
                    fill={'primaryHeadingText'}
                  />
                ) : (
                  <Anchor
                    title={link.title}
                    href={link.href}
                    onClick={link.onClick}
                    color={'primaryBody'}
                  />
                )
              ) : (
                <Anchor href={link.href} onClick={link.onClick}>
                  {link.title}
                </Anchor>
              )
            })}
          </VStack>
        </Card>
      )}
    </AnimatePresence>
  )
}
