import React, { FC } from 'react'
import {
  VStack,
  HStack,
  Avatar,
  AvatarProps,
  Text,
  Icon,
  Spacer,
  Anchor,
  AnchorProps,
  Flex,
} from 'src/exports/atoms'
import { Button, ButtonType } from 'src/exports/molecules'

type Action = {
  title: string
  type?: ButtonType
  onClick: () => void
}

type User = {
  name: string
  active: string
  profileDate: string
  status: string
  activityFeed: string
  activityDescription: string
}

export type InviteCardProps = {
  user: User
  avatar: AvatarProps
  extraLink: AnchorProps
  action: Action
}

export const InviteCard: FC<InviteCardProps> = ({
  user,
  avatar,
  extraLink,
  action,
}) => {
  return (
    <Flex>
      <VStack gap="x0" outset="x2">
        <HStack gap="x2" justify="initial">
          <Avatar
            size={avatar.size}
            initials={avatar.initials}
            isActive={avatar.isActive}
            isSelected={avatar.isSelected}
            avatarImage={avatar.avatarImage}
          />
          <Text
            type="title"
            color="primaryHeading"
            content={user.name}
            weight="semiBold"
          />
        </HStack>
        <Spacer space="x2" />
        <VStack gap="x0">
          <Text type="caption" color="primaryBody" content={user.profileDate} />
          <Text
            type="largeBody"
            color="primaryHeading"
            content={user.activityFeed}
            style={{ lineHeight: 'initial' }}
          />
          <Text
            type="caption"
            color="primaryBody"
            content={user.activityDescription}
          />
        </VStack>
        <Spacer space="x2" />
        <HStack gap="x2" justify="initial" outset="0 auto">
          <Icon name="loading" size="medium" primaryColor="success" />
          <Icon name="loading" size="medium" primaryColor="success" />
          <Icon name="loading" size="medium" primaryColor="success" />
          <Icon name="loading" size="medium" primaryColor="success" />
        </HStack>
        <Spacer space="x2" />
        <VStack gap="x1">
          <Text
            type="body"
            color="primaryBody"
            content={`Contact ${user.name}:`}
          />
          <HStack gap="x4" justify="initial">
            <Icon name="envelope" size="small" primaryColor="default" />
            <Icon name="facebook" size="small" primaryColor="default" />
            <Icon name="twitter" size="small" primaryColor="default" />
          </HStack>
        </VStack>
        <Spacer space="x2" />
        <VStack gap="x2">
          <Button
            type={action.type}
            title={action.title}
            onClick={action.onClick}
            fullWidth
          />
          <Anchor
            size={extraLink.size}
            href={extraLink.href}
            isDecorated={extraLink.isDecorated}
            title={extraLink.title}
            outset="0 auto"
          />
        </VStack>
      </VStack>
    </Flex>
  )
}
