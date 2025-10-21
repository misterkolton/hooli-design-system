import React, { FC } from 'react'
import { Div, Flex } from 'src'

export type ImageGridProps = {
  images: {
    leftColumn: {
      topLeft: string
      bottomLeft: string
      topRight: string
      bottomRight: string
    }
    centerColumn: {
      topLeft: string
      topRight: string
      mainImage: string
    }
    rightColumn: {
      topLeft: string
      bottomLeft: string
      topRight: string
      bottomRight: string
    }
  }
  width: string
  borderRadius?: string
  gap?: string
}

export const ImageGrid: FC<ImageGridProps> = ({
  images,
  width,
  borderRadius = '8px',
  gap = '10px',
}) => {
  const imageStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: borderRadius,
  }
  return (
    <Div position="relative" overflow="hidden" width="100%" height="100%">
      <Flex
        width={width}
        height="100%"
        columnGap={gap}
        rowGap={gap}
        position="absolute"
        transform="translate(-50%, -50%)"
        top="50%"
        left="50%"
      >
        {/* //---------------------------------------------------------------LEFT */}
        <Flex
          id="left_column"
          width="100%"
          height="100%"
          justifyContent="center"
          columnGap={gap}
        >
          <Flex flexDirection="column" width="100%" flexGrow={1} rowGap={gap}>
            <Flex
              flexGrow={1}
              backgroundImage={images.leftColumn.topLeft}
              style={imageStyles}
            />
            <Flex id="bottom_image" width="100%" flexGrow={2}>
              <Flex
                flexGrow={1}
                backgroundImage={images.leftColumn.bottomLeft}
                style={imageStyles}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column" width="100%" flexGrow={1} rowGap={gap}>
            <Flex
              flexGrow={2}
              backgroundImage={images.leftColumn.topRight}
              style={imageStyles}
            />
            <Flex id="bottom_image" width="100%" flexGrow={1}>
              <Flex
                flexGrow={1}
                backgroundImage={images.leftColumn.bottomRight}
                style={imageStyles}
              />
            </Flex>
          </Flex>
        </Flex>
        {/* //---------------------------------------------------------------CENTER */}
        <Flex
          id="center_column"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center" // Add this line
          flexDirection="column"
          rowGap={gap}
        >
          <Flex
            id="center_top_images"
            width="100%"
            flexGrow={1}
            columnGap={gap}
          >
            <Flex
              flexGrow={1}
              backgroundImage={images.centerColumn.topLeft}
              style={imageStyles}
            />
            <Flex
              flexGrow={1}
              backgroundImage={images.centerColumn.topRight}
              style={imageStyles}
            />
          </Flex>
          <Flex id="bottom_image" width="100%" flexGrow={2}>
            <Flex
              flexGrow={1}
              backgroundImage={images.centerColumn.mainImage}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="center top"
              borderRadius={borderRadius}
            />
          </Flex>
        </Flex>
        {/* //---------------------------------------------------------------RIGHT */}
        <Flex
          id="right_column"
          width="100%"
          height="100%"
          justifyContent="center"
          columnGap={gap}
        >
          <Flex flexDirection="column" width="100%" flexGrow={1} rowGap={gap}>
            <Flex
              flexGrow={2}
              backgroundImage={images.rightColumn.topLeft}
              style={imageStyles}
            />
            <Flex id="bottom_image" width="100%" flexGrow={1}>
              <Flex
                flexGrow={1}
                backgroundImage={images.rightColumn.bottomLeft}
                style={imageStyles}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column" width="100%" flexGrow={1} rowGap={gap}>
            <Flex
              flexGrow={1}
              backgroundImage={images.rightColumn.topRight}
              style={imageStyles}
            />
            <Flex id="bottom_image" width="100%" flexGrow={2}>
              <Flex
                flexGrow={1}
                backgroundImage={images.rightColumn.bottomRight}
                style={imageStyles}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Div>
  )
}
