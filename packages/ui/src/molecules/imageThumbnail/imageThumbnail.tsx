import React, { FC } from 'react'
import { Flex, Span, AnimatedCheckMark } from 'src/exports/atoms'
import { Image, CloseButton, Progress } from 'src/exports/molecules'

export type ImageThumbnailProps = {
  url: string
  width: number
  height: number
  onRemove?: () => void
  uploadProgress: number
}

export const ImageThumbnail: FC<ImageThumbnailProps> = ({
  url,
  width,
  height,
  onRemove,
  uploadProgress,
}) => {
  const isWithinRange = uploadProgress >= 0 && uploadProgress <= 100
  const hasUploaded = uploadProgress === 100

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      width={`${width}px`}
      height={`${height}px`}
    >
      {!!onRemove && (
        <Span position="relative" top="0px" right="1px">
          <CloseButton onClose={onRemove} size="xSmall" />
        </Span>
      )}
      <>
        <Image
          isActive={true}
          width={'100%'}
          height={'100%'}
          image={{ url: url }}
          backgroundSize="cover"
        />
        {isWithinRange && hasUploaded ? (
          <Flex
            zIndex={3}
            position="absolute"
            top={`${height / 2}px`}
            right="400px"
          >
            <AnimatedCheckMark size="medium" />
          </Flex>
        ) : (
          <Flex width={'100%'} outset={{ top: 'x2', left: 'x1' }}>
            <Progress percentage={uploadProgress} hasLabel={false} />
          </Flex>
        )}
      </>
    </Flex>
  )
}
