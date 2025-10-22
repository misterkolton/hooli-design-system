import React, { FC } from 'react'
import { Image } from 'src/molecules/image/image'
import { Card, Div, Flex, Spacer, Text } from 'src/exports/atoms'
import { Button, ButtonType, CloseButton } from 'src/exports/molecules'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'

export type FeatureAnnouncementProps = {
  title: string
  description: string
  locationId?: string
  onClose?: () => void
  button?: {
    title: string
    onClick?: () => void
    type?: ButtonType
  }
  imageURL: string
  backgroundColor?: BackgroundColor
  maxWidth?: string
}

export const FeatureAnnouncement: FC<FeatureAnnouncementProps> = ({
  title,
  description,
  onClose,
  imageURL,
  button,
  backgroundColor = 'foreground',
  maxWidth,
}) => {
  return (
    <Div maxWidth={maxWidth} position="relative">
      {onClose && <CloseButton top="-8px" right="0" onClose={onClose} />}
      <Card outset="x1_5" backgroundColor={backgroundColor}>
        <Image
          isActive={true}
          image={{
            url: imageURL,
          }}
          height="124px"
          width="224px"
        />
        <Spacer space="x2" />
        <Flex flexDirection="column" display="inline-flex">
          <Text alignment="center" weight="bold" type="body" content={title} />
          <Text
            alignment="center"
            content={description}
            type="footnote"
            lineHeight={1.4}
          />
        </Flex>
        <Spacer space="x1_5" />
        {button && (
          <Button
            title={button.title}
            onClick={() => {
              button.onClick?.()
              onClose?.()
            }}
            size="xSmall"
            fullWidth
            type={button.type ?? 'primary'}
          />
        )}
        <Spacer space="x1" />
      </Card>
    </Div>
  )
}
