import React, { FC, useState } from 'react'
import { Target } from 'src'
import { Div } from 'src/atoms/div/div'
import { Text, TextColor } from 'src/atoms/typography/text'
import { Anchor, Flex, Icon, Span } from 'src/exports/atoms'

type NavigationLinkProps = {
  title: string
  isActive: boolean
  linkTitleColor?: TextColor
  href?: string
  target?: Target
}
export const NavigationLink: FC<NavigationLinkProps> = ({
  title,
  isActive,
  linkTitleColor,
  href,
  target,
}) => {
  return (
    <Flex
      height="100%"
      alignItems="center"
      cursor="pointer"
      style={{
        userSelect: 'none',
      }}
    >
      {href ? (
        <StaticLink
          href={href}
          title={title}
          linkTitleColor={linkTitleColor}
          target={target}
        />
      ) : (
        <Flex inset={{ horizontal: 'x1' }}>
          <Flex
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Span
              style={{
                visibility: isActive ? 'hidden' : 'visible',
              }}
            >
              <Text
                content={title}
                lineHeight={1.6}
                type={'body'}
                weight="regular"
                color="primaryBody"
                inset={{ horizontal: 'x_5' }}
                whiteSpace="nowrap"
              />
            </Span>
            <Span
              position="absolute"
              style={{
                visibility: isActive ? 'visible' : 'hidden',
              }}
            >
              <Text
                content={title}
                lineHeight={1.6}
                type={'body'}
                weight="semiBold"
                color="primaryBrand"
              />
            </Span>
          </Flex>
          <Div outset={{ top: 'x1_5' }}>
            <Icon
              name="chevron"
              orientation={isActive ? 'up' : 'down'}
              size={'xSmall'}
              primaryColor={isActive ? 'primaryBrand' : 'primaryBodyText'}
            />
          </Div>
        </Flex>
      )}
    </Flex>
  )
}

function StaticLink({
  href,
  title,
  target,
}: {
  href: string
  title: string
  linkTitleColor: any
  target?: Target
}) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        inset="x1"
      >
        <Div style={{ visibility: isHovering ? 'hidden' : 'visible' }}>
          <Text
            content={title}
            lineHeight={1.6}
            type={'body'}
            color="primaryBody"
          />
        </Div>
        <Span
          position="absolute"
          style={{
            visibility: isHovering ? 'visible' : 'hidden',
          }}
        >
          <Anchor position="relative" target={target ?? '_blank'} href={href}>
            <Text
              content={title}
              lineHeight={1.6}
              type={'body'}
              color="primaryBrand"
              weight="semiBold"
            />
          </Anchor>
        </Span>
      </Flex>
    </>
  )
}
