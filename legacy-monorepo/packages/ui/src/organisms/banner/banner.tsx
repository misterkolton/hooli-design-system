import React, { useState } from 'react'
import { Icon } from 'src/atoms/iconography/components/icon'
import { IconType } from 'src/atoms/iconography/types'
import { Text } from 'src/atoms/typography/text'
import { Flex } from 'src/exports/atoms'
import { useDeviceSize } from '../../hooks/useDeviceSize'

type BannerDetail = {
  message: string
  icon?: IconType
}

type StatusType = 'success' | 'warning' | 'danger'

type BaseBannerProps = {
  status: StatusType
  isOutlined?: boolean
  onClose?: () => void
}

type BannerWithTitle = BaseBannerProps & {
  bannerTitle: BannerDetail
  children?: never
}

type BannerWithChildren = BaseBannerProps & {
  children: React.ReactNode
  bannerTitle?: never
}

export type BannerProps = BannerWithTitle | BannerWithChildren
export const Banner = ({ isOutlined = true, ...props }: BannerProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const { device } = useDeviceSize()
  const isMobile = device === 'xSmall' ? true : false

  return (
    <Flex
      width="100%"
      backgroundColor={{
        swatch:
          props.status === 'success'
            ? 'success'
            : props.status === 'warning'
            ? 'warning'
            : 'danger',
        shade: isOutlined ? '_1000' : 'base',
      }}
      borderWidth={isOutlined ? 'default' : undefined}
      borderStyle={isOutlined ? 'solid' : undefined}
      borderColor={
        isOutlined
          ? {
              swatch:
                props.status === 'success'
                  ? 'success'
                  : props.status === 'warning'
                  ? 'warning'
                  : 'danger',
              shade: 'base',
            }
          : undefined
      }
      inset={{ vertical: 'x2', horizontal: 'x1' }}
      borderRadius="default"
      justifyContent="flex-start"
      alignItems="center"
    >
      {props.bannerTitle ? (
        <Flex width="100%">
          {props.bannerTitle.icon && (
            <Flex
              justifyContent="center"
              alignItems="center"
              inset={{ horizontal: 'x1' }}
            >
              <Icon
                name={props.bannerTitle.icon}
                size="small"
                primaryColor={
                  isOutlined ? 'primaryBodyText' : 'inverseHeadingText'
                }
              />
            </Flex>
          )}
          <Flex width="100%">
            <Text
              content={props.bannerTitle.message}
              color={isOutlined ? 'primaryBody' : 'inverseHeading'}
              type={{ xSmall: 'footnote', small: 'caption' }}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex width="100%" alignItems="center">
          {props.children}
        </Flex>
      )}
      {props.onClose && (
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          outset={{ right: isMobile ? 'x0' : 'x2', left: 'x4' }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <Flex
            onClick={props.onClose}
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            backgroundColor={isHovering ? 'foreground' : undefined}
            borderRadius="default"
          >
            <Icon primaryColor="default" size="xSmall" name="close" />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
