import React from 'react'
import { ImageGrid, ImageGridProps } from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex } from 'src/exports/atoms'

export default {
  title: 'organisms/ImageGrid',
  component: ImageGrid,
} as Meta

export const StoryName: StoryFn<ImageGridProps> = args => (
  <Flex
    alignContent="center"
    alignItems="center"
    width="100%"
    inset="x3"
    maxHeight="388px"
    height="400px"
  >
    <ImageGrid
      {...args}
      width="calc(100vw + 300px)"
      images={{
        leftColumn: {
          topLeft:
            'https://www.sendoutcards.com/thumbnail/BU_-taPyTYxXALcdVR1tHVPeMOQ=/fit-in/320x0/system_images/2022/2/10/7aa49c9a-577c-41fa-836d-10f9a6b0197b.png',
          bottomLeft:
            'https://www.sendoutcards.com/thumbnail/999CclfcxV4Ugkw4KCaF19zUdvg=/fit-in/700x0/system_images/2023/4/5/1e2fb061-7939-46c9-b00f-bd349c6ce73a.png',
          topRight:
            'https://www.sendoutcards.com/thumbnail/2DulHjIdHO1uDbvSXhsuFQ3W_qU=/fit-in/700x0/system_images/2023/2/2/67e177fd-30b5-430f-b76d-aaef3d0237f7.png',
          bottomRight:
            'https://www.sendoutcards.com/thumbnail/RuktyCCElGEAY0ZYvbV3qMiRbMY=/fit-in/320x0/system_images/2023/4/5/5c83f228-2278-4325-84c6-9999a9220704.png',
        },
        centerColumn: {
          topLeft:
            'https://www.sendoutcards.com/thumbnail/1iryOquV6gbk0DH9pQPDp3giPDM=/fit-in/320x0/system_images/2023/2/2/196dc2f0-2ab1-402b-abb6-390c21b391d8.png',
          topRight:
            'https://www.sendoutcards.com/thumbnail/4Mtvp1y6p1VzUXq9tni2cyLUKOs=/fit-in/700x0/system_images/2023/2/2/a93ce209-27ae-4142-92ca-4bcee3ceae74.png',
          mainImage:
            'https://www.sendoutcards.com/thumbnail/wypyGE1g4aqeFeRsU79iSUvfFkU=/fit-in/700x0/system_images/2019/12/4/a5471081-e480-4a90-b58f-11ef4b05ec2f.png',
        },
        rightColumn: {
          topLeft:
            'https://www.sendoutcards.com/thumbnail/PLVT6VSkvVfrnLbeCXqtBUyQnD0=/fit-in/700x0/system_images/2023/2/15/e4b63fb2-430f-4f79-b2f5-f95d2052ca5e.png',
          bottomLeft:
            'https://www.sendoutcards.com/thumbnail/bJJs8X0eafm4ZSGz6QGkYIi7OB0=/fit-in/700x0/system_images/2023/3/17/42ca72c0-6503-4c31-966a-c91d3dd88028.png',
          topRight:
            'https://www.sendoutcards.com/thumbnail/xflL5wgj6hsOVEWSV7uH4VsDliY=/fit-in/320x0/system_images/2019/12/4/683798e5-4a90-44f0-994a-795d1db03e46.png',
          bottomRight:
            'https://www.sendoutcards.com/thumbnail/YFLbbNVThrcFE6kFTmuMh-WQwBo=/fit-in/320x0/system_images/2023/2/2/2907bbea-79d0-468a-9c92-89b735f3f458.png',
        },
      }}
    />
  </Flex>
)
