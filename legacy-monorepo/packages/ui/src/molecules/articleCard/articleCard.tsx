import React, { FC } from 'react'
import { VStack } from 'src/atoms/vStack/vStack'
import { Div } from 'src/atoms/div/div'
import { Flex } from 'src/atoms/flex/flex'
import { Card } from '../../atoms/card/card'
import { Text, TextColor } from 'src/atoms/typography/text'
import { css } from '@emotion/react'

export type ArticleCardProps = {
  imageURL: string
  category?: string
  categoryColor: TextColor
  title: string
  date?: string
  onClick?: () => void
  href?: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  imageURL,
  category,
  categoryColor,
  title,
  date,
  onClick,
  href,
}) => {
  return (
    <Flex
      borderRadius="medium"
      width="100%"
      height="100%"
      backgroundColor="foreground"
      borderColor="background"
      borderStyle="solid"
      borderWidth="thin"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection={'column'}
      overflow="hidden"
      boxShadow="mediumLight"
      onClick={() => onClick?.()}
    >
      {/*TODO change to <Anchor /> after fixing the <p></p> tag issue*/}
      <a
        css={css`
          width: 100%;
          height: 100%;
          text-decoration: none;
          font-family: 'inherit';
        `}
        href={href}
      >
        <Div
          width="100%"
          backgroundImage={imageURL}
          height="280px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Card
          borderRadius="none"
          boxShadow="none"
          width="100%"
          inset={{ top: 'x3', bottom: 'x4', horizontal: 'x3' }}
        >
          <VStack gap="x_5">
            {category && (
              <Text
                type="footnote"
                color={categoryColor}
                weight="semiBold"
                lineHeight={1.6}
              >
                {category}
              </Text>
            )}
            <Text
              type="body"
              color="primaryHeading"
              weight="semiBold"
              lineHeight={1.6}
            >
              {title}
            </Text>
            {date && (
              <Text
                type="footnote"
                color="primaryBody"
                weight="regular"
                lineHeight={1.6}
              >
                {date}
              </Text>
            )}
          </VStack>
        </Card>
      </a>
    </Flex>
  )
}
