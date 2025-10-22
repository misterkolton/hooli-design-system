import React, { FC, useRef, useState } from 'react'
import {
  GridItem,
  CloseButton,
  Button,
  Image,
  Grid,
} from 'src/exports/molecules'
import { AnimatePresence } from 'framer-motion'
import { Div } from 'src/atoms/div/div'
import {
  Flex,
  HStack,
  Text,
  Spacer,
  LoadingSpinner,
  AnimatedCheckMark,
} from 'src/exports/atoms'
import {
  ImageUploader,
  AcceptedFiles,
  RejectedFiles,
} from '../imageUploader/imageUploader'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './styles'

export type UserImage = {
  url: string
  onClick: () => void
  isHorizontal: boolean
}
export type ImageUploadWidgetProps = {
  title: string
  maxHeight?: string
  onClose: () => void
  onFinished: () => void
  isOpen: boolean
  onUpload: (
    files: {
      accepted: AcceptedFiles
      rejected: RejectedFiles
    },
    fileList?: FileList | null,
  ) => void
  hasMultiUpload?: boolean
  userImages?: UserImage[]
  x: number
  y: number
  dataLength?: number
  loadMore?: () => void
  hasMore?: boolean
  endMessage?: string
  width?: number
}

export const ImageUploadWidget: FC<ImageUploadWidgetProps> = ({
  title = 'Image Background',
  onFinished,
  onUpload,
  x,
  y,
  isOpen,
  hasMultiUpload = false,
  userImages,
  hasMore,
  loadMore,
  endMessage,
  dataLength,
  width = 264,
}) => {
  const [shouldShowImageGrid, setShouldShowImageGrid] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    setShouldShowImageGrid(false)
    inputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const acceptedFiles = Array.from(files)
      onUpload({ accepted: acceptedFiles, rejected: [] }, files)
    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          top={`${y}px`}
          left={`${x}px`}
          display="flex"
          position="absolute"
          flexDirection="column"
          height={shouldShowImageGrid ? '450px' : '300px'}
          width={`${width}px`}
          backgroundColor="foreground"
          boxShadow="mediumDark"
          borderRadius="medium"
          inset="x1"
        >
          <CloseButton
            fill="inverseHeadingText"
            top="-16px"
            size="xSmall"
            right="-16px"
            onClose={() => onFinished()}
          />
          <Flex outset="x1">
            <Text
              lineHeight={1.2}
              color="primaryHeading"
              weight="bold"
              type="caption"
              content={title}
            />
          </Flex>
          <Flex
            outset={{ vertical: 'x2' }}
            height="100%"
            overflow="auto"
            borderRadius="default"
          >
            {shouldShowImageGrid ? (
              <AnimatePresence>
                <Div
                  overflowY="auto"
                  id="scrollAble"
                  height="100%"
                  css={styles.stickersContainer}
                  width="100%"
                >
                  <InfiniteScroll
                    hasMore={!!hasMore}
                    dataLength={dataLength ?? 0}
                    loader={
                      <Div inset="x8">
                        <LoadingSpinner size="xLarge" />
                      </Div>
                    }
                    endMessage={
                      <Flex
                        position="relative"
                        width="100%"
                        flexDirection="column"
                        alignItems="center"
                        outset={{ top: 'x4' }}
                      >
                        <AnimatedCheckMark size="small" />
                        <Spacer space="x1" />
                        <Text type="body">{endMessage}</Text>
                      </Flex>
                    }
                    next={() => loadMore?.()}
                    scrollableTarget="scrollAble"
                  >
                    <Grid
                      columnSize={35}
                      rowSize={30}
                      gap={8}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {userImages?.map((image, index) => {
                        return (
                          <GridItem
                            key={index}
                            gridColSpan={2}
                            gridRowSpan={image.isHorizontal ? 2 : 4}
                            borderRadius={'medium'}
                          >
                            <Div width="100%" height="100%">
                              <Image
                                onClick={image.onClick}
                                isActive={true}
                                height="100%"
                                width="100%"
                                image={{ url: image.url }}
                              />
                            </Div>
                          </GridItem>
                        )
                      })}
                    </Grid>
                  </InfiniteScroll>
                </Div>
              </AnimatePresence>
            ) : (
              <ImageUploader
                onUpload={onUpload}
                acceptedFiles={['gif', 'jpeg', 'jpg', 'png']}
                hasMultiupload={hasMultiUpload}
              />
            )}
          </Flex>
          <HStack outset="x1" justify="center" gap="x1">
            <Div width="120px">
              <Button
                onClick={handleUploadClick}
                fullWidth
                size="small"
                type="smoke"
                title="Upload..."
              />
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                hidden={true}
              />
            </Div>
            <Div width="120px">
              <Button
                onClick={() => setShouldShowImageGrid(true)}
                fullWidth
                size="small"
                type="smoke"
                title="My Images"
              />
            </Div>
          </HStack>
        </Div>
      )}
    </AnimatePresence>
  )
}
